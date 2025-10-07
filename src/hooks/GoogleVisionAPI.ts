export async function callGoogleVisionAPI(imageBase64: string) {
  const apiKey = import.meta.env.VITE_GOOGLE_VISION_API_KEY;
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

  const body = {
    requests: [
      {
        image: {
          content: imageBase64.replace(/^data:image\/(png|jpeg);base64,/, ""),
        },
        features: [{ type: "DOCUMENT_TEXT_DETECTION", maxResults: 1 }],
      },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Vision API Error: ${res.statusText}`);
  }

  return res.json();
}
