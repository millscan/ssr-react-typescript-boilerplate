Simple SSR Boilerplate for React with Typescript
Adapted from code by Nils Mehlhorn - https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr - Thanks Nils!!!

Get Started:
1. run yarn (or npm install)
2. develop your app in client/components
3. yarn dev (or npm run dev) to start a client development server with webpack - hot reloads on save and reloads the browser
4. yarn dev-server (or npm run dev-server) to build bundles and start a server development (ssr) - hot reloads on save but does not hot reload in browser 
5: yarn build:client (or npm run build:client) to build client bundle
6: yarn build:server (or npm run build:server) to build server bundle

This boilerplate user ts-loader and isomorphic-style-loader for CSS, but the list may grow slightly in the future