// AFRAME.registerComponent('umlclass-template', {
//   schema: {
    
//   },

//   init: function () {
//     // Do something when component first attached.
//     this.classbox = document.createElement('a-box');
//     this.classname = document.createElement('a-text');

//     this.classbox.classList.add('umlclass-box');
//     this.classbox.classList.add('raycastable');
//     this.classbox.setAttribute('color-changer' , '');
//     this.classbox.setAttribute('scale' , '1 0.5 0.1');
//     this.classbox.setAttribute('color' , 'orange');

//     this.classname = document.createElement('a-text');
//     this.classname.classList.add('umlclass-classname');
//     this.classname.setAttribute('value', 'Enter class name');
//     this.classname.setAttribute('position','0 0 0.1');
//     this.classname.setAttribute('align','center');
//     this.classname.setAttribute('width','2.5');

//     console.log('opa');

//     // setTimeout(()=>{
//     //   this.el.append(this.classbox);
//     //   this.el.append(this.classname);
//     // },1);
//   },

//   update: function () {
//     // Do something when component's data is updated.
//   }
// });



AFRAME.registerPrimitive('a-umlclass',{
  defaultComponents: {
    'a-umlclass-component':{},
  },
  mappings: {
    classname: 'a-umlclass-component.classname'
  },
});

AFRAME.registerComponent('a-umlclass-component', {
  schema: {
    color:{type:'string', default:'red'},
    classname:{type:'string', default:'Class name'},
    
    template: { default: '' },
    keyCode: { default: 32 }
  },

  init: function () {
    // Do something when component first attached.
    this.self = this;
    this.box_element;
    this.classname_element;
    this.newclassname;

    this.el.setAttribute('position' , {x:this.getRandomFloat(-5,5), y:this.getRandomFloat(.3,2), z:this.getRandomFloat(-5,5)});

    // this.createBox();
    // this.createClassName();
  },

  update: function (oldData) {
    // Do something when component's data is updated.       
    // if(oldData.classname){
    //   this.renameClassName();
    // }   
  },

  createBox: function(){
    this.box_element = document.createElement('a-box');
    this.box_element.classList.add('umlclass-box');
    this.box_element.classList.add('raycastable');
    this.box_element.setAttribute('color-changer' , '');
    this.box_element.setAttribute('scale' , '1 0.5 0.1');
    this.box_element.setAttribute('color' , this.data.color);
    this.el.append(this.box_element);
  },

  createClassName: function(){
    this.classname_element = document.createElement('a-text');
    this.classname_element.classList.add('umlclass-classname');
    this.classname_element.setAttribute('value', this.data.classname);
    this.classname_element.setAttribute('position','0 0 0.1');
    this.classname_element.setAttribute('align','center');
    this.classname_element.setAttribute('width','2.5');
    this.el.append(this.classname_element);
  },

  getRandomFloat: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  NAFregister: function(el){
    NAF.utils.getNetworkedEntity(el).then((networkedEl) => {
      document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: el}}));
    });
  },

  events:{
    click:function(){
      const newclassname = prompt('Enter class name');
      if(newclassname){
        const atext = this.el.childNodes[1];
        atext.setAttribute('value' , newclassname);
      }
    }
  },

  renameClassName: function(){
    this.classname_element.setAttribute('value' , this.data.classname);
    // console.log('name changed to', this.data.classname);
  },

  onKeyUp: function(e){
    if (this.data.keyCode === e.keyCode) {

    }
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },


});
