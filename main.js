

  
/*-------------nav bar---------------------*/

let mainNavBar = document.querySelector('.mainNavBar');
let menuBars = document.querySelector('.navBtnRty');

menuBars.onclick = function(){
   mainNavBar.style.display="block";
   if(mainNavBar.style.right=="-210px"){
      mainNavBar.style.right="0";
      
   }
   else{
      mainNavBar.style.right="-210px"
   }
}



/*----------------------this is the script for the project section--------------*/
    
let project_page = document.querySelectorAll('.project_img img');
let popup_image = document.querySelector('.popup-image')
let popup_img = document.querySelector('.popup-image img')
let pop=document.querySelector('.pop')


project_page.forEach(image=>{
  image.addEventListener('click',()=>{
    popup_image.style.display='block'
    popup_img.src= image.getAttribute('src')
  })
});

pop.addEventListener('click',()=>{
  popup_image.style.display='none'
});



 /*----------------contact form script--------------------------*/

