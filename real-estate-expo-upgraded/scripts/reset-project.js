const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const appDir = path.join(root, "app");
const backupDir = path.join(root, "app-example");

if (!fs.existsSync(appDir)) {
  console.log("No app directory found. Nothing to reset.");
  process.exit(0);
}
if (fs.existsSync(backupDir)) {
  console.error("app-example already exists. Rename or remove it before resetting.");
  process.exit(1);
}
fs.renameSync(appDir, backupDir);
fs.mkdirSync(appDir, { recursive: true });
fs.writeFileSync(path.join(appDir, "index.tsx"), 'import { Redirect } from "expo-router";\nexport default function Index() { return <Redirect href="/(tabs)" />; }\n');
console.log("Moved the starter app to app-example and created a fresh app/index.tsx.");
