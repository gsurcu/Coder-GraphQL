const axios = require('axios');

const getItemsById = async (id) => {
  try {
    return await axios.default.get(`/api/products/${id}`); 
  } catch (error) {
    console.error(error)
  }
}

const getItems = async () => {
  try {
    return await axios.default.get('/api/products/');
  } catch (error) {
    console.error(error)
  }
}

const createItem = async (item) => {
  try {
    return await axios.default.post('/api/products/', item);
  } catch (error) {
    console.error(error)
  }
}

const updateItem = async (id, item) => {
  try {
    return await axios.default.put(`/api/products/${id}`, item);
  } catch (error) {
    console.error(error)
  }
}

const deleteItem = async (id) => {
  try {
    return await axios.default.delete(`/api/products${id}`);
  } catch (error) {
    console.error(error)
  }
}

Promise.all([
  // getItemsById(),
  // getItems(),
  createItem({
    title: '' ,
    description: '',
    code: '',
    imgUrl: '',
    price: 0,
    stock: 0,
  }),
  // updateItem(),
  // deleteItem()
]).then((res) => {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);    
  }
})