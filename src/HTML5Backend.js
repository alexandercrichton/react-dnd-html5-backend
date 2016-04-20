import MouseBackend from "./MouseBackend";
import TouchBackend from "./TouchBackend";

export default class HTML5Backend {
  constructor(manager, options = {}) {
    this.mouseBackend = new MouseBackend(manager);
    this.touchBackend = new TouchBackend(manager, options.touch);
  }

  setup() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.constructor.isSetUp) {
      throw new Error('Cannot have two HTML5 backends at the same time.');
    }

    this.constructor.isSetUp = true;

    this.mouseBackend.setup();
    this.touchBackend.setup();
  }

  teardown() {
    if (typeof window === 'undefined') {
      return;
    }

    this.constructor.isSetUp = false;

    this.mouseBackend.teardown();
    this.touchBackend.teardown();
  }

  connectDragPreview(sourceId, node, options) {
    const disconnectMouse = this.mouseBackend.connectDragPreview(sourceId, node, options);
    const disconnectTouch = this.touchBackend.connectDragPreview(sourceId, node, options);

    return () => {
      disconnectMouse();
      disconnectTouch();
    } 
  }

  connectDragSource(sourceId, node, options) {
    const disconnectMouse = this.mouseBackend.connectDragSource(sourceId, node, options);
    const disconnectTouch = this.touchBackend.connectDragSource(sourceId, node, options);

    return () => {
      disconnectMouse();
      disconnectTouch();
    }    
  }

  connectDropTarget(targetId, node) {
    const disconnectMouse = this.mouseBackend.connectDropTarget(targetId, node);
    const disconnectTouch = this.touchBackend.connectDropTarget(targetId, node);

    return () => {
      disconnectMouse();
      disconnectTouch();
    }
  }
}
