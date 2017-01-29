<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ services.title }}</h2>
        <div class="card-group" v-for="(item, index) in services.items" v-show="index == 0">
          <div class="card card-img-fill" :style="{ backgroundImage: 'url(' + item.image + ')' }">
          </div>
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="card-text">{{ item.brief }}</p>
              <p>
                <a :href="'#services_' + (index+1)" rel="modal:open" class="card-text btn btn-success">Read more</a>
              </p>
            </div>
          </div>
          <div :id="'services_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
            <div class="wrapper_overlay">
              <h1>{{ item.title }}</h1>
              <span v-html="marked(item.description)"></span>
              <a href="#close" rel="modal:close" class="close_alt btn btn-secondary">Close window</a>
            </div>
          </div>
        </div>
        <div class="card-group" v-for="(item, index) in services.items" v-show="index == 1">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="card-text">{{ item.brief }}</p>
              <p>
                <a :href="'#services_' + (index+1)" rel="modal:open" class="card-text btn btn-success">Read more</a>
              </p>
            </div>
          </div>
          <div class="card card-img-fill" :style="{ backgroundImage: 'url(' + item.image + ')' }">
          </div>
          <div :id="'services_' + (index+1)" class="modal wrapper scrollbar-margin" :style="{ 'background-image': 'url(' + item.image + ')' }">
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
</template>

<script>
export default {
  name: 'services',
  props: ['services']
}
</script>

<style>
* {
    box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

.modal-enter, .modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>