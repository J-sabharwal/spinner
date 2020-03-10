// Paired Programming with @Alan-Marx and @J-sabharwal

const animation = ['\r|  ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r/   ', '\r-  ', '\r\\  ', '\r|  '];
let counter = 100;

for (const anim of animation) {
  setTimeout(() => {
    process.stdout.write(anim);
  }, counter);
  counter += 200;
};