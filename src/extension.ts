import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "copywithticks" is now active!');

    let copyWithTicks = vscode.commands.registerCommand('extension.copyWithTicks', () => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let document = editor.document;
            let selection = editor.selection;
            let selectedText = document.getText(selection);
            let modifiedText = `\`\`\`\n${selectedText}\n\`\`\``;
            vscode.env.clipboard.writeText(modifiedText);
            vscode.window.showInformationMessage('Text copied with ticks!');
        }
    });

    context.subscriptions.push(copyWithTicks);
}

export function deactivate() {}
