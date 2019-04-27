<script>
    export let onClick;
</script>

<button class="button" on:click={onClick}>Add task</button>

<style>
  .button {
    border-radius: 8px;
    width: calc(100% - 1.5rem * 2);
    padding: 0.8rem 0;
    position: absolute;
    bottom: 1.5rem;

    cursor: pointer;
    background-color: var(--main-blue);
    color: white;
    font-size: 1rem;
    transition: all 0.5s;
  }

  .button:active {
    transform: translateY(3px);
  }
</style>