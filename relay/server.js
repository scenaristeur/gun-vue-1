import express from "express";
import Gun from "gun";
import qr from "qrcode-terminal";
import ip from "ip";

export default {
  initiated: false,
  init({
    host,
    store = false,
    port = 4200,
    path = "public",
    showQr = false,
  } = {}) {
    if (this.initiated) return;
    this.initiated = true;

    var app = express();
    app.use(express.static(path));
    var server = app.listen(port);

    const gun = Gun({
      file: "store",
      radisk: store,
      web: server,
    });

    if (!host) host = ip.address();
    const link = "http://" + host + (port ? ":" + port : "");
    let totalConnections = 0;
    let activeWires = 0;

    const db = gun.get(host);

    setInterval(() => {
      db.get("pulse").put(Date.now());
    }, 500);

    gun.on("hi", (ev) => {
      totalConnections += 1;
      db.get("totalConnections").put(totalConnections);
      activeWires += 1;
      db.get("activeWires").put(activeWires);
    });

    gun.on("bye", (ev) => {
      activeWires -= 1;
      db.get("activeWires").put(activeWires);
    });

    db.get("host").put(host);
    db.get("port").put(port);
    db.get("link").put(link);
    db.get("store").put(store);
    db.get("status").put("running");
    db.get("started").put(Date.now());

    console.log("Server started at " + link);
    console.log("Gun peer link is " + link + "/gun");
    console.log("Data storage is " + (store ? "enabled" : "disabled"));

    if (showQr) {
      console.log("----------");
      qr.generate(link);
      console.log("----------");
    }

    return { app, db };
  },
};
