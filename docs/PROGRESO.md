# ConectaMich — Estado del proyecto (punto de control)

_Última actualización: 8 de septiembre de 2026_

App ciudadana de reportes urbanos para la zona conurbada **Morelia – Tarímbaro – Jacona**.
El ciudadano levanta reportes; **la autoridad cambia el estado desde un dashboard externo** y la app recibe la notificación.

## Dónde está el código
- **`mobile/`** → la **app real** (Expo + React Native). ← trabajamos aquí.
- **Raíz** → prototipo web original (Vite + React + Tailwind). Referencia visual.

## Stack (mobile)
Expo · React Native · NativeWind (Tailwind) · React Navigation · react-native-maps · expo-location · expo-image-picker · expo-notifications · expo-clipboard · Supabase (Auth + Postgres + Storage) · Expo Push → FCM.

## Modelo de datos
- `estado`: **recibido | en_curso | resuelto**
- `categoria`: baches · alumbrado · agua · basura · **arbol** · otros (+ `categoria_otro`)
- `reportes`: folio, titulo, descripcion, direccion, prioridad, **municipio**, **dependencia**, lat, lng, **imagenes[]**, estado, created_at
- `push_tokens`: token, user_id
- Storage: buckets `reportes-fotos` y `avatars`
- SQL fuente de verdad: **`mobile/supabase/schema.sql`** (re-correr en Supabase → SQL Editor tras cada cambio)

## Estado por pantalla
| Pantalla | Estado |
|---|---|
| Login / Registro | ✅ Auth real (gate por sesión) |
| Inicio | ✅ Nombre real · avatar editable · fecha dinámica · hero compacto · mapa Google con marcadores por categoría/estado · reportes de toda la ciudadanía · filtros · listas con datos reales y miniaturas |
| Reportar | ✅ Formulario real · barra dinámica · solo cámara (3 fotos) · categorías (incl. Árbol caído + texto "Otros") · GPS + pin · asignación automática municipio/dependencia · guarda en BD |
| Reporte enviado | ✅ Datos reales por `id` |
| Mis Reportes | ✅ Lista real · tabs · pull-to-refresh · miniaturas |
| Detalle de Reporte | ✅ Datos reales · mapa · fotos · calificación · compartir |
| Incidencia cercana | ⚠️ Estática/demo (pendiente conectar) |
| Ayuda / Info | ✅ 911 (marcador) · FAQ/Privacidad/Términos · soporte (mailto) · cerrar sesión |

## Notificaciones push (FCM)
Funcionan **con la app cerrada**. Trigger `notify_estado_change` (Postgres + pg_net) → Expo Push → FCM al cambiar el `estado`. Firebase: `conectamich-93517`. Expo projectId en `app.json`.

## Cómo compilar e instalar (Windows + Git Bash)
> `npx expo run:android` no funciona en Git Bash (no resuelve `gradlew`). Usar:
```bash
cmd //c "C:\proyectos\ConectaGobMich\mobile\android\gradlew.bat -p C:\proyectos\ConectaGobMich\mobile\android assembleRelease"
```
```bash
adb -s JJB69D8PUGBIMRBE install -r mobile/android/app/build/outputs/apk/release/app-release.apk
```
Tras `expo prebuild --clean` re-aplicar: `android/local.properties` (sdk.dir), heap en `gradle.properties` (`-Xmx4096m`, `workers.max=2`), `lint { checkReleaseBuilds false }` en `app/build.gradle`, y permisos `CAMERA` + `POST_NOTIFICATIONS` en el Manifest.

## Diagramas
- `docs/diagramas.html` — los 4 diagramas (SVG a mano, estilo UML) — también publicado como artifact.
- `docs/casos_de_uso.puml`, `docs/componentes.puml`, `docs/flujo_datos.puml` — PlantUML.
- `docs/er.dbml` — para dbdiagram.io.

## Próximos pasos sugeridos
- [ ] Conectar **Incidencia cercana** a datos reales (deduplicación por coordenadas).
- [ ] Correo de soporte real (hoy es placeholder `soporte@conectamich.gob.mx`).
- [ ] Seguir puliendo pantalla por pantalla.
- [ ] (Opcional) Panel/dashboard de autoridad para cambiar estados.
