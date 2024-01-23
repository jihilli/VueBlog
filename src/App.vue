<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <h5>React 개발자의 블로그</h5>
            <p>- Vue로 만들었음 -</p>
        </div>
        <ListVue :data="블로그글[i]" v-for="(a, i) in 블로그글" :key="i" />
    </div>
</template>

<script>
import data from "./assets/data.js";
import ListVue from "./components/ListVue.vue";

export default {
    name: "App",
    data() {
        return { 블로그글: data };
    },
    components: {
        ListVue: ListVue,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
