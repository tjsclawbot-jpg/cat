# Deployment to Your Server

## Prerequisites
- Node.js 18+ installed on server
- PM2 or similar process manager (recommended)
- Nginx or Apache for reverse proxy (recommended)

## Quick Setup

### 1. Clone Repository
```bash
cd /opt  # or your preferred directory
git clone <your-github-repo-url> censuscat
cd censuscat
npm install
```

### 2. Build for Production
```bash
npm run build
```

### 3. Run with PM2 (Recommended)
```bash
npm install -g pm2
pm2 start "npm start" --name "censuscat"
pm2 startup
pm2 save
```

### 4. Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name censuscat.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. SSL Certificate (Let's Encrypt)
```bash
sudo certbot --nginx -d censuscat.your-domain.com
```

## Monitoring

```bash
# View logs
pm2 logs censuscat

# Restart app
pm2 restart censuscat

# Stop app
pm2 stop censuscat
```

## Updates
```bash
cd /opt/censuscat
git pull
npm install
npm run build
pm2 restart censuscat
```

## Environment Variables (Optional)
Create `.env.local`:
```
# None required for this version
# Forms are client-side only
```

---

Contact: tj@wrkhrs.co
