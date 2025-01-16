// Processo de renderização
console.log("Processo de renderização");
console.log(`Electron: ${api.verElectron()}`);

// Funções para abrir as janelas correspondentes

function openIndex() {
    api.openindex();
}

function openDash() {
    api.openDash();
}

function openCupom() {
    api.openCupom();
}

function openNotificacao() {
    api.openNotificacao();
}