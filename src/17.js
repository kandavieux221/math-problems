function getRandomNode() {
    const nodes = ["node1", "node2", "node3", "node4"];
    return nodes[Math.floor(Math.random() * nodes.length)];
}

console.log(getRandomNode());
