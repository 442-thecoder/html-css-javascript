const name = document.getElementById('na')
const email = document.getElementById("em")
const pwd = document.getElementById("pwd")
const Rform= document.getElementById("regForm")
Rform.addEventListener('submit', regFormLogic)
let errors=0
let emailreg='/[A-Za-z0-9]+@[A-Za-z0-9]\.[A-Za-z]{3}/'
function regFormLogic (e)
{
    e.preventDefault();
    console.log("welcome back!")
    console.log(name.value, email.value, pwd.value,)
    if (name.value.trim() == "")
    {
        alert(" enter your name ");
        errors++;
    }
    if (emailreg.match(email.value))
    {
        alert("please enter correct email");
        errors++;
    }
    clearFields();
    if (errors == 0)
        alert("successfully registred")

}
document.getElementById('e1').addEventListener('click', function ()
{
    if (pwd.type == "password")
    {
        pwd.type = "text"
        document.getElementById("e1").classList.replace("fa-eye","fa-eye-slash")
    }
    else
    {
            pwd.type = "password"
        document.getElementById("e1").classList.replace("fa-eye-slash", "fa-eye")

        }
})
function clearFields ()
{
    name.value = "";
    email.value = "";
    pwd.value = "";
    
}
