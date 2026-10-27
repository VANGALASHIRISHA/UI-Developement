import { useEffect, useState } from 'react'
import './App.css'
import { getProducts, deleteProduct, updateProduct } from '../crud/api'
import Table from '../crud/Table'
import Form from '../crud/Form'

function App() {
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null) // for editing

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getProducts()
    setProducts(res.data)
  }

  const deleteData = async (id) => {
    await deleteProduct(id)
    getData()
  }

  const editData = (product) => {
    setEditProduct(product) // set the product to edit
  }

  const updateData = async (id, updatedProduct) => {
    await updateProduct(id, updatedProduct)
    setEditProduct(null) // clear edit state
    getData()
  }

  return (
    <div>
      <h2>React Mini Project</h2>
      <Form
        refresh={getData}
        editProduct={editProduct}
        updateData={updateData}
      />
      <Table products={products} del={deleteData} edit={editData} />
    </div>
  )
}

export default App
