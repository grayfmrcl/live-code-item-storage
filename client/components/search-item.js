Vue.component('search-item', {
  template: `
  <div class="search-item">
      <h2>Search Item</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="input_name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Start Price:</label>
        <input v-model="input_price" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input v-model="input_tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" @click="searchItem">Search</button>
      <hr>
    </div>
  `,
  data() {
    return {
      input_name: '',
      input_price: '',
      input_tags: ''
    }
  },
  methods: {
    searchItem() {
      let self = this
      let param_name = `${this.input_name.trim().length > 0 ? `name=${this.input_name.trim()}` : ''}`
      let param_price = `${this.input_price > 0 ? `price=${this.input_price}` : ''}`
      let param_tags = `${this.input_tags.trim().length > 0 ? `tags=${this.input_tags.trim()}` : ''}`

      axios.get(`http://localhost:3000/?${param_name || param_price || param_tags}`)
        .then(response => {
          self.$emit('items-fetched', response.data)

        })
        .catch(err => alert(err))
    }
  },
  created() {
    this.searchItem()
  },
})