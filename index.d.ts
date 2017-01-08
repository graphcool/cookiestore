import {Key} from './cookiestore'

declare function set (key: Key, value: string): void
declare function has (key: Key): boolean
declare function get (key: Key): string
declare function remove (key: Key): void
