<script>
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		
	},
	methods:{

	}
}

</script>

<template>
	<header>
		<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
			<div class=" container-fluid d-flex w-100 ">
				<div class="my-container-logo me-5">
					<img src="../../public/img/logoF.svg" alt="">
				</div>
				<ul class="m-0 d-flex flex-grow-1 justify-content-end list-unstyled align-items-center ">
					<li class="me-5"v-for="(elem, i ) in store.navHeader">
						<a class="my-underline-text" href="">
							{{ elem }}
						</a>
					</li>
				</ul>
			</div>
		</nav>			
	</header>
</template>

<style lang ="scss" scoped>
.my-container-logo{
	max-width: 50px;
	img{
		width:100%
	}
}
li{
	font-size: 1.3rem;
	
}
//stile sottolineatura e effetti hover
.my-underline-text {
    position: relative;
    display: inline-block;
    color: #fff; 
    text-decoration: none; 
    transition: color 0.8s ease;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0;
		height: 2px; 
		background-color:rgba(172, 255, 47, 0.50); 
		transition: width 0.2s ease; 
	}

	&:hover {
	  color: rgb(192, 255, 98);
	}
  
	&:hover::after {
	  width: 100%;
	}
}



</style>
