function save(){
    let elem1 = document.getElementById('nom').value;
    let elem2 = document.getElementById('password').value;

    localStorage.setItem("nom", elem1)
    localStorage.setItem("password", elem2)
}