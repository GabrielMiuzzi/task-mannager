import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

import packageJSON from '../package.json' with { type: 'json' }

interface ObsidianPluginManifest {
  id: string
  name: string
  version: string
  minAppVersion: string
  description: string
  author: string
  authorUrl: string
  isDesktopOnly: boolean
}

export async function generateObsidianPluginManifest() {
  const manifest = {
    id: 'task-mannager',
    name: 'task-mannager',
    version: packageJSON.version,
    minAppVersion: '1.0.0',
    description: 'Gestion de tareas estilo Notion con tabla interactiva, botones de accion y subtareas.',
    author: 'Leandro',
    authorUrl: '',
    isDesktopOnly: false,
  } satisfies ObsidianPluginManifest

  await writeFile(join(cwd(), 'dist', 'manifest.json'), JSON.stringify(manifest, null, 2))
}
