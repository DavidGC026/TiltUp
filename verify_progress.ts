import { db, poolConnection } from "./server/db";
import { storage } from "./server/storage";
import { users, moduleProgress } from "@shared/schema";
import { eq, sql } from "drizzle-orm";

async function main() {
    console.log("Verification started...");

    try {
        // 1. Create two test users
        const user1Data = { username: "verify_user_1", password: "password", role: "user" as const };
        const user2Data = { username: "verify_user_2", password: "password", role: "user" as const };

        // Clean up existing if any
        await db.delete(users).where(eq(users.username, user1Data.username));
        await db.delete(users).where(eq(users.username, user2Data.username));

        const user1 = await storage.createUser(user1Data);
        const user2 = await storage.createUser(user2Data);

        console.log(`Created users: ${user1.username} (${user1.id}), ${user2.username} (${user2.id})`);

        // 2. Set progress for User 1 on Module 1
        console.log("Setting progress for User 1 on modulo-1 to 50%...");
        await storage.updateModuleProgress(user1.id, "modulo-1", { progress: 50 });

        // 3. Verify User 1 sees 50%
        const u1Modules = await storage.getAllModules(user1.id);
        const u1Mod1 = u1Modules.find(m => m.id === "modulo-1");
        if (u1Mod1?.progress === 50) {
            console.log("PASS: User 1 sees 50% progress.");
        } else {
            console.error(`FAIL: User 1 sees ${u1Mod1?.progress}% progress (expected 50%).`);
        }

        // 4. Verify User 2 sees 0%
        const u2Modules = await storage.getAllModules(user2.id);
        const u2Mod1 = u2Modules.find(m => m.id === "modulo-1");
        if (u2Mod1?.progress === 0) {
            console.log("PASS: User 2 sees 0% progress.");
        } else {
            console.error(`FAIL: User 2 sees ${u2Mod1?.progress}% progress (expected 0%).`);
        }

        // 5. Mark Module 1 complete for User 2
        console.log("Marking modulo-1 complete for User 2...");
        await storage.markModuleComplete(user2.id, "modulo-1", { completed: true });

        // 6. Verify User 2 sees 100% and completed
        const u2Mod1Final = await storage.getModuleById("modulo-1", user2.id);
        if (u2Mod1Final?.completed === true && u2Mod1Final?.progress === 100) {
            console.log("PASS: User 2 sees completed module.");
        } else {
            console.error(`FAIL: User 2 status: completed=${u2Mod1Final?.completed}, progress=${u2Mod1Final?.progress}`);
        }

        // 7. Verify User 1 still sees 50% and not completed
        const u1Mod1Final = await storage.getModuleById("modulo-1", user1.id);
        if (u1Mod1Final?.completed === false && u1Mod1Final?.progress === 50) {
            console.log("PASS: User 1 progress unaffected by User 2.");
        } else {
            console.error(`FAIL: User 1 status: completed=${u1Mod1Final?.completed}, progress=${u1Mod1Final?.progress}`);
        }

        // Cleanup
        await db.delete(users).where(eq(users.id, user1.id));
        await db.delete(users).where(eq(users.id, user2.id));
        console.log("Cleanup done.");

    } catch (error) {
        console.error("Verification failed:", error);
    } finally {
        await poolConnection.end();
    }
}

main();
