const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 70000,
  },
  {
    id: 2,
    name: "Mouse",
    category: "Electronics",
    price: 1200,
  },
  {
    id: 3,
    name: "Keyboard",
    category: "Electronics",
    price: 2500,
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Furniture",
    price: 8500,
  },
  {
    id: 5,
    name: "Desk",
    category: "Furniture",
    price: 12000,
  },
  {
    id: 6,
    name: "Notebook",
    category: "Stationery",
    price: 200,
  },
];

// Select elements

const searchInput = document.querySelector(".Search-input");

const searchButton = document.querySelector(".search-btn");

const categorySelect = document.querySelector("#category");

const sortSelect = document.querySelector("#sort");

const productList = document.querySelector(".product-list");

const cartList = document.querySelector(".cart-list");

const cartCount = document.querySelector(".cart-count");

const totalPrice = document.querySelector(".total-price");

// Cart

const cart = [];

// When page loades display all the product inside cart

const displayAllProducts = (products) => {
  productList.innerHTML = products
    .map((product) => {
      return `
              <div class="product-lists">
              <p>Name:${product.name}</p>
              <p>Category:${product.category}</p>
              <p>Price:${product.price}</p>
            </div>
      `;
    })
    .join("");
};
displayAllProducts(products);

// 2. 🔍 Search Products

const findProduct = (products, name) => {
  const product = products.find(
    (product) => product.name.toLoweCase() === name,
  );
};

searchButton.addEventListener("click", function (e) {
  e.preventDefault(e);
  const productName = searchInput.value;

  const findProduct = (products, name) => {
    const product = products.find(
      (product) => product.name.toLoweCase() === name,
    );
  };
  findProduct(products, productName);
  dis;
});
