# node-textfromkey

Couldn't find a good app for this compatible universally (it's a little known fact that I have to suffer with the inhibitions of MacOS). It was initially made for quieter typing, but could probably be bound for a lot more uses.

## setup and usage

Pretty straightforward, just `cd` into the directory, run `npm install` (requires node)

to start the app, just run `node index.js`

## binding keys

adding keybinds can be done easily directly through the console. to begin, type the word "bind" into the console (while running the application).

You will be prompted to press the MIDI key you would like to bind (the keybind also keeps track of the MIDI channel used). After doing so, you will then be prompted to type the computer key you would like to bind to. Type any character into the console and you're finished.

Keybinds are stored in keybinds.json, which I have pre-configured a not-so-qwerty keyboard layout into on MIDI channel 1. You may use the MIDI channels as different presets within this app.

## future updates

in the future i might add support for key combinations
also in the future i may actually capitalize and punctuate the readme properly. don't push it though.
