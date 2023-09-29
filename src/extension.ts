import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "copywithticks" is now active!');

    let copyWithTicks = vscode.commands.registerCommand('extension.copyWithTicks', async () => {
        let editor = vscode.window.activeTextEditor;

        if (editor) {
            // Prompt the user for the file extension, and add the current file extension as placeholder

            let document = editor.document;
            let selection = editor.selection;
            let selectedText = document.getText(selection);
            let fileExtension = "";
            const fileName = document.fileName;

            if (fileName.split('.').length > 1) {
                fileExtension = fileName.split('.').pop() as string;
            }

            let modifiedText = `\`\`\`${fileExtension}\n${selectedText}\n\`\`\``;

            vscode.env.clipboard.writeText(modifiedText);
            vscode.window.showInformationMessage('Text copied with ticks and file extension!');
        }
    });

    context.subscriptions.push(copyWithTicks);
}

export function deactivate() {}