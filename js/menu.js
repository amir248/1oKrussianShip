document.querySelector('.menu').addEventListener('click',()=>{
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
  z-index:4;
  `
  menuOpen.setAttribute('id','menu');
  menuOpen.innerHTML='there will be a menu here';

  document.querySelector('nav').prepend(menuOpen);
  document.getElementById('menu').addEventListener('click',()=>{
    document.querySelector("#menu").remove();
  });
});
