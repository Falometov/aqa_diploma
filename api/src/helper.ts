import { numberOfPosts } from "./constants";

export function getRandomPostId(): number {
  const min: number = 1;
  const max: number = numberOfPosts;
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomField(): string {
  switch (Math.floor(Math.random() * (3 - 1) + 1)) {
    case 1:
      return "title"
    case 2:
      return "body"
    case 3:
      return "userId"
    default:
      throw new Error();
  }
}
