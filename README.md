# Description

This is a [customize-cra](https://github.com/arackaf/customize-cra) addon to disable babel-loader cache.

Under the hood, it simply sets `cacheDirectory` option to `false`

# Installation

1. Follow the customize-cra installation process [here](https://github.com/arackaf/customize-cra#how-to-install)

2. Install the package
   ```
   npm install --save-dev customize-cra-disable-babel-cache
   ```

# Usage

```js
// config-overrides.js
const { override } = require("customize-cra");
const { disableBabelCache } = require("customize-cra-disable-babel-cache");

module.exports = override(
  process.env.NODE_ENV === "development" && disableBabelCache()
);
```
