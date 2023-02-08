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
    template: { default: '' },
    keyCode: { default: 32 }
  },

  init: function () {
    // Do something when component first attached.
    this.self = this;
    this.classname_element;
    this.box_element;
    this.newclassname;

    // this.el.setAttribute('position' , this.el.getAttribute('position'));
    // this.createBox();
    // this.createClassName();

    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener("keyup", this.onKeyUp);
  },

  update: function (oldData) {
    // Do something when component's data is updated.

    // if(oldData.classname){
    //   this.renameClassName();
    // }   
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },

  createBox: function(){
    this.box_element = document.createElement('a-box');
    this.box_element.classList.add('umlclass-box');
    this.box_element.setAttribute('scale' , '1 0.5 0.1');
    this.box_element.setAttribute('color' , this.data.color);
    // this.el.append(this.box_element);
  },

  createClassName: function(){
    this.classname_element = document.createElement('a-text');
    this.classname_element.classList.add('umlclass-classname');
    this.classname_element.setAttribute('value', this.data.classname);
    this.classname_element.setAttribute('position','0 0 0.1');
    this.classname_element.setAttribute('align','center');
    this.classname_element.setAttribute('width','2.5');
    // this.el.append(this.classname_element);
  },

  NAFregister: function(el){
    NAF.utils.getNetworkedEntity(el).then((networkedEl) => {
      document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: el}}));
    });
  },

  renameClassName: function(){
    this.classname_element.setAttribute('value' , this.data.classname);
    // console.log('name changed to', this.data.classname);
  },

  onKeyUp: function(e){
    if (this.data.keyCode === e.keyCode) {
      this.createBox();
      const el = this.box_element;
      this.el.sceneEl.appendChild(el);
      el.setAttribute('position', this.el.getAttribute('position'));
      el.setAttribute('networked', {persistent: true, template: this.data.template});
      NAF.utils.getNetworkedEntity(el).then((networkedEl) => {
        document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: el}}));
      });
      // this.createBox();
      // this.createClassName();
      // el.appendChild(this.box_element);
      // el.appendChild(this.classname_element);
    }
  }
});
