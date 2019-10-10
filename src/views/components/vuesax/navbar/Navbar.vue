<!-- =========================================================================================
    File Name: Navbar.vue
    Description: Navbar - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="navbar-demo">
        <navbar-default></navbar-default>
        <navbar-input></navbar-input>
        <navbar-type></navbar-type>
        <navbar-color></navbar-color>
        <navbar-collapse></navbar-collapse>
    </div>
</template>

<script>
import NavbarDefault from './NavbarDefault.vue'
import NavbarInput from './NavbarInput.vue'
import NavbarType from './NavbarType.vue'
import NavbarColor from './NavbarColor.vue'
import NavbarCollapse from './NavbarCollapse.vue'

export default{
    components: {
        NavbarDefault,
        NavbarInput,
        NavbarType,
        NavbarCollapse,
        NavbarColor,
    }   
}
</script>