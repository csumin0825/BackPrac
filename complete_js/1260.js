//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

let num = input.slice(1, M + 1).map((x) => x.split(" ").map(Number));

let graph = new Array(N + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b] = num[i];
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

let visited = new Array(N + 1).fill(0);
let answer_dfs = [];

function dfs(v) {
  visited[v] = 1;
  answer_dfs.push(v);

  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      dfs(next);
    }
  }
}

dfs(V);
console.log(answer_dfs.join(" "));

visited.fill(0);
let answer_bfs = [];

function bfs(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}

bfs(V);
console.log(answer_bfs.join(" "));
