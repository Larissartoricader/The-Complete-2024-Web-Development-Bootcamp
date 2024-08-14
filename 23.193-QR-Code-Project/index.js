/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";

const userWebsite = await input({ message: "Enter the URL" });

console.log("here is " + userWebsite);

const qr_image = qr.image(userWebsite, { type: "png" });
qr_image.pipe(fs.createWriteStream("qr_code.png"));

fs.writeFile("userWebsite.txt", userWebsite, (err) => {
  if (err) throw err;
  console.log("The QR Code has been saved");
});
