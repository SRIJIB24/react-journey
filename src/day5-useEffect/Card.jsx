// Card.jsx
export default function Card({ product }) {
  // Use thumbnail or fall back to the first image in the array
  const imageUrl = product.thumbnail || (product.images && product.images[0]);

  return (
    <div
      className="card"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }} key={product.id}
    >
      <div style={{ width: "100%", height: "180px", backgroundColor: "#f5f5f5" }}>
        <img
          src={imageUrl}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px 0" }}>{product.title}</h3>
        <p style={{ margin: "4px 0", color: "#666", fontSize: "0.9rem" }}>
          Category: {product.category}
        </p>
        <p style={{ margin: "8px 0 0 0", fontWeight: "bold" }}>
          Price: ${product.price}
        </p>
        <p>{product.availabilityStatus}</p>
      </div>
    </div>
  );
}