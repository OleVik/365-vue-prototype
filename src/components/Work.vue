<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ work.title }}</h2>
        <span v-html="marked(work.description)"></span>
      </div>
      <div class="col-md-6 col-xs-12" v-for="(item, index) in work.items" v-show="index == 0">
        <div class="card">
          <img class="card-img" :src="item.image" :alt="item.title">
          <div class="card-img-overlay">
            <div class="card-img-overlay-text">
              <a :href="'#work_' + (index+1)" rel="modal:open">
                <h3 class="card-title">{{ item.title }}</h3>
              </a>
            </div>
          </div>
          <div :id="'work_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
            <div class="wrapper_overlay">
              <h1>{{ item.title }}</h1>
              <span v-html="marked(item.description)"></span>
              <a href="#close" rel="modal:close" class="close_alt btn btn-secondary">Close window</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row">
          <div class="col-md-6" v-for="(item, index) in work.items" v-show="index == 1">
              <div class="card">
                <img class="card-img" :src="item.image" :alt="item.title">
                <div class="card-img-overlay">
                  <div class="card-img-overlay-text">
                    <a :href="'#work_' + (index+1)" rel="modal:open">
                      <h3 class="card-title">{{ item.title }}</h3>
                    </a>
                  </div>
                </div>
                <div :id="'work_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
                  <div class="wrapper_overlay">
                    <h1>{{ item.title }}</h1>
                    <span v-html="marked(item.description)"></span>
                    <a href="#close" rel="modal:close" class="close_alt btn btn-secondary">Close window</a>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-6" v-for="(item, index) in work.items" v-show="index == 2">
              <div class="card">
                <img class="card-img" :src="item.image" :alt="item.title">
                <div class="card-img-overlay">
                  <div class="card-img-overlay-text">
                    <a :href="'#work_' + (index+1)" rel="modal:open">
                      <h3 class="card-title">{{ item.title }}</h3>
                    </a>
                  </div>
                </div>
                <div :id="'work_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
                  <div class="wrapper_overlay">
                    <h1>{{ item.title }}</h1>
                    <span v-html="marked(item.description)"></span>
                    <a href="#close" rel="modal:close" class="close_alt btn btn-secondary">Close window</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="row row-margin">
          <div class="col-md-12" v-for="(item, index) in work.items" v-show="index == 3">
              <div class="card">
                <img class="card-img" :src="item.image" :alt="item.title">
                <div class="card-img-overlay">
                  <div class="card-img-overlay-text">
                    <a :href="'#work_' + (index+1)" rel="modal:open">
                      <h3 class="card-title">{{ item.title }}</h3>
                    </a>
                  </div>
                </div>
                <div :id="'work_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
                  <div class="wrapper_overlay">
                    <h1>{{ item.title }}</h1>
                    <span v-html="marked(item.description)"></span>
                    <a href="#close" rel="modal:close" class="close_alt btn btn-secondary">Close window</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  props: ['work']
}
</script>