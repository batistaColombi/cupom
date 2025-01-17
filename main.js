console.log("Processo principal");
console.log(`Electron: ${process.versions.electron}`);

const { app, ipcMain, BrowserWindow } = require('electron');
const { createMainWindow } = require('./src/public/js/windowManager.js');
const {
    openIndex,
    openDashboard,
    openCupom,
    openCadastrarCupom,
    openEditarCupom,
    openNotificacao,
    openCadastrarNotificacao,
    openEditarNotificacao,
    openCadastrarUsuario,
    openEditarUsuario
} = require('./src/public/js/windowActions.js');
const { setApplicationMenu } = require('./src/public/js/menuManager.js'); // Importação correta

// IPC Handlers
ipcMain.on('open-Index', openIndex);
ipcMain.on('open-Dash', openDashboard);
ipcMain.on('open-Cupom', openCupom);
ipcMain.on('open-Not', openNotificacao);
ipcMain.on('Open-Cadastrar-Cupom', openCadastrarCupom);
ipcMain.on('Open-Editar-Cupom', openEditarCupom);
ipcMain.on('Open-Cadastrar-Not', openCadastrarNotificacao);
ipcMain.on('Open-Editar-Not', openEditarNotificacao);
ipcMain.on('Open-Cadastrar-Usuario', openCadastrarUsuario);
ipcMain.on('Open-Editar-Usuario', openEditarUsuario);

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