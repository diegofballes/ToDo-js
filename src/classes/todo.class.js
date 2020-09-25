
// Como la clase será utilizada fuera del archivo, debe de llevar export
export class Todo {

    static fromJson( obj ) {

        const tempTodo = new Todo( obj.tarea );
        tempTodo.id = obj.id;
        tempTodo.completado = obj.completado;
        tempTodo.creado = obj.creado;

        return tempTodo;
    }

    // Constructor de una nueva tarea
    constructor( tarea ) {

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}

