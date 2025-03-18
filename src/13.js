function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomNode() {
  const nodes = ["+", "-", "*", "/"];
  const index = getRandomInt(nodes.length - 1);
  return nodes[index];
}

function generateMathProblem(max) {
  let problem = "";
  for (let i = 0; i < max; i++) {
    const node = getRandomNode();
    if (node === "+") {
      problem += getRandomInt(10);
    } else if (node === "-") {
      problem += -getRandomInt(10);
    } else if (node === "*") {
      problem += getRandomInt(10);
    } else if (node === "/") {
      problem += 1;
    }
  }
  return problem;
}
