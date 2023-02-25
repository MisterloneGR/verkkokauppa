Vue.component('product-list', {
  data() {
    return {
      // Define the computer components
      products: [
        {
          id: 1,
          name: "Intel Core i9-11900K",
          category: "CPU",
          brand: "Intel",
          price: 549.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/61t4z4NjK8S._AC_SL1024_.jpg"
        },
        {
          id: 2,
          name: "AMD Ryzen 9 5950X",
          category: "CPU",
          brand: "AMD",
          price: 799.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/71cD4t+7+EL._AC_SL1500_.jpg"
        },
        {
          id: 3,
          name: "NVIDIA GeForce RTX 3080",
          category: "GPU",
          brand: "NVIDIA",
          price: 1099.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/71Ug34TUuAL._AC_SL1500_.jpg"
        },
        {
          id: 4,
          name: "G.SKILL Ripjaws V Series 32GB (2 x 16GB) DDR4",
          category: "RAM",
          brand: "G.SKILL",
          price: 149.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/61b%2B9X0zKUL._AC_SL1500_.jpg"
        }
      ],
      // Keep track of the filters
      categoryFilters: [],
      brandFilters: [],
    };
  },
  computed: {
    // Compute the filtered products
    filteredProducts() {
      return this.products.filter(product => {
        let categoryMatch = this.categoryFilters.length === 0 || this.categoryFilters.includes(product.category);
        let brandMatch = this.brandFilters.length === 0 || this.brandFilters.includes(product.brand);
        return categoryMatch && brandMatch;
      });
    },
  },
  methods: {
    // Add a product to the cart
    addToCart(productId) {
      let product = this.products.find(product => product.id === productId);
      console.log(`Product added to cart: ${product.name}`);
    },
  },
  template: `
    <div>
      <div class="row">
        <div class="col-lg-3">
          <h3>Category Filters</h3>
          <div v-for="category in uniqueCategories" :key="category">
            <input type="checkbox" :id="category" :value="category" v-model="categoryFilters">
            <label :for="category">{{ category }}</label>
          </div>
        </div>
        <div class="col-lg-3">
          <h3>Brand Filters</h3>
          <div v-for="brand in uniqueBrands" :key="brand">
            <input type="checkbox" :id="brand" :value="brand" v-model="brandFilters">
            <label :for="brand">{{ brand }}</label>
          </div>
        </div>
      </div>
      <div id="product-list" class="row">
        <div class="col-lg-4 mb-4" v-for="product in filteredProducts" :key="product.id">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card</div>
        </div>
      </div>
    </div>
  `
});

new Vue({
el: "#app",
});
