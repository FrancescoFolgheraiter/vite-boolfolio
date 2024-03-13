<script>
//importazione axios
import axios from 'axios';
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			text:"Main",
			store
		};
	},
	components:{
		
	},
	methods:{
      apiProjects(){
        axios.get(this.store.urlApiAllProjects)
          .then(results =>{
            this.store.projects = results.data;
			console.log(this.store.projects)
          })
      }
    },
    mounted(){
      this.apiProjects();
    }
}

</script>

<template>
	<main>
		{{ text }}
	</main>
</template>

<style lang ="scss" scoped>
</style>
