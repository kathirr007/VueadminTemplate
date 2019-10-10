<!-- =========================================================================================
    File Name: DragAndDrop.vue
    Description: Drag and Drop (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-drag-and-drop-demo">

        <p class="mb-4"><a href="https://github.com/SortableJS/Vue.Draggable" target="_blank" rel="nofollow">Vue.Draggable</a> - Vue component allowing drag-and-drop and synchronization with view model array. Based on and offering all features of Sortable.js</p>
        
        <drag-and-drop-simple></drag-and-drop-simple>
        <drag-and-drop-multiple-lists></drag-and-drop-multiple-lists>
        <drag-and-drop-clone-list></drag-and-drop-clone-list>
        <drag-and-drop-animation></drag-and-drop-animation>
    </div>
</template>

<script>
import DragAndDropSimple from "./DragAndDropSimple.vue"
import DragAndDropMultipleLists from "./DragAndDropMultipleLists.vue"
import DragAndDropCloneList from "./DragAndDropCloneList.vue"
import DragAndDropAnimation from "./DragAndDropAnimation.vue"

export default {
    components: {
        DragAndDropSimple,
        DragAndDropMultipleLists,
        DragAndDropCloneList,
        DragAndDropAnimation,
    }
}
</script>