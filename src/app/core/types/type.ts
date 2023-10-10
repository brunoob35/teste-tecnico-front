export interface Devices {
  id: string;
  name: string;
  serialNumber: number;
  points: Points[];
}

export interface Points {
  id: string;
  name: string;
  dataType: string;
  value: number;
  serialNumber: number;
}
