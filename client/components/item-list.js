Vue.component('item-list', {
  template: `
  <div class="row">
      <div class="col-lg-12">
        <div class="row my-4">

          <div class="col-lg-4 col-md-6 mb-4" v-for="item in items">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{item.name}}</a>
                </h4>
                <h5>IDR {{item.price}}</h5>
                <p class="card-text">Stock: {{item.stock}}pcs</p>
              </div>
              <div class="card-footer">
                <span class="badge badge-primary tag" v-for="tag in item.tags">
                  {{tag}}
                </span>
              </div>
            </div>
          </div>

        </div>
        <!-- /.row -->
      </div>
      <!-- /.col-lg-9 -->
    </div>
    <!-- /.row -->
  `,
  data() {
    return {}
  },
  props: ['items']
})