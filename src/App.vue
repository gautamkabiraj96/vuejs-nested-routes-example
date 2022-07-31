<template>
  <div id="app">
    <div>
      <div class="router-link">
        <router-link to="/user/gautam">User</router-link>
      </div>
      <div class="router-link">
        <router-link to="/user/gautam/profile">User Profile</router-link>
      </div>
      <div class="router-link">
        <router-link to="/user/gautam/photos">User Photos</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 24px;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
  color: #4b4b4b;
}

.router-link {
  display: inline-block;
  margin-right: 10px;
  font-size: 14px;
}

.router-link a {
  text-decoration: none;
  font-weight: 600;
  color: rgb(0, 60, 255) !important;
}

.router-link a:active {
  color: rgb(255, 0, 0) !important;
}
</style>