// js/supabase-client.js
const SUPABASE_URL = 'https://xzeehkfhltorxouqnfam.supabase.co'; // Paste your URL here
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZWVoa2ZobHRvcnhvdXFuZmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MjIxMTIsImV4cCI6MjA2OTA5ODExMn0.pa0Ab7Rhpz1_b7tVvUygocRf1yVji9l143A8rGBqYLw'; // Paste your anon key here

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
