const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

const ERRORS: { [name: string]: string } = {
  "auth/invalid-email": FIELDS.EMAIL,
  "auth/user-disabled": FIELDS.EMAIL,
  "auth/user-not-found": FIELDS.EMAIL,
  "auth/wrong-password": FIELDS.PASSWORD,
  "auth/email-already-in-use": FIELDS.EMAIL,
  "auth/weak-password": FIELDS.PASSWORD,
};

export default ERRORS;
