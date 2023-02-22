//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const [X, K] = input[0].split(" ").map(Number);
let visited = new Array(100001).fill(0);

function bfs(x) {
  let queue = [];
  queue.push(x);
  visited[x] = 1;
  let cnt = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let a = queue.shift();
      if (a === K) return cnt;
      for (let nx of [a - 1, a + 1, a * 2]) {
        if (nx >= 0 && nx <= 100000 && visited[nx] === 0) {
          visited[nx] = 1;
          queue.push(nx);
        }
      }
    }
    cnt++;
  }
}

console.log(bfs(X));
