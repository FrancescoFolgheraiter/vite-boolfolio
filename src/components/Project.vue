<script>

export default{
	data() {
		return{
			
		};
	},
	components:{
	
	},
    props:{
        dataProject:Object, 
    },
	methods:{


    },
    mounted(){

    }
}

</script>

<template>
    <div class="card" style="height: 32rem;overflow-y: auto;">
        <div v-if="dataProject['thumb'] !=null">
            <img :src="'http://127.0.0.1:8000/storage/'+dataProject['thumb']" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ dataProject['name'] }}</h5>
            <p class="card-text">{{ dataProject['description'] }}</p>
            <hr>
            <div class="d-flex justify-content-around ">
                <div>
                    Totale ore progetto {{ dataProject['total_hours'] }}
                </div>
                <div>
                    Data inizio progetto {{(dataProject['start_date']) }}
                </div>
                <div>
                    Ultimo aggiornamento {{ dataProject['last_update_date'] }}
                </div>
            </div>
            <hr>
            <div class="d-flex justify-content-around ">
                <div v-if="dataProject['type'] != null">
                    Tipo di progetto: {{ dataProject['type']['name']}}
                </div>
                <div v-else>
                    Nessun tipo di progetto
                </div>
                <div>
                    Tecnologie:
                    <ul>
                        <li v-for="(elem,i) in dataProject['technologies']">
                            {{ elem['title'] }}
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <router-link :to="{name:'singleProject', params: {slug : dataProject['slug']}}">Vai alla pagina del progetto</router-link>
            </div>
    </div>
</div>
</template>

<style lang ="scss" scoped>

</style>
