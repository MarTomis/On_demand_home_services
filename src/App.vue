<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-md navbar-light">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/tools.svg"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
          padding="10px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <form class="navbar-form form-inline ml-auto" id="search-form">
          <input
            id="search"
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
        <ul id="navbar" class="navbar-nav ml-auto">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <router-link to="/about" class="nav-link">My profile</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div id="container" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import firebase from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("+++", user.email);
    store.currentUser = user.email;
  } else {
    console.log("+++ No user");
    store.currentUser = null;

    if (router.currentRoute.name !== "login") {
      router.push({ name: "login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    async logout() {
      firebase.auth().signOut();
      await this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss">
#app {
  background-image: url("./assets/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#search-form {
  margin-right: 5px;
  color: #ffffff;
  padding-top: 5px;
}

#search {
  font-weight: bold;
  color:#ffffff;
  background-color: #1e7975;
  border-radius: 90px;

  a {
    color: #ffffff;
  }
}

#nav {
  padding: 30px;
  background-color: #3aafa9;

  .navbar-brand{
    padding: 5px;
  }

  .navbar-toggler{
    padding-top:5px;
  }

  a {
    font-weight: bold;
    background-color: #1e7975;
    border-radius: 90px;
    margin-right: 5px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
