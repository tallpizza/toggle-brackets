# Toggle Brackets VS Code Extension

The "Toggle Brackets" extension for Visual Studio Code provides developers with a convenient way to cycle through different types of brackets in their code. Similar to the "Toggle Quotes" extension, which allows users to cycle between different quote characters, "Toggle Brackets" lets users quickly switch between parenthesis `()`, braces `{}`, and square brackets `[]` with a simple keyboard shortcut.

## Features

- **Bracket Cycling:** Place the cursor inside or next to any bracket pair (`()`, `{}`, `[]`) and use the keyboard shortcut `Cmd+Shift+"` to cycle through these bracket types.
- **Code Efficiency:** Quickly adapt and change bracket types to match your coding requirements without manually deleting and retyping brackets.
- **Multi-line Support:** The extension intelligently identifies matching bracket pairs even when they span multiple lines or are nested within each other.

## Usage

After installing the extension, place your cursor on or inside a bracket pair and press `Cmd+Shift+"`. The extension will identify the closest surrounding bracket pair and cycle it through the sequence: round brackets `()`, curly braces `{}`, and square brackets `[]`.

## Keyboard Shortcut

The default keyboard shortcut for cycling through brackets is `Cmd+Shift+"`. You can customize this shortcut in VS Code's keyboard shortcut settings if necessary.

## Example

Here's a simple illustration showing the extension in action:

Before using the shortcut:
```
const someFunction = () => {
  return "hello world"
              ^
}
```

After pressing `Cmd+Shift+"` twice:
```
const someFunction = () => (
  return "hello world"
)
```

## Acknowledgments

Brackets icons used in this extension were created by Laura Reen and are available on [Flaticon](https://www.flaticon.com/free-icons/brakets).
