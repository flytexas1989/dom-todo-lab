const todoInput = document.getElementById('#todo-input')
const submitBtn = document.getElementById('#submit-button')
const todoList = document.getElementById('#todo-list')
const resetBtn = document.getElementById('#reset-button')

submitBtn.addEventListener('click', function(event) {
  if(todoInput.value === "") return
  const newTodo = document.createElement('li')
  newTodo.textContent = todoInput.value
  todoList.appendChild(newTodo)
  todoInput.value = ''
})

//awesome guy on YouTube Gordon Chan helped me with this portion watching his video!
todoList.addEventListener('click', click, false)
function click() {
  this.remove();
}
resetBtn.addEventListener('click', function(event) {
  todoInput.value = ''
})

//I dont know why or how I was able to add list items before but I was able to before I rewrite eveything because it all deleted....