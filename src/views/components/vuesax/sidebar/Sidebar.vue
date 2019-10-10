<!-- =========================================================================================
    File Name: Sidebar.vue
    Description: Sidebar - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="sidebar-demo">
        <sidebar-default></sidebar-default>
        <sidebar-parent></sidebar-parent>
        <sidebar-static></sidebar-static>
        <sidebar-group-collapsed></sidebar-group-collapsed>
        <sidebar-right></sidebar-right>
        <sidebar-reduce-expand></sidebar-reduce-expand>
        <sidebar-custom></sidebar-custom>
    </div>
</template>

<script>
import SidebarDefault from './SidebarDefault.vue'
import SidebarParent from './SidebarParent.vue'
import SidebarStatic from './SidebarStatic.vue'
import SidebarGroupCollapsed from './SidebarGroupCollapsed.vue'
import SidebarRight from './SidebarRight.vue'
import SidebarReduceExpand from './SidebarReduceExpand.vue'
import SidebarCustom from './SidebarCustom.vue'

export default{
    components: {
        SidebarDefault,
        SidebarParent,
        SidebarStatic,
        SidebarGroupCollapsed,
        SidebarRight,
        SidebarReduceExpand,
        SidebarCustom,
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/sidebar.scss";
</style>
