// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "toggle-brackets" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "toggle-brackets.helloWorld",
    () => {
      toggle();
    }
  );

  context.subscriptions.push(disposable);
}

const toggle = async () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage("No editor is active");
    return;
  }

  const doc = editor.document;
  const cursorPosition = editor.selection.active;

  const bracketTransform: { [index: string]: string } = {
    "(": "{",
    "{": "[",
    "[": "(",
    ")": "}",
    "}": "]",
    "]": ")",
  };

  const bracketPairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Initialize variables for bracket search
  let openingBracket: string | null = null;
  let closingBracket: string | null = null;
  let openingPos: vscode.Position | null = null;
  let closingPos: vscode.Position | null = null;

  const updateBracketPair = async () => {
    if (!openingBracket || !closingBracket || !openingPos || !closingPos) {
      return;
    }
    const openingRange = new vscode.Range(
      openingPos,
      new vscode.Position(openingPos.line, openingPos.character + 1)
    );
    const closingRange = new vscode.Range(
      closingPos,
      new vscode.Position(closingPos.line, closingPos.character + 1)
    );

    await editor.edit((editBuilder) => {
      editBuilder.replace(openingRange, bracketTransform[openingBracket!]);
      editBuilder.replace(closingRange, bracketTransform[closingBracket!]);
    });
  };

  lineLoop: for (let line = cursorPosition.line; line >= 0; line--) {
    let lineText = doc.lineAt(line).text;
    let startCharIdx =
      line === cursorPosition.line ? cursorPosition.character : lineText.length;
    characterLoop: for (
      let charIdx = startCharIdx - 1;
      charIdx >= 0;
      charIdx--
    ) {
      if (Object.keys(bracketPairs).includes(lineText[charIdx])) {
        openingBracket = lineText[charIdx];
        openingPos = new vscode.Position(line, charIdx);

        // Depth counter to handle nested brackets
        let depth = 1;
        for (
          let closingLine = line;
          closingLine < doc.lineCount;
          closingLine++
        ) {
          let closingLineText = doc.lineAt(closingLine).text;
          let closingStartCharIdx = closingLine === line ? charIdx + 1 : 0;
          for (
            let closingCharIdx = closingStartCharIdx;
            closingCharIdx < closingLineText.length;
            closingCharIdx++
          ) {
            if (closingLineText[closingCharIdx] === openingBracket) {
              depth++;
            } else if (
              closingLineText[closingCharIdx] === bracketPairs[openingBracket]
            ) {
              depth--;
              if (depth === 0) {
                // Matching closing bracket found
                closingPos = new vscode.Position(closingLine, closingCharIdx);
                closingBracket = closingLineText[closingCharIdx];

                if (closingPos.isBefore(cursorPosition)) {
                  continue characterLoop;
                }

                updateBracketPair();
                return;
              }
            }
          }
        }
        continue lineLoop;
      }
    }
  }

  vscode.window.showInformationMessage("Matching bracket pair not found.");
};

// This method is called when your extension is deactivated
export function deactivate() {}
