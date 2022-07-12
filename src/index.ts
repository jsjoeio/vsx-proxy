import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Handle these requests directly
app.get('/', (_req, _res) => {
  _res.send("Hello, world!");
});

// Proxy these requests
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://open-vsx.org',
    changeOrigin: true,
  })
);

app.listen(3000);
