import axios, { AxiosResponse } from "axios";
import { expect } from "chai";
import { POSTS_URL } from "../src/constants";
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

    //expect(response.data.id).to.be.equal(postId)
  });
});
