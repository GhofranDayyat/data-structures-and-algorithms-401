'use strict';

const 

function multiBracketValidation(input){
    // if(current.next){
    //     if(current.value===']'&&current.next.value==='['){
    //     console.log('1',stack.pop(),stack.pop())
    //     }else if(current.value==='}'&&current.next.value==='{'){
    //     console.log('2',stack.pop(),stack.pop())
        
    //     }else if (current.value===')'&&current.next.value==='('){
    //     console.log('3',stack.pop(),stack.pop())
    //     }
    //     else{
    //         current.top = stack.pop()
    //         console.log(current.top,'4')
    //     }
    //     }

    function multiBracketValidation(input){
        let stack=new Stack();
          let braket = new Stack()
        let openingTaq = ['[','(','{']
        let closingTaq = [']',')','}']
        let arr=input.split('')
         arr.forEach(e=>{
           if(openingTaq.includes(e)||closingTaq.includes(e)){
          stack.push(e)
          }
        })
        
          let current= stack.top
        // if(stack.isEmpty()){return false}
        while(current){
        let check;
        switch(current.value){
          case ')':
          check = stack.pop()
          console.log(1+check)
          if(check=='}'||check==']'){return false}
          break;
            case '}':
          check = stack.pop()
          console.log(2+check)
          if(check==')'||check==']'){return false}
          break;
          case ']':
          check = stack.pop()
          console.log(3+check)
          if(check=='}'||check==')'){return false}
            break;
        
            case '[':
          check = stack.pop()
          console.log(3+check)
          if(check=='}'||check==')'){return false}
            break;
          case '(':
          check = stack.pop()
          console.log(1+check)
          if(check=='}'||check==']'){return false}
          break;
            case '{':
          check = stack.pop()
          console.log(2+check)
          if(check==')'||check==']'){return false}
          break;
          
        }
          current = current.next;
        }
        
        return stack.isEmpty()
        
        
        // return stack.isEmpty()
        
        }
        multiBracketValidation('[({}]')
}

module.exports=multiBracketValidation;
