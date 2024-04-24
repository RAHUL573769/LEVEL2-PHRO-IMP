interface Vehicle {
  name: string;
  price: number;
}
type VehicleRole1 = {
  name: string;
  price: number;
};

var Maruti: Vehicle = {
  name: "Rahul",
  price: 1234
};

interface VehicleExtra extends Vehicle {
  origin: string;
}

var Maruti1: VehicleExtra = {
  name: "Rahul",
  price: 1234,
  origin: "Bangladsh"
};

type VehileWithRole = VehicleRole1 & {
  role: string;
};

var Suzuki: VehileWithRole = {
  name: "Suzuki",
  price: 200,
  role: "admin"
};

interface Roll2 {}
