import { db, poolConnection } from "./db";
import { exams, examQuestions, examQuestionOptions } from "@shared/schema";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since shared is outside of server, we need to locate it correctly
// Assuming we run this from project root
const JSON_PATH = path.join(__dirname, '..', 'shared', 'exams_data.json');

// remove neon connection setup

async function seedExams() {
    console.log("🌱 Seeding exams from JSON...");

    const rawData = fs.readFileSync(JSON_PATH, 'utf-8');
    const data = JSON.parse(rawData);

    const { exams: examsData, questions: questionsData, options: optionsData } = data;

    console.log(`Found ${examsData.length} exams, ${questionsData.length} questions, ${optionsData.length} options.`);

    try {
        // 1. Insert Exams
        console.log("Inserting exams...");
        for (const exam of examsData) {
            await db.insert(exams).values({
                id: exam.id,
                sectionId: exam.sectionId,
                title: exam.title,
                description: exam.description
            }).onDuplicateKeyUpdate({
                set: {
                    sectionId: exam.sectionId,
                    title: exam.title,
                    description: exam.description
                }
            });
        }

        // 2. Insert Questions (Batching for performance)
        console.log("Inserting questions...");
        const BATCH_SIZE = 50;
        for (let i = 0; i < questionsData.length; i += BATCH_SIZE) {
            const batch = questionsData.slice(i, i + BATCH_SIZE);
            if (batch.length > 0) {
                await db.insert(examQuestions).ignore().values(batch);
            }
        }

        // 3. Insert Options
        console.log("Inserting options...");
        for (let i = 0; i < optionsData.length; i += BATCH_SIZE) {
            const batch = optionsData.slice(i, i + BATCH_SIZE);
            if (batch.length > 0) {
                await db.insert(examQuestionOptions).ignore().values(batch);
            }
        }

        console.log("✅ Exams seeded successfully!");
    } catch (error) {
        console.error("❌ Error seeding exams:", error);
        throw error;
    }
}

seedExams()
    .then(async () => {
        await poolConnection.end();
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        await poolConnection.end();
        process.exit(1);
    });
