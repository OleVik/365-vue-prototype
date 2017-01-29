<template>
  <header class="row">
    <div class="jumbotron jumbotron-fluid col-xs-12" id="banner">
    <div class="parallax text-center" :style="{ 'background-image': 'url(' + header.image + ')' }">
      <div class="parallax-pattern-overlay">
      <div class="container text-center" id="size-banner">
        <h1>{{ header.title }}</h1>
        <h2>{{ header.subtitle }}</h2>
      </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top',
  props: ['header']
}
</script>