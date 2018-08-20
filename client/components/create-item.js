Vue.component('create-item', {
  template: `
  <div class="new-item">
      <h2>Create new Item</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="input_name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input v-model.number="input_price" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input v-model.number="input_stock" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input v-model="input_tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" @click="addItem">Submit</button>
      <hr>
    </div>
  `,
  data() {
    return {
      input_name: '',
      input_price: 0,
      input_stock: 0,
      input_tags: ''
    }
  },
  methods: {
    addItem() {
      let self = this
      axios.post('http://localhost:3000/items', {
        name: this.input_name,
        price: this.input_price,
        stock: this.input_stock,
        tags: this.input_tags.split(' ')
      })
        .then(response => {
          self.$emit('item-created')
          this.input_name = ''
          this.input_price = 0
          this.input_stock = 0
          this.input_tags = ''
        })
        .catch(err => alert(err))
    }
  }
})