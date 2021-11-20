<template>
    <div class="container mt-5">
    <div class="card-group">
  <div class="card">
    <img src="https://hukum.untan.ac.id/wp-content/uploads/2020/01/Screenshot_94-1.png" class="card-img-top" alt="...">
    <div class="center">
        <a href="/pre2">Presensi</a>
    </div>
  </div>
  <div class="card">
    <img src="https://hukum.untan.ac.id/wp-content/uploads/2020/01/Screenshot_94-1.png" class="card-img-top" alt="...">
    <div class="center">
        <a href="/hadir">Kehadiran Mahasiswa</a>
    </div>
  </div>
  <div class="card">
    <img src="https://hukum.untan.ac.id/wp-content/uploads/2020/01/Screenshot_94-1.png" class="card-img-top" alt="...">
    <div class="center">
        <a href="/rekap">Rekap Dosen</a>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name: "Informasi2"
}
</script>

<style scoped>
.container {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

img { 
  width: 100%;
  height: auto;
  opacity: 0.5;
}
</style>