let num = 545
function verificar(params) {
    let num1 = document.querySelector("#n1");
    let p = document.querySelector("#resultado");
    let divImg= document.querySelector("#img");
    divImg.innerHTML = '<img src="../IMG/loboo.jpg " /alt="error"/>'
    let valor = num1.value;
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(num1);
    console.log(num);
}


