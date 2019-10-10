<!-- =========================================================================================
    File Name: GoogleMapStreetView.vue
    Description: Google map Street view
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Street View" code-toggler>

        <p>Example of creating google map - street view</p>

        <div class="mt-5">
            <h6>Panorama at Pembroke College, Cambridge, facing North, looking slightly upwards (10 degrees)</h6>
            <p class="mt-3 mb-5">Point-of-view updates when you pan around</p>

            <gmap-street-view-panorama class="pano" :position="{lat: 52.201272, lng: 0.118720}"
                :pov="pov" :zoom="1" @pano_changed="updatePano" @pov_changed="updatePov" style="height: 400px; width: 100%">
            </gmap-street-view-panorama>
            <vs-list class="mt-5">
                <vs-list-item :title="` Heading: ${ pov && pov.heading }`"></vs-list-item>
                <vs-list-item :title="` Pitch: ${ pov && pov.pitch }`"></vs-list-item>
                <vs-list-item :title="` Pano ID: ${ pano }`"></vs-list-item>
            </vs-list>
            <div class="demo-alignment">
                <vs-button type="filled" @click="pov.heading = Math.random() * 360">Change Heading</vs-button>
                <vs-button type="filled" @click="pov.pitch = Math.random() * 180 - 90">Change Pitch</vs-button>
                <vs-button type="filled" @click="pov.pitch = Math.random() * 180 - 90, pov.heading = Math.random() * 360">Change Both</vs-button>
            </div>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;h6&gt;Panorama at Pembroke College, Cambridge, facing North, looking slightly upwards (10 degrees)&lt;/h6&gt;
  &lt;p class=&quot;mt-3 mb-5&quot;&gt;Point-of-view updates when you pan around&lt;/p&gt;

  &lt;gmap-street-view-panorama class=&quot;pano&quot; :position=&quot;{lat: 52.201272, lng: 0.118720}&quot;
    :pov=&quot;pov&quot; :zoom=&quot;1&quot; @pano_changed=&quot;updatePano&quot; @pov_changed=&quot;updatePov&quot; style=&quot;height: 400px; width: 100%&quot;&gt;
  &lt;/gmap-street-view-panorama&gt;

  &lt;vs-list class=&quot;mt-5&quot;&gt;
    &lt;vs-list-item :title=&quot;` Heading: ${ pov &amp;&amp; pov.heading }`&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item :title=&quot;` Pitch: ${ pov &amp;&amp; pov.pitch }`&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item :title=&quot;` Pano ID: ${ pano }`&quot;&gt;&lt;/vs-list-item&gt;
  &lt;/vs-list&gt;
  
  &lt;div class=&quot;demo-alignment&quot;&gt;
    &lt;vs-button type=&quot;filled&quot; @click=&quot;pov.heading = Math.random() * 360&quot;&gt;Change Heading&lt;/vs-button&gt;
    &lt;vs-button type=&quot;filled&quot; @click=&quot;pov.pitch = Math.random() * 180 - 90&quot;&gt;Change Pitch&lt;/vs-button&gt;
    &lt;vs-button type=&quot;filled&quot; @click=&quot;pov.pitch = Math.random() * 180 - 90, pov.heading = Math.random() * 360&quot;&gt;Change Both&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      pov: null,
      pano: null,
    }
  },
  methods: {
    updatePov(pov) {
      this.pov = pov;
    },
    updatePano(pano) {
      this.pano = pano;
    }
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            pov: null,
            pano: null,
        }
    },
    methods: {
        updatePov(pov) {
            this.pov = pov;
        },
        updatePano(pano) {
            this.pano = pano;
        }
    }
}
</script>