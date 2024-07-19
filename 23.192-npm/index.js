// const generateName = require("sillyname");
// in package.json type mode allows import instead require
import generateName from "sillyname";
const sillyName = generateName();

console.log("My Name is " + sillyName);

import superheros from "superheros";

const name = superheros();

console.log(`Here is my NEW Super Hero Name ${name}`);
