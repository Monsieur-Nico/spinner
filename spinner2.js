const spinners = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "End"];
let delay = 100;

spinners.forEach((spinner, index) => {
  setTimeout(() => {
    if (spinners[index] !== "End") {
    process.stdout.write(`\r${spinner}   `);
    } else {
      console.log("\r");
    }
  }, delay);
  delay += 200;
});