# NUVAREI

Static marketing website for NUVAREI, hosted on GitHub Pages at <https://nuvarei.github.io/app/>.

## Files

- `index.html` — main landing page
- `ad-whatsapp-vs-website.html` — "WhatsApp vs website" ad page
- `demo-store.html` — NOOR Wear, a fictional clothing store demo (catalog, cart, checkout); everything stays in the visitor's browser
- `logo.png` — brand logo
- `firebase.js` — Firebase setup (Auth, Firestore, Storage), loaded from Google's CDN; not used by any page yet
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Local preview

Open `index.html` in a browser, or run `python -m http.server` and visit <http://localhost:8000>.

All paths are relative, so the site works both locally and under the `/app/` subpath.

## Firebase

To use Firebase on a page, add a module script:

```html
<script type="module">
  import { auth, db, storage } from "./firebase.js";
</script>
```

The `apiKey` in `firebase.js` is public by design. Data is protected by the Firestore and Storage security rules in the Firebase console.
