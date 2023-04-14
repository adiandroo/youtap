class Solution {
    solve(s: string): boolean {
      const breakWords = s.split("");
      let openTag = 0;
      let closeTag = 0;
      for (let i = 0; i < breakWords.length; i++) {
        if (breakWords[i] === "(") {
          openTag++;
        }
        else if (breakWords[i] === ")") {
          if (i === 0) {
              closeTag += 0
          } else {
              closeTag++;
          }
        }
      }
      if (openTag === closeTag) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    }
  }
  
  const solution = new Solution();
  solution.solve("()");
  solution.solve("()()");
  solution.solve(")(");
  solution.solve("");
  solution.solve("((()))");
  solution.solve("(()");
  