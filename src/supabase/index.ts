import { createClient } from '@supabase/supabase-js'

const anon = import.meta.env.VITE_SUPABASE_ANON as string
const url = import.meta.env.VITE_SUPABASE_URL as string

export const supa = createClient(url, anon)