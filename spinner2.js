const spinner = function () {
  const spinnerStage = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let delay = 200;
  for (const stage of spinnerStage) {
    setTimeout(() => { process.stdout.write(stage) }, delay)
    delay += 200;
  }
  setTimeout(() => { console.log() }, delay);
}

spinner();