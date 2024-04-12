// window.onload = function() {
  //   console.log("true")
   
  // };

// if (qu1) {
//   question1()
//   console.log("true2")

// }
// else if (qu1 == false){
//   console.log("flase")
  
// }



window.onload = function() {
 
 if (window.location.pathname === '/page1.html') {
      console.log("User is on page1.html");
  } else {
      console.log("User is on some other page");
  }
}




window.onload = function() {
console.log("true")

}

function question1() {

let q1 = document.getElementById("question1");

let nextbtn = document.createElement("button");
let questionbox = document.getElementById("question-box");
questionbox.appendChild(nextbtn);
nextbtn.style.display = "none";      

q1.addEventListener("change", () => {

  let q1_radios = document.getElementsByName("answer");
  for(let i = 0; i < q1_radios.length; i++){
    if(q1_radios[i].checked){
      console.log("q1_radios")
      
            if(q1_radios[i].value == "yes"){
                  let advicebox = document.querySelectorAll('.advice-box');
                  advicebox[0].innerHTML = "yes advice";
                  advicebox[0].style.display = "block";
                  nextbtn.style.display = "block";
                  console.log("yes_radios")
                 
                }
                else if(q1_radios[i].value == "no"){
                  let advicebox = document.querySelectorAll('.advice-box');
                  advicebox[0].innerHTML = "no advice";
                  advicebox[0].style.display = "block";
                  nextbtn.style.display = "block";
                  console.log("no_radios")
                }}}
              }
            )

nextbtn.addEventListener("click", () => { 
  qu1 = false;
  question2()
  console.log("nextbtn");
  
  
  
})
}



function question2() {
  console.log("q2_get")
  window.location.href = 'page1.html';
  let q2 = document.getElementById("question2");
  
  let nextbtn2 = document.createElement("button");
  let questionbox2 = document.getElementById("question-box2");
  questionbox2.appendChild(nextbtn2);
  nextbtn2.style.display = "none";      
  
  
  q2.addEventListener("change", () => {
    
  
    let q2_radios = document.getElementsByName("answer");
    for(let i = 0; i < q2_radios.length; i++){
      if(q2_radios[i].checked){
        console.log("q2_radios")
        
              if(q2_radios[i].value == "yes"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "yes2 advice";
                    advicebox[0].style.display = "block";
                    nextbtn2.style.display = "block";
                   
                  }
                  else if(q2_radios[i].value == "no"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "no2 advice";
                    advicebox[0].style.display = "block";
                    nextbtn2.style.display = "block";
                  }}}
                }
              )
  
  nextbtn2.addEventListener("click", () => { 
    console.log("nextbtn");
    window.location.href = 'page2.html';
    question3()
  })
  }

