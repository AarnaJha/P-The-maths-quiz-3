
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


function send(){


actual_answer= parseInt(number1) * parseInt(number2);

  question_number = "<h4>" + number1 + "X" + number2 + "</h4>" ;
  input_box = "<br> Answer : <input type='text' id='input_check_box'>" ;
  check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button> " ;
  row = question_number + input_box + check_button ;

  document.getElementById("output").innerHTML = row ;

  document.getElementById("number1").value="";
  document.getElementById("number2").value="";

    
  question_word="<h4 id='word_display'> Q."+word_three+ "</h4>";
  input_box="<br> Answer : <input type='text' id='input_check_box'>";
  check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
  row = question_word + input_box + check_button ;
  document.getElementById("output").innerHTML=row;

  document.getElementById("word").value="";
  
}

