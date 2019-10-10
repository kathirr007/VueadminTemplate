<!-- =========================================================================================
    File Name: GoogleMapBasic.vue
    Description: Google map Basic
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Basic" code-toggler>

        <p>Creating basic google map</p>

        <div class="mt-5">
            <GmapMap
                :center="center"
                :zoom="7"
                map-type-id="terrain"
                style="width: 100%; height: 400px">
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
            </GmapMap>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;GmapMap
    :center=&quot;center&quot;
    :zoom=&quot;7&quot;
    map-type-id=&quot;terrain&quot;
    style=&quot;width: 100%; height: 400px&quot;
    @click=&quot;mapClicked&quot;
  &gt;
    &lt;GmapMarker
      :key=&quot;index&quot;
      v-for=&quot;(m, index) in markers&quot;
      :position=&quot;m.position&quot;
      :clickable=&quot;true&quot;
      :draggable=&quot;true&quot;
      @click=&quot;center=m.position&quot;
    /&gt;
  &lt;/GmapMap&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } },
      ]
    }
  },
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 10.0, lng: 10.0 },
            markers: [
                { position: { lat: 10.0, lng: 10.0 } },
                { position: { lat: 11.0, lng: 11.0 } },
            ]
        }
    },
}
</script>