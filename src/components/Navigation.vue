<template>
  <nav id="navbar-main" class="navbar navbar-fixed-top navbar-top">
    <ul class="nav navbar-nav">
      <li class="nav-item" v-for="item in navigation">
        <a class="nav-link" :href="item.ref">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  props: ['navigation']
}
</script>