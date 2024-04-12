//------- QUESTION 1 -----------

let submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    let q1, q3, q4; 
    let q2;
    // q1_ = document.getElementById("q1"); 
    // q1 = q1_.elements[0].value

    let q2_radios = document.getElementsByName("q2");
    for(let i = 0; i < q2_radios.length; i++){
        if(q2_radios[i].checked){
            q2 = q2_radios[i].value  
        }
    }
    //     q3 = document.getElementById("q3").value; 
    //     q4 = document.getElementById("q4").value; 
        
    // console.log(q1)
    // console.log(q2)
    // console.log(q3)
    // console.log(q4)

    let points = 0; 

    if (q1 == "red"){
        points += 5; 
    } else {
        points += 15; 
    }

    if (q2 == "blue"){
        points += 5; 
    } else {
        points += 15; 
    }
    if (q3 == "green"){
        points += 5;  
    } else {
        points += 15; 
    }

    let results = document.getElementById("results");
    results.innerHTML = `Results: ${points}`; 
    
})


//------- ANSWER -----------
