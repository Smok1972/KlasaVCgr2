function znajdz(){

    let tekst = document.getElementById("liczby").value;

    if(tekst.trim() === "")
    {
        document.getElementById("wynik").innerHTML = "Wpisz liczby!!"
        return;
    }

    let tablica = tekst.split(",");

    for (let i =0; i < tablica.length; i++)
    {
        if (tablica[i].trim() == "" || !Number.isInteger(Number(tablica[i].trim())))
        {
            document.getElementById("wynik").innerHTML = "Wpisz tylko liczby całkowite!!";
            return;
        }
    }

    let min = Number(tablica[0]);

    for (let i = 1; i< tablica.length; i++){
        let liczba = Number(tablica[i]);
        if(liczba < min){
            min = liczba;
        }
    }
    
    document.getElementById("wynik").innerHTML = "Najmniejsza liczba to: " + min;
}