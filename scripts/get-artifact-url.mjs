#!/usr/bin/env node

/**
 * Generates GitHub artifact/release URLs for the compiled melon shortcut
 * 
 * Usage:
 *   node scripts/get-artifact-url.mjs                              # Latest release
 *   node scripts/get-artifact-url.mjs --branch main                # Latest artifact from main
 *   node scripts/get-artifact-url.mjs --version 1.0.10             # Specific version
 *   node scripts/get-artifact-url.mjs --format json                # JSON output
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
);

const REPO_OWNER = 'melon-lang';
const REPO_NAME = 'melon-lang';
const VERSION = packageJson.version;

// Parse CLI arguments
const args = process.argv.slice(2);
let version = VERSION;
let branch = 'main';
let format = 'text';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--version' && args[i + 1]) version = args[++i];
  if (args[i] === '--branch' && args[i + 1]) branch = args[++i];
  if (args[i] === '--format' && args[i + 1]) format = args[++i];
}

// GitHub URLs
const releaseUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/download/v${version}/melon.shortcut`;
const latestReleaseUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest/download/melon.shortcut`;
const webportUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest/download/build.html`;
const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${branch}/shortcut/melon.shortcut`;

const urls = {
  release: releaseUrl,
  latest: latestReleaseUrl,
  webport: webportUrl,
  raw: rawUrl,
  downloadLatest: `curl -L "${latestReleaseUrl}" -o melon.shortcut`,
  downloadVersion: `curl -L "${releaseUrl}" -o melon.shortcut`,
  documentation: {
    version,
    repo: `${REPO_OWNER}/${REPO_NAME}`,
    note: 'Use "latest" URL for the most recent release. Use "release" URL for a specific version.'
  }
};

if (format === 'json') {
  console.log(JSON.stringify(urls, null, 2));
} else {
  console.log('Melon Artifact URLs:');
  console.log('');
  console.log('Shortcut (Latest Release):');
  console.log(`  ${latestReleaseUrl}`);
  console.log('');
  console.log(`Shortcut (v${version}):`);
  console.log(`  ${releaseUrl}`);
  console.log('');
  console.log('Webport (Latest Release):');
  console.log(`  ${webportUrl}`);
  console.log('');
  console.log('Quick Download (Latest):');
  console.log(`  ${urls.downloadLatest}`);
}
