const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('./src'),
      // '@components': resolvePath('./src/components'),
      // '@assets': resolvePath('./src/assets'),
      // '@modules': resolvePath('./src/modules'),
      // '@pages': resolvePath('./src/pages'),
    },
  },
}
