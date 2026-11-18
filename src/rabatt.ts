export function studentPris(pris: number): number {
  return pris * 0.9;
}

// FEL 1: Ta bort type="module"
// Uncaught SyntaxError: Cannot use import statement outside a module (at main.ts:2:1)

// FEL 2: Skriv fel filnamn i import
// [plugin:vite:import-analysis] Failed to resolve import "./dat" from "src/main.ts". Does the file exist?

// FEL 3: Öppna index.html genom att dubbelklicka (utan servern)
// Access to script at 'file:///src/main.ts' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-experimental-site-token-provider, chrome-extension, chrome-untrusted, data, http, https, isolated-app.
// Failed to load resource: net::ERR_FAILED
