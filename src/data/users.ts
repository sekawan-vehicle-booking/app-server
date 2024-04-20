import { nanoid } from "nanoid";
import { encryptPassword } from "../utils/encryption";

const users = [
  {
    id: nanoid(16),
    name: "Joko",
    email: "joko@gmail.com",
    password: encryptPassword("joko"),
    role: "Supervisor",
  },
  {
    id: nanoid(16),
    name: "Surya",
    email: "surya@gmail.com",
    password: encryptPassword("surya"),
    role: "Admin",
  },
  {
    id: nanoid(16),
    name: "Budi",
    email: "budi@gmail.com",
    password: encryptPassword("budi"),
    role: "Employee",
  },
];

export default users;
