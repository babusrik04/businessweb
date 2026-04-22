/*
  # Create contact submissions table for LaunchGrow Digital

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `business_type` (text)
      - `message` (text)
      - `service_interest` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anonymous insertions (public form)
    - Add policy to allow service role to read all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_type text,
  message text,
  service_interest text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow service role to read submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);
