const spinner2 = () => {
  const spinArr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
  let timer = 100;
  spinArr.forEach((elem) => {
    setTimeout(() => {
      elem === "\n"
        ? process.stdout.write(`${elem}`)
        : process.stdout.write(`\r${elem}   `);
    }, timer);
    timer += 200;
  });
};

spinner2();
