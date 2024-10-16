# ACTIVA
Es un proyecto sena el una aplicacion tanto web como para dispositivos mobile, actualmente estoy haciendo las maquetaciones de las posibles vistas 

### Listas
inicio de sesion y registro
Landing page principal

### Pendientes
Pagina de todos los ejercicios 
Pagina de cada ejercicio 


## Preview
si quiere ver la preview del proyecto puede hacerlo aqui: [ACTIVA](https://proyecto-sena-rho.vercel.app/)

## En su escritorio 

Si quiere instalar el proyecto en su escritorio, haga el git clone e instale las dependencias con ```npm install``` y luego ejecute:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) con el navegador para ver el proyecto.

# Estructura de archivos
```
└── 📁src
    └── 📁app
        └── 📁(auth)
            └── 📁login
                └── page.tsx
            └── 📁register
                └── page.tsx
            └── layout.tsx
        └── 📁(main)
            └── 📁contacto
                └── page.tsx
            └── 📁ejercicios
                └── 📁[ejercicio]
                    └── page.tsx
                └── page.tsx
            └── 📁nosotros
                └── page.tsx
            └── layout.tsx
            └── page.tsx
        └── globals.css
        └── layout.tsx
    └── 📁components
        └── 📁ui
            └── Navbar.tsx
            └── TraningImage.tsx
        └── index.ts
    └── 📁config
        └── fonts.ts
```


> [!IMPORTANT]
> Tenga en cuenta que esta no es la version final y esta sujeta a cambios 


