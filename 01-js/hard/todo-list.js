/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.ToDos = []
  }
  add(todo){
    this.ToDos.push(todo)
  }
  remove(indexOfTodo){
    if( indexOfTodo <  0 || indexOfTodo >= this.ToDos.length ){
      return this.ToDos
      
    }
    // console.log("first slice"+ this.ToDos.slice(0, indexOfTodo) +"Second slice"+this.ToDos.slice(indexOfTodo + 1))
    this.ToDos = this.ToDos.slice(0, indexOfTodo).concat(this.ToDos.slice(indexOfTodo + 1))
    // console.log("Update list", this.ToDos)
    return this.ToDos
  }

  update(indexOfTodo, updatedTodo){
    if( indexOfTodo < 0 || indexOfTodo >= this.ToDos.length ){
      return this.ToDos
    }
    this.ToDos[indexOfTodo] = updatedTodo
  }
  getAll(){
    return this.ToDos
  }
  get(indexOfTodo){
    if( indexOfTodo < 0 || indexOfTodo >= this.ToDos.length ){
      return null
    }
    return this.ToDos[indexOfTodo]
  }
  clear(){
    this.ToDos = []
    return this.ToDos
  }

}

// let todoList = new Todo

// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');

// // console.log(todoList)



// console.log(todoList.remove(1));
// console.log(todoList.remove(0));
// console.log(todoList.remove(2));

module.exports = Todo;
