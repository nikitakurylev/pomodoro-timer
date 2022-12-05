import { StatusBarAlignment, StatusBarItem, window } from "vscode";
class Timer {
	private _statusBarText: StatusBarItem;
	public isTicking: boolean;

	constructor(public currentTime: number = 25, public interval: number = 1000) {
		this._statusBarText = window.createStatusBarItem(StatusBarAlignment.Left);
		this._statusBarText.show();
		setInterval(this.tick, interval, this);
		this.isTicking = false;
	}

	public reset(time: number) {
		this.stop();
		this.currentTime = time;
		this.show();
	}

	public start() {
		window.showInformationMessage('Timer start!');
		this.isTicking = true;
	}

	public stop() {
		this.isTicking = false;
	}

	private tick(timer: Timer) {
		if (timer.isTicking) {
			timer.currentTime -= timer.interval / 60000;
			if(timer.currentTime <= 0){
				window.showInformationMessage('Time\'s up!');
				timer.isTicking = false;
			}
			timer.show();
		}
	}

	public show() {
		this._statusBarText.text = Math.floor(this.currentTime) + ":" + Math.floor(this.currentTime * 60 % 60);
		this._statusBarText.show();
	}
}

export default Timer;