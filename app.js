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
      // Define the selected categories and brands
      selectedCategories: [],
      selectedBrands: [],
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
      <div class="form-group">
        <label>Category:</label>
        <div>
          <label>
            <input type="checkbox" value="CPU" v-model="selectedCategories" /> CPU
          </label>
          <label>
            <input type="checkbox" value="GPU" v-model="selectedCategories" /> GPU
          </label>
          <label>
            <input type="checkbox" value="RAM" v-model="selectedCategories" /> RAM
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>Brand:</label>
        <div>
          <label>
            <input type="checkbox"
            value="Intel"
            v-model="selectedBrands"
          />
          Intel
        </label>
        <label>
          <input
            type="checkbox"
            value="AMD"
            v-model="selectedBrands"
          />
          AMD
        </label>
        <label>
          <input
            type="checkbox"
            value="NVIDIA"
            v-model="selectedBrands"
          />
          NVIDIA
        </label>
        <label>
          <input
            type="checkbox"
            value="G.SKILL"
            v-model="selectedBrands"
          />
          G.SKILL
        </label>
      </div>
      <div class="product-list">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product"
        >
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <button @click="addToCart(product.id)">Add to Cart</button>
        </div>
      </div>
    </div>
    `,
  });
  
  // Mount the component to the app
  new Vue({
  el: "#app",
  });