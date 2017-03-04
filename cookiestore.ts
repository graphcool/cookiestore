import * as cookies from 'js-cookie'

const domain = extractDomain()

export type Key = 'graphcool_auth_token'
  | 'graphcool_customer_id'
  | 'graphcool_last_used_project_id'
  | 'graphcool_last_referral'

function extractDomain (): string {
  const hostname = window.location.hostname

  if (hostname.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/)) {
    return hostname
  } else {
    return hostname.split('.').slice(-2).join('.')
  }
}

export function set (key: Key, value: string): void {
  cookies.set(key, value, {
    domain,
    expires: 90,
  })
}

export function has (key: Key): boolean {
  return cookies.get(key) !== undefined
}

export function get (key: Key): string {
  if (!has(key)) {
    throw new Error(`No value for key: ${key}`)
  }
  return cookies.get(key)
}

export function remove (key: Key): void {
  cookies.remove(key, { domain })
}
