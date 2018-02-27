var vm = new Vue({
    el: '#app',
    data: {
        draft: '',
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
                editing: false,
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
        },
        toggleStatus: function (task) {

            task.pendding = !task.pendding;
        },
        editTask: function (task) {

            this.draft = task.description;
            this.tasks.forEach( function (task) {
                task.editing = false;
            });

            task.editing = true;
        },
        discardTask: function (task) {

            task.editing = false;
        },
        updateTask: function (task) {

            task.description = this.draft;
            task.editing = false;
        },
        deleteTask: function (index) {

            this.tasks.splice(index, 1);
        },
        deleteCompleted: function () {

            this.tasks = this.tasks.filter( function (task) {
                return task.pendding;
            }
            );
        },
    }
});