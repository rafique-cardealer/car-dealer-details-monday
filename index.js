// Toast

var option = {
    animation: true, 
    delay: 2000, // 2 sec 
  
  } 
  
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, option)
  })
  
  
  function see(){ 
  for(var i=0;<toastList.length;i++){
    toastList[i].show() 
  
  }
  