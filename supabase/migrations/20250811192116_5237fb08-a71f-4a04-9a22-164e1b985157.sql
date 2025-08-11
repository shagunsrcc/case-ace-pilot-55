-- Fix security vulnerability: Restrict profile visibility to authenticated users only
-- Remove the overly permissive policy that allows public access to all profile data

DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a more secure policy that only allows authenticated users to view profiles
-- This prevents unauthorized access to sensitive student data like emails and personal information
CREATE POLICY "Authenticated users can view profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (true);

-- Optional: Create a more granular policy that allows users to view their own profile with full access
-- while limiting what other authenticated users can see
-- Uncomment and modify this if you want even more restrictive access:
-- 
-- DROP POLICY IF EXISTS "Authenticated users can view profiles" ON public.profiles;
-- 
-- CREATE POLICY "Users can view their own profile fully" 
-- ON public.profiles 
-- FOR SELECT 
-- TO authenticated
-- USING (auth.uid() = user_id);
-- 
-- CREATE POLICY "Authenticated users can view limited profile info" 
-- ON public.profiles 
-- FOR SELECT 
-- TO authenticated
-- USING (auth.uid() != user_id);
-- 
-- -- For the limited view, you would need to modify your application code to only
-- -- fetch non-sensitive fields when viewing other users' profiles