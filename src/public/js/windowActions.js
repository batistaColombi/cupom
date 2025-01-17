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
            filePath: src = './src/views/dashboard.html',
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

const openCadastrarCupom = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/cadastrarCupom.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

const openEditarCupom = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/editarCupom.html',
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

const openCadastrarNotificacao = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/cadastrarNotificacao.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

const openEditarNotificacao = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/editarNotificacao.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

//Janealas Cadastro e Edição de Usuário______________________________________
const openCadastrarUsuario = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/cadastrarUsuario.html',
            parent,
            modal: true,
            autoHideMenuBar: true
        });
    }
};

const openEditarUsuario = () => {
    const parent = BrowserWindow.getFocusedWindow();
    if (parent) {
        createWindowGeneric({
            width: 800,
            height: 600,
            filePath: './src/views/editarUsuario.html',
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
    openCadastrarCupom,
    openEditarCupom,
    openNotificacao,
    openCadastrarNotificacao,
    openEditarNotificacao,
    openCadastrarUsuario,
    openEditarUsuario
};