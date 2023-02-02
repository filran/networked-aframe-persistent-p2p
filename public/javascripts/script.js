const addmycube = document.querySelector('#add-mycube');
addmycube.addEventListener('click', function(){
  var position = getRandomFloat(-5,5,2)+" "+getRandomFloat(-5,5,2)+" "+getRandomFloat(-5,5,2);
  
  const el = document.createElement('a-mycube');
  el.setAttribute('position',position);
  el.setAttribute('color','purple');
  el.setAttribute('template','#mycube-template');

  document.querySelector('a-scene').append(el);
})
