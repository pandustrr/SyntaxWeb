require('dotenv').config()
const { createServer } = require('http')
const { parse } = require('url')
const fs = require('fs')
const next = require('next')

const isBuilt = fs.existsSync('./.next/BUILD_ID')
// On production hosting (Passenger/cPanel), dev must strictly be false unless explicitly set to 'development'
const dev = process.env.NODE_ENV === 'development'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const rawPort = process.env.PORT || '3000'
const port = isNaN(Number(rawPort)) ? rawPort : parseInt(rawPort, 10)

// Safety check: if Next.js build artifacts are missing in production mode,
// serve an informative maintenance page instead of crashing Passenger worker repeatedly.
if (!dev && !isBuilt) {
  console.error('CRITICAL: Next.js production build not found (.next/BUILD_ID missing)!')
  console.error('Please run "npm run build" or run deploy_production.sh before starting production server.')
  
  const fallbackServer = createServer((req, res) => {
    res.statusCode = 503
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Retry-After', '60')
    res.end(`
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sistem Sedang Diperbarui - SyntaxWeb</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0a0e17; color: #e2e8f0; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .card { background: #131b2e; border: 1px solid #1e293b; border-radius: 12px; padding: 32px; max-width: 480px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          h1 { color: #22d3ee; margin-top: 0; font-size: 24px; }
          p { color: #94a3b8; font-size: 15px; line-height: 1.6; }
          .badge { display: inline-block; padding: 4px 12px; background: rgba(34, 211, 238, 0.1); color: #22d3ee; border-radius: 9999px; font-size: 12px; margin-bottom: 16px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge">SYSTEM MAINTENANCE</div>
          <h1>SyntaxWeb Sedang Diperbarui</h1>
          <p>Server sedang menyelesaikan proses sinkronisasi build aplikasi. Silakan muat ulang halaman beberapa saat lagi.</p>
        </div>
      </body>
      </html>
    `)
  })

  fallbackServer.listen(port, () => {
    console.log(`> Fallback maintenance server running on port ${port}`)
  })
} else {
  const app = next({ dev, hostname, port })
  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })
      .once('error', (err) => {
        console.error('Server error:', err)
        process.exit(1)
      })
      .listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port} (NODE_ENV: ${process.env.NODE_ENV || 'production'})`)
      })
  }).catch((err) => {
    console.error('Failed to prepare Next.js app:', err)
    process.exit(1)
  })
}
