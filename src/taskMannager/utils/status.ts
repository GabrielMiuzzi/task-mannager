const ESTADO_ALIASES: Record<string, string> = {
  cancelada: 'Cancelada',
  cancelado: 'Cancelada',
  desestimada: 'Cancelada',
  desestimado: 'Cancelada',
  'en progreso': 'En progreso',
  pendiente: 'Pendiente',
  finalizada: 'Finalizada',
  finalizado: 'Finalizada',
  completada: 'Finalizada',
  completado: 'Finalizada',
  bloqueada: 'Bloqueada',
  bloqueado: 'Bloqueada',
  urgente: 'Pendiente',
}

export function normalizeEstado(value?: string): string {
  if (!value)
    return 'Pendiente'

  const normalized = value.trim().toLowerCase()
  return ESTADO_ALIASES[normalized] ?? 'Pendiente'
}
