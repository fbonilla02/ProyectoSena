# ACTIVA

Es un proyecto SENA el cual es una aplicacion tanto web como para dispositivos mobile, actualmente estoy haciendo las maquetaciones de las posibles vistas por lo cual no tiene archivos de logica.

### Listas

inicio de sesion y registro
Landing page principal

### Pendientes

Pagina de todos los ejercicios
Pagina de cada ejercicio

## Preview

si quiere ver la preview del proyecto puede hacerlo aqui: [ACTIVA](https://proyecto-sena-rho.vercel.app/)

## En su escritorio

1. Clonar el repositorio.
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Primsa `npx prisma migrate dev`
6. Ejecutar seed `npm run seed`
7. Correr el proyecto `npm run dev`

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
