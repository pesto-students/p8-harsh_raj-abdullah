function checkParenthesis(exp){
  const openParenthesis = '({[';
  const stack = [];
  for( let paren of exp){
    if(openParenthesis.includes(paren)) stack.push(paren);
    else{
      switch(paren) {
        case ')': 
          if(stack.pop() != '(') return false;
          break;
        case '}': 
          if(stack.pop() != '{') return false;
          break;
        case ']': 
          if(stack.pop() != '[') return false;
          break;
        default :
          return 'not valid parenthesis';
      }
    }
  }
  return stack.length == 0;
}

const exp = '()[]{}'

console.log(checkParenthesis(exp))