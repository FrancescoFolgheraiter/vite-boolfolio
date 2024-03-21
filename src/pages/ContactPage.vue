<script>
//importazione axios per chiamate API
import axios from 'axios';
//importazione store 
import { store } from '../store';


export default{
	data() {
		return{
			store,
            name: '',
            email: '',
            message: '',
		};
	},
	methods:{
		sendMessage(){
			//faccio una verifica dei dati a livello del frontend
            if(
                this.name != null && this.name != '' && this.name.length <= 64
                &&
                this.email != null && this.email != '' && this.name.length <= 255
                &&
                this.message.length <= 2048
            ){
                axios.post('http://127.0.0.1:8000/api/contacts',{
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then((res) => {
                    console.log(res.data);
                    this.success = res.data.success;
                })
                .catch((err) => {
                    allert('Errore: ' + err);
                });
            }
            else{
                alert('Inserire dati corretti');
            }
        } 
    }
}

</script>

<template>
	<main>
		<h1>Contatti</h1>
		<div class="container">
			<form  method="POST" @submit.prevent="sendMessage()">                
				<div>
					<label for="name">
						Nome
					</label>
					<input type="text" id="name" v-model="name" name="name" placeholder="Inserisci il tuo nome" maxlength="64" required>
				</div>
				<div>
					<label for="email">
						Email
					</label>
					<input type="email" id="email" v-model="email" name="email" placeholder="Inserisci la tua email" maxlength="255" required>
				</div>
				<div>
					<label for="message">
						Messaggio
					</label>
					<textarea name="message" id="message" v-model="message" cols="80" maxlength="2048" rows="8"></textarea>
				</div>
				<div class="mt-4">
					<button type="submit">
						Invia
					</button>
				</div>

			</form>
		</div>
	</main>
</template>

<style lang ="scss" scoped>
</style>
