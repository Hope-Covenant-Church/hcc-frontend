# Agent Instructions

## Deployment

- The site is an Angular 21 app deployed via GitHub Pages.
- The `main` branch holds source code.
- The `gh-pages` branch holds the built site.
- **DO NOT** manually run `angular-cli-ghpages`. Instead, push to `main` and let the GitHub Actions workflow (`.github/workflows/deploy.yml`) handle the build and deploy automatically.
- The workflow builds with `ng build --configuration production` and deploys from `dist/hcc/browser` (the correct subdirectory — Angular 21's `@angular/build:application` builder nests output under a `browser/` folder).

## Reminders for the user

After first deployment or if the custom domain stops working, ask the user to visit:
https://github.com/Hope-Covenant-Church/hcc-frontend/settings/pages

And ensure the custom domain "hopecovenant.co.za" shows a green checkmark (DNS successfully verified).
