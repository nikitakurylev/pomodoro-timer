import * as vscode from 'vscode';
import Timer from './timer';

export function activate(context: vscode.ExtensionContext) {
	const timer = new Timer();

	const startDisposable = vscode.commands.registerCommand("pomodoro-timer.start", () => {
		timer.start();
	});

	const stopDisposable = vscode.commands.registerCommand("pomodoro-timer.stop", () => {
		timer.stop();
	});

	const resetDisposable = vscode.commands.registerCommand("pomodoro-timer.reset", () => {
		timer.reset(25);
	});

	context.subscriptions.push(startDisposable, stopDisposable, resetDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
