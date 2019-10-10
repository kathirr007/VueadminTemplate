<!-- =========================================================================================
    File Name: FormWizardIconTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Form wizard with icon tabs" code-toggler>

        <p>Add feather icon class to <code>icon</code> prop in <code>tab-content</code> component to get desired icon in tab.</p>

        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                <tab-content title="Step 1" class="mb-5" icon="feather icon-home">

                    <!-- tab 1 content -->
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="First Name" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input label="Last Name"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-input type="email" label="Email"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-select v-model="city" class="w-full select-large" label="City">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 2 content -->
                <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />
                            <vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="Step 3" class="mb-5" icon="feather icon-image">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <vs-select v-model="status" class="w-full select-large" label="Event Status">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />
                            </vs-select>
                        </div>
                        <div class="vx-col md:w-1/2 w-full md:mt-8">
                            <div class="demo-alignment">
                                <span>Requirements:</span>
                                <div class="flex">
                                  <vs-checkbox>Staffing</vs-checkbox>
                                  <vs-checkbox>Catering</vs-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>
            </form-wizard>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form-wizard color=&quot;rgba(var(--vs-primary), 1)&quot; :title=&quot;null&quot; :subtitle=&quot;null&quot; finishButtonText=&quot;Submit&quot; @on-complete=&quot;formSubmitted&quot;&gt;
      &lt;tab-content title=&quot;Step 1&quot; class=&quot;mb-5&quot; icon=&quot;feather icon-home&quot;&gt;

          &lt;!-- tab 1 content --&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;First Name&quot; v-model=&quot;firstName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;Last Name&quot;  v-model=&quot;lastName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input type=&quot;email&quot; label=&quot;Email&quot;  v-model=&quot;email&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large&quot; label=&quot;City&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 2 content --&gt;
      &lt;tab-content title=&quot;Step 2&quot; class=&quot;mb-5&quot; icon=&quot;feather icon-briefcase&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Proposal Title&quot; v-model=&quot;proposalTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
                  &lt;vs-input label=&quot;Job Title&quot;  v-model=&quot;jobTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-textarea v-model=&quot;textarea&quot; label=&quot;Short discription&quot; class=&quot;mb-0 md:mt-10 mt-6&quot; rows=&quot;3&quot; /&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 3 content --&gt;
      &lt;tab-content title=&quot;Step 3&quot; class=&quot;mb-5&quot; icon=&quot;feather icon-image&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Event Name&quot; v-model=&quot;eventName&quot; class=&quot;w-full mt-5&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large mt-5&quot; label=&quot;Event Location&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;status&quot; class=&quot;w-full select-large&quot; label=&quot;Event Status&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in statusOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full md:mt-8&quot;&gt;
                  &lt;div class=&quot;demo-alignment&quot;&gt;
                      &lt;span&gt;Requirements:&lt;/span&gt;
                      &lt;div class=&quot;flex&quot;&gt;
                        &lt;vs-checkbox&gt;Staffing&lt;/vs-checkbox&gt;
                        &lt;vs-checkbox&gt;Catering&lt;/vs-checkbox&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;
  &lt;/form-wizard&gt;
&lt;/template&gt;

&lt;script&gt;
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data() {
    return {
      firstName: &quot;&quot;,
      /// other data....
    }
  },
  methods: {
    formSubmitted() {
      alert(&quot;Form submitted!&quot;);
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            city: "new-york",
            proposalTitle: "",
            jobTitle: "",
            textarea: "",
            eventName: "",
            eventLocation: "san-francisco",
            status: "plannning",
            cityOptions: [
                {text: "New York", value:"new-york"},
                {text: "Chicago", value:"chicago"},
                {text: "San Francisco", value:"san-francisco"},
                {text: "Boston", value:"boston"},
            ],
            statusOptions: [
                {text: "Plannning", value:"plannning"},
                {text: "In Progress", value:"in progress"},
                {text: "Finished", value:"finished"},
            ],
            LocationOptions: [
                {text: "New York", value:"new-york"},
                {text: "Chicago", value:"chicago"},
                {text: "San Francisco", value:"san-francisco"},
                {text: "Boston", value:"boston"},
            ],
        }
    },
    methods: {
        formSubmitted() {
            alert("Form submitted!");
        }
    },
    components: {
        FormWizard,
        TabContent
    }
}
</script>
