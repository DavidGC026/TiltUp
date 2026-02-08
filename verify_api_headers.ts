
import { spawn } from "child_process";
import http from "http";

function runServer() {
    const server = spawn("npx", ["tsx", "server/index.ts"], {
        env: { ...process.env, PORT: "5001" }, // Use a different port for testing
        stdio: "inherit",
        cwd: "/home/david/Documentos/Programas Imccy/TiltUp"
    });
    return server;
}

function makeRequest(path: string, method: string, headers: Record<string, string>, body?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: "localhost",
            port: 5001,
            path,
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        };

        const req = http.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => data += chunk);
            res.on("end", () => {
                try {
                    const json = JSON.parse(data);
                    resolve({ status: res.statusCode, data: json });
                } catch (e) {
                    resolve({ status: res.statusCode, data });
                }
            });
        });

        req.on("error", reject);

        if (body) {
            req.write(JSON.stringify(body));
        }
        req.end();
    });
}

async function runTest() {
    console.log("Starting server for API test...");
    const serverProcess = runServer();

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    try {
        console.log("Testing with x-user-id: 1");
        // 1. Get modules with user 1
        const res1 = await makeRequest("/api/modules", "GET", { "x-user-id": "1" });
        console.log("GET /api/modules (User 1) Status:", res1.status);

        // 2. Set progress for module 1 user 1
        const res2 = await makeRequest("/api/modules/modulo-1/progress", "PATCH", { "x-user-id": "1" }, { progress: 33 });
        console.log("PATCH progress (User 1) Status:", res2.status, res2.data);

        // 3. Get module 1 again to verify
        const res3 = await makeRequest("/api/modules/modulo-1", "GET", { "x-user-id": "1" });
        console.log("GET module 1 (User 1) Progress:", res3.data.progress);

        if (res3.data.progress === 33) {
            console.log("PASS: Progress updated correctly via API header.");
        } else {
            console.error("FAIL: Progress mismatch.");
        }

        // 4. Verify user 2 is unaffected
        const res4 = await makeRequest("/api/modules/modulo-1", "GET", { "x-user-id": "2" });
        console.log("GET module 1 (User 2) Progress:", res4.data.progress);
        if (res4.data.progress === 0 || res4.data.progress !== 33) {
            console.log("PASS: User 2 unaffected.");
        } else {
            console.error("FAIL: User 2 affected.");
        }

    } catch (err) {
        console.error("Test failed:", err);
    } finally {
        serverProcess.kill();
    }
}

runTest();
