import { numberOfPosts } from "./constants";

export function getRandomPostId(): number {
  const min: number = 1;
  const max: number = numberOfPosts;
  return Math.floor(Math.random() * (max - min) + min);
}