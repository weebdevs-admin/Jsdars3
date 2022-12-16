var elForm = document.querySelector("form");
var elInput = document.querySelector(".input");
var elBtn = document.querySelector(".btn");
var elTitle = document.querySelector(".title")
var elText = document.querySelector(".text")

elForm.addEventListener('submit' ,function(evn){
    evn.preventDefault()
    num = elInput.value;
    if(num == "choy" || num == "non"){
        console.log("Tayyor!");
        elTitle.textContent = "Tayyor 💂‍♂️"
    }
    else if (num == "ovqat"){
        console.log("Ovqat Turini Ayting!");
        elTitle.textContent = "Ovqat Turini Ayting 🍳"
    }
    else if (num == "mastava"){
        console.log("Mastava Tayyor!");
        elTitle.textContent = "Mastava Tayyor 💂‍♂️"
    }
    else if (num == "shorva"){
        console.log("Sho'rva Tayyor!");
        elTitle.textContent = " Sho'rva Tayyor 💂‍♂️"
    }
    else if (num == "osh"){
        console.log("Osh Tayyyor!");
        elTitle.textContent = "Osh Tayyor 💂‍♂️"
    }
    else{
        console.log("Bajara olmayman!");
        elTitle.textContent = "Bajara Olmayman 🤷‍♂️"
    }

    elInput.value = ''
})