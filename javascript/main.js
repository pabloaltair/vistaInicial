// Simulando una base de datos con un array de objetos
let database = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
  ];
  
  // Función para obtener todos los productos
  async function getProducts() {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
  }
  
  // Función para crear un nuevo producto
  async function createProduct(product) {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const data = await response.json();
    return data;
  }
  
  // Función para actualizar un producto
  async function updateProduct(id, updatedProduct) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    const data = await response.json();
    return data;
  }
  
  // Función para eliminar un producto
  async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }
  
  // Ejemplo de uso:
  // Obtener todos los productos
  getProducts()
    .then(products => console.log(products))
    .catch(error => console.error(error));
  
  // Crear un nuevo producto
  createProduct({ name: 'Producto 3', price: 30 })
    .then(product => console.log(product))
    .catch(error => console.error(error));
  
  // Actualizar un producto
  updateProduct(1, { name: 'Producto 1 actualizado', price: 15 })
    .then(product => console.log(product))
    .catch(error => console.error(error));
  
  // Eliminar un producto
  deleteProduct(2)
    .then(message => console.log(message))
    .catch(error => console.error(error));