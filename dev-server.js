const spawn = require('cross-spawn')
const path = require('path')
const webpack = require('webpack')
const webpackConfigClient = require('./webpack.config.client')
const webpackConfigServer = require('./webpack.config.server')

// for testing ssr - will not hot reload your browser

const compiler = webpack([
  {
    ...webpackConfigClient,
    mode: 'development',
    devtool: 'source-map',
    output: {
      ...webpackConfigClient.output,
      filename: '[name].js',
    },
  },
  {
    ...webpackConfigServer,
    mode: 'development',
    devtool: 'source-map',
  },
])

let node

compiler.hooks.watchRun.tap('Dev', (compiler) => {
  console.log(`Compiling ${compiler.name} ...`)
  // if (compiler.name === 'server' && node) {
  //   node.kill()
  //   node = undefined
  // }
})

node = spawn('node', ['--inspect', path.join(__dirname, 'dist/server.js')], {
  stdio: 'inherit',
})

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(stats?.toString('minimal'))
})
