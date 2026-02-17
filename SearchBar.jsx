import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      // Fake embedding (replace with backend embedding API)
      onSearch(Array(512).fill(0.1));
    } else if (imageUrl) {
      onSearch(Array(512).fill(0.1));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Paste Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button type="submit">Search</button>
    </form>
  );
}
