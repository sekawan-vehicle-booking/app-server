import { nanoid } from "nanoid";

const users = [
  {
    id: nanoid(16),
    name: "Joko",
    role: "Supervisor",
  },
  {
    id: nanoid(16),
    name: "Surya",
    role: "Admin",
  },
  {
    id: nanoid(16),
    name: "Budi",
    role: "Employee",
  },
];

export default users;
