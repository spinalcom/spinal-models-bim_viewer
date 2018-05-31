const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;


class SpinalBIMObject extends globalType.Model {
  constructor(_id, _name, _group ,_display, _color, name = "SpinalBIMObject") {
    super();
    if (FileSystem._sig_server) {
      this.add_attr({
        id: _id || 0,
        name: _name || "",
        group: new Ptr(_group),
        display: _display || true,
        color: _color || ""
      });
    }
  }

  getGroupExternalId() {
    return this.group.data.value;
  }

  setId(_id) {
    this.id.set(_id);
  }
  getId() {
    this.id.get();
  }

  setName(_name) {
    this.name.set(_name);
  }
  getName() {
    this.name.get();
  }

  setGroup(_group) {
    this.group.set(_group);
  }
  getGroup() {
    this.group.get();
  }

  setDisplay(_display) {
    this.display.set(_display);
  }
  getDisplay() {
    this.display.get();
  }

  setColor(_color) {
    this.color.set(_color);
  }
  getColor() {
    this.color.get();
  }


}
module.exports = SpinalBIMObject;
spinalCore.register_models([SpinalBIMObject])
