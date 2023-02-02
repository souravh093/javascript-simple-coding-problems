function JimOrDela (marksOfJim, marksOfDela) {
    //Write your code here
    //Must follow lowercase and uppercase
    //Don't forget to return
    //
      let m = marksOfJim;
      let n = marksOfDela;
    
      if (m > n) {
        return "Jim";
      } else {
        return "Dela";
      }
    }

    const showResult = JimOrDela(84, 99);
    console.log(showResult);
