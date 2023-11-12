let rArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 0;

for (let rrr of rArray) {
  setTimeout(() => {
    process.stdout.write(rrr);
  }, delay);

  delay += 100;
}