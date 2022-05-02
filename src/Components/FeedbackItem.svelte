<script>
  import { Storage } from "../Storage";
  import Card from "./Card.svelte";

  export let feedback = [];
  function handleDelete(id) {
    Storage.update((currentFeedbacks) => {
      return currentFeedbacks.filter((feedback) => feedback.id !== id);
    });
  }
</script>

<Card>
  <div class="rating">
    {feedback.rating}
  </div>
  <button class="close" on:click={() => handleDelete(feedback.id)}> X </button>
  <div class="text">
    {feedback.text}
  </div>
</Card>

<style>
  .rating {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    background: #ff6a95;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 50%;
    padding: 8px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
    line-height: 10px;
    border-radius: 50%;
  }

  .close:hover {
    background: #ff6a95;
    color: #fff;
  }
</style>
