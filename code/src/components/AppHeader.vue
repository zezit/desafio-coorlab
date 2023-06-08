<template>
    <header class="title">
        <b-navbar toggleable="lg" variant="info">
            <b-navbar-brand class="ml-2">
                <img src="../assets/logo.png" alt="logo" class="nav-logo d-inline-block align-top">
                <b>{{ appName }}</b>
            </b-navbar-brand>
        </b-navbar>
    </header>
</template>
  
<script>
import { BNavbar, BNavbarBrand } from 'bootstrap-vue'

export default {
    components: {
        BNavbar,
        BNavbarBrand
    },
    props: {
        appName: {
            type: String,
            required: true,
        },
    },
}
</script>
  
<style scoped>
.title .navbar {
    background-color: var(--main-backgroung-color) !important;
}

.title .navbar-brand {
    margin-left: 20px;
}

.title .nav-logo {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.title {
    color: var(--main-text-color);
}
</style>
  