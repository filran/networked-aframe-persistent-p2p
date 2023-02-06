AFRAME.registerPrimitive('a-umlclass',{
  defaultComponents: {
    'a-umlclass-component':{},
  },
  mappings: {
    classname: 'a-umlclass-component.classname',
    color: 'a-umlclass-component.color',
  },
});

AFRAME.registerComponent('a-umlclass-component', {
  schema: {
    classname:{type:'string', default:'Class name'},
    color:{type:'string', default:'red'},
  },

  init: function () {
    // Do something when component first attached.
    this.el.setAttribute('position' , this.el.getAttribute('position'));
  },

  update: function () {
    // Do something when component's data is updated.
    setTimeout(()=>{
      this.createBox();
      this.createClassName();
      this.NAFregister();
    },1);
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },

  createBox: function(){
    const box = document.createElement('a-box');
    box.setAttribute('scale' , '1 0.5 0.1');
    box.setAttribute('color' , this.data.color);
    this.el.append(box);
  },

  createClassName: function(){
    const classname = document.createElement('a-text');
    classname.setAttribute('value', this.data.classname);
    classname.setAttribute('position','0 0 0.1');
    classname.setAttribute('align','center');
    classname.setAttribute('width','2.5');
    this.el.append(classname);
  },

  NAFregister: function(){
    NAF.utils.getNetworkedEntity(this.el).then((networkedEl) => {
      document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: this.el}}));
    });
  }
});
