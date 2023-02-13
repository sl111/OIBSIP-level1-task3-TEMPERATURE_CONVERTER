const convert=()=>{
    const input=document.getElementById('input__temp').value;
    const type=document.getElementById('input__type').value;
    
    let output;
    if (type=='Celsius'){
        output=((input * 9/5) + 32);
        document.getElementById('output__container').innerHTML=`${output} Fahrenhiet`;
    }
    else{
        output=((input-32)/1.8000);
        document.getElementById('output__container').innerHTML=`${output} Celsius`;
    }

    window.addEventListener('keydown',function(event){
        const key=event.key;
        if(key==="Backspace" || key==="Delete"){
            document.getElementById('output__container').innerHTML=``;
        }
    });
}
