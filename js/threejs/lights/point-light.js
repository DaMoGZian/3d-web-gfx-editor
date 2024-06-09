import * as THREE from "three";

class PointLight extends THREE.PointLight {
  constructor( editor ) {
    super( 0xffffff, 1, 0 );

    this.editor = editor;
    this.eventManager = editor.eventManager;
    this.events = editor.events;

    this.name = "Point Light";

    this.helper = new THREE.PointLightHelper( this, 1 );
    this.editor.sceneHelper.add( this.helper );

    this.setupEvents();
  }

  setupEvents() {
    this.eventManager.add( this.events.objectChanged, this.onObjectChanged.bind( this ) );
  }

  onObjectChanged( event ) {
    const object = event.detail.object;

    if ( object.isPointLight ) {
      this.helper.update();
    }
  }
}

export { PointLight };
