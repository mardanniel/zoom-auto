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
    "storage"
  ],
  "background": {
    "service_worker": "assets/background.js"
  }
}