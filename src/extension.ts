import * as vscode from 'vscode';
import * as path from 'path';

export async function activate(context: vscode.ExtensionContext) {
    const copyMarkdown = vscode.commands.registerCommand('extension.copyMarkdown', async () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) return;

        const document = editor.document;
        const selection = editor.selection;
        const selectedText = document.getText(selection);

        const fileExtension = path.extname(document.fileName).slice(1);

        const modifiedText = `\`\`\`${fileExtension}\n${selectedText}\n\`\`\``;

        await vscode.env.clipboard.writeText(modifiedText);
        vscode.window.showInformationMessage('Code copied to clipboard');
    });

    context.subscriptions.push(copyMarkdown);
}

export function deactivate() {}
