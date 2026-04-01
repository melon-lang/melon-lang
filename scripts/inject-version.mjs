#!/usr/bin/env node

/**
 * Injects melon version and webport URL from package.json into melon.cherri
 * 
 * Usage:
 *   node scripts/inject-version.mjs                                           # Uses package.json version and GitHub release URL
 *   MELON_VERSION=1.0.5 node scripts/inject-version.mjs                       # Override version
 *   MELON_WEBPORT_URL=http://localhost:5500/dist/webport/index.html node scripts/inject-version.mjs  # Override webport URL
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get version from environment variable or package.json
let version = process.env.MELON_VERSION;

if (!version) {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  version = packageJson.version;
}

// Get webport URL from environment or default to GitHub release matching the version
let webportUrl = process.env.MELON_WEBPORT_URL || `https://github.com/melon-lang/melon-lang/releases/download/v${version}/build.html`;

const melonCherriPath = path.join(__dirname, '..', 'shortcut', 'melon.cherri');
let content = fs.readFileSync(melonCherriPath, 'utf8');

// Replace the version constant
const oldVersionMatch = content.match(/const MELON_VERSION = "[^"]*"/);
const newVersionLine = `const MELON_VERSION = "${version}"`;

if (oldVersionMatch) {
  content = content.replace(oldVersionMatch[0], newVersionLine);
}

// Replace the webport URL constant
const oldUrlMatch = content.match(/const MELON_SOURCE_CODE_URL = url\("[^"]*"\)/);
const newUrlLine = `const MELON_SOURCE_CODE_URL = url("${webportUrl}")`;

if (oldUrlMatch) {
  content = content.replace(oldUrlMatch[0], newUrlLine);
}

fs.writeFileSync(melonCherriPath, content, 'utf8');

console.log(`✓ Injected melon version ${version}`);
console.log(`✓ Injected webport URL: ${webportUrl}`);
