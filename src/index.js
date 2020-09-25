import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


todoList.todos.forEach( crearTodoHtml ) ;

console.log( 'todos', todoList.todos );


//const tarea = new Todo( 'Aprender JS' );

//todoList.nuevoTodo( tarea );

//console.log( todoList );

//crearTodoHtml( tarea );


//localStorage.setItem( 'mi-key', 'ABC123' );
//sessionStorage.setItem( 'mi-key', 'ABC123' );





