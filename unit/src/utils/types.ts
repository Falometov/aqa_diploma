export enum Fields {
  Username = "Username",
  Age = "Age",
  Email = "Email",
  PhoneNumber = "Phone Number",
  Password = "Password",
}

export interface RegFormFields {
  Username: string[];
  Age: string[];
  Email: string[];
  "Phone Number": string[];
  Password: string[];
  [key: string]: string[];
}
