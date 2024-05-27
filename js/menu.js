document.querySelector('.menu2').addEventListener('click',()=>{
  menu777();
});
document.querySelector('.menu').addEventListener('click',menu777);
function menuOk(){
  if(document.querySelector('.menu2')){
    // console.log('burger Yest');
    let count = +0;
    document.querySelector('.menu2').onclick=function(){
            count +=1;
            //-----------------
            //------open-close---
            //------------------
            document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
            //-------------------
        if(count<=1){
            document.querySelector("#offmenu").classList.add("openmenu");
                            //---------------------------------
                            document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
                            //--------------------------------
        }else{
            document.querySelector("#offmenu").classList.remove('openmenu');
            count =0;
            console.log("Menu close!");
        }
    }
  }else{
    // console.log('burgeraNet');
  }
}

// //--------------------------------------------------------------
// //--------ОТПРАВИТЬ ЗАПРОС ЧТОБЫ ПОЛУЧИТЬ МЕНЮ------------------
// //--------------------------------------------------------------
let put= `/var/www/html/menu/menu.html`;
let put1= `http://localhost:3700/menu/menu.html`;
let put3;
if(window.location.href=='http://localhost:3700/'||'192.168.0.7'||'https://qucu.ru/'){
  put3=`public_old/menu/menuG.html`;
  // console.log("menuG"+window.location.href);
}else{
  put3=`public_old/menu/menu.html`;
}
function run(){
var xhr = new XMLHttpRequest();
xhr.open("GET", `${put3}`, true);
xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
document.getElementById("menu").innerHTML = this.responseText;
}
}
xhr.send();
}
run();


function menu777(){
  console.log('click');

  let menuOpen=document.createElement('div');
  menuOpen.style.cssText=`
  display:flex;
  position:fixed;
  font-size:33px;
  justify-content:center;
  align-items:center;
  text-shadow:1px 1px black;
  top:0;
  width:100%;
  height:100%;
  background:grey;
  z-index:0;
  `
  menuOpen.setAttribute('id','menu');
  menuOpen.innerHTML='there will be a menu here';
  document.querySelector("#offmenu").classList.add("openmenu");


  document.querySelector('nav').prepend(menuOpen);
  // menuOk();
  document.getElementById('menu').addEventListener('click',()=>{
    document.querySelector("#offmenu").classList.remove('openmenu');

    document.querySelector("#menu").remove();
  });
}
