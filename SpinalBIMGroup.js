const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;

class SpinalBIMGroup extends globalType.Model {
  constructor(_name, _BIMObjects, _display, _color, name = "SpinalBIMGroup") {
    super();
    if (FileSystem._sig_server) {
      this.add_attr({
        name: _name || "",
        BIMObjects: _BIMObjects || [],
        display: _display || true,
        color: _color || ""
      });
    }
  }
}

module.exports = SpinalBIMGroup;
spinalCore.register_models([SpinalBIMGroup]);
