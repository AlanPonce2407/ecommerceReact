const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "celulares",
    img: "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg",
    stock: 25,
    description: "Descripción de Iphone 12",
  },
  {
    id: "2",
    name: "Samsung s21",
    price: 800,
    category: "celulares",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripción de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablets",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripción de Ipad",
  },
  {
    id: "4",
    name: "Asus Strix",
    price: 3600,
    category: "notebooks",
    img: "https://dlcdnwebimgs.asus.com/gain/14730014-9B03-4369-83EE-B668F348B5AA",
    stock: 2,
    description: "Descripción de Asus Strix",
  },
  {
    id: "5",
    name: "Nintendo Switch",
    price: 300,
    category: "consolas",
    img: "https://lyselectrohogar.com.ar/wp-content/uploads/2024/01/D_NQ_NP_845205-MLA70414548864_072023-O.webp",
    stock: 5,
    description: "Descripción de Nintendo Switch"
  },
  {
    id: "6",
    name: "Playstation 5",
    price: 600,
    category: "consolas",
    img: "https://acdn.mitiendanube.com/stores/001/722/177/products/diseno-sin-titulo-671-f5f77b492835ccf56016917932205259-1024-1024.png",
    stock: 2,
    description: "Descripción de Playstation 5"
  },
  {
    id: "7",
    name: "Smart TV 4K UHD Samsung 50\"",
    price: 800,
    category: "televisores",
    img: "https://images.fravega.com/f1000/d7ca24bf5639a7db78c31aa9fa963be8.jpg",
    stock: 10,
    description: "Descripción de Smart TV"
  }

];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === itemId));
    }, 100);
  });
};
