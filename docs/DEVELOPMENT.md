# Local development

Phase 1 uses Node 24.18.0 and npm 11.16.0 with exact dependencies in package.json and package-lock.json. Run `npm ci` to reproduce the installation. No service credentials are required.

- `npm run dev`: preview at http://127.0.0.1:3000.
- `npm run build`: production compilation and framework TypeScript check.
- `npm start`: serve the production build locally.
- `npm run typecheck`: standalone TypeScript check.
- `npm run lint`: ESLint.
- `npx playwright install chromium`: install the local test browser once.
- `npm test`: navigation, keyboard skip, axe, empty browser storage and reflow checks at desktop, phone and 320px widths, including 200% text enlargement.

Set NEXT_TELEMETRY_DISABLED=1 in the shell to disable framework development telemetry. The app contains no analytics or external service integration. All later-tool routes are explicitly labeled navigation previews.

The supplied original wordmark and growth artwork are used in public/brand. The glowing logo and historical landing example are reference-only. Manrope and Source Sans 3 are served locally from Fontsource packages under the SIL Open Font License; their license files are in the installed packages. No remote font requests are needed.

Owner refinement: dark Stillwater surfaces, lime accents and the original logo carry through the home, preview pages and footer. Plain CSS implements these tokens without an additional styling dependency.

Automated checks do not establish screen-reader or physical-device conformance. Those checks and owner visual review must be recorded separately. No later phase or deployment is authorized by running this preview.
