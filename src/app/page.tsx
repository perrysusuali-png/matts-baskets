'use client';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  text-align: center;
`;

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (data.url) setImageUrl(data.url);
  }

  return (
    <Container>
      <h1>Matts Baskets</h1>
      <p>Upload your product image:</p>
      <input type="file" onChange={handleUpload} />
      {imageUrl && (
        <div style={{ marginTop: '2rem' }}>
          <img src={imageUrl} alt="Uploaded" width={300} />
        </div>
      )}
    </Container>
  );
}
