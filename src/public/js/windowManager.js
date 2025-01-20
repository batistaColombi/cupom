const { BrowserWindow } = require('electron');
const path = require('node:path');

const createWindowGeneric = ({
    width = 1024,
    height = 768,
    minWidth = 800,
    minHeight = 600,
    filePath,
    parent = null,
    modal = false,
    autoHideMenuBar = false
}) => {
    const window = new BrowserWindow({
        width,
        height,
        minWidth, // Largura mínima
        minHeight, // Altura mínima
        icon: path.join(__dirname, '../img/ditosIcone.png'), // Caminho do ícone
        resizable: true, // Permite redimensionamento
        parent,
        modal,
        autoHideMenuBar, // Oculta a barra de menus quando necessário
        frame: true, // Garante o quadro nativo
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Carregar o arquivo HTML
    window.loadFile(filePath);

    return window;
};

const createMainWindow = () => {
    createWindowGeneric({
        width: 1024, // Largura inicial da janela principal
        height: 768, // Altura inicial da janela principal
        minWidth: 800, // Largura mínima
        minHeight: 600, // Altura mínima
        autoHideMenuBar: false, // Exibe a barra de menus
        filePath: './src/views/index.html'
    });
};

module.exports = { createWindowGeneric, createMainWindow };