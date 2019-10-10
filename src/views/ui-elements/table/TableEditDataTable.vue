<!-- =========================================================================================
    File Name: TableEditDataTable.vue
    Description: You can also edit data with edit slot
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Edit Data Table" code-toggler>

        <p class="mb-4">You can edit the data with <strong>slot</strong> <code>edit</code>, so you have better flexibility and mastery of what you need</p>

        <vs-table :data="users">

            <template slot="thead">
                <vs-th>Email</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Nro1</vs-th>
                <vs-th>Nro2</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="tr.email">
                        {{tr.email}}
                        <template slot="edit">
                            <vs-input v-model="tr.email" class="inputx" placeholder="Email" />
                        </template>
                    </vs-td>

                    <vs-td :data="tr.username">
                        {{tr.username}}
                        <template slot="edit">
                            <vs-select label="Users" v-model="tr.username">
                                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in users" />
                            </vs-select>
                        </template>
                    </vs-td>

                    <vs-td :data="tr.id">
                        {{tr.id}}
                        <template slot="edit">
                            <vs-input-number v-model="tr.id" />
                        </template>
                    </vs-td>

                    <vs-td :data="tr.id">
                        {{tr.id}}
                        <template slot="edit">
                            <vs-slider :max="20" v-model="tr.id" />
                        </template>
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-table :data=&quot;users&quot;&gt;

    &lt;template slot=&quot;thead&quot;&gt;
      &lt;vs-th&gt;Email&lt;/vs-th&gt;
      &lt;vs-th&gt;Name&lt;/vs-th&gt;
      &lt;vs-th&gt;Nro1&lt;/vs-th&gt;
      &lt;vs-th&gt;Nro2&lt;/vs-th&gt;
    &lt;/template&gt;

    &lt;template slot-scope=&quot;{data}&quot;&gt;
      &lt;vs-tr :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

        &lt;vs-td :data=&quot;tr.email&quot;&gt;
          {{ "\{\{ tr.email \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-input v-model=&quot;tr.email&quot; class=&quot;inputx&quot; placeholder=&quot;Email&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.username&quot;&gt;
          {{ "\{\{ tr.username \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-select label=&quot;Users&quot; v-model=&quot;tr.username&quot;&gt;
              &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.name&quot; :text=&quot;item.name&quot; v-for=&quot;(item,index) in users&quot; /&gt;
            &lt;/vs-select&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.id&quot;&gt;
          {{ "\{\{ tr.id \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-input-number v-model=&quot;tr.id&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.id&quot;&gt;
          {{ "\{\{ tr.id \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-slider :max=&quot;20&quot; v-model=&quot;tr.id&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

      &lt;/vs-tr&gt;
    &lt;/template&gt;
  &lt;/vs-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      users: [......]
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
}
</script>
