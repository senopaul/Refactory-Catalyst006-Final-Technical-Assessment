//Defining  a validatingg method

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validatingg();
// });

function validatingg() {
    var surname = document.form.surname;


    function allLetter(surname) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (surname.value.match(letters)) {
            surname.style.border = '2px solid green'
            return true;
        }
        else {
            document.getElementById('surname').innerText = "This Field is Required";
            surname.style.border = '2px solid red'
            surname.focus();
            return false;
        }
    }

   
    function allLetterRefName(given) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (given.value.match(letters)) {
            given.style.border = '2px solid green'
            return true;
        }
        else {
            document.getElementById('given').innerText = " This Field is Required ";
            given.style.border = '2px solid red'
            given.focus();
            return false;
        }
    }

    function Dob(dob) {
        var dob = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (dob.value.match(letters)) {
            dob.style.border = '2px solid green'
            return true;
        }
        else {
            document.getElementById(' dob ').innerText = "This Field is required";
            dob.style.border = '2px solid red'
            dob.focus();
            return false;
        }
    }

  
    function allLetterResidence(residence) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (residence.value.match(letters)) {
            residence.style.border = '2px solid green'
            return true;
        }
        else {
            
            document.getElementById(' residence ').innerText = " This Field is Required ";
            residence.style.border = '2px solid red'
            residence.focus();
            return false;
        }
    }


    function allLetterOccupation(occupation) {
        var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (occupation.value.match(letters)) {
            occupation.style.border = '2px solid green'
            return true;
        }
        else {
            document.getElementById(' occupation ').innerText = " This Field is Required ";
            occupation.style.border = '2px solid red'
            occupation.focus();
            return false;
        }
    }


    function alphanumericNationality(nationality) {
        var letters = /^[0-9a-zA-Z]+$/;
        if (nationality.value.match(letters)) {
            nationality.style.border = '2px solid green'
            return true;
        }
        else {
            document.getElementById('p4').innerText = " This Field is Required ";
            nationality.style.border = '2px solid red'


            if (allLetter(surname)) {

            }
            if (allLetterRefName(given)) {
        
            }
            if (allLetterDob(dob)) {
        
            }
            if (allLetterResidence(residence)) {
        
            }
            if (allLetterOccupation(occupation)) {
            }
        
        }
        if (alphanumericNationality(nationality)) {
        
        }
    }
}
