export default function Table({ products, del, edit }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => edit(p)}>EDIT</button>
              </td>
              <td>
                <button onClick={() => del(p.id)}>DELETE</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No products found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
