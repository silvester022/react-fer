# Instalación y configuracion de Jest + React Testing Library

### En proyectos de React + Vite

1. Instalaciones 

```
npm i --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
npm i --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Si usamos fetch API en el proyecto

```
npm i --save-dev whatwg-fetch
```

3. Actualizar los scripts del package.json

```
"scripts": {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel

babel.config.cjs
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
}
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup

jest.config.cjs
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

jest.setup.cjs
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Instalaciones adicionales

```
npm i --save-dev prop-types
npm i whatwg-fetch
```