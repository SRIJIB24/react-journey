import { useState, useEffect } from "react";
import Card from "./Card";

export default function Fetchdata() {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://dummyjson.com/products");
        // "https://api.restcountries.com/countries/v5?q=canada",
        // {
        //   headers: {
        //     Authorization: "Bearer rc_live_fb13a970fa9f406f9ea1b0fb1a1927be",
        //   },
        // }

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        // 1. Parse into a usable JavaScript object/array
        const data = await res.json();
        console.log("Fetched API Data:", data);

        // If the API returns an array, pick the first country object, or store the whole response
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading products details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!products) return <p>No products data found.</p>;

  const categories = products.reduce((acc, current) => {
    if (!acc.includes(current.category)) {
      acc.push(current.category);
    }
    return acc;
  }, []);

  const filterdata = products.filter((val) => {
    const matchSearch = val.title.toLowerCase().includes(search.trim().toLowerCase());
    const matchCategory = category === "" || val.category === category;

    return matchSearch && matchCategory;
  })

  return (
    <div>
      <div
        style={{ height: "100px", margin: "10px", border: "2px solid black" }}
      >
        <div>
          <input
            type="text"
            placeholder="Search Product Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Category</option>
            {categories.map((val) => {
              return <option key={val} value={val}>{val}</option>;
            })}
          </select>
        </div>
        {/* <div>
          <input
            type="checkbox"
            checked={instock}
            onChange={(e) => setInstock(e.target.checked)}
          />
        </div> */}
      </div>

      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {filterdata.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
