# Deployment Guide — Md All Rafiu Biswash Portfolio

This portfolio is built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**. It can be deployed in under 2 minutes to either **Netlify** or **Vercel** with zero backend configuration needed.

---

## 1. Deploying to Netlify

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/Rafiu11/portfolio`).
2. Go to [app.netlify.com](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select **GitHub** and choose your portfolio repository.
4. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

### Option B: Via Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 2. Deploying to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/Rafiu11/portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new) and log in with GitHub.
3. Import your portfolio repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
# Choose defaults, and for production:
vercel --prod
```

---

## 3. Local Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Customizing Content

All personal info, links, skills, and projects are centralized in one file:
- `/src/data/portfolioData.ts`

Any edits to projects, skills, contact numbers, or photos update the entire site instantly.


## Vercel dependency-conflict fix (7 Nov 2026)
This project version pins Vite to ^6.2.3, @vitejs/plugin-react to ^5.0.4, and TypeScript to ~5.8.2 to avoid the Vite 8/esbuild 0.25 peer-dependency conflict seen in the original deployment logs.

For Vercel use Framework Preset: Vite, Build Command: npm run build, Output Directory: dist.
If you committed a previous lockfile, regenerate it locally with npm install and commit the updated package-lock.json, then redeploy. Do not solve with --force or --legacy-peer-deps unless all dependencies are reviewed.
