var aboutMeDiv = document.querySelector(".about-me-content-box");
var skillsDiv = document.querySelector(".skill-box");
var expDiv = document.querySelector(".exp-box");

var aboutMeButton = document.querySelectorAll('.content-menu-buttom')[0];
var skillsButton = document.querySelectorAll('.content-menu-buttom')[1];
var experienceButton = document.querySelectorAll('.content-menu-buttom')[2];

    // Mostrar a seção "Sobre Mim" por padrão ao carregar a página
    showSection('about-me-content-box');

    // Função para exibir a seção desejada e ocultar as outras
    function showSection(sectionClass) { 
        var sections = [aboutMeDiv, skillsDiv, expDiv];

        sections.forEach(function(section) {
            if (section.classList.contains(sectionClass)) {
                section.style.display = 'flex';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Configuração dos eventos de clique para os botões do menu
  
    aboutMeButton.addEventListener('click', function() {
        showSection('about-me-content-box');
    });

    skillsButton.addEventListener('click', function() {
        showSection('skill-box');
    });

    experienceButton.addEventListener('click', function() {
        showSection('exp-box');
    });

