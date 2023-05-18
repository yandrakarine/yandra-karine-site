import petCareImage from '../assets/petCare.png';
import feedbackWidget from '../assets/feedbackWidget.png';
import financialControl from '../assets/financialControl.png';
import storeInventory from '../assets/storeInventory.png';
import pokedex from '../assets/pokedex.png';

export const RoutesENUM = {
    HOME: "/home",
    EXPERIENCE: "/experience",
    CODE_SKILLS: "/code-skills",
}

export const Contacts = {
    LINKEDIN_URL: "https://www.linkedin.com/in/yandra-karine-lima-4183b4143/",
    GITHUB_URL: "https://github.com/yandrakarine"
}

export const projectsList = [
    {
      projectTitle: 'PetCare Template site',
      projectImage: petCareImage,
      projectSummary:
        'Um template de website para serviços veterinários. Site Responsivo feito com HTML, CSS e JavaScript. Esse projeto foi realizado no evento NLW 2022 da Rocketseat utilizando o conceito #MobileFirst',
      repoLink: 'https://github.com/yandrakarine/petCare-site',
    },
    {
      projectTitle: 'Feedback Widget',
      projectImage: feedbackWidget,
      projectSummary:
      'Ferramenta para obter feedbacks dos usuários de um website. Feito com React + Typescript e Tailwind. Esse projeto foi desenvolvido no evento NLW 2022 da Rocketseat.',
      repoLink: 'https://github.com/yandrakarine/Feedback-Widget',
    },
    {
      projectTitle: 'Financial Control System',
      projectImage: financialControl,
      projectSummary:
        'Esse é uma aplicação web feita com React.js para controle financeiro. É possivel registrar ganhos e despesas, assim como exclui-los e automaticamente é possível obter o valor atualizado nos painéis.',
      repoLink: 'https://github.com/yandrakarine/financial-Control-System',
    },
    {
      projectTitle: 'Pokedex',
      projectImage: pokedex,
      projectSummary:
        'Esse é um projeto feito com JavaScript, HTML e CSS é uma pokedex para mostrar 150 pokemóns originais registrados utilizando a pokeAPI. Um projeto simples para entender como uma API funciona.',
      repoLink: 'https://github.com/yandrakarine/pokedex',
    },
    {
      projectTitle: 'Store inventory control',
      projectImage: storeInventory,
      projectSummary:
        'Aplicação web para controle de inventário de uma loja onde é possível listar todos os produtos e seu preços. É possível adicionar, remover ou edita itens da lista. Feito com JavaCript, HTML e CSS.',
      repoLink: 'https://github.com/yandrakarine/store-inventory-control',
    }
  ];

  export const jobs = [
    {
      title: 'Desenvolvimento Frontend com React.js',
      resume:
        'Tive a oportunidade de atuar em um projeto em produção para uso próprio da empresa utilizando React.js. Minhas principais funções eram realizar melhorias no código e implementar novas funcionalidades utilizando principalmente React Hooks.',
      job_responsabilities: [
        {
          title: 'Melhorias no código',
          summary:
            'Revisar o código e realizar melhorias para implementação de novas funcionalidades',
          icon: 'fa-solid fa-file-code',
        },
        {
          title: 'Novas funcionalidades',
          summary:
            'Desenho de novas telas, Novos componentes e reutilização de componentes existentes',
          icon: 'fa-solid fa-screwdriver-wrench',
        }
      ],
    },
    {
      title: 'Analista Power Plataform I',
      resume:
        'Durante esse período trabalhei com ferramentas low-Code da Microsoft: Sharepoint, Power Automate e Power Apps; onde pude aplicar conceitos de lógica de programação assim como conceitos da linguagem javaScript com o objetivo de construir soluções e automações para os clientes deforma personalizada juntamente com o time de desenvolvimento da empresa.',
      job_responsabilities: [
        {
          title: 'Construir soluções e automações',
          summary:
            'Usando as ferramentas da Power Plataform da Microsoft consegui criar automações para controle de documentos, e-mails e alertas para diversas empresas.',
          icon: 'fa-solid fa-robot',
        },
        {
          title: 'Contato com Cliente',
          summary:
            'Participação de reuniões de planejamento e contato direto com os clientes para melhor entender e atender suas expectativas e necessidades no ambiente empresarial.',
          icon: 'fa-solid fa-people-group',
        },
      ],
    },
  ];


  export const skills = [
    {
      skill: 'HTML5',
      icon: 'fa-brands fa-html5',
      color: '#e96228',
    },
    {
      skill: 'CSS3',
      icon: 'fa-brands fa-css3-alt',
      color: '#00a8d7',
    },
    {
      skill: 'JavaSript',
      icon: 'fa-brands fa-js-square',
      color: '#efd81d',
    },
    {
      skill: 'React.js',
      icon: 'fa-brands fa-react',
      color: '#5ed3f3',
    },
    // {
    //   skill: 'Node.js',
    //   icon: 'fa-brands a-html5',
    // },
  ];