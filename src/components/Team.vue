<template>
  <div>
    <div class="row">
      <div class="col-xs-12 text-xs-center">  
        <h2>{{ team.title }}</h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12 text-xs-center">
        <div class="team_portrait">
        <img :src="team.members.left.image" class="team_left img-fluid">
        </div>
        <!-- <div class="team_left img-thumbnail img-fluid"></div> -->
        <h3 class="name">{{ team.members.left.name }}</h3>
        <h6 class="position">{{ team.members.left.title }}</h6>
        <span v-html="marked(team.members.left.description)"></span>
        <nav class="social nav">
          <a v-if="team.members.left.linkedin" class="nav-link" :href="team.members.left.linkedin">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.left.facebook" class="nav-link" :href="team.members.left.facebook">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.left.twitter" class="nav-link" :href="team.members.left.twitter">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.left.mail" class="nav-link" href="#contact">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
      <div class="col-md-6 col-xs-12 text-xs-center">
        <div class="team_portrait">
        <img :src="team.members.right.image" class="team_right img-fluid">
        </div>
        <!-- <div class="team_right img-thumbnail img-fluid"></div> -->
        <h3 class="name">{{ team.members.right.name }}</h3>
        <h6 class="position">{{ team.members.right.title }}</h6>
        <span v-html="marked(team.members.right.description)"></span>
        <nav class="social nav">
          <a v-if="team.members.right.linkedin" class="nav-link" :href="team.members.right.linkedin">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.right.facebook" class="nav-link" :href="team.members.right.facebook">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.right.twitter" class="nav-link" :href="team.members.right.twitter">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a v-if="team.members.right.mail" class="nav-link" href="#contact">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  props: ['team']
}
</script>