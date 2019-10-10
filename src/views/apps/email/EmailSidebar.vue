<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Inbox)
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="email__email-sidebar h-full">
        <div class="m-6 clearfix">
            <vs-button size="large" class="bg-primary-gradient w-full" icon-pack="feather" icon="icon-edit" @click="activePrompt = true">Compose</vs-button>
        </div>

        <!-- compose email -->
        <vs-prompt
            class="email-compose"
            vs-title="New Message"
            vs-accept-text= "Send"
            @vs-cancel="clearFields"
            @vs-accept="sendMail"
            @vs-close="clearFields"
            :vs-is-valid="validateForm"
            :vs-active.sync="activePrompt">
                <VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
                    <form @submit.prevent>
                        <vs-input v-validate="'required|email'" name="mailTo" label-placeholder="To" v-model="mailTo" class="w-full mb-6" :danger="!validateForm && mailTo != ''" val-icon-danger="clear" :success="validateForm" val-icon-success="done" :color="validateForm ? 'success' : 'danger'" />
                        <vs-input name="mailSubject" label-placeholder="Subject" v-model="mailSubject" class="w-full mb-6" />
                        <vs-input name="mailCC" label-placeholder="CC" v-model="mailCC" class="w-full mb-6" />
                        <vs-input name="mailBCC" label-placeholder="BCC" v-model="mailBCC" class="w-full mb-6" />
                        <quill-editor v-model="mailMessage" :options="editorOption"></quill-editor>
                        <vs-upload multiple text="Attachments" :show-upload-button="false" />
                    </form>
                </VuePerfectScrollbar>
        </vs-prompt>

        <VuePerfectScrollbar class="email-scroll-area" :settings="settings">
            <div class="px-6 pb-2 flex flex-col">

                <div class="flex justify-between items-center cursor-pointer" :class="{'text-primary': mailFilter == 'inbox'}" @click="updateFilter('inbox')">
                    <div class="flex items-center mb-2">
                        <feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'inbox'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Inbox</span>
                    </div>
                    <vs-chip color="primary" v-if="unreadMails('inboxed') > 0">{{ unreadMails('inboxed') }}</vs-chip>
                </div>
                <div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'sent'}" @click="updateFilter('sent')">
                    <feather-icon icon="SendIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'sent'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Sent</span>
                </div>
                <div class="flex justify-between items-center mt-4 cursor-pointer" :class="{'text-primary': mailFilter == 'draft'}" @click="updateFilter('draft')">
                    <div class="flex items-center mb-2">
                        <feather-icon icon="Edit2Icon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'draft'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Draft</span>
                    </div>
                    <vs-chip color="warning" v-if="draftMails > 0">{{ draftMails }}</vs-chip>
                </div>
                <div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'starred'}" @click="updateFilter('starred')">
                    <feather-icon icon="StarIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'starred'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Starred</span>
                </div>
                <div class="flex items-center justify-between items-center mt-4 cursor-pointer" :class="{'text-primary': mailFilter == 'spam'}" @click="updateFilter('spam')">
                    <div class="flex items-center mb-2">
                        <feather-icon icon="InfoIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'spam'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Spam</span>
                    </div>
                    <vs-chip color="danger" v-if="unreadMails('spam') > 0">{{ unreadMails('spam') }}</vs-chip>
                </div>
                <div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'trash'}" @click="updateFilter('trash')">
                    <feather-icon icon="TrashIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Trash</span>
                </div>
            </div>
            <vs-divider></vs-divider>
            <div class="email__labels px-6 py-4">
                <h5 class="mb-8">Labels</h5>
                <div class="email__lables-list">
                    <div class="email__label flex items-center mb-4 cursor-pointer" v-for="(tag, index) in emailTags" :key="index" @click="updateFilter(tag.value)">
                        <div class="ml-1 h-4 w-4 rounded-full mr-4" :class="'bg-' + tag.color"></div>
                        <span class="text-lg" :class="{'text-primary': mailFilter == tag.value}">{{ tag.text }}</span>
                    </div>
                </div>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
    props: {
        emailTags: {
            type: Array,
            required: true,
        },
        mailFilter: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            activePrompt: false,
            mailTo: '',
            mailSubject: '',
            mailCC: '',
            mailBCC: '',
            mailMessage: '',
            editorOption: {
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'font': [] }],],
                },
                placeholder: 'Message'
            },
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.mailTo != '';
        },
        unreadMails() {
            return (mailType) => this.$store.getters['email/unreadMails'](mailType);
        },
        draftMails() {
            return this.$store.getters['email/NumdraftMails'];
        },
    },
    methods: {
        updateFilter(filterName) {
            this.$store.dispatch('email/updateMailFilter', filterName);
            this.$emit('closeSidebar', false);
        },
        // compose mail methods
        clearFields() {
            this.mailTo = '';
            this.mailSubject = '';
            this.mailCC = '';
            this.mailBCC = '';
            this.mailMessage = '';
        },
        sendMail() {},
    },
    components: {
        quillEditor,
        VuePerfectScrollbar
    }
}
</script>
