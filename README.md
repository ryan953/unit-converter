# Flow Example using Unit Conversions

This repo is a tiny demo of code that could be improved with flow types.

# Installing

```
git clone git@github.com:ryan953/unit-converter.git
cd unit-converter
npm install
npm start -- help
```

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

