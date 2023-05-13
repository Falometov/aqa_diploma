import { expect } from "chai";
import { RegistrationForm } from "../src/classes/registration-form";
import {
  ERRORS,
  EXCEPTIONS_TESTS,
  POSITIVE_TESTS,
} from "../src/utils/constants";
import { Fields } from "../src/utils/types";

const registrationForm = new RegistrationForm();

describe("Positive tests", () => {
  for (const valuesList in POSITIVE_TESTS) {
    POSITIVE_TESTS[valuesList].forEach((value) => {
      it(`Value "${value}" is correctly set as "${valuesList}" using "${valuesList}" field`, () => {
        switch (valuesList) {
          case Fields.Username:
            registrationForm.setUsername(value);
            expect(registrationForm.currentUsername).to.equal(value);
            break;
          case Fields.Age:
            registrationForm.setUserAge(value);
            expect(registrationForm.currentUserAge).to.equal(value);
            break;
          case Fields.Email:
            registrationForm.setUserEmail(value);
            expect(registrationForm.currentUserEmail).to.equal(value);
            break;
          case Fields.PhoneNumber:
            registrationForm.setUserPhoneNumber(value);
            expect(registrationForm.currentUserPhoneNumber).to.equal(value);
            break;
          case Fields.Password:
            registrationForm.setUserPassword(value);
            expect(registrationForm.currentUserPassword).to.equal(value);
            break;
        }
      });
    });
  }
});

describe("Exception tests", () => {
  for (const valuesList in POSITIVE_TESTS) {
    EXCEPTIONS_TESTS[valuesList].forEach((value) => {
      it(`Setting "${value}" value as "${valuesList}" using "${valuesList}" field throws error`, () => {
        switch (valuesList) {
          case Fields.Username:
            expect(() => registrationForm.setUsername(value)).to.throw(
              ERRORS[Fields.Username]
            );
            break;
          case Fields.Age:
            expect(() => registrationForm.setUserAge(value)).to.throw(
              ERRORS[Fields.Age]
            );
            break;
          case Fields.Email:
            expect(() => registrationForm.setUserEmail(value)).to.throw(
              ERRORS[Fields.Email]
            );
            break;
          case Fields.PhoneNumber:
            expect(() => registrationForm.setUserPhoneNumber(value)).to.throw(
              ERRORS[Fields.PhoneNumber]
            );
            break;
          case Fields.Password:
            expect(() => registrationForm.setUserPassword(value)).to.throw(
              ERRORS[Fields.Password]
            );
            break;
        }
      });
    });
  }
});
