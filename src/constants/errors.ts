const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

const ERRORS: { [name: string]: string } = {
  "auth/email-already-in-use": FIELDS.EMAIL,
  "auth/invalid-email": FIELDS.EMAIL,
  "auth/user-disabled": FIELDS.EMAIL,
  "auth/user-not-found": FIELDS.EMAIL,
  "auth/weak-password": FIELDS.PASSWORD,
  "auth/wrong-password": FIELDS.PASSWORD,
};

export default ERRORS;
