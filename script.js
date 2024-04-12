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

// window.onload = function() {
// console.log("true")
// }

let q1 = document.getElementById("question1");
let q2 = document.getElementById("question2");
let q3 = document.getElementById("question3");  
let q4 = document.getElementById("question4");
let q5 = document.getElementById("question5");
let q6 = document.getElementById("question6");  
let es = document.getElementById("end-screen");


if (q1){
console.log("q1")
question1();
}
else if (q2){
console.log("q2")
question2()
}
else if (q3) {
question3()
console.log ("q3")
}
else if (q4){
  console.log("q4")
  question4()
  }
else if (q5) {
  question5()
  console.log ("q5")
  }
else if (q6){
    console.log("q6")
    question6()
    }
else if (es) {
    endscreen()
    console.log ("es")
    }

function question1() {   

// let q1 = document.getElementById("question1");
let nextbtn = document.createElement("button");
let questionbox = document.getElementById("question-box");
questionbox.appendChild(nextbtn);
nextbtn.textContent = 'next';
nextbtn.style.display = "none";      
console.log("q1_radios")
let img1 = document.getElementById("img");

q1.addEventListener("change", () => {

  let q1_radios = document.getElementsByName("answer");
  for(let i = 0; i < q1_radios.length; i++){
    if(q1_radios[i].checked){
      console.log("q1_radios")
     
      img1.src = '2.png';
      // document.getElementById("img").src = img.src.replace
      
            if(q1_radios[i].value == "yes"){
                  let advicebox = document.querySelectorAll('.advice-box');
                  advicebox[0].innerHTML = "very cool, good job! it's a good idea to get up every once in a while, so try to remind yourself every once in a while. walking around can also allow you to see new things in your art once your eyes take a visual break.";
                  advicebox[0].style.display = "block";
                  nextbtn.style.display = "block";
                  console.log("yes_radios")
                 
                }
                else if(q1_radios[i].value == "no"){
                  let advicebox = document.querySelectorAll('.advice-box');
                  advicebox[0].innerHTML = "stand up for a minute or so and walk around! making sure to stay active instead of staying stationary for a long time can help your general health. when you come back, you might also see some things in your art that you haven't before. ";
                  advicebox[0].style.display = "block";
                  nextbtn.style.display = "block";
                  console.log("no_radios")
                }}}
              }
            )
nextbtn.addEventListener("click", () => { 
  window.location.href = 'page1.html';
})}

function question2() {
  console.log("q2_get")
  let nextbtn = document.createElement("button");
  let questionbox = document.getElementById("question-box2");
  questionbox.appendChild(nextbtn);
  nextbtn.textContent = 'next';
  nextbtn.style.display = "none";      
  let img1 = document.getElementById("img");
  
  
  q2.addEventListener("change", () => {
    
  
    let q2_radios = document.getElementsByName("answer");
    for(let i = 0; i < q2_radios.length; i++){
      if(q2_radios[i].checked){
        console.log("q2_radios")
        img1.src = '4.png';
              if(q2_radios[i].value == "yes"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "congrats on staying hydrated! maybe take the time to refill your cup if you need it.";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                   
                  }
                  else if(q2_radios[i].value == "no"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "being hydrated will help you work, so you should get some water to sip on if you want to keep going!";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                  }}}
                }
              )
  
  nextbtn.addEventListener("click", () => { 
    window.location.href = 'page2.html';
})}

function question3() {
  console.log("q3_get")
  let questionbox2 = document.getElementById("2nd-question-header");
  
  let nextbtn = document.createElement("button");
  let questionbox = document.getElementById("question-box3");
  questionbox.appendChild(nextbtn);
      
  nextbtn.textContent = 'next';
  nextbtn.style.display = "none";
  questionbox2.style.display = "none";
  let img1 = document.getElementById("img");
 


  let advicebox = document.querySelectorAll('.advice-box');
  advicebox[0].style.display = "block";

  q3.addEventListener("change", () => {
    
    let q3_radios = document.getElementsByName("answer");
    for(let i = 0; i < q3_radios.length; i++){
      if(q3_radios[i].checked){
              if(q3_radios[i].value == "yes"){
                    questionbox2.style.display = "block";
                    nextbtn.style.display = "none";
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].style.display = "none";
                    
              
                      
              let q32 = document.getElementById("2nd-question-header"); 
  q32.addEventListener("change", ()=> {

    let q3_radios2 = document.getElementsByName("answer2");
    for(let i = 0; i < q3_radios2.length; i++){
      if(q3_radios2[i].checked){ 
        
        img1.src = '6.png';


            if(q3_radios2[i].value == "yes"){
          let advicebox = document.querySelectorAll('.advice-box');
            advicebox[0].innerHTML = "if you've been working for a while, it's a good idea to take a break now and make something quick to keep your energy up! a simple meal works.";
            advicebox[0].style.display = "block";
            nextbtn.style.display = "block";
               }
            else if(q3_radios2[i].value == "no"){
              let advicebox = document.querySelectorAll('.advice-box');
            advicebox[0].innerHTML = "alright, but you should probably grab a snack to have nearby just in case. even if you don't notice yourself feeling hungry, it could impact your mood and energy levels.";
            advicebox[0].style.display = "block";
            nextbtn.style.display = "block";
                }
              }}
  })  


}


              else if(q3_radios[i].value == "no") {
                let advicebox = document.querySelectorAll('.advice-box');
                advicebox[0].innerHTML = "no3 advice";
                nextbtn.style.display = "block";
                advicebox[0].style.display = "block";
                console.log("no q3_radios")
                questionbox2.style.display = "none";
               
              }

              }
     
              }})

  
  
  nextbtn.addEventListener("click", () => { 
    window.location.href = 'page3.html';
})}

