import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vogosynljmbeiaoltrqz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvZ29zeW5sam1iZWlhb2x0cnF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTM1MjcsImV4cCI6MjA3OTkyOTUyN30.dEXlxv9vDP0X-MekWBelfDA_mGnBwuv4gk5qFlyQqwE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
