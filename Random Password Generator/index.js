// ----------------------------------Getters-----------------------------------------------------

// Password Container

let result = document.getElementById('passWord_container');

// Copt button

let copyBtn = document.getElementById('copyBTn');

// PassWord length

let passLength = document.getElementById('passLen');

// digists checkBOx

let digitCheckBox = document.getElementById('digits');

// Upper checkBox

let upperCheckBox= document.getElementById('upperCheckBox');

// lowerCheckBox

let lowerCheckBox = document.getElementById('lowerCheckBox');

// special check box

let specialCheckBox = document.getElementById('specialCharCheckBox');

// generate button 

let generateBtn = document.getElementById('generateBtn');

// --------------------------------------Process To generate Password ----------------------------



// Helper Functions

function generateDigits()
{
    let digit= String.fromCharCode((Math.floor(Math.random() * 9) + 48));

    return  digit;
    
}

function generateUpper()
{
    let upperLetter= String.fromCharCode((Math.floor(Math.random()* 26) + 65));

    return  upperLetter;
}

function generateLower()
{
    let lowerLetters= String.fromCharCode((Math.floor(Math.random() * 26) + 97));

    return  lowerLetters;
}


function generateSpecial()
{
    let specialCharString="!@#$%&()+-<>?.;\/~[]{}|";
    
    let specialchar = specialCharString[Math.round(Math.random() * (specialCharString.length -1))];

    return specialchar;
}

generateBtn.addEventListener('click',function()
{


    let length = +passLength.value;
     let password="";
    
    for(let i=0; i< +passLength.value ; i++)
    {
    
       
            if(digitCheckBox.checked)
            password= password + generateDigits()
            

             if(upperCheckBox.checked)
             password= password + generateUpper();


             if(lowerCheckBox.checked)
             password= password + generateLower();


             if(specialCheckBox.checked)
             password= password + generateSpecial();
            
             if(upperCheckBox === false && lowerCheckBox === false && specialCheckBox === false && digitCheckBox === false)
             {
                 password="";
             }

    }


    result.innerText= password.slice( 0 , length);

})

copyBtn.addEventListener('click',function()
    {
        console.log('javeria');
        let passwordCopy= result.innerText;

        if(!passwordCopy)
        {
            return;
        }

        let textArea = document.createElement('textArea');

        textArea.innerText= passwordCopy;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        alert('PassWord Copied to the ClopBoard');

    })




