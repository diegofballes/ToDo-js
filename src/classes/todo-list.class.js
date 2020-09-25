import { Todo } from "./todo.class";

// Como la clase será utilizada fuera del archivo, debe de llevar export
export class TodoList {

    // Constructor que crea un arreglo vacío de ToDos
    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();

    }

    //Método que agrega una nueva tarea
    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    //Método que elimina una tarea
    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    //Método que elimina todas las tareas
    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    //Método que marca como completada una tarea
    marcarCompletado( id ) {

        for( const todo of this.todos ) {
            console.log( id, todo.id );

            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }


    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        //if( localStorage.getItem('todo')) {

            //this.todos = JSON.parse( localStorage.getItem('todo') );
            //console.log('cargarLocal: ',this.todos);

        //} else {
            //this.todos = [];
        //}

        this.todos = ( localStorage.getItem('todo')) ? JSON.parse( localStorage.getItem('todo')) : [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

    }



}
