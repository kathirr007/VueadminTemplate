<template>
	<div class="vx-row">

		<!-- HORIZONTAL LAYOUT -->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Horizontal Form" code-toggler>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>First Name</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" v-model="input1" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Email</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" type="email" v-model="input2" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Mobile</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" v-model="input3" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Password</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" type="password" v-model="input4" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Horizontal Form" code-toggler>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>First Name</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border v-model="input5" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Email</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border v-model="input6" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Mobile</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border v-model="input7" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Password</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border v-model="input8" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-checkbox class="inline-flex" v-model="check2">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input5 = input6 = input7 = input8 = ''; check2 = false;">Reset</vs-button>
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;First Name&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border v-model=&quot;input5&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Email&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border v-model=&quot;input6&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border v-model=&quot;input7&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Password&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border v-model=&quot;input8&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check2&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input5 = input6 = input7 = input8 = ''; check2 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- VERTICAL LAYOUT -->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Vertical Form" code-toggler>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" label="First Name" v-model="input9" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" type="email" label="Email" v-model="input10" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" label="Mobile" v-model="input11" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" type="password" label="Password" v-model="input12" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-checkbox class="inline-flex" v-model="check3">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input9 = input10 = input11 = input12 = ''; check3 = false;">Reset</vs-button>
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label=&quot;First Name&quot; v-model=&quot;input9&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; label=&quot;Email&quot; v-model=&quot;input10&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label=&quot;Mobile&quot; v-model=&quot;input11&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; label=&quot;Password&quot; v-model=&quot;input12&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check3&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input9 = input10 = input11 = input12 = ''; check3 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- VERTICAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Vertical Form" code-toggler>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="First Name" v-model="input13" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label="Email" v-model="input14" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label="Mobile" v-model="input15" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Password" v-model="input16" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-checkbox class="inline-flex" v-model="check4">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input13 = input14 = input15 = input16 = ''; check4 = false;">Cancle</vs-button>
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border label=&quot;First Name&quot; v-model=&quot;input13&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border label=&quot;Email&quot; v-model=&quot;input14&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border label=&quot;Mobile&quot; v-model=&quot;input15&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border label=&quot;Password&quot; v-model=&quot;input16&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check4&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input13 = input14 = input15 = input16 = ''; check4 = false;&quot;&gt;Cancle&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- FORM WITH LABEL PLACEHOLDER -->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Form With Label Placeholder" code-toggler>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input class="w-full" label-placeholder="First Name" v-model="input17" />
					</div>
				</div>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input class="w-full" type="email" label-placeholder="Email" v-model="input18" />
					</div>
				</div>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input class="w-full" label-placeholder="Mobile" v-model="input19" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input class="w-full" type="password" label-placeholder="Password" v-model="input20" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-checkbox class="inline-flex" v-model="check5">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input17 = input18 = input19 = input20 = ''; check5 = false;">Cancle</vs-button>
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;First Name&quot; v-model=&quot;input17&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; label-placeholder=&quot;Email&quot; v-model=&quot;input18&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Mobile&quot; v-model=&quot;input19&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; label-placeholder=&quot;Password&quot; v-model=&quot;input20&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check5&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input17 = input18 = input19 = input20 = ''; check5 = false;&quot;&gt;Cancle&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- FORM WITH LABEL PLACEHOLDER WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Form With Label Placeholder" code-toggler>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="input21" />
					</div>
				</div>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="input22" />
					</div>
				</div>
				<div class="vx-row mb-2">
					<div class="vx-col w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile" v-model="input23" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" v-model="input24" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col w-full">
						<vs-checkbox class="inline-flex" v-model="check6">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input21 = input22 = input23 = input24 = ''; check6 = false;">Reset</vs-button>
					</div>
				</div>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border label-placeholder=&quot;First Name&quot; v-model=&quot;input21&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border label-placeholder=&quot;Email&quot; v-model=&quot;input22&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-2&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border label-placeholder=&quot;Mobile&quot; v-model=&quot;input23&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border label-placeholder=&quot;Password&quot; v-model=&quot;input24&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check6&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input21 = input22 = input23 = input24 = ''; check6 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vx-card title="Multiple Columns" code-toggler>
				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="First Name" v-model="input25" />
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Last Name" v-model="input26" />
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="City" v-model="input27" />
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Country" v-model="input28" />
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Company" v-model="input29" />
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-6">
						<vs-input type="email" class="w-full" label-placeholder="Email" v-model="input30" />
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full mb-6">
						<vs-checkbox class="inline-flex" v-model="check7">Remember Me</vs-checkbox>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Submit</vs-button>
						<vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button>
					</div>
				</div>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;First Name&quot; v-model=&quot;input25&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Last Name&quot; v-model=&quot;input26&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;City&quot; v-model=&quot;input27&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Country&quot; v-model=&quot;input28&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Company&quot; v-model=&quot;input29&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-6&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; label-placeholder=&quot;Email&quot; v-model=&quot;input30&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full mb-6&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check7&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>
	</div>
</template>

<script>
export default{
	data() {
		return {
			check1: '',
			check2: '',
			check3: '',
			check4: '',
			check5: '',
			check6: '',
			check7: '',
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			input10: '',
			input11: '',
			input12: '',
			input13: '',
			input14: '',
			input15: '',
			input16: '',
			input17: '',
			input18: '',
			input19: '',
			input20: '',
			input21: '',
			input22: '',
			input23: '',
			input24: '',
			input25: '',
			input26: '',
			input27: '',
			input28: '',
			input29: '',
			input30: '',
		}
	}
}
</script>
