import { resolve } from "node:path";
import { cwd } from "node:process";
import { config } from "dotenv";

// Load env files
config({ path: resolve(cwd(), '.env.test') });