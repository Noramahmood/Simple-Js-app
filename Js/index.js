 var imgList =Array.from(document.querySelectorAll('.item img'));
 var lightBoxContainer = document.getElementById('light-box-container');
var lightBoxItem = document.getElementById('light-box-item')
var currEntIndex=0;
var nextBtn=document.getElementById('nextbottom');
var pretBtn=document.getElementById('prevbottom');
var closetBtn=document.getElementById('closebottom');

 for(var i=0;i<imgList.length;i++){
    imgList[i].addEventListener('click' ,function(e){
       lightBoxContainer.classList.replace('d-none' ,'d-flex')
       var imgE = e.target.getAttribute('src');
       lightBoxItem.style.backgroundImage =`url(${imgE})`;
     currEntIndex= imgList.indexOf(e.target);
  } )
}
    
 
  function nextSlide(){
      currEntIndex++;   
      if(currEntIndex > imgList.length-1){ 

      
      currEntIndex=0;}
      var imgSrc = imgList[currEntIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
 }
 function preSlide(){
    currEntIndex --;
    if(currEntIndex<0){ 
        currEntIndex=imgList.length-1;}
   var imgSrc = imgList[currEntIndex].getAttribute('src');
   lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
}
nextBtn.addEventListener('click' ,function(){
    nextSlide();
})
pretBtn.addEventListener('click',function(){
    preSlide();
})
function close(){
    lightBoxContainer.classList.replace('d-flex' ,'d-none');


}
closetBtn.addEventListener('click',function(){
    close()
})
