  var indexP; // index od the new person in the line 
  function takeANumber(currentLine, newPersoneName)
  {
    // add new customer to the end of the array 
    currentLine.push(newPersoneName)
    indexP = currentLine.length;
    
    //"Welcome, new customer."
    return `Welcome, ${newPersoneName}. You are number ${indexP} in line.`;
  }