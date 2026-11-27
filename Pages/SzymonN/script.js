document.getElementById('ageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('birthYear').value.trim();
    const resultDiv = document.getElementById('result');
    const currentYear = new Date().getFullYear();
    const birthYear  = Number(input);

    if(input == '' || isNaN(birthYear) || !Number.isInteger(birthYear) || birthYear < 1900 || birthYear > currentYear)
    {
        resultDiv.innerHTML = '<span class="error">Błędnie wpisane dane!!</span>';
        return;
    }

    const age = currentYear - birthYear;
    let res = "Masz " + age + " lat!";

    if(age >= 18)
    {
        res += '  Jesteś pełnoletni!';
    }

    resultDiv.innerHTML = res;
});