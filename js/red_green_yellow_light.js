// 实现一个红绿灯设计
// 红灯3s 黄灯1s 绿灯2s 连续不断的

// 使用async await

const task = (type, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('light :>> ', type)
      resolve();
    }, time);
  });
};

const taskRunner = async () => {
  await task("red", 3000);
  await task("yellow", 1000);
  await task("green", 2000);
  return taskRunner();
};

// const taskRunner = () => {
//    task('red', 3000).then(() => task('green', 2000))
//     .then(() => task('yellow', 1000))
//     .then(taskRunner)
// }
taskRunner();
