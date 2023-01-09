let contador = 0;
document.getElementById('anyadir').addEventListener('click', function(){
    let texto = document.getElementById('texto').value;
    localStorage.setItem('tarea'+contador , texto.toString());
    contador++;
})
