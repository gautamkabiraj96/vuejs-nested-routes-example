<template>
  <div class="user-root">
    <p>User: {{ $route.params.user.toUpperCase() }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserRoot",
};
</script>

<style>
.user-root {
  border: 1px solid rgb(0, 119, 255);
  margin: 20px 0;
  padding: 10px;
}
</style>