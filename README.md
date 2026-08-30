# Portafolio Backend

Portafolio personal de Anthony Jordan Cabrejo Barrientos, orientado a oportunidades como Backend Java Developer. La interfaz recrea un editor de codigo y presenta el perfil profesional, las habilidades, los proyectos y los medios de contacto.

## Tecnologias

- Astro 7
- React 19
- TypeScript
- CSS

## Desarrollo local

Requiere Node.js 22.12 o superior.

```sh
npm install
npm run dev
```

El sitio queda disponible normalmente en `http://localhost:4321`.

## Comandos

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run check` | Comprueba Astro y TypeScript |
| `npm run build` | Genera el sitio de produccion en `dist/` |
| `npm run preview` | Sirve localmente el resultado de produccion |

## Estructura principal

```text
src/
|-- components/
|   `-- Portfolio.tsx
|-- pages/
|   `-- index.astro
`-- styles/
    `-- global.css
```

`Portfolio.tsx` contiene la experiencia interactiva del editor, mientras que `global.css` define el tema, las animaciones y el comportamiento responsive.

## Estado

La presentacion, el perfil, las habilidades y el contacto estan implementados. La ficha del proyecto "Sistema de reservas" permanece pendiente de completar con informacion verificable:

- Problema y solucion
- Funcionalidades
- Stack y arquitectura
- Decisiones tecnicas
- Aprendizajes
- Repositorio y demo
