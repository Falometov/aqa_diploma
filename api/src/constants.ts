const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const POSTS_URL = `${BASE_URL}posts/`;
export const numberOfPosts = 100;
export const postSample: {
  title: string;
  body: string;
  userId: number;
  [key: string]: string | number;
} = {
  title: "post title",
  body: "post body",
  userId: 1,
};
