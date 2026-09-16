import { useState } from "react";

export default function Expanse() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expanse, setExpanse] = useState([]);

  function addExpanse() {
    if(!title.trim() || !amount) {
        return;
    }

    const newExpanse = {
        id : Date.now(),
        title : title,
        amount : Number(amount)
    } 

    setExpanse((val) => [...val, newExpanse]);

    setTitle("");
    setAmount("");

  }

  function deleteExpanse(deletedID) {
    setExpanse((val) => val.filter((e) => (e.id !== deletedID)))
  }

  return (
    <div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
            </div>

            <div>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
            </div>

            <button onClick={addExpanse}>add</button>
        </div>

        <div>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", maxWidth: "500px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {Object.entries(expanse).map(([key,value]) =>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.amount}</td>
                        <td onClick={() => deleteExpanse(value.id)}>delete</td>
                    </tr>
                ))}
                </tbody>   
            </table>
        </div>
    </div>
  );
}
