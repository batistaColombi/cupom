console.log("Processo principal");
console.log(`Electron: ${process.versions.electron}`);

const { app, ipcMain, BrowserWindow } = require('electron');
const { createMainWindow } = require('./src/public/js/windowManager.js');
const {
    openIndex,
    openCupom,
    openNotificacao,
    openDashboard,
} = require('./src/public/js/windowActions.js');
const { setApplicationMenu } = require('./src/public/js/menuManager.js'); // Importação correta

// IPC Handlers
ipcMain.on('open-Index', openIndex);
ipcMain.on('open-Dash', openDashboard);
ipcMain.on('open-Cupom', openCupom);
ipcMain.on('open-Notificacao', openNotificacao);

// App Events
app.whenReady().then(() => {
    createMainWindow();
    setApplicationMenu('index'); // Chamada correta da função com argumento

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});