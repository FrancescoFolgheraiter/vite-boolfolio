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
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ dataProject['name'] }}</h5>
            <p class="card-text">{{ dataProject['description'] }}</p>
            <hr>
            <div class="d-flex justify-content-around ">
                <div>
                    Totale ore progetto {{ dataProject['total_hours'] }}
                </div>
                <div>
                    Data inizio progetto {{ dataProject['start_date'] }}
                </div>
                <div>
                    Ultimo aggiornamento {{ dataProject['last_update_date'] }}
                </div>
            </div>
            <hr>
            <div class="d-flex justify-content-around ">
                <div v-if="dataProject['type'] != null">
                    Tipo di progetto:{{ dataProject['type']['name']}}
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
    </div>
</div>
</template>

<style lang ="scss" scoped>

</style>
