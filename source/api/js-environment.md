title: Quasar Environment
---

Helpers are built-in to detect the environment in which the code is running:

| Property | Type | Meaning |
| --- | --- | --- |
| quasar.runs.on.mobile | boolean | Is the code running on a mobile device? |
| quasar.runs.on.cordova | boolean | Is the code running within Cordova? |
| quasar.runs.on.desktop | boolean | Is the code running on a desktop browser? |
| quasar.runs.with.touch | boolean | Is the code running on a touch capable screen? |
| quasar.runs.within.iframe | boolean | Is the App running within an IFRAME? |

> **NOTE**
> Running on mobile means you can have this code running on a mobile device (phone or tablet) but with a browser, not within a Cordova wrapper.

Other **quasar.runs.on** platform specific properties:
`android`, `blackberry`, `cros`, `ios`, `ipad`, `iphone`, `ipod`, `kindle`, `linux`, `mac`, `playbook`, `silk`, `chrome`, `opera`, `safari`, `win` (Windows), `winphone` (Windows Phone) and more...

Example when running Chrome on a Linux desktop machine:
``` js
quasar.runs.on = {
  chrome: true,
  desktop: true,
  linux: true,
  name: "chrome",
  platform: "linux",
  version: "47.0.2526.80",
  versionNumber: 47,
  webkit: true
};
```

> **NOTE**
> When trying to show DOM elements only on a platform you can skip using Javascript and make use of Quasar CSS classes (which is more efficient). Read about on [CSS &gt; Visibility](/api/css-visibility.html#Platform-Related) documentation page.
