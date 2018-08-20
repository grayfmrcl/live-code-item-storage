Vue.component('item-management', {
  template: `
  <div class="container">
    <search-item @items-fetched="itemsFetched"></search-item>
    <create-item @item-created="getItems"></create-item>
    <item-list :items=items></item-list>
  </div>
  `,
  data() {
    return {
      items: []
    }
  },
  methods: {
    itemsFetched(data) {
      this.items = data
    },
    getItems() {
      axios.get('http://localhost:3000/')
        .then(response => {
          this.items = response.data
        })
        .catch(err => alert(err))
    }
  }
})