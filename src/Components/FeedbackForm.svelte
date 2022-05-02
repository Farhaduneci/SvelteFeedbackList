<script>
  import { v4 as uuid } from "uuid";
  import { Storage } from "../Storage";
  import RatingSelect from "./RatingSelect.svelte";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  let text = "";
  let message = "";
  const MIN = 10;
  let rating = 10;
  let btnDisabled = true;

  function handeInput() {
    if (text.trim().length > MIN) {
      btnDisabled = false;
      message = null;
    } else {
      message = `Text must be at least ${MIN} characters long!`;
      btnDisabled = true;
    }
  }

  const handeSelect = (event) => (rating = event.detail);

  function handleSubmit() {
    if (text.trim().length > MIN) {
      const newFeedback = {
        id: uuid(),
        rating: +rating,
        text,
      };

      Storage.update((feedbacks) => [...feedbacks, newFeedback]);

      text = "";
    }
  }
</script>

<Card>
  <header>
    <h2>Share your amaizing stories with us!</h2>
  </header>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handeSelect} />
    <div class="input-group">
      <input
        type="text"
        bind:value={text}
        on:input={handeInput}
        placeholder="Write your story here"
      />
      <Button type="submit" disabled={btnDisabled}>Share</Button>
    </div>
    {#if message}
      <h5 class="message">
        {message}
      </h5>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 5px 8px;
    border-radius: 8px;
    margin-top: 20px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 15px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rgb(126, 33, 33);
  }
</style>
