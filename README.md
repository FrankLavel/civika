# ConectaGobMich

Proyecto de hackatón — **React + TypeScript + Tailwind CSS + Supabase** (con Vite).

## Requisitos

- Node.js 18+ (probado con v24)
- Una cuenta y proyecto en [Supabase](https://supabase.com)

## Puesta en marcha

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Crea tu archivo de entorno a partir del ejemplo y rellena las credenciales de Supabase
   (Dashboard → Project Settings → API):

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key
   ```

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Scripts

| Comando           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Servidor de desarrollo (Vite)            |
| `npm run build`   | Compila TypeScript y genera el build     |
| `npm run preview` | Sirve el build de producción localmente  |
| `npm run lint`    | Linter (oxlint)                          |

## Estructura

```
src/
├── lib/
│   └── supabase.ts   # Cliente de Supabase (usa variables VITE_*)
├── App.tsx           # Verifica la conexión a Supabase
├── main.tsx          # Punto de entrada
└── index.css         # Tailwind CSS
```

El cliente de Supabase se importa así:

```ts
import { supabase } from './lib/supabase'
```
