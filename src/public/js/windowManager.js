const { BrowserWindow } = require('electron');
const path = require('node:path');

const createWindowGeneric = ({ width, height, filePath, parent = null, modal = false, autoHideMenuBar = false }) => {
    const window = new BrowserWindow({
        width,
        height,
        icon: '../img/ditosIcone.png',
        resizable: false,
        parent,
        modal,
        autoHideMenuBar,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    window.loadFile(filePath);
    return window;
};

const createMainWindow = () => {
    createWindowGeneric({
        width: 1000,
        height: 800,
        autoHideMenuBar: false,
        filePath: './src/views/index.html'
    });
};

module.exports = { createWindowGeneric, createMainWindow };