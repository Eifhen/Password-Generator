function Generator () {

    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
        "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
        "c","d","e","f","g","h","i","j","k","l","m","n","o","p",
        "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
        "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
        "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
        ",","|",":",";","<",">",".","?","/"
    ];
    
    const btn = document.querySelector("#generate");
    const passLength = document.querySelector("#pass-length");
    const result = document.querySelector("#result");

    btn.addEventListener('click', createPassword );

    function createPassword(){
        const length = passLength.value;
        if (length >= 5){
            const password =  generateRandomPassword(length);
            result.textContent = password;
        }
        else{
            passLength.focus(); // enfocamos el input 
            result.textContent = 'Insert a proper length in the input field';
        }
     }
     
    function generateRandomPassword (length) {
        let pass = '';
        for(var i = 0; i < length; i++){
            let random = Math.floor(Math.random() * characters.length);
            pass += characters[random];
        }
        return pass;
    }
}


Generator();