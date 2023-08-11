<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/jobs" class="nav-link">Jobs</router-link>
        </li>

        <li class="nav-item" v-if="!user">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" v-if="!user">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item" v-if="!!user">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>

      </ul>
    </nav>

    <div class="container-fluid">
      <h2>Job Board Aggregator with an API</h2>
      <router-view />
    </div>
  </header>
</template>

<script>
export default {
  name: "HomePage",
  computed:{
    user() {
      return this.$store.getters.user.data;
    }
  }

};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>