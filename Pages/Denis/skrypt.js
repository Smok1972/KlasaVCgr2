function szukaj(){
    let tab = document.getElementById("liczby").value.split(",");
    let max = Number(tab[0]);

    for (let i = 0; i < tab.length; i++) {
        if (Number(tab[i]) > max) {
            max = Number(tab[i]);
        }
    }
    document.getElementById("wynik").innerHTML = "Największa liczba: " + max;
}