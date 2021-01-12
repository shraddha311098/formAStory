function store(){
    var animal1= document.getElementById("animal-1").value;
    var animal2=document.getElementById("animal-2").value;
    var animal3=document.getElementById("animal-3").value;
    var adj1=document.getElementById("adj-1").value;
    var verb1=document.getElementById("verb-1").value;
    var number=document.getElementById("num1").value;
    var speed=document.getElementById("quote-choices");
    var quote=document.getElementById("quote");
    var message=document.getElementById("message");
     
    var fillForm= document.querySelector("#fillform");
    fillForm.style.display="none";  

    localStorage.setItem('animal1',animal1);  
    localStorage.setItem('animal2',animal2);
    localStorage.setItem('animal3',animal3);  
    localStorage.setItem('adj1',adj1);  
    localStorage.setItem('verb1',verb1);  
    localStorage.setItem('number',number);  
    localStorage.setItem('speed',speed); 
    localStorage.setItem('quote',quote);
    localStorage.setItem('message',message);
    
    var check1 = document.getElementById('yes').value;
    var check2 = document.getElementById('no').value;

    if(check1!=undefined){
        localStorage.setItem('check1',check1);
        
    }else{
        localStorage.setItem('check2',check2);
    }

    

    var parag= document.querySelector("#para");
    parag.style.display="block"; 

    loading();
}

function loading(){
    var x=localStorage.getItem('animal1');
    console.log(x);
    var aaa=document.getElementsByClassName("1");
    console.log(aaa);

    for(var i=0;i<aaa.length;i++){
        aaa[i].innerHTML=x;   
    } 

    var y=localStorage.getItem('animal2');
    console.log(y);
    var bbb=document.getElementsByClassName("2");
    console.log(bbb);

    for(var i=0;i<bbb.length;i++){
        bbb[i].innerHTML=y;   
    } 

    var z=localStorage.getItem('animal3');
    console.log(z);
    var ccc=document.getElementsByClassName("9");
    console.log(bbb);

    for(var i=0;i<ccc.length;i++){
        ccc[i].innerHTML=z;   
    } 


    var i=localStorage.getItem('adj1');
    console.log(i);
    var ddd=document.getElementsByClassName("3");
    console.log(ddd);

    for(var i=0;i <ddd.length;i++){
        ddd[i].innerHTML=i;   
    } 

    var p=localStorage.getItem('verb1');
    console.log(p);
    var eee=document.getElementsByClassName("4");
    console.log(eee);

    for(var i=0;i <eee.length;i++){
        eee[i].innerHTML=p;   
    } 

    var q=localStorage.getItem('number');
    console.log(q);
    var fff=document.getElementsByClassName("5");
    console.log(fff);

    for(var i=0;i <fff.length;i++){
        fff[i].innerHTML=p;   
    } 

    var r=localStorage.getItem('check1');
    var ggg=document.getElementsByClassName("6");
    ggg.innerHTML=r;

    var s=localStorage.getItem('check2');
    var hhh=document.getElementsByClassName("5");
    hhh.innerHTML=s;

    var u=localStorage.getItem('speed');
    var iii=document.getElementsByClassName("6");
    iii.innerHTML=u;

    var v=localStorage.getItem('quote');
    var jjj=document.getElementsByClassName("7");
    jjj.innerHTML=v;

    var w=localStorage.getItem('message');
    var kkk=document.getElementsByClassName("8");
    kkk.innerHTML=w;
}