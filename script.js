document.getElementById("submit").onclick = function () {
    document.getElementById("tab").style.display = "block";
    
    var table = document.getElementById("tab");
    var row = table.insertRow(-1);
    var FName = row.insertCell(0);
    var LName = row.insertCell(1);
    var address = row.insertCell(2);
    var pincode = row.insertCell(3);
    var gender = row.insertCell(4);
    var food = row.insertCell(5);
    var state = row.insertCell(6);
    var country = row.insertCell(7);


    FName.innerHTMl = document.getElementById("First-name").value;
    Lame.innerHTMl = document.getElementById("Last-name").value;
    address.innerHTMl = document.getElementById("address").value;
    pincode.innerHTMl = document.getElementById("pincode").value;
    gender.innerHTMl = document.querySelector('inout[name =gender]:checked').value;
    food.innerHTMl = Array.from(document.querySelectorAll("input[type=checkbox][name=foods]:checked"), e => e.value);
    state.innerHTMl = document.getElementById("state").value;
    country.innerHTMl = document.getElementById("country").value;

    var forms = document.getElementById("form")
    forms.reset ();

    return false;

}