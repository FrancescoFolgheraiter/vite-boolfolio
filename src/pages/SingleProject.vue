<script>
//importazione axios
import axios from 'axios';
//importazione store
import { store } from '../store.js';



export default{
	data() {
		return{
			store,
			project:[]
		};
	},
	methods:{ 
      	apiSingleProjects(){
			axios.get(this.store.urlApiAllProjects + this.$route.params.slug)
            .then((results) => {
                console.log(results);
                this.project =results.data.data.projects;
                console.log(this.project);
            })
      }
	},
    mounted(){
		console.log(this.store.urlApiAllProjects + this.$route.params.slug);
      	this.apiSingleProjects();
    }
}

</script>

<template>
	<main>
		<div class="container">
			<div class="my-card">
				<h2>
					{{ project['name'] }}
				</h2>
				<div class="row">
					<div class="col-12">
						<h4>
							Descrizione
						</h4>
						<p>
							{{ project['description'] }}
						</p>
					</div>
					<div class="col-4">
						{{ project['start_date'] }}
					</div>
					<div class="col-4">
						{{ project['last_update_date'] }}
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang ="scss" scoped>
</style>
