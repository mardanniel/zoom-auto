/**
 * Note: Any immediate changes to this file will not 
 * reflect automatically to the actual build. Consider 
 * a rerun of build.
 */

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
    "16": "assets/images/icons/zoom-auto.png",
    "32": "assets/images/icons/zoom-auto.png",
    "48": "assets/images/icons/zoom-auto.png",
    "128": "assets/images/icons/zoom-auto.png"
  },
  "background": {
    "service_worker": "assets/background.js",
    "type": "module"
  }
}