const resources = {
    "pt-BR": {
      translation: {
        "about": "Sobre",
        "mySkills": "Minhas habilidades",
        "projects": "Projetos",
        "contact": "Contato",
        "helloMyName": "Olá, meu nome é",
        "myName": "Guilherme Halter Nunes",
        "profession": "Full Stack, Desenvolvedor Web",
        "titleAbout": "Sobre.",
        "textAboutMe": "Sou um programador de 18 anos de Santa Catarina, Brasil. Em 2021, iniciei minha jornada no mundo da programação e desde então venho me aprofundando cada vez mais nesse universo fascinante. Atualmente, me dedico ao desenvolvimento web, tanto front-end quanto back-end, e estou sempre em busca de novos desafios e oportunidades para aprender e crescer.",
        "titleMySkill": "Minhas Habilidades.",
        "programmingLanguages": "Linguagens de Programação",
        "titleProjects": "Projetos",
        "textSuite": "A Suite Store é o projeto que criei para simplificar a gestão e controle de estoque da sua loja. Com ela, você pode manter tudo sob controle, desde o estoque até as vendas.",
        "textArduino": "Desenvolvi esse projeto no TCC do meu curso técnico em Informática, com o objetivo de controlar o conforto térmico na creche dos suínos, utilizando sensores de temperatura e umidade.",
        "textMuseu": "O Museu do Velho Mundo é um projeto que criei para simular um museu virtual, onde você pode visualizar obras de arte e esculturas de diversos artistas renomados.",
        "viewRepository": "Exibir repositório no GitHub",
        "tools": "Ferramentas usadas nesse projetos",
        "plusTools": "e uma API do Harvard Museums. (Link para a API no Readme do projeto no GitHub)",
        "titleContact": "Contato.",
        "sendEmail": "Envie-me um e-mail",
        "name": "Nome:",
        "email": "Endereço de Email:",
        "message": "Mensagem:",
        "contactUs": "Contato",
        "followUs": "Me siga em"
      }
    },
    "en": {
      translation: {
        "about": "About",
        "mySkills": "My Skills",
        "projects": "Projects",
        "contact": "Contact",
        "helloMyName": "Hello, my name is",
        "myName": "Guilherme Halter Nunes",
        "profession": "Full Stack, Web Developer",
        "titleAbout": "About.",
        "textAboutMe": "I am an 18-year-old programmer from Santa Catarina, Brazil. In 2021, I started my journey in the programming world and have been delving deeper into this fascinating universe ever since. Currently, I dedicate myself to web development, both front-end and back-end, and I am always looking for new challenges and opportunities to learn and grow.",
        "titleMySkill": "My Skills.",
        "programmingLanguages": "Programming Languages",
        "titleProjects": "Projects",
        "textSuite": "Suite Store is the project I created to simplify the management and control of your store's inventory. With it, you can keep everything under control, from inventory to sales.",
        "textArduino": "I developed this project in my technical course in Computer Science, with the aim of controlling thermal comfort in the piglet nursery, using temperature and humidity sensors.",
        "textMuseu": "The Old World Museum is a project I created to simulate a virtual museum, where you can view artworks and sculptures by various renowned artists.",
        "viewRepository": "View repository on GitHub",
        "tools": "Tools used in this project",
        "plusTools": "and an API from Harvard Museums. (Link to the API in the project's README on GitHub)",
        "titleContact": "Contact.",
        "sendEmail": "Send me an email",
        "name": "Name:",
        "email": "Email Address:",
        "message": "Message:",
        "contactUs": "Contact",
        "followUs": "Follow me on"
      }
    }
  };

 // Inicializar o i18next
i18next.use(i18nextBrowserLanguageDetector).init({
  resources,
  fallbackLng: 'pt-BR',
  debug: true
}, function(err, t) {
  // Recuperar o idioma selecionado anteriormente do armazenamento local
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  // Se o idioma selecionado anteriormente existir, defina-o como o idioma atual
  if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage, updateContent);
      // Defina a opção selecionada no seletor de idioma
      document.getElementById('languageSwitcher').value = selectedLanguage;
  } else {
      // Caso contrário, traduza o conteúdo inicial
      updateContent();
  }
});

// Função para atualizar o conteúdo com as traduções
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
      const key = element.getAttribute('data-i18n');
      element.innerText = i18next.t(key);
  });
}

// Event listener para a troca de idioma
document.getElementById('languageSwitcher').addEventListener('change', function() {
  const selectedLanguage = this.value;
  // Verifica se o idioma selecionado é diferente do idioma atual
  if (selectedLanguage !== i18next.language) {
      i18next.changeLanguage(selectedLanguage, updateContent);
      // Armazena o idioma selecionado no armazenamento local
      localStorage.setItem('selectedLanguage', selectedLanguage);
  }
});
