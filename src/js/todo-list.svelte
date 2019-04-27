<script>
import TodoListItem from "./todo-list-item.svelte";

export let todos;
export let newItem;
</script>

<ul class="list">
	{#each todos as item}
		<TodoListItem item={item}/>
	{/each}

	{#if newItem}
		<TodoListItem item={newItem}/>
	{/if}
</ul>

<style>
	.list {
	  background-color: #fff;
	  border-radius: 10px;
	  padding: 2rem;
	  margin: 2rem 0;
	}
</style>