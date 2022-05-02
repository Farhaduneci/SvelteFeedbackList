import { writable } from "svelte/store";
export const Storage = writable([
  {
    id: 1,
    rating: 12,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
]);
