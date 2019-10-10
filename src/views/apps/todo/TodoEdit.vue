<!-- =========================================================================================
    File Name: TodoEdit.vue
    Description: Edit todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vs-prompt
        vs-title="Edit Task"
        vs-accept-text= "Submit"
        vs-cancel-text = "Remove"
        vs-button-cancel = "border"
        @vs-cancel="removeTodo"
        @vs-accept="submitTodo"
        @vs-close="init"
        :vs-is-valid="validateForm"
        :vs-active.sync="activePrompt">
        <div>
            <form>
                <div class="vx-row">
                    <div class="vx-col w-1/6 self-center">
                        <vs-checkbox v-model="isDoneLocal" class="w-8"></vs-checkbox>
                    </div>

                    <div class="vx-col ml-auto flex">
                        <feather-icon icon="InfoIcon" class="cursor-pointer" :svgClasses="[{'text-success stroke-current': isImportantLocal}, 'w-5', 'h-5 mr-4']" @click.prevent="toggleIsImportant"></feather-icon>

                        <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current': isStarredLocal}, 'w-5', 'h-5 mr-4']" @click.prevent="toggleIsStarred"></feather-icon>

                        <vs-dropdown class="cursor-pointer" vs-custom-content>

                            <feather-icon icon="TagIcon" svgClasses="h-5 w-5"></feather-icon>

                            <vs-dropdown-menu style="z-index: 200001">
                                    <vs-dropdown-item v-for="(tag, index) in todoTags" :key="index">
                                        <vs-checkbox @click.stop :vs-value="tag.value" v-model="tagsLocal">{{ tag.text }}</vs-checkbox>
                                    </vs-dropdown-item>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title" v-model="titleLocal" />
                        <vs-textarea rows="5" label="Add description" v-model="descLocal" />
                    </div>
                </div>

            </form>
        </div>
    </vs-prompt>
</template>

<script>
export default {
    props: {
        displayPrompt: {
            type: Boolean,
            required: true,
        },
        todoItemId: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            titleLocal: this.$store.state.todo.todoArray[this.todoItemId].title,
            descLocal: this.$store.state.todo.todoArray[this.todoItemId].desc,
            isDoneLocal: this.$store.state.todo.todoArray[this.todoItemId].isDone,
            isImportantLocal: this.$store.state.todo.todoArray[this.todoItemId].isImportant,
            isStarredLocal: this.$store.state.todo.todoArray[this.todoItemId].isStarred,
            tagsLocal: this.$store.state.todo.todoArray[this.todoItemId].tags,
        }
    },
    computed: {
        activePrompt: {
            get() {
                return this.displayPrompt;
            },
            set(value) {
                this.$emit('hideDisplayPrompt', value);
            }
        },
        todoTags() {
            return this.$store.state.todo.todoTags;
        },
        validateForm() {
            return !this.errors.any() && this.titleLocal != '';
        },
        isTrashed: {
            get() {
                return this.$store.state.todo.todoArray[this.todoItemId].isTrashed;
            },
            set(value) {
                this.$store.dispatch('todo/moveToTrash', { id: this.todoItemId, value: value})
            }
        },
    },
    methods: {
        toggleIsImportant() {
            this.isImportantLocal = !this.isImportantLocal;
        },
        toggleIsStarred() {
            this.isStarredLocal = !this.isStarredLocal;
        },
        removeTodo() {
            this.isTrashed = true;
        },
        init() {
            this.titleLocal = this.$store.state.todo.todoArray[this.todoItemId].title;
            this.descLocal = this.$store.state.todo.todoArray[this.todoItemId].desc;
            this.isDoneLocal = this.$store.state.todo.todoArray[this.todoItemId].isDone;
            this.isImportantLocal = this.$store.state.todo.todoArray[this.todoItemId].isImportant;
            this.isStarredLocal = this.$store.state.todo.todoArray[this.todoItemId].isStarred;
            this.tagsLocal = this.$store.state.todo.todoArray[this.todoItemId].tags;
        },
        submitTodo() {
            this.$store.dispatch('todo/setTodoTitle', { id: this.todoItemId, title: this.titleLocal})
            this.$store.dispatch('todo/setTodoDesc', { id: this.todoItemId, desc: this.descLocal})
            this.$store.dispatch('todo/toggleIsImportant', { id: this.todoItemId, value: this.isImportantLocal})
            this.$store.dispatch('todo/toggleIsStarred', { id: this.todoItemId, value: this.isStarredLocal})
            this.$store.dispatch('todo/updateTags', { id: this.todoItemId, newTags: this.tagsLocal})
            this.$store.dispatch('todo/toggleIsDone', { id: this.todoItemId, value: this.isDoneLocal})
        }
    },
}
</script>
