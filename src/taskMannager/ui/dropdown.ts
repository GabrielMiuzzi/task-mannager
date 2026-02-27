import * as obsidian from 'obsidian'

export function showDropdown(
  anchor: HTMLElement,
  options: string[],
  current: string,
  onSelect: (value: string) => void,
) {
  const menu = new obsidian.Menu()

  for (const option of options) {
    menu.addItem((item) => {
      item.setTitle(`${option === current ? '✓ ' : '  '}${option}`)
      item.onClick(() => onSelect(option))
    })
  }

  const rect = anchor.getBoundingClientRect()
  menu.showAtPosition({ x: rect.left, y: rect.bottom + 4 })
}
