function calculator (){
     let add = document.getElementById("add")
     let subtract = document.getElementById("subtract")
     let multiply = document.getElementById("multiply")
     let divide = document.getElementById("divide")
     let equals = document.getElementById("equals")
     let clear = document.getElementById("clear")
     let result = 0
     let operation = ""

function doOperation () {
  let number = document.getElementById("number").value
  number = parseInt(number)
  document.getElementById("number").value = ""


  // check if any operation has been selected 

  if(operation == "") {
      result = number
  }
    
  if (operation == "add") {
    result = result + number 
  }

  if (operation == "subtract") {
    result = result - number 
}

  if (operation == "multiply") {
    result = result * number 
  }

  if (operation == "divide") {
    result = result / number 
  }


  }

  //handle clicks 

  add.onclick = function (){
    doOperation()
    operation = "add"

  }

  subtract.onclick = function (){
    doOperation()
    operation = "subtract"

  }

  divide.onclick = function (){
    doOperation()
    operation = "divide"

  }

  multiply.onclick = function (){
    doOperation()
    operation = "multiply"

  }

equals.onclick = function (){
    doOperation()
    document.getElementById("number").value = result
}


  clear.onclick = function (){
    document.getElementById("number").value = ""
    result = 0

  }



} 


    calculator()




















