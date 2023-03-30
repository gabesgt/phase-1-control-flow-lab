function scuberGreetingForFeet(someVaule){
  if(someVaule < 400 ) {
    return "This one is on me!"
  }else if(someVaule > 400 && someVaule < 2000){
   return "That will be twenty bucks."
  }else if(someVaule  > 2000 && someVaule <= 2500 ){
    return "I will gladly take your thirty bucks."
  }else if(someVaule > 2500 ){
    return "No can do."
  }

  }

function ternaryCheckCity(city){
  if(city === 'NYC'){
    return "Ok, sounds good."
  }else{
    return "No go."
  }
  }


function switchOnCharmFromTip(reply){
    switch(reply){
    case 'generous':
     return 'Thank you so much.'
     case 'not as generous':
      return 'Thank you.'
      default:
        return 'Bye.'


  }







  }



