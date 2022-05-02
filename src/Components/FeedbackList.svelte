<script>
  import { Storage } from "../Storage";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

{#each $Storage as feedback (feedback.id)}
  <div in:scale out:fade>
    <FeedbackItem {feedback} />
  </div>
{/each}
