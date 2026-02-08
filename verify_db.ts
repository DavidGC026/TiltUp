import { storage } from "./server/storage";
import { poolConnection } from "./server/db";

async function verify() {
    try {
        console.log("Testing getAllModules...");
        const modules = await storage.getAllModules();
        console.log("Modules found:", modules.length);
        if (modules.length > 0) {
            console.log("First module:", modules[0].title);
        } else {
            console.log("No modules found. DB might be empty.");
        }
    } catch (error) {
        console.error("Verification failed:", error);
    } finally {
        await poolConnection.end();
    }
}

verify();
