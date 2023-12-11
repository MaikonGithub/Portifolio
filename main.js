const aboutMeDiv = document.querySelector("#about-me-content-box");
const skillsDiv = document.querySelector("#skill-box");
const expDiv = document.querySelector("#exp-box");

const contentButtons = document.querySelectorAll('.content-menu-buttom');

// Mostrar a seção "Sobre Mim" por padrão ao carregar a página
showSection('about-me-content-box');

// Função para exibir a seção desejada e ocultar as outras
function showSection(sectionId) {
    const sections = [aboutMeDiv, skillsDiv, expDiv];

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

// Configuração dos eventos de clique para os botões do menu
contentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch (index) {
            case 0:
                showSection('about-me-content-box');
                break;
            case 1:
                showSection('skill-box');
                break;
            case 2:
                showSection('exp-box');
                break;
            default:
                break;
        }
    });
});

