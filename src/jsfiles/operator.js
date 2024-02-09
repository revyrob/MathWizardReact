//get whichever the user selects
const addition = document.getElementById('operatorAddition');
const multiplication = document.getElementById('operatorMulti');

//if statement for creating the global variable from the users selection
addition.addEventListener("click", ()=> {
    localStorage.setItem('operator', '+');
    location.href = './range.html';
    
});
multiplication.addEventListener("click", ()=> { 
    localStorage.setItem('operator', '*');
    location.href = './range.html';
    
});  
   
console.log(localStorage.setItem('operator', '+'));
console.log(localStorage.setItem('operator', '*'));