function question4() {
  console.log("4_get")
  let nextbtn = document.createElement("button");
  nextbtn.textContent = 'next';
  let questionbox = document.getElementById("question-box4");
  questionbox.appendChild(nextbtn);
  nextbtn.style.display = "none";   
  let img1 = document.getElementById("img");   
  
  
  q4.addEventListener("change", () => {
    
  
    let q4_radios = document.getElementsByName("answer");
    for(let i = 0; i < q4_radios.length; i++){
      if(q4_radios[i].checked){
        console.log("q4_radios");
        img1.src = '8.png';

        
              if(q4_radios[i].value == "yes"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = " make sure to watch the time if you have anything important later, and try not to mess up your circadian rythmn if you can help it!";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                   console.log("q4_radios 1") 
                  }
                  else if(q4_radios[i].value == "no"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "you can always pick up your drawing later (unless it's very urgent), and a good night's sleep might help you pick out mistakes and other things in the morning!";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                    console.log("q4_radios 2");
                  }}}
                }
              )
  
  nextbtn.addEventListener("click", () => { 
    window.location.href = 'page4.html';


})}

function question5() {
  console.log("q5_get")
  let questionbox52 = document.getElementById("2nd-question-header");
  
  let nextbtn = document.createElement("button");
  nextbtn.textContent = 'next';
  let questionbox = document.getElementById("question-box5");
  questionbox.appendChild(nextbtn);
      
  nextbtn.style.display = "none";
  questionbox52.style.display = "none";

  let img1 = document.getElementById("img");


  let advicebox = document.querySelectorAll('.advice-box');
  advicebox[0].style.display = "block";

  q5.addEventListener("change", () => {
    
    let q5_radios = document.getElementsByName("answer");
    for(let i = 0; i < q5_radios.length; i++){
      if(q5_radios[i].checked){
              if(q5_radios[i].value == "yes"){
                    questionbox52.style.display = "block";
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].style.display = "none";
                    
              
                      
              let q52 = document.getElementById("2nd-question-header"); 
  q52.addEventListener("change", ()=> {

    img1.src = '10.png';
    nextbtn.style.display = "none";
    let q5_radios2 = document.getElementsByName("answer2");
    for(let i = 0; i < q5_radios2.length; i++){
      if(q5_radios2[i].checked){


            if(q5_radios2[i].value == "yes"){
          let advicebox = document.querySelectorAll('.advice-box');
            advicebox[0].innerHTML = "stand up and shake it out for a few minutes, don't cut off your circulation! if it doesn't go away, take a longer break so your hands/arms/legs can recover";
            advicebox[0].style.display = "block";
            nextbtn.style.display = "block";
               }
            else if(q5_radios2[i].value == "no"){
              let advicebox = document.querySelectorAll('.advice-box');
            advicebox[0].innerHTML = "take the time to stand up and readjust your sitting situation, even if it's only mildly uncomfortable right now, it could lead to major back pain later!.";
            advicebox[0].style.display = "block";
            nextbtn.style.display = "block";
                }
              }}
  }) 
}


              else if(q5_radios[i].value == "no") {
                let advicebox = document.querySelectorAll('.advice-box');
                advicebox[0].innerHTML = "no5 advice";
                nextbtn.style.display = "block";
                advicebox[0].style.display = "block";
                console.log("no q5_radios")
                questionbox52.style.display = "none";
               
              }

              }
     
              }}) 
              
              
   nextbtn.addEventListener("click", () => { 
   window.location.href = 'page5.html';
})}


function question6() {
  console.log("6_get")
  let nextbtn = document.createElement("button");
  let questionbox = document.getElementById("question-box6");
  questionbox.appendChild(nextbtn);
  nextbtn.style.display = "none";      
  nextbtn.textContent = 'next';
  let img1 = document.getElementById("img");
  
  
  q6.addEventListener("change", () => {
    
  
    let q6_radios = document.getElementsByName("answer");
    for(let i = 0; i < q6_radios.length; i++){
      if(q6_radios[i].checked){
        console.log("q6_radios")
        img1.src = '12.png';
        
              if(q6_radios[i].value == "yes"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "please take a break from your device and let your eyes rest. either go outside or just look out the window for a few minutes, even a short break will help.";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                   
                  }
                  else if(q6_radios[i].value == "no"){
                    let advicebox = document.querySelectorAll('.advice-box');
                    advicebox[0].innerHTML = "it's still good to prevent eye strain by taking a short break, even if you're working traditionally. a fresh look at your art after a minute or so can also help you spot a lot of things.";
                    advicebox[0].style.display = "block";
                    nextbtn.style.display = "block";
                  }}}
                }
              )
  
  nextbtn.addEventListener("click", () => { 
    window.location.href = 'page6.html';
})}


function endscreen() {
  let nextbtn = document.getElementById("end-screen-button");
  nextbtn.addEventListener("click", () => { 
    window.location.href = 'index.html';
})
}