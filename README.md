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

```
# tslint.json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false
    },
    "rulesDirectory": []
}
```

- npm i -s express cors dotenv
- npm i --save-dev @types/express

# Repositorio fernando
https://github.com/Klerith/curso-node-restserver