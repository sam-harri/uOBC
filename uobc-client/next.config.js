/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co'], // Add any other domains you use for images here
    },
    basePath: '/uOBC',
  // Add trailing slashes to all URLs
    trailingSlash: true,
    output: 'export',
}

module.exports = nextConfig
