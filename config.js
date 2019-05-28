document.getElementById('config-form').onsubmit = function() {
  on(); 
  let message = document.getElementById("messagemaster");
  message.innerHTML = "<br> <a>Your settings are done and you may return </a><div id='linkToConfig'><a href='index.html' >HOME</a>   </div>";
  return false;
  
};
function on(){
    let channel = new BroadcastChannel('StevesTimeMachineToTalkWithMachineGods');
let  master = [];
    let otsikko = document.getElementById("otsikko").value;
let time = document.getElementById("time").value;
let date = document.getElementById("date").value;
let message = document.getElementById("message").value;
localStorage.setItem('otsikko',otsikko);
localStorage.setItem('time',time);
localStorage.setItem('dateCon',date);
localStorage.setItem('date',date+" "+time);
localStorage.setItem('message',message);    
TimeDate = date.concat(" "+time);
master.push(otsikko,TimeDate,message)
channel.postMessage(master);
}
if(typeof localStorage.getItem('otsikko').length == 0 ){
    printTop.innerHTML = "";
  }else{
    document.getElementById("otsikko").value = localStorage.getItem('otsikko'); 
    document.getElementById("date").value = localStorage.getItem('dateCon'); 
    document.getElementById("time").value = localStorage.getItem('time'); 
    document.getElementById("message").value = localStorage.getItem('message'); 
  }