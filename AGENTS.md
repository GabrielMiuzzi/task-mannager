# AGENTS.md

## Objetivo
Mantener el plugin con una arquitectura simple, legible y modular, priorizando reutilización y bajo acoplamiento.

## Lineamientos
- Evitar lógica innecesaria o duplicada.
- Favorecer funciones pequeñas con una sola responsabilidad.
- Mantener `src/taskMannager.ts` como entrypoint mínimo.
- Separar responsabilidades en módulos por dominio (`plugin`, `view`, `modals`, `engines`, `ui`, `utils`).
- Reutilizar motores (`engines`) para lógica compartida entre vista y modales.
- Mantener contratos tipados estrictos entre módulos (sin `@ts-nocheck`).
- Preferir guardas de tipo y normalizadores antes que casts amplios.
- Mantener estilos fuera de TypeScript: todo CSS debe vivir en `src/styles.css`.
- Evitar inyección de CSS desde runtime salvo necesidad explícita.

## Estructura recomendada
- `src/taskMannager.ts`: export del plugin.
- `src/taskMannager/plugin/*`: ciclo de vida del plugin y settings.
- `src/taskMannager/view/*`: render y comportamiento de la vista.
- `src/taskMannager/modals/*`: modales de interacción.
- `src/taskMannager/engines/*`: lógica de dominio reutilizable.
- `src/taskMannager/ui/*`: componentes de UI reutilizables.
- `src/taskMannager/utils/*`: utilidades transversales.

## Calidad mínima antes de cerrar cambios
- `npm run typecheck`
- `npm run build`
