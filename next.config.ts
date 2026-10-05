import type { NextConfig } from 'next';

const isStaticExport = process.env.STATIC_EXPORT === 'true';
const basePath = isStaticExport ? '/gongkao-zhiku' : '';

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: 'export' as const, basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
