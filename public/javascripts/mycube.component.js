AFRAME.registerPrimitive('a-mycube',{
  defaultComponents: {
    'a-mycube-component': {}
  },
  mappings: {
    position: 'a-mycube-component.position',
    color: 'a-mycube-component.color',
    template: 'a-mycube-component.template'
  }
});


AFRAME.registerComponent('a-mycube-component', {
  schema: {
    position: {default:'0 0 0'},
    color: {default:'white'},
    template: { default: '' }
  },

  init: function () {
    this.el.setAttribute('networked', {persistent: true, template:this.data.template});

    const el = document.createElement('a-box');
    el.setAttribute('position', this.data.position);
    el.setAttribute('color', this.data.color);
    this.el.appendChild(el);
    
    NAF.utils.getNetworkedEntity(this.el).then((networkedEl) => {
      document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: this.el}}));
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },

  getRandomFloat: function (min, max) {
    return Math.random() * (max - min) + min;
  }
});
