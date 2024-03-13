<script>
//importazione app
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
	data() {
		return{

		};
	},
	components:{
		AppHeader,
		AppMain,
		AppFooter
	},
	methods:{

	}
}

</script>

<template>
	<h1>My template Vite Vue Sass</h1>
	<div class="text-center">
		<AppHeader/>
		<AppMain/>
		<AppFooter/>
	</div>
</template>

<style lang="scss">
@use"assets/scss/main.scss" as *;

//importazione bootstrap
@import "bootstrap/scss/bootstrap";
</style>
