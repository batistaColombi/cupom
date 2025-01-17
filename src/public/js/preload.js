const { contextBridge, ipcRenderer } = require('electron');

// Expor APIs seguras para o renderer
contextBridge.exposeInMainWorld('api', {
    //Janelas principais
    verElectron: () => process.versions.electron, // Expor a versão do Electron
    openIndex: () => ipcRenderer.send('open-Index'), // Abrir tela de login
    openDash: () => ipcRenderer.send('open-Dash'), // Abrir Dashboard
    openCupom: () => ipcRenderer.send('open-Cupom'), // Abrir Cupom
    openNotificacao: () => ipcRenderer.send('open-Not'), // Abrir Notificação

    //telas de cadastro
    openCadastrarUsuario: () => ipcRenderer.send('Open-Cadastrar-Usuario'), // Abrir Cadastro de usuario
    openCadastrarCupom: () => ipcRenderer.send('Open-Cadastrar-Cupom'), // Abrir Cadastro de cupom
    openCadastrarNotificacao: () => ipcRenderer.send('Open-Cadastrar-Not'), // Abrir Cadastro de notificaçoes

    //telas de edição
    openEditarUsuario: () => ipcRenderer.send('Open-Editar-Usuario'), // Abrir Edição de usuario
    openEditarCupom: () => ipcRenderer.send('Open-Editar-Cupom'), // Abrir Edição de cupom
    openEditarNotificacao: () => ipcRenderer.send('Open-Editar-Not'), // Abrir Edição de notificaçoes
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