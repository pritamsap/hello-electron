const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  new BrowserWindow({ width: 400, height: 300 }).loadFile('index.html');
});

app.on('window-all-closed', () => app.quit());
