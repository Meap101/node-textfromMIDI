const midi = require('midi');
const robot = require("robotjs");
const fs = require('node:fs');

const keybinds = require('./keybinds.json');

const input = new midi.Input();

var stdin = process.openStdin();

var logInput = false;
var binding = false;

var bindingMidi = -1;
var bindingChannel = -1;

console.log(`Connected to ${input.getPortName(0)}`);

input.on('message', (deltaTime, message) => {

  if (logInput) {
    console.log(`Received midi note ${message[1]} deltaTime: ${deltaTime}`);
  }

  if (binding) {
    bindingMidi = message[1];
    bindingChannel = message[0] - 143;

    binding = false;

    console.log("Now type the computer key you would like to bind to note to")
  } else {
    keybinds.map(keybind => {
      if (message[1] === keybind.midiKey) {
        if (message[0] === keybind.midiChannel + 143) {
          robot.keyToggle(keybind.keyBind, "down");
        } else if (message[0] === keybind.midiChannel + 127) {
          robot.keyToggle(keybind.keyBind, "up");
        }
      }
    })
  }
});

input.openPort(0);

stdin.addListener("data", function(d) {
  if (d.toString().trim() === "console") {
    logInput = true;
  }
  else if (d.toString().trim() === "bind") {
    binding = true;
    console.log("Press the MIDI key you would like to bind")
  }
  else if (bindingMidi !== -1) {
    keybinds.push({ midiKey: bindingMidi, keyBind: d.toString().trim(), midiChannel: bindingChannel})

    fs.writeFile("./keybinds.json", JSON.stringify(keybinds), "utf8", (err) => {
      if (err) { console.log(err) }
    });

    bindingMidi = -1;
    bindingChannel = -1;
  }
});
