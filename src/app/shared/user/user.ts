interface User {
  firstName: string;
  lastName: string;
  email: string;
  permissions?: number[];
}

interface Role {
  id: number;
  name: string;
}

interface Roles {
  [index: number]: Role;
}
