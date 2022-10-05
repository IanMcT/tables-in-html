function load(){
  //variables
  var rows = 3;
  var cols = 3;
  var output = "<table>";
  //header row

  //loop through the rows
  for(var r = 0; r < rows; r++){
    output += "<tr>";
    for(var c = 0; c < cols; c++){
      if(r ==0){      
        output += "<th>";
        output += "Row " + r + " col " + c;
        output += "</th>";
      }else{
        output += "<td>";
        output += "Row " + r + " col " + c;
        output += "</td>";
      }//end if row is 0

    }//end cols loop
    output += "</tr>";
  }//end rows loop
  
  /*output += "<tr>";
  //header row cells
  output += "<th>Column 1</th>";
  output += "<th>Column 2</th>";
  output += "</tr>";
  
  output += "<tr>";
  //header row cells
  output += "<td>Column 1 row 2</td>";
  output += "<td>Column 2 row 2</td>";
  output += "</tr>";
  output += "</table>";*/
  document.getElementById("output").innerHTML = output;
}