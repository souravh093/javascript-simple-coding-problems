function JimOrDela (marksOfJim, marksOfDela, marksOfChinku) {
    //Write your code here
    //Must follow lowercase and uppercase
    //Don't forget to return
    //
      let m = marksOfJim;
      let n = marksOfDela;
      let o = marksOfChinku;
      if (m > n && m > o) {
        return "Jim";
      } else if(n > m && n > o) {
        return "Dela";
      } else {
        return "Chinku";
      }
    }

    const showResult = JimOrDela(84, 72, 66);
    console.log(showResult);
