export const manifest = {
  "name": "Zoom Auto",
  "description": "Automatically open zoom meeting based on the list of schedules that you have.",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "index.html",
    "default_title": "Zoom Auto"
  },
  "permissions": [
    "storage",
    "alarms",
    "tabs"
  ],
  "icons": {
    "16": "assets/images/vite.svg",
    "32": "assets/images/vite.svg",
    "48": "assets/images/vite.svg",
    "128": "assets/images/vite.svg"
  },
  "background": {
    "service_worker": "assets/background.js",
    "type": "module"
  }
}