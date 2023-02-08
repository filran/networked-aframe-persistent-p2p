const umlclass = document.createElement('a-umlclass');
umlclass.setAttribute('id' , 'umlclass-1');
umlclass.setAttribute('networked' , 'persistent:true; template:#umlclass-template');
document.querySelector('a-scene').append(umlclass);

NAF.utils.getNetworkedEntity(umlclass).then((networkedEl) => {
  document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: umlclass}}));
});

const umlclass2 = document.createElement('a-umlclass');
umlclass2.setAttribute('id' , 'umlclass-2');
umlclass2.setAttribute('networked' , 'persistent:true; template:#umlclass-template');
document.querySelector('a-scene').append(umlclass2);

NAF.utils.getNetworkedEntity(umlclass2).then((networkedEl) => {
  document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: umlclass2}}));
});

const umlclass3 = document.createElement('a-umlclass');
umlclass3.setAttribute('id' , 'umlclass-3');
umlclass3.setAttribute('networked' , 'persistent:true; template:#umlclass-template');
document.querySelector('a-scene').append(umlclass3);

NAF.utils.getNetworkedEntity(umlclass3).then((networkedEl) => {
  document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: umlclass3}}));
});