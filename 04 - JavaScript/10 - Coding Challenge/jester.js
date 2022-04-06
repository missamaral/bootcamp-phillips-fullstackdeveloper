//the variable votes shows the result of a poll to elect the new court jester. each index represents a candidate, and their position in the array represents the order in which they registered as candidates. the value of each index is the number of votes each candidate received. your code should inform Samuel, the first one to register, whether he succeeded in being elected, returning a simple Y or N string. if there is a tie, the order of registration will be used as the deciding factor.

var votes = [99, 100, 50, 40, 30, 1, 23, 49]

let  firstToRegister = true;

const samuel  = Number(votes.shift());

for(let i = 0; i < votes.length; i++) {
  const jester  = Number(votes[i]);

  if (samuel < jester) {
    firstToRegister = false;
  }

};

console.log(firstToRegister ? "Y" : "N");