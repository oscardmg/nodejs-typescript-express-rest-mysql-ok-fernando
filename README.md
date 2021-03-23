# Comandos iniciales

- npm i -g typescript
- tsc -v
- npm init -y
- tsc --init

```
# tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

- tsc
  lee el archivo de tsconfig.json y crea  dist/app.js

- npm i tslint --save-dev
- npm i typescript --save-dev 

# en windows 
- node_modules\.bin\tslint --init 

# en mac
- ./node_modules/.bin/tslint --init 
