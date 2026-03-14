
-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title TEXT NOT NULL,
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  applicant_phone TEXT NOT NULL,
  resume_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Allow anonymous inserts (public career form)
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert job applications"
  ON public.job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create resumes storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', false);

-- Allow anonymous uploads to resumes bucket
CREATE POLICY "Anyone can upload resumes"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'resumes');
