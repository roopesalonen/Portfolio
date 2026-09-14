import { useState } from 'react'

/** Pull the bare address out of a mailto: href, dropping any ?subject=… params. */
function mailtoAddress(href: string): string | null {
  if (!href.startsWith('mailto:')) return null
  return decodeURIComponent(href.slice('mailto:'.length).split('?')[0]) || null
}

/** Copy text, falling back to execCommand where the async Clipboard API is unavailable. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const el = document.createElement('textarea')
      el.value = text
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(el)
      return ok
    } catch {
      return false
    }
  }
}

/**
 * Click handler for social-link lists: when the clicked link is a mailto:
 * href, copies the address to the clipboard and surfaces a toast. Non-mailto
 * links (GitHub, LinkedIn, …) are left alone — the browser just follows them.
 */
export function useCopyEmail() {
  const [toast, setToast] = useState({ message: '', show: false })

  async function handleLinkClick(href: string, label: string) {
    const address = mailtoAddress(href)
    if (!address) return
    if (await copyText(address)) {
      setToast({ message: `${label} address copied`, show: true })
      window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500)
    }
  }

  return { toast, handleLinkClick }
}
