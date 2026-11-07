# Vercel project image fix

The two project screenshots were referenced as `/src/assets/images/...`, which does not work as a public URL after Vite builds for production.

They have now been copied to `public/assets/projects/` and their URLs in `src/data/portfolioData.ts` changed to `/assets/projects/...`.

The public email was also corrected to the owner-provided DIU address.

## To deploy

Upload the entire contents of this folder as the project root (or push it to a GitHub repository), then deploy on Vercel with Framework: Vite, Build: `npm run build`, Output: `dist`.

Test that the following return images after deployment:
- `/assets/projects/campus-skill-exchange.jpg`
- `/assets/projects/find-doctor.jpg`
