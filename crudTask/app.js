var vm = new Vue({
    el: '#app',
    data: {
        newTaskDescription: '',
        tasks: [
            {
                description: 'Aprender Vue.js',
                pendding: true,
                editing: false,
            },
            {
                description: 'Suscribirse en Styde',
                pendding: true,
                editing: true,
            },
            {
                description: 'Crear una API',
                pendding: false,
                editing: false,
            },
        ],
    },
    methods: {
        createTask: function (e) {

            this.tasks.push({
                description: this.newTaskDescription,
                pendding: true,
                editing: false
            });
         
            this.newTaskDescription = '';            
        }
    }
});