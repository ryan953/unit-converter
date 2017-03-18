# Flow Example using Unit Conversions

This repo is a tiny demo of code that could be improved with flow types.

# Installing

```
git clone git@github.com:ryan953/unit-converter.git
cd unit-converter
npm install
npm start -- help
```

# Usage

To convert units execute a command like the following: `npm start -- 100 km mi`. This will convert 100 kilometers to miles.

The format is: `npm start -- <value> <unit-from> <unit-to>`

# Developing

__See `npm run` for full list of developer commands.__

`npm run flow:check`
- Run `flow check` on all files with the @flow annotation.

`npm run flow:all`
- Check all files as if they contained @flow.

`npm run flow:files`
- List files with the @flow annotation.

`npm run flow:coverage`
- Report flow coverage of all files.

# More unit conversions to add

Fahrenheit to Celsius: `T(°C) = (T(°F) - 32) / 1.8`
```
(t) => (t - 32) / 1.8
```

Celsius to Fahrenheit: `T(°F) = T(°C) × 1.8 + 32`
```
(t) => t * 1.8 + 32
```

Miles to KM: `d(km) = d(mi) × 1.609344`
```
(d) => d * 1.609344
```

