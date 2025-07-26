// js/supabase-client.js
const SUPABASE_URL = 'https://mnhiqnqolkhlurslsiwj.supabase.co'; // Paste your URL here
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaGlxbnFvbGtobHVyc2xzaXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDMzODUsImV4cCI6MjA2OTExOTM4NX0.rLM_V1i8i51wQWyuFF2tQr8fz9OVJWCU504iEiKTT5k'; // Paste your anon key here

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
