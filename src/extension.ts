import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let copyMarkdown = vscode.commands.registerCommand('extension.copyMarkdown', async () => {
        let editor = vscode.window.activeTextEditor;

        if (editor) {
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
            vscode.window.showInformationMessage('Code copied to clipboard');
        }
    });

    context.subscriptions.push(copyMarkdown);
}

export function deactivate() {}