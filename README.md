# Toggle Brackets VS Code Extension

The "Toggle Brackets" extension for Visual Studio Code provides developers with a convenient way to cycle through different types of brackets in their code. Similar to the "Toggle Quotes" extension, which allows users to cycle between different quote characters, "Toggle Brackets" lets users quickly switch between parenthesis `()`, braces `{}`, and square brackets `[]` with a simple keyboard shortcut.

## Features

- **Bracket Cycling:** Place the cursor inside or next to any bracket pair (`()`, `{}`, `[]`) and use the keyboard shortcut `Ctrl+Shift+[` to cycle through these bracket types.
- **Code Efficiency:** Quickly adapt and change bracket types to match your coding requirements without manually deleting and retyping brackets.
- **Multi-line Support:** The extension intelligently identifies matching bracket pairs even when they span multiple lines or are nested within each other.

## Usage

After installing the extension, place your cursor on or inside a bracket pair and press `Ctrl+Shift+[`. The extension will identify the closest surrounding bracket pair and cycle it through the sequence: round brackets `()`, curly braces `{}`, and square brackets `[]`.

## Installation

1. Open Visual Studio Code.
2. Press `Ctrl+P` to open the Quick Open dialog.
3. Type `ext install toggle-brackets` to find the extension.
4. Click the Install button, then the Enable button.

## Keyboard Shortcut

The default keyboard shortcut for cycling through brackets is `Ctrl+Shift+[`. You can customize this shortcut in VS Code's keyboard shortcut settings if necessary.

## Example

Here's a simple illustration showing the extension in action:

Before using the shortcut:
```
if (condition) {
      ^
executeFunction();
}
```

After pressing `Ctrl+Shift+[` once:
```
if {condition} {
executeFunction();
}
```