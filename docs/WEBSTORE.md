# Chrome Web Store — checklist

Use this after `npm run package` (or `npm run build` + zip the production folder per Plasmo docs).

## Before you upload

1. **Developer account** — [Register](https://developer.chrome.com/docs/webstore/register) for the Chrome Web Store (one-time fee).
2. **Privacy policy URL** — The store requires a **public HTTPS URL** (not a local file).
   - **Raw GitHub:** after pushing to `main`, use  
     `https://raw.githubusercontent.com/EduardoDePatta/stack-sift/main/docs/privacy-policy.txt`  
     ([`docs/privacy-policy.txt`](./privacy-policy.txt) — plain text, `text/plain` in the browser). If a reviewer rejects the raw URL, host the same text on any public HTTPS page you control.
3. **Icons** — `assets/icon.png` is the Plasmo source (any square size works for the build); the built package includes generated sizes in the manifest. Rebuild after changing the icon.
   - **Store listing “Store icon” field** — The developer dashboard requires **exactly 128×128** pixels for that upload. Use [`assets/icon-store-128.png`](../assets/icon-store-128.png) (exported from the main icon). If you upload a larger square (e.g. 512×512), you will see an error like “image size is incorrect.”
   - Labels such as “Ícone da Store” in the dashboard are **Google’s UI** (browser/account language), not strings from this extension.
4. **Manifest text** — `description` in `package.json` must stay **≤ 132 characters** for the store (Chrome limit).
5. **Screenshots** — In the dashboard, add at least **1** screenshot (1280×800 or 640×400 PNG/JPEG) showing the sidebar on a Sentry issue page.
6. **Single purpose** — Describe one clear purpose: triage/help on Sentry issue pages.

## Build artifact

- Run **`npm run package`** to produce a ZIP ready for upload (see [Plasmo packaging](https://docs.plasmo.com/framework/workflows/submit)).

## After approval

- Store metadata (except what comes from the manifest at upload time) can be edited in the dashboard; manifest changes need a **new version** and re-upload.

Official references: [Prepare your extension](https://developer.chrome.com/docs/webstore/prepare), [Publish](https://developer.chrome.com/docs/webstore/publish), [Hello World / basics](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=en).
