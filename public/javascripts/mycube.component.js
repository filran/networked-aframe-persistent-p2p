AFRAME.registerPrimitive('a-mycube',{
  defaultComponents: {
    'a-mycube-component': {},
  },
  mappings: {
    
  }
});


AFRAME.registerComponent('a-mycube-component', {
  schema: {
    position: {type:'vec3'},
    material: {type:'string'},
  },

  init: function () {
    // NAF.utils.getNetworkedEntity(this.el).then((networkedEl) => {
    //   document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: this.el}}));
    // });
  },

  update: function () {
    // Do something when component's data is updated.

    setTimeout(()=>{
      const box = document.createElement('a-box');
      // box.setAttribute('position', this.data.position);

      console.log('position', this.data.position);
      console.log('this.el.position', this.el.getAttribute('position'));
      console.log('material', this.data.material);
    },1);
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
