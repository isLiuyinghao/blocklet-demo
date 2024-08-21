import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  'https://wiqtvaeqvbqatugjxpgm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcXR2YWVxdmJxYXR1Z2p4cGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTE4OTgsImV4cCI6MjAzOTc4Nzg5OH0.RpBwfy3AGskdNznOAATN3tvsqRZbi8ooRjwjCRmuul8',
);
