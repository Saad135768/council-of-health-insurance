const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ['http://loremflickr.com'],
    disableStaticImages: true
  },
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|gql|bmp|svg)$/i,
      exclude: /node_modules/,
      loader: 'file-loader',
    })

    return config
  },
})