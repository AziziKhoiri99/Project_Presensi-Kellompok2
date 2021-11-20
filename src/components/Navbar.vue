<template>
  <div id="App">
    <nav class="navbar navbar-expand-lg navbar-dark" :class="{ 'onScroll': !view.topOfPage}">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" alt="" width="50" height="50">
        </a>
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown" v-if="userRole === 'admin'">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Informasi
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/info">Mahasiswa</a></li>
                <li><a class="dropdown-item" href="/info2">Dosen</a></li>
                <li><a class="dropdown-item" href="/info3">Admin</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" v-if="userRole === 'admin'">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profil
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/profile">Mahasiswa</a></li>
                <li><a class="dropdown-item" href="/profile2">Dosen</a></li>
                <li><a class="dropdown-item" href="/profile3">Admin</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">Tentang</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/kontak">Kontak</a>
            </li>

          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" v-if="logout === null">
                <a class="a" href="/login">Login</a>
            </button>
            <button class="btn btn-outline-danger" v-if="logout !== null" @click="out">
                <a class="a" href="/">Logout</a>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "App",
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  }, 
  computed: {
    logout() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
  methods: {
    out() {
      sessionStorage.clear();
    },
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
};
</script>
<style scoped>
a{
    text-decoration: none;
}
a.a {
  color:white
}
nav {
    background-color: black;
}
.onScroll {
    background-color:  #10b761;
}
</style>