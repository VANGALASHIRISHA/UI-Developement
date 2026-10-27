import { useState, useEffect } from 'react'
import { addProduct } from './api'

export default function Form({ refresh, editProduct, updateData }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: ''
  })

  useEffect(() => {
    if (editProduct) {
      setForm({
        name: editProduct.name,
        price: editProduct.price,
        category: editProduct.category
      })
    } else {
      setForm({ name: '', price: '', category: '' })
    }
  }, [editProduct])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editProduct) {
      await updateData(editProduct.id, form)
    } else {
      await addProduct(form)
      refresh()
    }
    setForm({ name: '', price: '', category: '' })
  }

  const handleCancel = () => {
    setForm({ name: '', price: '', category: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
      </select>
      <button type="submit">{editProduct ? 'UPDATE PRODUCT' : 'ADD PRODUCT'}</button>
      {editProduct && <button type="button" onClick={handleCancel}>CANCEL</button>}
    </form>
  )
}
