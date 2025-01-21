const { Menu } = require('electron');
const { openIndex,
        openDashboard,
        openCupom,
        openCadastrarCupom,
        openEditarCupom,
        openNotificacao,
        openCadastrarNotificacao,
        openEditarNotificacao,
        openCadastrarUsuario,
        openEditarUsuario} = require('./windowActions.js');

const template = [
    {
        //label: 'Inicial',
        //click: () => openIndex(),

        submenu: [
            //{
            //    label: 'Dashboard',
            //    click: () => openDashboard()
            //},
            {   label: 'Ferramentas do desenvolvedor', 
                role: 'toggleDevTools',},

            {   label: 'Recarregar', 
                role: 'reload' },

            {   label: 'Sair', 
                click: () => app.quit(), 
                accelerator: 'Alt+F4' },
        ],
    },
    //{ 
    //    label: 'Cupom',
    //    click: () => openCupom()
    //},
    //{
    //    label: 'Notificação',    
    //    click: () => openNotificacao()
    //},
];

const setApplicationMenu = () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

module.exports = { setApplicationMenu, template };