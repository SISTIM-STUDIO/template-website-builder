import { createClient } from "@supabase/supabase-js";

/**
 * SUMBAWA TRIP Supabase client.
 *
 * Configure these in Netlify environment variables:
 * VITE_SUPABASE_URL
 * VITE_SUPABASE_PUBLISHABLE_KEY
 *
 * Never use a Supabase secret/service_role key in browser code.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabasePublishableKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;
