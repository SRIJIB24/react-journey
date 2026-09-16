export default function ProductCard({
  title,
  price,
  instock = true,
  discount = 0, ...rest
}) {

  return (
    <div {...rest}>
      <h3>Product Name : {title}</h3>
      <p>Price : {price}</p>
      {instock ? <p style={{ color: "green" }}>In Stock</p> : <p style={{ color: "red" }}>Out Of Stock</p>}
      {discount > 0 && <p> Discounded Price : {price - (price * discount / 100)}</p>}
    </div>
  );
}
