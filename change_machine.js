(function (){
    
    function changeMachine(amount) {    
  
      let twenties = Math.trunc(amount / 20);
      let remainder = amount % 20;
    
      let tens = Math.trunc(remainder / 10);
      remainder = remainder % 10
    
      let fives = Math.trunc(remainder / 5);
      remainder = remainder % 5
    
      let ones = Math.trunc(remainder / 1);
      remainder = remainder % 1

      return [twenties, tens, fives, ones]
    }

    module.exports = changeMachine

  })();

  

  