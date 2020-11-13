const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);
let str = args.join(' ');
exec(`git add . && git commit -m "${str}"`, cbPush);

console.log(str)

function cbPush(err,stout,stdin){
  if(err){
    console.log(err);
    return;
  }
  console.log("Files were pushed to your branch.")
}
