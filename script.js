let elem = document.getElementById("inpConfirmpassword");
elem.addEventListener("blur", verifyPassword);
let gmail = document.getElementById("inpEmail");
gmail.addEventListener("blur", verifyEmail);


function verifyPassword(input) {
    input = input.srcElement;
    if (input.value !== document.getElementById('inpPassword').value) {
        // the provided value doesn’t match the primary email address
        input.setCustomValidity('The two passwords must match.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}


function verifyEmail(input2) {
    input2 = input2.srcElement;
    let reg = "^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$";
    //if (input2.toString().match(reg)) {
    if (input2.toString()==='false'){
        // the provided value doesn’t match the primary email address
        input2.setCustomValidity('Is not an gmail address...');
    } else {
        // input is valid -- reset the error message
        input2.setCustomValidity('');
    }
}



function store() {

    let inhoud = {};//create an empty object
    inhoud.firstname = document.getElementById('inpFirstName').value;
    inhoud.lastName = document.getElementById('inpLastName').value;
    inhoud.username = document.getElementById('inpUserName').value;
    inhoud.email = document.getElementById('inpEmail').value;
    inhoud.password = document.getElementById('inpPassword').value;
    inhoud.confirmpassword = document.getElementById('inpConfirmpassword').value;
    inhoud.address = document.getElementById('inpAddress').value;
    inhoud.city = document.getElementById('inpCity').value;
    inhoud.zip = document.getElementById('inpZip').value;
    inhoud.phonenumber = document.getElementById('inpPhoneNumber').value;
    inhoud.age = document.getElementById('inpAge').value;
    inhoud.hobbies = document.getElementById('inpHobbies').value;


}