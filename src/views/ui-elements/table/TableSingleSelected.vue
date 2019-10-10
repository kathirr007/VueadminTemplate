<!-- =========================================================================================
    File Name: TableSingleSelected.vue
    Description: Add functionality on selecting row
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Single Selected" code-toggler>
        
        <p>You can add the functionality of select a specific <strong>tr</strong> to do this add the property <code>data</code> with the value to be selected, it is usually the triterated</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-3">
            <p>if you need to execute a certain function to select the user, we have the property <code>@selected</code>, as the first parameter the data is returned</p>
        </vs-alert><br>

        <vs-table v-model="selected" @selected="handleSelected" :data="users">

            <template slot="thead">
                <vs-th>Email</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Website</vs-th>
                <vs-th>Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].website">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

        <br>

        <prism language="js" class="rounded-lg">            
{{ selected }}
        </prism>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;vs-table v-model=&quot;selected&quot; @selected=&quot;handleSelected&quot; :data=&quot;users&quot;&gt;

      &lt;template slot=&quot;thead&quot;&gt;
        &lt;vs-th&gt;Email&lt;/vs-th&gt;
        &lt;vs-th&gt;Name&lt;/vs-th&gt;
        &lt;vs-th&gt;Website&lt;/vs-th&gt;
        &lt;vs-th&gt;Nro&lt;/vs-th&gt;
      &lt;/template&gt;

      &lt;template slot-scope=&quot;{data}&quot;&gt;
        &lt;vs-tr :data=&quot;tr&quot; :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

          &lt;vs-td :data=&quot;data[indextr].email&quot;&gt;
            {{ "\{\{ data[indextr].email \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].username&quot;&gt;
            {{ "\{\{ data[indextr].username \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].website&quot;&gt;
            {{ "\{\{ data[indextr].website \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
            {{ "\{\{ data[indextr].id \}\}" }}
          &lt;/vs-td&gt;

        &lt;/vs-tr&gt;
      &lt;/template&gt;
    &lt;/vs-table&gt;

    &lt;br&gt;

    &lt;pre&gt;{{ "\{\{ selected \}\}" }}&lt;/pre&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      selected: [],
      users: [.....],
    }
  },
  methods: {
    handleSelected(tr) {
      this.$vs.notify({
        title: `Selected ${tr.username}`,
        text: `Email: ${tr.email}`
      })
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            selected: [],
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                },
            ]
        }
    },
    components: {
        Prism
    },
    methods: {
        handleSelected(tr) {
            this.$vs.notify({
                title: `Selected ${tr.username}`,
                text: `Email: ${tr.email}`
            })
        }
    }
}
</script>