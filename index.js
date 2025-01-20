console.log('\nWelcome to the Todo Application');
console.log('================================');
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

function addTodo(){
    const prompt = require('prompt-sync')(); 
    console.log('Add a new todo');
    let title = prompt ('title: ');
    let description = prompt ('description: '); 
    todos.push({title: title, description: description, complete: false});
    console.log("--------------------");
    console.log('****Todo added successfully******');
    app();
 }

function findTodo(title){
  //console.log(todos);
  return (todos.findIndex(item => item.title === title));
}

function showTodo (index) {
 // const todo = todos[index];
  if(index !== -1){
    console.log(`${index + 1}. ${todos[index].title}`);
    console.log(`   ${todos[index].description}`);
    console.log(todos[index].complete ? '   complete' : '   incomplete');
  } else {
    console.log('Todo not found');
  }
  // app();

}

function showAllTodos(){
  displayTodoLength();
  if (todos.length > 0){
    console.log('Here is a list of your todos:');
   for (let i = 0; i < todos.length; i++){
      showTodo(i);
    };
  }
  app();
}
function removeTodo(){
  const prompt = require('prompt-sync')();
  console.log('Insert the title of the todo you want to remove');
  let title = prompt('title: ');
  let index = findTodo(title);
  showTodo (index);
   if(index !== -1){
      let confirmation = prompt('Are you sure you want to remove this todo? (yes/no): ');
      if(confirmation.toUpperCase == 'YES'){
        todos.splice(index, 1);
        console.log('Todo removed successfully');
      }
  }
  app();
}

function editTodo(){
  const prompt = require('prompt-sync')();
  console.log('\nInsert the title of the todo you want to edit');
  let title = prompt('title: ');
  let index = findTodo(title);
  if(index !== -1){
    showTodo (index);
    console.log('-------------');
    console.log('Edit todo Menu');
    console.log('-------------');
    console.log('1. Edit title');
    console.log('2. Edit description');
    console.log('3. Edit completion status');
    console.log('4. Exit');
    let option = prompt('select an option: ');
        switch(option){
          case '1':
            let newTitle = prompt('\n New title: ');
            todos[index].title = newTitle;
            break;
          case '2':
            let newDescription = prompt('\n New description: ');
            todos[index].description = newDescription;
            break;
          case '3':
            let newComplete = prompt('\n New completion status (Insert \"C"\ for Completed or \"I"\ for Incomplete): ');
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
            console.log('\t***Invalid option***');
            editTodo();
        }
  } else   
    console.log('\t ***Todo not found*** \n');
   app();
}


function markTodoComplete(){
  const prompt = require('prompt-sync')();
  console.log('Mark a todo as complete');
  let title = prompt('title: ');
  let index = findTodo(title);
  if(index !== -1){
    todos[index].complete = true;
    console.log('Todo marked as complete');
  } else {
    console.log('\t ***Todo not found*** \n');
  }
  app();
}

function displayTodoLength(){
  console.log("You have " + todos.length + " todos");
}

function app(){
  const prompt = require('prompt-sync')();
  console.log('\n-------------');
  console.log('| Main Menu |');
  console.log('-------------');
  console.log('1. Add a new todo');
  console.log('2. Show all todos'); 
  console.log('3. Remove a todo');
  console.log('4. Edit a todo');
  console.log('5. Mark a todo as complete');
  console.log('6. Exit');
  
  var option = prompt('select an option: ');
//  console.log();
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
      console.log('\t ***Goodbye!***');
      break;
    default:
      console.log('Invalid option try again!');
      app();
      break;
  }

}

app();