const spinner = function () {

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 700);

  setTimeout(() => {
    return spinner();
  }, 800)

}

spinner();