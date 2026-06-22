# BatchTrace - Deployment & Setup Guide

## Quick Start (Local Development)

### 1. Install Dependencies

```bash
cd batch-app
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 3. Access the Application

- **Home**: http://localhost:3000/
- **Dashboard**: http://localhost:3000/dashboard
- **About**: http://localhost:3000/about
- **Help**: http://localhost:3000/help

## Production Build

### Build the Application

```bash
npm run build
```

This creates an optimized build in the `.next` folder.

### Run Production Build Locally

```bash
npm start
```

The production app runs on `http://localhost:3000`

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository and configure deployment settings

### Option 2: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export  # if needed
   ```

2. **Upload to Netlify**
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository

### Option 3: Deploy to AWS Amplify

1. **Connect repository to AWS Amplify**
2. **Set build settings**:
   - Build command: `npm run build`
   - Start command: `npm start`
3. **Deploy**

### Option 4: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t batchtrace .
docker run -p 3000:3000 batchtrace
```

### Option 5: Standalone Linux/Windows Server

1. **Build the application**
   ```bash
   npm run build
   npm install --production
   ```

2. **Transfer files** to your server
   - Copy `.next/standalone` folder
   - Copy `public` folder
   - Copy `package.json`

3. **Start the server**
   ```bash
   NODE_ENV=production node server.js
   ```

## Environment Variables

Create a `.env.local` file for local development (optional):

```env
# Currently not required - all data stored locally
# Add any future API endpoints here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Browser Local Storage

BatchTrace uses browser local storage for data persistence:

- **Storage Key**: `batches`
- **Format**: JSON array of batch objects
- **Size Limit**: Typically 5-10MB per domain
- **Persistence**: Survives browser restarts until cache is cleared

### Clearing Stored Data

Users can manually clear their data by:
1. Opening browser DevTools (F12)
2. Going to Application → Local Storage
3. Finding `localhost:3000` (or your domain)
4. Deleting the `batches` key

## Backup and Recovery

### Exporting Data

1. Open browser DevTools (F12)
2. Go to Console
3. Run:
   ```javascript
   const data = localStorage.getItem('batches');
   copy(data);
   // Paste into a text file to save
   ```

### Importing Data

1. Open browser DevTools Console
2. Run:
   ```javascript
   localStorage.setItem('batches', '[your-exported-json]');
   location.reload();
   ```

## Performance Optimization

The application is already optimized with:

- **Image optimization** via Next.js Image component
- **Code splitting** for faster page loads
- **Tailwind CSS** for minimal stylesheet size
- **Client-side rendering** for responsive UI
- **Local storage** instead of server calls

## Security Considerations

- All data stored locally - no server transmission
- No authentication required (single user)
- No external API calls
- HTTPS recommended for production

For production with multiple users:
- Add authentication layer (NextAuth.js recommended)
- Implement database for centralized storage
- Add API routes for backend validation
- Implement access controls

## Troubleshooting Deployment

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
PORT=3001 npm run dev
```

### Memory Issues

```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

## Monitoring & Logging

### Development Server Logs

Logs appear in terminal where `npm run dev` is running.

### Production Logs

Log to file (example for Linux):

```bash
npm start > app.log 2>&1 &
tail -f app.log
```

## Maintenance

### Updating Dependencies

```bash
npm update
npm audit fix
npm run build
```

### Scaling for Future

To scale beyond current single-user limitation:

1. Add authentication
2. Implement backend database
3. Add API routes
4. Implement multi-user sync
5. Add cloud storage
6. Implement advanced features

## Support

For deployment issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Review error logs in deployment platform
3. Check browser console for client-side errors
4. Verify Node.js version (16+)

## Success Checklist

- [ ] Node.js 16+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Local development works (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Production build works (`npm start`)
- [ ] Batch creation and editing functional
- [ ] Data persists after page reload
- [ ] Mobile layout responsive
- [ ] All navigation links working
- [ ] Ready for user access

---

**Version**: 1.0.0  
**Last Updated**: June 2024
