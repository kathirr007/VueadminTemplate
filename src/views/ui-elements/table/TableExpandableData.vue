<!-- =========================================================================================
    File Name: TableExpandableData.vue
    Description: Create expandable rows which have custom data
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="ExpandableData" code-toggler>

        <p>You can add the functionality of expanding a <strong>tr</strong> to visualize more data to make a structure of data or more complex functionalities</p><br>

        <vs-table :data="users">

            <template slot="thead">
                <vs-th>Email</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Website</vs-th>
                <vs-th>Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.email">
                        {{tr.email}}
                    </vs-td>
                    <vs-td :data="tr.username">
                        {{tr.name}}
                    </vs-td>
                    <vs-td :data="tr.website">
                        {{tr.website}}
                    </vs-td>
                    <vs-td :data="tr.id">
                        {{tr.id}}
                    </vs-td>

                    <template class="expand-user" slot="expand">
                        <div class="con-expand-users w-full">
                            <div class="con-btns-user flex items-center justify-between">
                                <div class="con-userx flex items-center justify-start">
                                    <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${tr.id}.jpg`" />
                                    <span>{{ tr.name }}</span>
                                </div>
                                <div class="flex">
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
                                </div>
                            </div>
                            <vs-list>
                                <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.email"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.website"></vs-list-item>
                            </vs-list>
                        </div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-table :data=&quot;users&quot;&gt;

    &lt;template slot=&quot;thead&quot;&gt;
      &lt;vs-th&gt;Email&lt;/vs-th&gt;
      &lt;vs-th&gt;Name&lt;/vs-th&gt;
      &lt;vs-th&gt;Website&lt;/vs-th&gt;
      &lt;vs-th&gt;Nro&lt;/vs-th&gt;
    &lt;/template&gt;

    &lt;template slot-scope=&quot;{data}&quot;&gt;
      &lt;vs-tr :data=&quot;tr&quot; :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;
        &lt;vs-td :data=&quot;tr.email&quot;&gt;
          {{ &quot;\{\{ tr.email \}\}&quot; }}
        &lt;/vs-td&gt;
        &lt;vs-td :data=&quot;tr.username&quot;&gt;
          {{ &quot;\{\{ tr.name \}\}&quot; }}
        &lt;/vs-td&gt;
        &lt;vs-td :data=&quot;tr.website&quot;&gt;
          {{ &quot;\{\{ tr.website \}\}&quot; }}
        &lt;/vs-td&gt;
        &lt;vs-td :data=&quot;tr.id&quot;&gt;
          {{ &quot;\{\{ tr.id \}\}&quot; }}
        &lt;/vs-td&gt;

          &lt;template class=&quot;expand-user&quot; slot=&quot;expand&quot;&gt;
            &lt;div class=&quot;con-expand-users w-full&quot;&gt;
              &lt;div class=&quot;con-btns-user flex items-center justify-between&quot;&gt;
                &lt;div class=&quot;con-userx flex items-center justify-start&quot;&gt;
                  &lt;vs-avatar :badge=&quot;tr.id&quot; size=&quot;45px&quot; :src=&quot;`https://randomuser.me/api/portraits/women/${indextr}.jpg`&quot; /&gt;
                  &lt;span&gt;{{ "\{\{ tr.name \}\}" }}&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;flex&quot;&gt;
                  &lt;vs-button type=&quot;border&quot; size=&quot;small&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-phone&quot; class=&quot;mr-2&quot;&gt;&lt;/vs-button&gt;
                  &lt;vs-button type=&quot;border&quot; size=&quot;small&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-send&quot; color=&quot;success&quot; class=&quot;mr-2&quot;&gt;&lt;/vs-button&gt;
                  &lt;vs-button type=&quot;border&quot; size=&quot;small&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-trash&quot; color=&quot;danger&quot;&gt;&lt;/vs-button&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;vs-list&gt;
                &lt;vs-list-item icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; :title=&quot;tr.email&quot;&gt;&lt;/vs-list-item&gt;
                &lt;vs-list-item icon-pack=&quot;feather&quot; icon=&quot;icon-globe&quot; :title=&quot;tr.website&quot;&gt;&lt;/vs-list-item&gt;
              &lt;/vs-list&gt;
            &lt;/div&gt;
          &lt;/template&gt;
      &lt;/vs-tr&gt;
    &lt;/template&gt;
  &lt;/vs-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      users: [.....]
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
