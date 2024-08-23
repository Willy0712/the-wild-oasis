import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gsbwuizanyqmpaitpmsw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzYnd1aXphbnlxbXBhaXRwbXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4ODM0MjYsImV4cCI6MjAzNjQ1OTQyNn0.f1mTP27P_EjIvX2aY03WRMSQBpDtqoODri0L38Ym7ew";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
