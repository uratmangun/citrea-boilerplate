-- Create screenshots bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'screenshots',
  'screenshots',
  true,
  10485760, -- 10MB limit
  ARRAY['image/png', 'image/jpeg', 'image/webp']
);

-- Create policy to allow public uploads
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'screenshots');

-- Create policy to allow public reads
CREATE POLICY "Allow public reads" ON storage.objects
FOR SELECT USING (bucket_id = 'screenshots');
