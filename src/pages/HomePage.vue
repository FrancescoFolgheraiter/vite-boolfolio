<script>
//importazione axios
import axios from 'axios';
//importazione store
import { store } from '../store.js';
//importazione componente Project
import Project from '../components/Project.vue';


export default{
	data() {
		return{
			store,
			currentPage: 1,
			lastPage: 1
		};
	},
	components:{
		Project
	},
	methods:{ 
      	apiProjects(page){
        axios.get(this.store.urlApiAllProjects,{
			params:{
				page:page
			}
		})
        .then(results =>{
            this.store.projects = results.data.data.projects.data;
			this.currentPage = results.data.data.projects.current_page;
			this.lastPage = results.data.data.projects.last_page;
			console.log(this.lastPage)
		})
		.catch(error => {
            console.error('Errore: ', error);
		});
      },
	  nextPage(){
		if(this.currentPage < this.lastPage){
			this.apiProjects(this.currentPage + 1)
		}
	  },
	  prevPage(){
		if(this.currentPage > 1){
			this.apiProjects(this.currentPage - 1)
		}
	  }
    },
    mounted(){
      this.apiProjects(this.currentPage);
    }
}

</script>

<template>
	<main>
		<div class="container">
			<div class="row m-5">
				<div v-for="(elem,i) in store.projects" class="col-6 mb-4">
					<project :dataProject="elem"/>
				</div>
			</div>
			<div class="d-flex justify-content-center ">
				<Paginate/>
			</div>
		</div>

		<div class="button-box d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li @click="prevPage()" class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                    <li @click="apiProjects(elem)" v-for="(elem, i) in lastPage" class="page-item" :key="i"><a class="page-link" href="#">{{ elem }}</a></li>
                    <li  @click="nextPage()" class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
            </nav>
        </div>
	</main>
</template>

<style lang ="scss" scoped>
</style>
