export interface User {
  id: string;
  username: string;
  email: string;
  attributes?: Record<string, any>;
}
