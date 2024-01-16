var cala=document.querySelector('.registerForm');
var x = document.querySelector('select');
cala.onsubmit=function(e){
    e.preventDefault()
    var inputValue=e.target.elements[0].value;
    var result=0;
    if(x.value=="dollar"){
        result=inputValue/3.7;
    }else if(x.value=="dinar"){
        result=inputValue/5;
    }else{
        result=inputValue*1;
    }
    console.log(result);
    document.querySelector(".addPara").textContent=result;
}