import axiosConfig from "./config/axiosConfig.js";
import "dotenv/config";

function generateExtensions() {
  const extensions = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      extensions.push(`${alphabet[i]}${alphabet[j]}`);
    }
  }

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        extensions.push(`${alphabet[i]}${alphabet[j]}${alphabet[k]}`);
      }
    }
  }

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        for (let l = 0; l < alphabet.length; l++) {
          extensions.push(
            `${alphabet[i]}${alphabet[j]}${alphabet[k]}${alphabet[l]}`
          );
        }
      }
    }
  }

  return extensions;
}

const extensions = generateExtensions();

const website = process.env.website;

async function testExtensions() {
  for (let ext of extensions) {
    const url = `https://${website}.${ext}`;

    try {
      const response = await axiosConfig.get(url);
      if (response.status === 200) {
        console.log(`${url} - 200`);
      }
    } catch (error) {}
  }

  console.log("=== Done ===");
}

console.log("==================");
console.log("= Server started =");
console.log("==================");

testExtensions();
