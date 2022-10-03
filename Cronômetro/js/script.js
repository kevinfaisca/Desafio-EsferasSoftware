var display = document.getElementById('display');

var horas = document.getElementById('horas');

var minutos = document.getElementById('minutos');

var segundos = document.getElementById('segundos');

var horaAtual;
var minutoAtual;
var segundoAtual;

var interval;

var rodando =true;


function iniciar(){
    horaAtual = horas.value;
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;
    display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual;
    
    interval = setInterval(function(){
        segundoAtual--;

        if(segundoAtual <=0){
            if(minutoAtual >0){
                minutoAtual--
                segundoAtual=59
                if(horaAtual >0){
                    horaAtual--
                    minutoAtual=59
                }
            }else{
                alert('Cancelado o tempo')
                document.getElementById('sound').play()
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = horaAtual+": "+minutoAtual+": "+segundoAtual;
    },1000)
}

function pausar(){
    clearInterval(interval);

}

function cancelar(){
    horaAtual=0
    minutoAtual=0
    segundoAtual=1
}



for(var i =0; i<=23; i++){
    horas.innerHTML+= '<option value='+i+'>' +i+'</option>';
}

for(var i =0; i<=60; i++){
    minutos.innerHTML+= '<option value='+i+'>' +i+'</option>';
}

for(var i =0; i<=60; i++){
    segundos.innerHTML+= '<option value='+i+'>' +i+'</option>';
}

