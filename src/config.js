import { config } from "dotenv";
config();

export const MONGODB_URI =process.env.MONGODB_URI || "mongodb://127.0.0.1/apicompany";
export const PORT = process.env.PORT || 4000;
export const SECRET = "yoursecretkey";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "products@gmail.com";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "sysadmin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

