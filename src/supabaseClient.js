import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ztggqseayporxfkvmllj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Z2dxc2VheXBvcnhma3ZtbGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxNjY3MTUsImV4cCI6MTk3Mzc0MjcxNX0.nUhup-_KlH7cyf5eSmhKUWL5Q9BZQKqEEzmtRy0LAE4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)