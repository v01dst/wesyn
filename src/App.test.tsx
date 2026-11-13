import { describe, expect, it } from 'vitest'
import { createRoot } from 'react-dom/client'
import { act } from 'react'
import App from './App'

describe('App routing', () => {
  it('shows "No such page" for an unknown hash', () => {
    window.location.hash = '#/no-such-page'
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    act(() => { root.render(<App />) })
    expect(container.textContent).toContain('No such page')
    expect(container.querySelector('a[href="#/"]')).not.toBeNull()
    act(() => { root.unmount() })
    document.body.removeChild(container)
  })
})
