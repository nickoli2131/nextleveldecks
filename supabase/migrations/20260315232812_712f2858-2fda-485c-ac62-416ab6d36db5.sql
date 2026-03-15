
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Project estimate submissions
CREATE TABLE public.project_estimates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_type TEXT NOT NULL,
  material TEXT NOT NULL,
  length NUMERIC,
  width NUMERIC,
  railing_lf NUMERIC,
  deck_height TEXT,
  fence_height TEXT,
  needs_removal BOOLEAN DEFAULT false,
  post_type TEXT,
  small_gates INTEGER DEFAULT 0,
  large_gates INTEGER DEFAULT 0,
  estimate_low INTEGER,
  estimate_high INTEGER,
  contact_email TEXT,
  contact_phone TEXT,
  project_phase TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.project_estimates ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public estimate tool)
CREATE POLICY "Anyone can submit estimates"
  ON public.project_estimates
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
