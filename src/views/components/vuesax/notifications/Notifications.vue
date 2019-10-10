<!-- =========================================================================================
    File Name: Notifications.vue
    Description: Notifications - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="notifications-demo">

        <p class="mb-4">Nice, simple, and interactive notifications</p>

        <notifications-default></notifications-default>
        <notifications-position></notifications-position>
        <notifications-icon></notifications-icon>
        <notifications-fixed-and-function-click></notifications-fixed-and-function-click>
        <notifications-time></notifications-time>
    </div>
</template>

<script>
import NotificationsDefault from './NotificationsDefault.vue'
import NotificationsPosition from './NotificationsPosition.vue'
import NotificationsIcon from './NotificationsIcon.vue'
import NotificationsFixedAndFunctionClick from './NotificationsFixedAndFunctionClick.vue'
import NotificationsTime from './NotificationsTime.vue'

export default{
    components: {
        NotificationsDefault,
        NotificationsPosition,
        NotificationsIcon,
        NotificationsFixedAndFunctionClick,
        NotificationsTime,
    }   
}
</script>