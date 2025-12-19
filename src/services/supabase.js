import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eibqnzdfdrodibpnjwyb.supabase.co";
const supabaseKey =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpYnFuemRmZHJvZGlicG5qd3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTgxNjcsImV4cCI6MjA3NTE3NDE2N30.k5kD6MpiOPBNqkpXtxZlcmg63UgW9-0KIpNxGt-QvwU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
