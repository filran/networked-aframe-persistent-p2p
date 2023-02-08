AFRAME.registerComponent('new-spawner-persistent', {
  schema: {
    template: { default: '' },
    keyCode: { default: 32 }
  },

  init: function () {
    // Do something when component first attached.
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener("keyup", this.onKeyUp);
  },

  onKeyUp: function(e) {
    if (this.data.keyCode === e.keyCode) {
      const el = document.createElement('a-entity');
      this.el.sceneEl.appendChild(el);
      el.setAttribute('position', this.el.getAttribute('position'));
      el.setAttribute('networked', {persistent: true, template: this.data.template});
      NAF.utils.getNetworkedEntity(el).then((networkedEl) => {
        document.body.dispatchEvent(new CustomEvent('persistentEntityCreated', {detail: {el: el}}));
      });
    }
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
