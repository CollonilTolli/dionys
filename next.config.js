/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.ts',
      },
    typescript: {
        ignoreBuildErrors: true,
     },
}

module.exports = nextConfig
