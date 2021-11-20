<template>
  <div>
    <button v-if="userRole === 'mahasiswa'">Siswa</button>
    <button v-if="userRole === 'dosen'">Guru</button>
    <button v-if="userRole === 'admin'">Admin</button>
  </div>
</template>
<script>
export default {
  name: "link",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
};
</script>
