const { BrowserWindow } = require('electron');
const { createWindowGeneric } = require('./windowManager');

const openIndex = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/index.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

//Princial(Dashboard)______________________________________
const openDashboard = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: src = './src/views/index.html',
            parent,
            modal: true,
            autoHideMenuBar: false
        });
    }
};


//Janealas dos cupons______________________________________
const openCupom = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/cupom.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

//Janeala das Notificações______________________________________
const openNotificacao = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/notificacao.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};


module.exports = {
    openIndex,
    openDashboard,
    openCupom,
    openNotificacao
};