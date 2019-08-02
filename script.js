let elem = document.getElementById("inpConfirmpassword");
elem.addEventListener("blur", verifyPassword);
let gmail = document.getElementById("inpEmail");
gmail.addEventListener("blur", verifyEmail);


function verifyPassword(input) {
     let reg2 = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])";
    input = input.srcElement;
    if (input.value !== document.getElementById('inpPassword').value) {
        // the provided value doesn’t match the primary email address
        input.setCustomValidity('The two passwords must match.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
    if (!input.value.match(reg2)) {
        input.setCustomValidity('Password must contain one uppercase letter and one numeric value');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }

}


function verifyEmail(input2) {


    input2 = input2.srcElement;
    let reg = "[a-zA-Z0-9]+\\@gmail.com";
    if (!input2.value.match(reg)) {
    //if (input2.toString()==='false'){
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

    localStorage.setItem("storageInhoud", JSON.stringify(inhoud));
    localStorage.setItem("storageFirstName",inhoud.firstname);
    localStorage.setItem("storageLastName",inhoud.lastName);
    localStorage.setItem("storageUserName",inhoud.username);
    localStorage.setItem("storageEmail",inhoud.email);
    localStorage.setItem("storagePassword",inhoud.password);
    localStorage.setItem("storageConfirmpassword",inhoud.confirmpassword);
    localStorage.setItem("storageAddress",inhoud.address);
    localStorage.setItem("storageCity",inhoud.city);
    localStorage.setItem("storageZip",inhoud.zip);
    localStorage.setItem("storagePhoneNumber",inhoud.phonenumber);
    localStorage.setItem("storageAge",inhoud.age);
    localStorage.setItem("storageHobbies",inhoud.hobbies);


}