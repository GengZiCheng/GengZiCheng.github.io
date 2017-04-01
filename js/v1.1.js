window.onload = function(){
  showbox(); 
};

moveLeft = function(obj,old,now){
  
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    
    var iSpeed = (now - old)/10;
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    
    if(now == old){
      clearInterval(obj.timer);
    }
    else{
      old += iSpeed;
      obj.style.left = old + 'px';
    }
    
  },30);
  
};

showbox = function(){
  var sbox = document.getElementById('content');
  var sul = sbox.getElementsByTagName('ul')[0];
  var sli = sul.getElementsByTagName('li');

  var sprev = document.getElementById('prev');
  var snext = document.getElementById('next');

  sul.style.width = sli.length * sli[0].offsetWidth + 'px';

  var snow = 0;
  
  // sul.innerHTML += sul.innerHTML;
  
  sul.style.width = sli.length * sli[0].offsetWidth + 'px';
  
  sprev.onclick = function(){
    
    if(snow == 0){
      snow = sli.length/2;
      sul.style.left = -sul.offsetWidth/2 + 'px';
    }
    
    moveLeft(sul,-snow*sli[0].offsetWidth,-(snow-1)*sli[0].offsetWidth);
    
    snow--;
    
  };
  
  snext.onclick = function(){
    
    if(snow == sli.length/2){
      snow = 0;
      sul.style.left = 0;
    }
    
    moveLeft(sul,-snow*sli[0].offsetWidth,-(snow+1)*sli[0].offsetWidth);
    
    snow++;
    
   };
};






