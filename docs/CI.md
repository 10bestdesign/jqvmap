CI migration notes
==================

This project previously used a Grunt + QUnit + PhantomJS based test runner.
The tests have been migrated to Jest (jsdom) and can be run with `npm test`.

Suggested CI configuration
--------------------------
Use the included GitHub Actions workflow at `.github/workflows/ci.yml` which:

- Installs dependencies using `npm ci`.
- Runs tests with `npm test`.

Dependency cleanup (manual step)
-------------------------------
After verifying CI runs successfully, you can remove legacy devDependencies related to the old runner. These are suggestions only — remove them after confirming you don't need Grunt tasks:

- `grunt-contrib-qunit`
- `phantomjs` (aliased to `phantomjs-prebuilt`)

Note: In this repository the legacy runner and its dependencies are isolated inside `tests/legacy/package.json`. If you choose to remove legacy devDependencies from the root `package.json`, ensure the `tests/legacy` subpackage still contains the required dependencies and CI has a separate job or environment to run them.


Recommended CI approach for legacy tests
---------------------------------------
If you need to run legacy QUnit/PhantomJS tests in CI, configure a separate job that:

- Uses an environment compatible with `phantomjs-prebuilt` (older Node versions or an image with PhantomJS available), or
- Runs the tests in a container that includes PhantomJS, or
- Migrates the legacy runner to a headless Chromium-based runner (Puppeteer) for easier maintenance.

Example (GitHub Actions) job outline:

1. Checkout
2. Install root deps (`npm ci`)
3. Install legacy deps: `TMPDIR=/tmp npm --prefix ./tests/legacy install --no-audit --no-fund --legacy-peer-deps`
4. Run legacy tests: `npm --prefix ./tests/legacy run test`

To remove them:

1. Edit `package.json` and delete the listed devDependencies.
2. Run `npm prune && npm install` or regenerate lockfile.
3. Update any CI scripts that referenced `grunt test`.
