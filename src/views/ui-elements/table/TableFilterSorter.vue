<!-- =========================================================================================
    File Name: tableFilterSorter.vue
    Description: Add filter and sorting functionality to table
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Filter and Sorter" code-toggler>

        <p>You can add the Filter functionality by adding the <code>search</code> property.</p>

        <p>if you need a property to be sorted you just have to add the <code>sort-key</code> property and the value you need to be sorted.</p>

        <vs-table search :data="users">

            <template slot="thead">
                <vs-th sort-key="email">Email</vs-th>
                <vs-th sort-key="username">Name</vs-th>
                <vs-th sort-key="id">Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>

        <template slot="codeContainer">
&lt;vs-table search :data=&quot;users&quot;&gt;

  &lt;template slot=&quot;thead&quot;&gt;
    &lt;vs-th sort-key=&quot;email&quot;&gt;Email&lt;/vs-th&gt;
    &lt;vs-th sort-key=&quot;username&quot;&gt;Name&lt;/vs-th&gt;
    &lt;vs-th sort-key=&quot;id&quot;&gt;Nro&lt;/vs-th&gt;
  &lt;/template&gt;

  &lt;template slot-scope=&quot;{data}&quot;&gt;
    &lt;vs-tr :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

      &lt;vs-td :data=&quot;data[indextr].email&quot;&gt;
        {{ "\{\{ data[indextr].email \}\}" }}
      &lt;/vs-td&gt;

      &lt;vs-td :data=&quot;data[indextr].username&quot;&gt;
        {{ "\{\{ data[indextr].username \}\}" }}
      &lt;/vs-td&gt;

      &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
        {{ "\{\{ data[indextr].id \}\}" }}
      &lt;/vs-td&gt;
    &lt;/vs-tr&gt;
  &lt;/template&gt;
&lt;/vs-table&gt;

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
