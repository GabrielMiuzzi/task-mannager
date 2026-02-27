export function createColorPicker(
  container: HTMLElement,
  colors: string[],
  selected: string,
  onChange: (nextColor: string) => void,
) {
  const wrap = container.createDiv({ cls: 'tareas-color-picker' })

  for (const color of colors) {
    const swatch = wrap.createEl('span', { cls: 'tareas-color-swatch' })
    swatch.style.background = color

    if (color === selected)
      swatch.addClass('tareas-swatch-selected')

    swatch.onclick = () => {
      onChange(color)
      markSelected(wrap, swatch)
      customInput.value = color
    }
  }

  const customInput = wrap.createEl('input')
  customInput.type = 'color'
  customInput.value = selected
  customInput.className = 'tareas-color-input'
  customInput.oninput = () => {
    onChange(customInput.value)
    clearSelected(wrap)
  }

  return { wrap, customInput }
}

function markSelected(wrap: HTMLElement, selectedSwatch: HTMLElement) {
  clearSelected(wrap)
  selectedSwatch.addClass('tareas-swatch-selected')
}

function clearSelected(wrap: HTMLElement) {
  wrap
    .querySelectorAll('.tareas-color-swatch')
    .forEach(swatch => swatch.classList.remove('tareas-swatch-selected'))
}
