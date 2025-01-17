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


//Janelas correspondente a cadastro__________________________
function openCadastrarUsuario() {
    api.openCadastrarUsuario();
}

function openCadastrarCupom() {
    api.openCadastrarCupom();
}

function openCadastrarNotificacao() {
    api.openCadastrarNotificacao();
}


//Janelas correspondente a edição_____________________________
function openEditarUsuario() {
    api.openEditarUsuario();
}

function openEditarCupom() {
    api.openEditarCupom();
}

function openEditarNotificacao() {
    api.openEditarNotificacao();
}