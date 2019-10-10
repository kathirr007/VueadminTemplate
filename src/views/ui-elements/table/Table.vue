<!-- =========================================================================================
    File Name: Table.vue
    Description: Table demo - Imports all table demos
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="table-demo">
        <table-default></table-default>
        <table-striped></table-striped>
        <table-state></table-state>
        <table-pagination></table-pagination>
        <table-single-selected></table-single-selected>
        <table-multiple-selected></table-multiple-selected>
        <table-expandable-data></table-expandable-data>
        <table-edit-data-table></table-edit-data-table>
        <table-filter-sorter></table-filter-sorter>
        <table-miscellaneous></table-miscellaneous>
        <table-ssr></table-ssr>
    </div>
</template>

<script>
import TableDefault from './TableDefault.vue'
import TableStriped from './TableStriped.vue'
import TableState from './TableState.vue'
import TablePagination from './TablePagination.vue'
import TableSingleSelected from './TableSingleSelected.vue'
import TableMultipleSelected from './TableMultipleSelected.vue'
import TableExpandableData from './TableExpandableData.vue'
import TableEditDataTable from './TableEditDataTable.vue'
import TableFilterSorter from './TableFilterSorter.vue'
import TableMiscellaneous from './TableMiscellaneous.vue'
import TableSsr from './TableSSR.vue'

export default{
    components: {
        TableDefault,
        TableStriped,
        TableState,
        TablePagination,
        TableSingleSelected,
        TableMultipleSelected,
        TableExpandableData,
        TableEditDataTable,
        TableFilterSorter,
        TableMiscellaneous,
        TableSsr,
    }
}
</script>
