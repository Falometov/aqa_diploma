import axios, { AxiosResponse } from "axios";
import { expect } from "chai";
import { postSample, POSTS_URL } from "../src/constants";
import { getRandomPostId } from "../src/helper";

let response: AxiosResponse;

describe("JSONPlaceholder HTTP methods positive tests", () => {
  it("Should correctly read GET response", async () => {
    try {
      response = await axios.get(POSTS_URL);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(200);
  });

  it("Should correctly GET post by ID", async () => {
    const postId = getRandomPostId();
    try {
      response = await axios.get(POSTS_URL + postId);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect;
    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.equal(postId);
  });

  it("Should correctly GET comments by post ID", async () => {
    const postId = getRandomPostId();
    try {
      response = await axios.get(POSTS_URL + postId + "/comments");
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(200);
    for (const comment of response.data) {
      expect(comment.postId).to.be.equal(postId);
    }
  });

  it.only("Should create new post with POST method", async () => {
    try {
      response = await axios.post(POSTS_URL, postSample);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(201);
    expect(response.data.title).to.be.equal(postSample.title);
    expect(response.data.body).to.be.equal(postSample.body);
    expect(response.data.userId).to.be.equal(postSample.userId);
  });
});
