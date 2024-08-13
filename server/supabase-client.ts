import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_SECRET_KEY || ''

const supabaseClient = createClient(supabaseUrl, supabaseKey)
export default supabaseClient
