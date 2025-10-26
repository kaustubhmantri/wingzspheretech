/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required) - Contact person's name
      - `email` (text, required) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `company` (text, optional) - Company name
      - `service_interest` (text, optional) - Service they are interested in
      - `message` (text, required) - Message content
      - `created_at` (timestamptz, default now()) - Submission timestamp
      - `status` (text, default 'new') - Status of the submission (new, contacted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public access for form submission)
    - Add policy for reading submissions (authenticated users only)

  3. Important Notes
    - Table allows anyone to submit contact forms (public insert)
    - Only authenticated admins can read submissions for privacy
    - Timestamps are automatically set on creation
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service_interest text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
