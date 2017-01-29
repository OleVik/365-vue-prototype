<template>
  <footer class="footer container" id="footer">
      <div class="row">
        <div class="col-xs-12 text-xs-center">
          <p class="copyright">
            <small v-html="marked(bottom)"></small>
          </p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'top',
  props: ['bottom']
}
</script>