const midi = require('midi');
const robot = require("robotjs");

const input = new midi.Input();

console.log(`Connected to ${input.getPortName(0)}`);

input.on('message', (deltaTime, message) => {

  console.log(`m: ${message} d: ${deltaTime}`);

  if (message[1] == 58) {
    if (message[0] == 144) {
      robot.keyToggle("u", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("u", "up");
    }
  } else if (message[1] == 51) {
    if (message[0] == 144) {
      robot.keyToggle("e", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("e", "up");
    }
  } else if (message[1] == 46) {
    if (message[0] == 144) {
      robot.keyToggle("q", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("q", "up");
    }
  } else if (message[1] == 47) {
    if (message[0] == 144) {
      robot.keyToggle("a", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("a", "up");
    }
  } else if (message[1] == 49) {
    if (message[0] == 144) {
      robot.keyToggle("w", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("w", "up");
    }
  } else if (message[1] == 48) {
    if (message[0] == 144) {
      robot.keyToggle("s", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("s", "up");
    }
  } else if (message[1] == 50) {
    if (message[0] == 144) {
      robot.keyToggle("d", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("d", "up");
    }
  } else if (message[1] == 52) {
    if (message[0] == 144) {
      robot.keyToggle("r", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("r", "up");
    }
  } else if (message[1] == 53) {
    if (message[0] == 144) {
      robot.keyToggle("f", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("f", "up");
    }
  } else if (message[1] == 54) {
    if (message[0] == 144) {
      robot.keyToggle("t", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("t", "up");
    }
  } else if (message[1] == 55) {
    if (message[0] == 144) {
      robot.keyToggle("g", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("g", "up");
    }
  } else if (message[1] == 56) {
    if (message[0] == 144) {
      robot.keyToggle("y", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("y", "up");
    }
  } else if (message[1] == 57) {
    if (message[0] == 144) {
      robot.keyToggle("h", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("h", "up");
    }
  } else if (message[1] == 59) {
    if (message[0] == 144) {
      robot.keyToggle("j", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("j", "up");
    }
  } else if (message[1] == 61) {
    if (message[0] == 144) {
      robot.keyToggle("i", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("i", "up");
    }
  } else if (message[1] == 60) {
    if (message[0] == 144) {
      robot.keyToggle("k", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("k", "up");
    }
  } else if (message[1] == 63) {
    if (message[0] == 144) {
      robot.keyToggle("o", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("o", "up");
    }
  } else if (message[1] == 62) {
    if (message[0] == 144) {
      robot.keyToggle("l", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("l", "up");
    }
  } else if (message[1] == 64) {
    if (message[0] == 144) {
      robot.keyToggle("p", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("p", "up");
    }
  } else if (message[1] == 65) {
    if (message[0] == 144) {
      robot.keyToggle(";", "down");
    } else if (message[0] == 128) {
      robot.keyToggle(";", "up");
    }
  } else if (message[1] == 66) {
    if (message[0] == 144) {
      robot.keyToggle("n", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("n", "up");
    }
  } else if (message[1] == 67) {
    if (message[0] == 144) {
      robot.keyToggle("space", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("space", "up");
    }
  } else if (message[1] == 69) {
    if (message[0] == 144) {
      robot.keyToggle("enter", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("enter", "up");
    }
  } else if (message[1] == 41) {
    if (message[0] == 144) {
      robot.keyToggle("z", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("z", "up");
    }
  } else if (message[1] == 42) {
    if (message[0] == 144) {
      robot.keyToggle("x", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("x", "up");
    }
  } else if (message[1] == 43) {
    if (message[0] == 144) {
      robot.keyToggle("c", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("c", "up");
    }
  }  else if (message[1] == 44) {
    if (message[0] == 144) {
      robot.keyToggle("v", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("v", "up");
    }
  }  else if (message[1] == 45) {
    if (message[0] == 144) {
      robot.keyToggle("b", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("b", "up");
    }
  } else if (message[1] == 71) {
    if (message[0] == 144) {
      robot.keyToggle(".", "down");
    } else if (message[0] == 128) {
      robot.keyToggle(".", "up");
    }
  } else if (message[1] == 68) {
    if (message[0] == 144) {
      robot.keyToggle("m", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("m", "up");
    }
  } else if (message[1] == 72) {
    if (message[0] == 144) {
      robot.keyToggle("backspace", "down");
    } else if (message[0] == 128) {
      robot.keyToggle("backspace", "up");
    }
  } else if (message[1] == 70) {
    if (message[0] == 144) {
      robot.keyToggle(",", "down");
    } else if (message[0] == 128) {
      robot.keyToggle(",", "up");
    }
  }
});

input.openPort(0);

setTimeout(function() {
  input.closePort();
}, 2147483647);
