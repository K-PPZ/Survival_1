let islandX = Math.floor(Math.random() * (100 - 0)) + 0;
let islandY = Math.floor(Math.random() * (100 - 0)) + 0;
let island_pos = `X:${islandX} Y:${islandY}`;

let plane_code = ["ABCEFGHIJ", "UXRHJUKLO"];
let random_plane_code = plane_code[Math.floor(Math.random() * (plane_code.length - 0)) + 0];
let plane_1 = `${random_plane_code[Math.floor(Math.random() * (random_plane_code.length - 0)) + 0]}`;
let plane_2 = `${random_plane_code[Math.floor(Math.random() * (random_plane_code.length - 0)) + 0]}`;
let plane_3 = `${random_plane_code[Math.floor(Math.random() * (random_plane_code.length - 0)) + 0]}`;

let planes_pos = `P:${Math.floor(Math.random() * (100 - 0)) + 0},${Math.floor(Math.random() * (100 - 0)) + 0}C:${plane_1 + plane_2 + plane_3}`;

console.log(islandX);
console.log(islandY);
console.log("Position " + island_pos);
console.log(planes_pos);