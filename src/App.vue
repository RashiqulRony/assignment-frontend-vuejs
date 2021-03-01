<template>
  <div>
    <router-view :key="$route.path" name="header"></router-view>

    <main class="py-4">
      <router-view :key="$route.fullPath" ></router-view>
    </main>
  </div>
</template>

<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  data () {
    return {
      authUser: null,
    }
  },

  mounted() {

  },

  methods : {

  }
}
</script>
