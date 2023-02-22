//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

let graph = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  graph[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 2].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = new Array(N + 1).fill(0);
let cnt = 0;

function dfs(v) {
  visited[v] = 1;
  cnt++;
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      dfs(next);
    }
  }
  return cnt - 1;
}

console.log(dfs(1));
