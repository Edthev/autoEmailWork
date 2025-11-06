# To Start:
### Git
git clone {link} .

### Rename:
* .env copy -> .env
* package.json > "name"

### Commands:
* npm i
* npx playwright install



# Start Command
npx ts-node .\tests\example.spec.ts

## Playwright Commands
* npx playwright test --debug
* npx playwright codegen

## Open Dev Chrome On Windows

Start-Process "~\AppData\Local\Google\Chrome\Application\chrome.exe" -ArgumentList "--remote-debugging-port=9222", "--user-data-dir=C:\chrome-dev-profile"

## Open Dev Chrome on Mac

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
 --remote-debugging-port=9222 \
 --user-data-dir="/tmp/chrome-dev-profile"


