const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use('*', createProxyMiddleware({target: 'https://excitement-theorem-kansas-accessed.trycloudflare.com', changeOrigin: true}));
app.listen(3000);