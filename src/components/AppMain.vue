<script>
//importazione axios
import axios from 'axios';
//importazione store
import { store } from '../store.js';
//importazione componente Project
import Project from './Project.vue';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		Project
	},
	methods:{
      apiProjects(){
        axios.get(this.store.urlApiAllProjects)
          .then(results =>{
            this.store.projects = results.data.data.projects.data;
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
		<div class="container">
			<div class="row">
				<div v-for="(elem,i) in store.projects" class="col-6 mb-4">
					<project :dataProject="elem"/>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang ="scss" scoped>
</style>
