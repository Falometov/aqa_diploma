import axios, { AxiosResponse } from "axios";
import { expect } from "chai";
import { postSample, POSTS_URL } from "../src/constants";
import { getRandomField, getRandomPostId } from "../src/helper";

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

  it("Should create new post with POST method", async () => {
    try {
      response = await axios.post(POSTS_URL, postSample);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(201);
    for (const prop in postSample) {
      expect(response.data[prop]).to.be.equal(postSample[prop]);
    }
  });

  it("Should update the post with PUT method", async () => {
    const postId = getRandomPostId();
    try {
      response = await axios.put(POSTS_URL + postId, postSample);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.equal(postId);
    for (const prop in postSample) {
      console.log(typeof prop);
      
      expect(response.data[prop]).to.be.equal(postSample[prop]);
    }
  });

  it("Should update the post with PATCH method", async () => {
    const field = getRandomField();
    const postId = getRandomPostId();
    try {
      response = await axios.patch(POSTS_URL + postId, {[field]: postSample[field]});
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.equal(postId);
    expect(response.data[field]).to.be.equal(postSample[field]);
  });

  it("Should correctly DELETE post by ID", async () => {
    const postId = getRandomPostId();
    try {
      response = await axios.delete(POSTS_URL + postId);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect;
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.deep.equal({})
  });

});
