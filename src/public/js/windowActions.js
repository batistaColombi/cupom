const { BrowserWindow } = require('electron');
const { createWindowGeneric } = require('./windowManager');

// Função genérica para abrir janelas
const openWindow = ({ filePath, modal = true, parent = null }) => {
    if (!parent) {
        parent = BrowserWindow.getFocusedWindow();
    }

    if (parent) {
        createWindowGeneric({
            width : 1024,
            height : 768,
            minWidth: 800, // Largura mínima
            minHeight: 600, // Altura mínima
            resizable: true, // Permite redimensionar
            filePath,
            parent,
            modal,
            autoHideMenuBar: false
        });
    }
};

// Funções específicas
const openIndex = () => openWindow({ filePath: './src/views/index.html' });

const openDashboard = () => openWindow({ filePath: './src/views/dashboard.html' });

const openCupom = () => openWindow({ filePath: './src/views/cupom.html' });

const openCadastrarCupom = () => openWindow({ filePath: './src/views/cadastrarCupom.html' });

const openEditarCupom = () => openWindow({ filePath: './src/views/editarCupom.html' });

const openNotificacao = () => openWindow({ filePath: './src/views/notificacao.html' });

const openCadastrarNotificacao = () => openWindow({ filePath: './src/views/cadastrarNotificacao.html' });

const openEditarNotificacao = () => openWindow({ filePath: './src/views/editarNotificacao.html' });

const openCadastrarUsuario = () => openWindow({ filePath: './src/views/cadastrarUsuario.html' });

const openEditarUsuario = () => openWindow({ filePath: './src/views/editarUsuario.html' });

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
