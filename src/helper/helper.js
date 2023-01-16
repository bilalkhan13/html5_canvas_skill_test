
export default class helper {

    static  runGame(userInput, compInput){
    
    const options = {
        rock: "rock",
        paper: "paper",
        scissors: "scissors"
    }

    if (userInput === compInput) {
      return "tie";
    } else if (userInput === options.rock) {
      if(compInput === options.paper){
      return "computer"
      }
      if(compInput === options.scissors){
        return "user"
      }
    } else if(userInput === options.paper){
      if(compInput === options.rock){
        return "user"
      }
      if(compInput === options.scissors){
        return "computer"
      }
    } else if(userInput === options.scissors){
        if(compInput === options.rock){
            return "computer"
        } else if(compInput === options.paper){
            return "user"
        }
    }
   
    }

}