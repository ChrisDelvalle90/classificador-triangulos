function classificar()
{
    let lado01 = document.getElementById("lado1").value
    let lado02 = document.getElementById("lado2").value
    let lado03 = document.getElementById("lado3").value

    if(lado01 == lado02 && lado01 == lado03)
    {
        alert("Triângulo Equilátero!")
    }
    else if(lado01 == lado02 || lado01 == lado03 || lado03 == lado02)
    {
        alert("Triângulo Isóceles!")
    }
    else
    {
        alert("Triângulo Escaleno!")
    }
}