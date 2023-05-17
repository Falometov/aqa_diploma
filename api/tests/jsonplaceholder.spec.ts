import axios, { AxiosResponse } from "axios";
import { expect } from "chai";
import { POSTS_URL } from "../src/constants";

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
});
