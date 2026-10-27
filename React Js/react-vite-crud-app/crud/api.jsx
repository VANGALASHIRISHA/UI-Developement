import axios from 'axios'

const url = 'http://localhost:3001/products'

// Get all products
export async function getProducts() {
  return await axios.get(url)
}

// Delete a product by ID
export async function deleteProduct(id) {
  return await axios.delete(`${url}/${id}`)
}

// Add a new product
export async function addProduct(product) {
  return await axios.post(url, product)
}

// Update a product by ID
export async function updateProduct(id, updatedProduct) {
  return await axios.put(`${url}/${id}`, updatedProduct)
}
