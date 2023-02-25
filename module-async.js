// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) return;

//   const first = result;
//   readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
//     if (err) return;

//     const second = result;
//     writeFile(
//       `${__dirname}/content/denis.txt`,
//       `${first} ${second}`,
//       (err, result) => {
//         if (err) return;

//         console.log(result);
//       }
//     );
//   });
// });

const { readFile, writeFile } = require("fs");

readFile(`${__dirname}/content/first.txt`, "utf-8", (err, result) => {
  if (err) result;

  const first = result;
  writeFile(
    `${__dirname}/content/subfolder/random.txt`,
    `${first} and something new`,
    (err, result) => {
      if (err) return;
    }
  );
});
