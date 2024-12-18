export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Please provide a valid URL." });
  }

  try {
    // Nayan Video Downloader API URL
    const apiUrl = `https://nayan-video-downloader.vercel.app/ndown?url=${encodeURIComponent(
      url
    )}`;

    // Fetch data from the Nayan Video Downloader API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Return the response to the client
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
}
