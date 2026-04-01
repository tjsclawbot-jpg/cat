-- Create votes table
CREATE TABLE votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cat_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create incident_reports table
CREATE TABLE incident_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  witness_name TEXT NOT NULL,
  witness_email TEXT NOT NULL,
  incident_date TIMESTAMP NOT NULL,
  floor INTEGER,
  wing TEXT,
  location TEXT,
  subject_description TEXT NOT NULL,
  cat_count TEXT,
  photo_url TEXT,
  additional_notes TEXT,
  status TEXT DEFAULT 'submitted', -- 'submitted', 'approved', 'rejected'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable realtime for votes
ALTER TABLE votes REPLICA IDENTITY FULL;

-- Enable realtime for incident_reports
ALTER TABLE incident_reports REPLICA IDENTITY FULL;

-- Create indexes for better query performance
CREATE INDEX idx_votes_cat_name ON votes(cat_name);
CREATE INDEX idx_reports_status ON incident_reports(status);
CREATE INDEX idx_reports_created_at ON incident_reports(created_at DESC);
