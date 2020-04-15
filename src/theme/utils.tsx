export interface Utils {
  borders: Borders;
  transition: string;
  opacity: number;
}

type Borders = {
  [key: string]: string | number | null;
};

const borders: Borders = {
  color: null,
  width: "0.0625rem",
  style: "solid",
  radius: "0.25rem",
};

const transition: string = "all 0.2s linear";
const opacity: number = 0.7;

const utils: Utils = Object.assign({}, { borders, transition, opacity });

export default utils;
