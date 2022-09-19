export interface UserRegistrationForm {
    username: string;
    name: { givenName: string; surName: string };
    category: string;
    email: string;
    password: string;
  }