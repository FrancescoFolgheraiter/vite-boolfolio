<script>
//importazione axios
import axios from 'axios';

export default{
	data() {
		return{
			text:"Main",
			projects:{}
		};
	},
	components:{
		
	},
	methods:{
      apiProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(results =>{
            console.log(results.data);
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
