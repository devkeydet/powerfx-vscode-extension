import * as vscode from 'vscode';
import { registerHoverProvider } from './hoverProvider';
import { registerCompletionItemProvider } from './completionProvider'; // Import the completion provider
import { registerYamlSupport } from './yamlSupport'; // Import the YAML support

export function activate(context: vscode.ExtensionContext) {
    // Register HoverProvider and CompletionItemProvider
    registerHoverProvider(context);
    registerCompletionItemProvider(context); // Register IntelliSense
    registerYamlSupport(context); // Register YAML support
}

export function deactivate() {}
