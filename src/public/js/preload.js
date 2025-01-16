const { contextBridge, ipcRenderer } = require('electron');

// Expor APIs seguras para o renderer
contextBridge.exposeInMainWorld('api', {
    verElectron: () => process.versions.electron, // Expor a versão do Electron
    openIndex: () => ipcRenderer.send('open-Index'), // Abrir Cadastro de Notificação
    openDash: () => ipcRenderer.send('open-Dash'), // Abrir Dashboard
    openCupom: () => ipcRenderer.send('open-Cupom'), // Abrir Cadastro de Cupom
    openNotificacao: () => ipcRenderer.send('open-Not'), // Abrir Cadastro de Notificação
    on: (channel, callback) => ipcRenderer.on(channel, callback), // Escutar eventos IPC
});

// Manipulação do DOM
window.addEventListener('DOMContentLoaded', () => {
    const dataAtualElemento = document.getElementById('dataAtual');
    if (dataAtualElemento) {
        dataAtualElemento.innerHTML = obterData();
    }
});

// Função para obter a data atual formatada
function obterData() {
    const data = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return data.toLocaleDateString('pt-BR', options);
}