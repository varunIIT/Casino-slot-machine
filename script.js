
  let slot1=document.getElementById('slot1')
  let slot2=document.getElementById('slot2')
  let slot3=document.getElementById('slot3')


let values=['😀','🤣','😅','😎','😍','😂','🤩','🤐']
function get_random(){
  let i=parseInt(Math.random()*8)
  return i
}


let x
function updateanimation(speed){



  if(x){
    clearInterval(x)
  }
  if(speed!=0){
 x=setInterval(function(){
    slot1.innerText=values[get_random()]
    slot2.innerText=values[get_random()]
    slot3.innerText=values[get_random()]

  },1000/speed+4)
}
else{
  slot1.innerText=values[get_random()]
  slot2.innerText=values[get_random()]
  slot3.innerText=values[get_random()]

}
}

let inp=document.getElementById('inp')
//  inp.onchange=function(ev){
//   document.documentElement.style.setProperty('--speed',ev.target.value)
//   updateanimation(ev.target.value)
//   console.log(typeof ev.target.value)
//  }
let but=document.getElementById('but')
but.onclick=function(){
    let curspeed=parseInt(inp.value)+1;
    let k=setInterval(function()  {  document.documentElement.style.setProperty('--speed',curspeed-1)
      updateanimation(curspeed-1)
    curspeed=curspeed-1
  if(curspeed==0){
    let res=document.getElementsByClassName('res')
    if(slot1.innerText==slot2.innerText&slot2.innerText==slot3.innerText){
      res[0].innerText='you won'
      res[0].style.backgroundColor='green'
    }
    else{

            res[0].innerText='Bad luck,better luck next time'
            res[0].style.backgroundColor='red'
    }
      clearInterval(k)
  }},1000)

}
