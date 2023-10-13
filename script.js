const cvBtn = document.getElementById('cv');
const url =  'https://drive.google.com/file/d/1A3CDfTW4-Py7Z4Uo94u3G5fHtTZGh94Q/view?usp=sharing'

cvBtn.addEventListener('click', function (){
    window.open(url, '_blank');
})
