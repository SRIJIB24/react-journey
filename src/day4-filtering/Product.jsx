import { useState } from "react";

export default function Product() {

    const [search, setSearch] = useState("");
    const[category, setCategory] = useState("");
    const [instock, setInstock] = useState(false);

    const PRODUCTS = [
      { id: 101, name: "Mechanical Keyboard", category: "Electronics", price: 3500, inStock: true },
      { id: 102, name: "Wireless Mouse", category: "Electronics", price: 1200, inStock: false },
      { id: 103, name: "Cotton T-Shirt", category: "Clothing", price: 600, inStock: true },
      { id: 104, name: "Denim Jeans", category: "Clothing", price: 1800, inStock: true },
      { id: 105, name: "JavaScript Guide Book", category: "Books", price: 750, inStock: false },
      { id: 106, name: "React Handbook", category: "Books", price: 950, inStock: true },
    ];

    const filterProducts = PRODUCTS.filter((product) => {
        const matchSearch = product.name.toLowerCase().includes(search.trim().toLowerCase());
        const matchCategory = category === "" || product.category === category;
        const matchStock =  !instock || product.inStock;

        return matchSearch && matchCategory && matchStock;
    })

    return(
        <div style={{marginTop:"20px"}}>
            <div style={{height:"100px",margin:"10px",border:"2px solid black"}}>
                <div>
                    <input type="text" placeholder="search Product Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>

                <div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Books">Books</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" checked={instock} onChange={(e) => setInstock(e.target.checked)}/>
                </div>
            </div>

            <div style={{margin:"10px"}}>
                <table style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Instock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterProducts.map((val,index) => (
                        <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.category}</td>
                            <td>{val.price}</td>
                            <td>{val.inStock ? 'In Stock' : 'Out of Stock'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}