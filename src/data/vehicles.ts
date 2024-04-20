import { nanoid } from "nanoid";

const vehicles = [
  {
    id: nanoid(16),
    type: "Angkutan Orang",
    ownership: "Perusahaan",
    manufacture: "Mitsubishi",
    model: "M120",
    color: "white",
    plate: "B 1234 U",
    capacity: 6,
    year: 2023,
  },
  {
    id: nanoid(16),
    type: "Angkutan Barang",
    ownership: "Sewa",
    manufacture: "Mercedes",
    model: "Truck",
    color: "white",
    plate: "B 4321 U",
    capacity: 30,
    year: 2023,
  },
];
