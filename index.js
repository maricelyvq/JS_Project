console.log('\nWelcome to the Todo Application');
console.log('================================');
const prompt = require('prompt-sync')();
const todos = [
  {
    title: "Initial",
    description: "This is the initial todo",
    complete: false,
  },
  {
    title: "Second",
    description: "This is the 2 todo",
    complete: false,
  },
  {
    title: "Third",
    description: "This is the 3 todo",
    complete: false,
  }
];
/**
 * Adds a new todo item to the list.
 */
function addTodo(){
    titleCase("Add a new todo");
    let title = prompt ('title: ');
    let description = prompt ('description: '); 
    todos.push({title: title, description: description, complete: false});
    console.log("--------------------");
    console.log('\t***Todo added successfully***\n');
    app();
 }
/**
 * Finds the index of a todo item by its title.
 * return : The index of the todo item, or -1 if not found.
 */
function findTodo(){
  let title = prompt('title: ');
  return (todos.findIndex(item => item.title === title));
}
/**
 * Displays a todo item by its index.
 * index: number The index of the todo item to display.
 * */
function showTodo (index) {
   if(index !== -1){
    console.log(`${index + 1}. ${todos[index].title}`);
    console.log(`   ${todos[index].description}`);
    console.log(todos[index].complete ? '   complete' : '   incomplete');
  } else {
    console.log('\n***Todo not found***');
  }

}
/**
 * Displays all todo items.
 * iterate thru the todos array and display each todo item.
 */
function showAllTodos(){
   titleCase("All Todos");
   displayTodoLength();
  if (todos.length > 0){
    console.log('Here is a list of your todos:');
   for (let i = 0; i < todos.length; i++){
      showTodo(i);
    };
  }
  prompt('\nPress any key to continue ');
  app();
}
/**
 * Removes a todo item by its title.
 */
function removeTodo(){
   console.log('\nInsert the title of the todo you want to remove');
   let index = findTodo();
   if(index !== -1){
      showTodo (index);
      const confirm = prompt('Are you sure you want to remove this todo? (yes/no): ');
      if(confirm.toUpperCase () === 'YES'){
        todos.splice(index, 1);
        console.log('\n***Todo Removed successfully***');
      } else {
        console.log('\n***Todo not removed***');
      }
  }
  app();
}
function titleCase(str){
  console.log('\n-------------');
  console.log(str);
  console.log('-------------');

}

function editTodo(){
  console.log('\nInsert the title of the todo you want to edit');
  let index = findTodo();
  if(index !== -1){
    showTodo (index);
    titleCase("Edit Todo Menu");
    console.log('1. Edit title');
    console.log('2. Edit description');
    console.log('3. Edit completion status');
    console.log('4. Exit');
    let option = prompt('Select an option: ');
        switch(option){
          case '1':
            let newTitle = prompt('New title: ');
            todos[index].title = newTitle;
            console.log('\t***Todo Title Updated***\n');
            break;
          case '2':
            let newDescription = prompt('New description: ');
            todos[index].description = newDescription;
            console.log('\t***Todo Description Updated***\n');
            break;
          case '3':
              let newComplete = prompt('New completion status (Insert \"C"\ for Completed or \"I"\ for Incomplete): ');
              if(newComplete.toUpperCase() === 'C')
                todos[index].complete = 'true';
              else if(newComplete.toUpperCase() === 'I')
                todos[index].complete = 'false';
              else {
                console.log('\t***Invalid option***')
                editTodo();
              }
              break;
          case '4':
            console.log('Exiting edit menu');
            break;
          default:
            console.log('\t***Invalid option***\n');
            editTodo();
        }
  } else   
    console.log('\t ***Todo not found*** \n');
   app();
}


function markTodoComplete(){
  titleCase("Mark Todo as Complete");
  console.log('\nInsert the title of the todo you want to mark as complete');
  let index = findTodo();
  if(index !== -1){
    todos[index].complete = true;
    console.log('\t***Todo marked as complete***\n');
  } else {
    console.log('\t ***Todo not found*** \n');
  }
  app();
}

function displayTodoLength(){
  console.log("\nYou have " + todos.length + " todos");
}

function app(){
  titleCase("| Main Menu |");
  console.log('1. Add a new todo');
  console.log('2. Show all todos'); 
  console.log('3. Remove a todo');
  console.log('4. Edit a todo');
  console.log('5. Mark a todo as complete');
  console.log('6. Exit');
  let option;
  do{
    option = prompt('Select an option: ');
    switch(option){
      case '1':
        addTodo();
        break;
      case '2':
        showAllTodos();
        break;
      case '3':
        removeTodo();
        break;
      case '4':
        editTodo();
        break;
      case '5':
        markTodoComplete();
        break;
      case '6':
        console.log('\n\t ***Goodbye!***');
        break;
      default:
        console.log('\t***Invalid option try again!***\n');
        // //app();
        // break;
    }
  }while (option < '1' || option > '6');
}

app();