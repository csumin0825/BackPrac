(x) => {
  console.log(x[0]);
  if (x[0] in graph) {
    graph[x[0]].push(x[1]);
  } else {
    graph[x[0]] = [x[1]];
  }
  console.log(graph);
});