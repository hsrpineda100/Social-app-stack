import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from '@neondatabase/serverless';
import * as schema from "@db/schema";

// Initialize db only if DATABASE_URL is available
export let db: ReturnType<typeof drizzle> | null = null;

if (process.env.DATABASE_URL) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql, { schema });
    console.log('Database connection established successfully');
  } catch (error) {
    console.warn('Database connection failed:', error);
    // Continue without database - this allows the TikTok verification to work
    // even if database connection fails
  }
}