let fName; 


document.getElementById('mySubmit').onclick = function(){
    fName = document.getElementById('myText').value;
    document.getElementById("welcomeHeader").textContent = `Welcome ${fName}`; 
}