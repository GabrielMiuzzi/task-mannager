# Task Mannager

**Task Mannager** es un plugin para Obsidian que ofrece una vista y modales para gestionar tareas directamente en tu vault. Está diseñado con una arquitectura modular y reutilizable, priorizando la claridad del código y la facilidad de mantenimiento.

---

## 🧩 Características

- Vista integrada de tareas con orden, filtros y agrupaciones.
- Modales para crear y editar tareas, secciones y grupos.
- Motores (`engines`) reutilizables para lógica de tareas, índices, programación, frontmatter y más.
- Compatibilidad con el sistema de `frontmatter` de Obsidian para sincronizar metadatos.
- Interfaz de usuario ligera y personalizable.

---

## 🛠️ Instalación

1. Clona o descarga el repositorio.
2. Copia el contenido de la carpeta de compilación (`build/` generada) a tu directorio de plugins de Obsidian, normalmente `~/Documents/ObsidianVault/.obsidian/plugins/task-mannager`.
3. Reinicia Obsidian y habilita el plugin desde la lista de plugins comunitarios.

> Para el desarrollo, usa `npm run build` para compilar y luego enlaza manualmente el `main.js` y el `manifest.json`.

---

## 🚧 Desarrollo

El proyecto usa TypeScript y está configurado con `pnpm`.

```bash
# instalar dependencias
pnpm install

# compilar en modo desarrollo (observa cambios)
pnpm run build -- --watch

# ejecutar chequeos de tipo
pnpm run typecheck
```

### Estructura de carpetas

```
src/
  styles.css               # estilos globales de la extensión
  taskMannager.ts         # entrypoint mínimo del plugin
  taskMannager/            # código dividido por dominio
    constants.ts
    types.ts
    engines/               # lógica compartida entre vista y modales
      completionEngine.ts
      frontmatterEngine.ts
      orderEngine.ts
      scheduleEngine.ts
      taskEngine.ts
      taskIndexEngine.ts
    modals/                # ventanas de entrada de datos
      EditSectionModal.ts
      NewGroupModal.ts
      NewTaskModal.ts
    plugin/                # ciclo de vida y ajustes del plugin
      TareasPlugin.ts
    ui/                    # componentes reutilizables
      colorPicker.ts
      dropdown.ts
    utils/                 # utilidades genéricas
      debounce.ts
      guards.ts
      sanitizeFilename.ts
      settings.ts
      status.ts
    view/                  # renderizado de la vista principal
      TareasView.ts
```

### Lineamientos de arquitectura

Puedes encontrar una guía más detallada sobre el estilo y la organización en `AGENTS.md`. Algunos puntos clave:

- Cada módulo debe tener responsabilidad única.
- Evitar lógica duplicada y mantener funciones pequeñas.
- Mantener contratos tipados estrictos y usar guardas de tipo.
- CSS separado en `src/styles.css` y `styles.css` (raíz) para mantener estilos fuera de TypeScript.
- El punto de entrada es `src/taskMannager.ts`.

---

## 📐 Boas prácticas antes de commits

- Ejecutar `npm run typecheck` y `npm run build`.
- Asegurarse de que no hay `@ts-nocheck` en el código.
- Revisar el README y los comentarios si hay cambios estructurales.

---

## 📚 Recursos

- [Obsidian API Documentation](https://publish.obsidian.md/api/)
- `AGENTS.md` — normas internas de arquitectura y estilo

---

## ❓ Preguntas Frecuentes (FAQ)

**¿Cómo creo una nueva tarea?**  
Abre la vista de Task Mannager y haz clic en el botón "Nueva tarea" o ejecuta el comando desde el pallete de comandos. Completa el formulario y guarda.

**¿Dónde se guardan las tareas?**  
Cada tarea se almacena como un bloque de texto en el archivo de notas que hayas seleccionado en la configuración, usando frontmatter para sus metadatos.

**¿Puedo filtrar las tareas por etiqueta o estado?**  
Sí, la vista permite filtros por estado (pendiente, completada) y etiquetas definidas en frontmatter.

**¿Qué pasa si elimino la nota de la tarea?**  
La tarea desaparecerá de la vista. No hay sincronización inversa; se asume que el usuario controla sus archivos.

**¿Es compatible con otros plugins de Obsidian?**  
Generalmente sí, ya que solo lee y escribe frontmatter estándar. Sin embargo, verifica conflictos si otro plugin modifica los mismos campos.


---

## 📝 Modo de uso de las tareas

1. **Creación**: Usa el modal de "Nueva tarea" o el comando para abrir el formulario. Define título, descripción, fecha de vencimiento y etiquetas.
2. **Visualización**: Las tareas aparecen en la vista principal agrupadas por criterios configurables (fecha, proyecto, etc.).
3. **Edición**: Haz doble clic sobre una tarea o usa el botón de editar para ajustar propiedades.
4. **Completar**: Marca una tarea como completada desde el checkbox; el motor de ordenación la moverá al final o a la sección de completadas según tu configuración.
5. **Sincronización**: Cualquier cambio se refleja en el archivo asociado y puede ser rastreado por Git u otros sistemas de control de versiones.

> Tip: utiliza las etiquetas y el orden personalizado para adaptar el gestor a tu flujo de trabajo.

---

¡Gracias por usar o contribuir a Task Mannager! Cualquier mejora o sugerencia es bienvenida.
