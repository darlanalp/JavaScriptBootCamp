function clicou(){    
    document.getElementById("agradecimento").innerHTML = "<b> legal </b>";
}
function redirecionar(){
 window.open("https://globallab.org/en/#.YKxVlqhKjIU");
}

function  trocar(elemento){
    elemento.innerHTML = "<b> Trocou legal </b>";    
}

function  voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";    
}
function load(){
    alert("Carregou");
}
function selecionar(elemento){
    alert(elemento.value);
}
/*
function soma(n1, n2){
    return n1+n2;
}

function validaIdade(idade){    
    return idade >= 18;
}

var idade = prompt("Qual sua idade");
alert(validaIdade(idade));
*/
/*var data = new Date();
alert(data.getMonth()+1);
alert("Minuto:"+data.getMinutes());
*/

/*var d = new Date();
alert(d.getDate()+"/"+(d.getMonth()+1));
/*
for (let index = 0; index < 5; index++) {
    alert(index);
    index++;    
}
*/

/*
var count = 0;
while (count < 5) {
    alert(count);
    count++;
}
*/
/*
var idade = prompt("Qual é a sua idade?");

if(idade > 18)
   alert("Maior de idade");
else
   alert("Menor de idade");
*/

/*
var frutas =[{nome:"uva", cor:"Roxo"},
             {nome:"morango", cor:"vermelho"}]
alert(frutas[1].nome +" "+frutas[1].cor );
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
alert(fruta.cor);
*/
/*
var lista =["Maça", "Pera", "Laranja"]
alert(lista[1]);
lista.push("Uva");
alert(lista);
//lista.pop(); //remove o ultimo elemento
//alert(lista);
alert(lista.reverse()); //Retorna os elementos ao contrário
alert(lista.toString());
alert(lista.join(" | "));
*/

/*var nome = "Darlan"
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

//alert("Nome: "+ nome+ " tem "+idade);

alert(frase.replace("Japão","Brasil"));
alert(frase.toUpperCase());
alert(frase.toLocaleLowerCase());
alert(n1 * n2);
alert(n1 * idade); */