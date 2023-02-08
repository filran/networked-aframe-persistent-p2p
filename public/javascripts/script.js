const addumlclass = document.querySelector('#add-umlclass');

addumlclass.addEventListener('click', function(){

  const position = getRandomFloat(-5,5,2)+" "+getRandomFloat(-5,5,2)+" "+getRandomFloat(-5,5,2);
  const classname = "Class " + getRandomFloat(-5,5,2);
  
  const el = document.createElement('a-umlclass');
  el.setAttribute('classname', classname);
  el.setAttribute('position', position);
  el.setAttribute('networked',{template:'#umlclass-template'});

  document.querySelector('a-scene').append(el);
})