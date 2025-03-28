import type { NextConfig } from 'next'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

const nextConfig: NextConfig = {
  /* config options here */
  // 实验性功能，只能在最新的 canary 版本中使用
  // experimental: {
  //   ppr: 'incremental',
  // },
}

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().catch((e) => console.error(e))
}

export default nextConfig
