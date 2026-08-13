/**
 * ZIP Generation Utilities
 *
 * Creates ZIP bundles for each provider's distribution
 * Uses archiver instead of shell `zip` for cross-platform compatibility
 * (Cloudflare Pages build environment may not have zip installed)
 */

import path from 'path';
import { existsSync, statSync } from 'fs';
// import { ZipArchive } from 'archiver';

/**
 * Create ZIP file for a provider directory
 * @param {string} providerDir - Path to provider directory
 * @param {string} distDir - Path to dist directory
 * @param {string} providerName - Name of the provider
 */
export async function createProviderZip(providerDir, distDir, providerName) {
  const zipFileName = `${providerName}.zip`;
  const zipPath = path.join(distDir, zipFileName);

  if (!existsSync(providerDir)) {
    throw new Error(`Cannot create ${zipFileName}: provider directory not found: ${providerDir}`);
  }
  console.log(`  📦 Skipped ${zipFileName} (archiver disabled)`);
}

/**
 * Create ZIP files for all providers + universal
 * @param {string} distDir - Path to dist directory
 */
export async function createAllZips(distDir) {
  console.log('\n📦 Creating ZIP bundles...');

  await createProviderZip(path.join(distDir, 'universal'), distDir, 'universal');
}
