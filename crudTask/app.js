var vm = new Vue({
    el: '#app',
    data: {
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
});