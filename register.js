//1.Handle the click of the register button.
//2.Read the data of the controls.


var controls = {};
controls.firstName = document.getElementById("txtFirstName");
controls.lastName = document.getElementById("txtLastName");
controls.middleName = document.getElementById("txtMiddleName");


function readData() {
    //alert("I am clicked");
    //browser converts the html into an object.
    //that object is called document.

    var person = {};
    person.firstName = controls.firstName.value;
    person.lastName = controls.lastName.value;
    person.middleName = controls.middleName.value;
    console.log(person);
}

//Selectors of douments
// byId        -- to get the unique element.
// byName      -- to get the elements 
// byTagName   -- to get the elements by tagName
// byClassName --  to get the elements by classname
