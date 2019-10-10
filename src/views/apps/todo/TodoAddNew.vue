<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="px-6 pb-2 pt-6">
    <vs-button @click="activePrompt = true" class="w-full">Add Task</vs-button>
    <vs-prompt
        vs-title="Add Task"
        vs-accept-text= "Add Task"
        vs-button-cancel = "border"
        @vs-cancel="clearFields"
        @vs-accept="submitTodo"
        @vs-close="clearFields"
        :vs-is-valid="validateForm"
        :vs-active.sync="activePrompt">
        <div>
            <form>
                <div class="vx-row">

                    <div class="vx-col ml-auto flex">
                        <feather-icon icon="InfoIcon" class="cursor-pointer" :svgClasses="[{'text-success stroke-current': isImportant}, 'w-5', 'h-5 mr-4']" @click.prevent="isImportant = !isImportant"></feather-icon>

                        <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current': isStarred}, 'w-5', 'h-5 mr-4']" @click.prevent="isStarred = !isStarred"></feather-icon>

                        <vs-dropdown class="cursor-pointer" vs-custom-content>

                            <feather-icon icon="TagIcon" svgClasses="h-5 w-5" @click.prevent></feather-icon>
                            <!-- <vs-button radius color="success" type="flat" iconPack="feather" icon="icon-tag" @click.prevent></vs-button> -->

                            <vs-dropdown-menu style="z-index: 200001">
                                    <vs-dropdown-item v-for="(tag, index) in todoTags" :key="index">
                                        <vs-checkbox @click.stop :vs-value="tag.value" v-model="tags">{{ tag.text }}</vs-checkbox>
                                    </vs-dropdown-item>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title" v-model="title" :color="validateForm ? 'success' : 'danger'" />
                        <vs-textarea rows="5" label="Add description" v-model="desc" />
                    </div>
                </div>

            </form>
        </div>
    </vs-prompt>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activePrompt: false,

            // task fields
            title: '',
            desc: '',
            isDone: false,
            isImportant: false,
            isStarred: false,
            tags: [],

            // task obj
            taskObj: {},
        }
    },
    computed: {
        todoArrayLength() {
            return this.$store.getters['todo/todoArrayLength'];
        },
        todoTags() {
            return this.$store.state.todo.todoTags;
        },
        validateForm() {
            return !this.errors.any() && this.title != '';
        }
    },
    methods: {
        addTodo() {
            // update todo in store and clear all fields in dialog
            const newId = this.todoArrayLength;
            this.taskObj.id = newId;
            this.taskObj.title = this.title;
            this.taskObj.desc = this.desc;
            this.taskObj.isDone = this.isDone;
            this.taskObj.isImportant = this.isImportant;
            this.taskObj.isStarred = this.isStarred;
            this.taskObj.tags = this.tags;
            this.taskObj.isTrashed = false;

            this.$store.dispatch('todo/addTodo', this.taskObj);
            this.clearFields();
        },
        clearFields() {
            // clear all fileds in todo
            this.title = "";
            this.desc = "";
            this.isDone = false;
            this.isImportant = false;
            this.isStarred = false;
            this.tags = [];
        },
        submitTodo() {
            this.$validator.validateAll().then(result => {
                if (result) this.addTodo();
            })
        }
    },
}
</script>
