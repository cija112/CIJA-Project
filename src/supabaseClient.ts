import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bbsyutjiwfpwkbzccken.supabase.co'
const supabaseAnonKey = 'sb_publishable_4atDbm3jBhc6ZirCqyBybA_ULUzDFvt'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)