import { useState } from "react";
import { searchProducts } from "./api";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Loader from "./components/Loader";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minScore, setMinScore] = useState(0.5);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (embedding) => {
    try {
      setLoading(true);
      setError("");

      const results = await searchProducts(embedding, minScore);
      setProducts(results);
    } catch (err) {
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Visual Product Matcher</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="filter">
        <label>Min Similarity: {minScore}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={minScore}
          onChange={(e) => setMinScore(e.target.value)}
        />
      </div>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
