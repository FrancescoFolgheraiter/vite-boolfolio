import { reactive } from 'vue';

export const store = reactive({
    urlApiAllProjects:'http://127.0.0.1:8000/api/projects/',
    projects:[],
    navHeader:['Homepage','About','Projects','Contact']
});