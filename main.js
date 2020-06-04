var keys = ["Eartinq"]

function verify(){
    var textfield = document.getElementById("licenceinput")
    if (keys.includes(textfield.value)){
        document.getElementById("licenceinput").style.display = "none"
        document.getElementById("veriftext").style.display = "block"
        document.getElementById("veriftext").style.color = "#4dff4d"
        document.getElementById("veriftext").innerHTML = "Licence valide"
        document.getElementById("verif").style.display = "none"
        document.getElementById("cydia").style.display = "flex"
        document.getElementById("site").style.display = "flex"
    }else{
        document.getElementById("veriftext").style.display = "block"
    }
}