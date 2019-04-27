<script>
	import TodoList from "./js/todo-list.svelte";
	import AddButton from "./js/add-button.svelte";
	import Input from "./js/input.svelte";

	export let input;
	export let todos;

	todos = ["Walk the dog 🐶", "Drink ☕", "GYM 💪", "Launch 🚀	"];
	input = "";

	function addTask() {
	  if (!input) return;
	  todos = [...todos, input];
	  input = "";
	}

	function handleMessage(event) {
	  input = event.detail.input;
	}
</script>

<div class="container">
		<h1 class="title">TODO APP</h1>
		<img class="header__img" src="./images/Illustration.svg" alt="">
		<Input input={input} on:inputText={handleMessage}/>	
		<TodoList todos={todos} newItem={input}/>
		<AddButton onClick={addTask}/>
</div>

<style>
	.container {
	  background-color: white;
	  margin: 0 auto;
	  padding: 1.5rem;
	  position: relative;
	  width: 375px;
	  min-height: 700px;

	  box-shadow: var(--box-shadow);
	  border-radius: 20px;
	}

	.header__img {
	  position: relative;
	  right: 0;
	  max-height: 250px;
	  width: 100%;
	  border-radius: 25px;
	}
</style>