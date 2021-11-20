<template>
  <div>
    <button v-if="userRole === 'admin'">Admin</button>
  </div>
</template>
<script>
export default {
  name: "Kontak",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
};
</script>
