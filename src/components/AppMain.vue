<script>
//importazione store
import { store } from '../store.js';


export default{
	data() {
		return{
			store,
		};
	},
	components:{

	},
	methods:{ 
    },
    mounted(){

    }
}

</script>

<template>
	<main>
		<router-view></router-view>
	</main>
</template>

<style lang ="scss" scoped>
</style>
