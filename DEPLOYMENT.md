# 🚀 100% Free Long-Term Deployment Guide

Your portfolio has been upgraded to a **pure static Vite SPA** (Single Page Application). 
This architecture guarantees:
- **No 404 NOT_FOUND errors**: Generates standard `dist/index.html` + asset chunks.
- **No Cloudflare compatibility date errors**: Zero backend worker dependencies.
- **100% Free Forever**: Fast global CDN distribution with zero server execution costs.
- **Instant updates**: Automatically redeploys every time you push to GitHub.

---

## ⚡ Option 1: Vercel (Easiest & Most Popular)

Vercel auto-detects Vite and deploys in less than 60 seconds with SSL included.

### Steps:
1. Push your latest code to your GitHub repo (`https://github.com/mpasupathi756-jpg/My_Personal_Portfolio`).
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Find and click **"Import"** next to `My_Personal_Portfolio`.
5. Configuration settings:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Root Directory**: `./` (or `pasupathi-portfolio` if in a subfolder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. *(Optional)* If using EmailJS for the contact form, add these Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
7. Click **"Deploy"**.
8. Done! Your portfolio is live at `https://your-project.vercel.app`!

---

## ☁️ Option 2: Cloudflare Pages (Unlimited Bandwidth)

Cloudflare Pages provides global edge caching across 300+ cities with unlimited bandwidth on the free tier.

### Steps:
1. Push your code to GitHub.
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and log in.
3. In the sidebar, navigate to **Compute (Workers & Pages)** → **Pages** → **Connect to Git**.
4. Select your repository `My_Personal_Portfolio`.
5. Build Configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `pasupathi-portfolio` (if in that folder) or leave empty `/`
6. Click **"Save and Deploy"**.
7. Done! Your site is live at `https://pasupathi-portfolio.pages.dev` with automatic SSL.

---

## 🐙 Option 3: GitHub Pages (Directly in GitHub)

You can also host directly on GitHub:
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
3. Select the **Static HTML** or **Vite** starter workflow to publish the `dist` folder automatically upon push.

---

## 🌐 Connecting a Free Custom Domain

Both Vercel and Cloudflare Pages let you connect your own custom domain (e.g. `pasupathi.dev` or `pasupathim.me`):
1. In your project dashboard (Vercel or Cloudflare), click **Settings** → **Domains**.
2. Enter your custom domain name.
3. Add the single CNAME record provided into your domain registrar (GoDaddy, Namecheap, Hostinger, etc.).
4. Both platforms automatically issue and renew free SSL certificates.

---

## 💻 Local Commands Quick Reference

```bash
# Run development server locally
npm run dev

# Compile production bundle to /dist
npm run build

# Preview production build locally on http://localhost:4173
npm run preview
```
