<script>
  import { Storage } from "../Storage";

  $: count = $Storage.length;
  $: average =
    $Storage.reduce((a, { rating }) => a + rating, 0) / $Storage.length;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average ? average : "!!!"}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
  }
</style>
