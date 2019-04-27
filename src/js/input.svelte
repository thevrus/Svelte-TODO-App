<script>
  import { createEventDispatcher } from "svelte";

  export let input = "Add task...";

  const dispatch = createEventDispatcher();
  function passData() {
    dispatch("inputText", {
      input
    });
  }
</script>

<input class="input" on:keyup={passData} bind:value={input} type="text" placeholder="Add task...">

<style>
  .input {
    margin-top: 1rem;
    width: 100%;
    padding: 1.2rem 0;
    padding-left: 1rem;

    border-radius: 8px;
    background-color: #fff;
    box-shadow: var(--box-shadow);
    transition: all 0.5s;
  }

  .input:focus {
    transform: translateY(-5px);
    --box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.07);
  }
</style>