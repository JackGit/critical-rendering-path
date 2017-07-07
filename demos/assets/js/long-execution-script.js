function init () {
  runTask()
}

function runTask () {
  longTask()
}

function longTask () {
  for (var i = 0; i < 1000 * 1000; i++) {
    Math.sin(i)
  }
}

init()
