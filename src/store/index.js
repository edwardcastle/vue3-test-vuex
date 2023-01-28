import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
    products: [],
    cart: [],
  },

  getters: {
    cartLength: (state) => {
      return state.cart.length;
    },
    totalPrice: (state) => {
      return state.cart.reduce((total, cart) => total + cart.price, 0);
    },
  },

  mutations: {
    setCart(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },

  actions: {
    async getAllProducts({ state }) {
      state.loading = true;
      state.products = await fetch(`https://fakestoreapi.com/products`).then(
        (response) => response.json()
      );
      state.loading = false;
    },

    deleteProduct({ state, commit }, id) {
      const index = state.cart
        .map((value) => {
          return value.id;
        })
        .indexOf(id);
      state.cart.splice(index, 1);
      commit("setCart");
    },

    addProduct({ state, commit }, product) {
      state.cart.push(product);
      commit("setCart");
    },

    checkStatus({ state }) {
      const cartStorage = JSON.parse(localStorage.getItem("cart"));
      state.cart = cartStorage ? cartStorage : [];
    },
  },
});
