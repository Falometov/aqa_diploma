import { expect } from "chai";
import { RegistrationForm } from "../src/classes/registration-form";
import { validUsernames } from "../src/utils/constants";

const registrationForm = new RegistrationForm();

describe("Positive tests", () => {
  validUsernames.forEach((username) => {
    it(`Should correctly set "${username}" value in "Username" field`, () => {
      registrationForm.setUsername(username);
      expect(registrationForm.currentUsername).to.equal(username);
    });
  });
});
