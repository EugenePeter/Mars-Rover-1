import { createInterface } from "readline";

export const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
