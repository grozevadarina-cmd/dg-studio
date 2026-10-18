import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  siteName: string;
  localeIndicator: string;
  menuLabel: string;
  navigation: {
    home: string;
    about: string;
    projects: string;
    services: string;
    process: string;
    blog: string;
    contacts: string;
  };
  footer: {
    tagline: string;
    taglineSecondary: string;
    studioTitle: string;
    studioText: string;
    faq: string;
    privacy: string;
    contactsTitle: string;
    availability: string;
    contactCta: string;
    cookies: string;
    terms: string;
  };
  home: {
    imagePlaceholderLabel: string;
    hero: {
      title: string;
      supportingText: string;
      cta: string;
    };
    approach: {
      label: string;
      title: string;
      body: string;
    };
    selectedProjects: {
      label: string;
      title: string;
      cta: string;
      items: Array<{
        title: string;
        location: string;
        year: string;
      }>;
    };
    services: {
      label: string;
      title: string;
      body: string;
      cta: string;
    };
    process: {
      label: string;
      title: string;
      cta: string;
      steps: Array<{
        number: string;
        title: string;
        body: string;
      }>;
    };
    about: {
      label: string;
      title: string;
      body: string;
      cta: string;
    };
    contact: {
      label: string;
      title: string;
      body: string;
      cta: string;
    };
  };
  aboutPage: {
    introLabel: string;
    introTitle: string;
    introBody: string;
    roleLabel: string;
    roleTitle: string;
    roleBody: string;
    signatureName: string;
    signatureStudio: string;
    collaborationLabel: string;
    collaborationTitle: string;
    collaborationBody: string;
    clientLabel: string;
    clientTitle: string;
    clientItems: string[];
    cta: string;
  };
};

const dictionaries = {
  bg: {
    siteName: "DG Interior Design",
    localeIndicator: "Език",
    menuLabel: "Меню",
    navigation: {
      home: "Начало",
      about: "DG Interior Design",
      projects: "Проекти",
      services: "Услуги",
      process: "Процес",
      blog: "Блог",
      contacts: "Контакти",
    },
    footer: {
      tagline: "Формата идва последна",
      taglineSecondary: "Преди нея трябва да има смисъл",
      studioTitle: "DG Interior Design",
      studioText: "Интериорът започва с човека — с неговите нужди, усещания и начин на живот.",
      faq: "Често задавани въпроси",
      privacy: "Политика за поверителност",
      contactsTitle: "Контакти",
      availability: "Интериорни проекти в България и чужбина",
      contactCta: "Свържи се с дизайнер",
      cookies: "Бисквитки",
      terms: "Общи условия",
    },
    home: {
      imagePlaceholderLabel: "Временно място за изображение",
      hero: {
        title: "ФОРМАТА ИДВА ПОСЛЕДНА.",
        supportingText:
          "Добрият интериор започва с човека — с неговите нужди, усещания и начин на живот.\n\nПосле идват функцията, архитектурата, движението, светлината и техническата логика.\n\nФормата идва последна, защото преди нея трябва да има смисъл.",
        cta: "Разгледайте проектите",
      },
      approach: {
        label: "Подход",
        title: "Интериорът е система, не сбор от отделни решения.",
        body: "Разпределението, движението, светлината, материалите, техническите решения и бюджетът се разглеждат като взаимно свързани условия.\n\nВсяко решение влияе върху останалите, затова проектът се развива като цялост, а не като последователност от отделно избрани мебели, цветове и материали.\n\nЛогиката на конкретното пространство и нуждите на хората, които ще го обитават, се превръщат в основа, върху която постепенно се изгражда и неговият характер.",
      },
      selectedProjects: {
        label: "Избрани проекти",
        title: "Проекти на фокус.",
        cta: "Всички проекти",
        items: [
          {
            title: "Временен проект 01",
            location: "Локация предстои",
            year: "—",
          },
          {
            title: "Временен проект 02",
            location: "Локация предстои",
            year: "—",
          },
          {
            title: "Временен проект 03",
            location: "Локация предстои",
            year: "—",
          },
        ],
      },
      services: {
        label: "Услуги",
        title: "Цялостният интериорен проект се развива като последователен процес.",
        body: "Той включва функционално разпределение, пространствена и визуална концепция, 3D визуализации, техническа документация, подбор на конкретни материали, продукти и оборудване, както и разработка на мебели по поръчка.\n\nВсеки етап стъпва върху решенията от предходния, за да се изгради последователен и изпълним проект.\n\nНо не всеки обект има нужда от еднакъв обхват. В зависимост от пространството, етапа на ремонта и конкретната задача работата може да бъде ограничена до отделна част от процеса — например функционално решение, концепция или конкретна разработка.",
        cta: "Вижте услугите",
      },
      process: {
        label: "Процес",
        title: "Последователност от свързани решения.",
        cta: "Вижте целия процес",
        steps: [
          {
            number: "01",
            title: "Контекст и изходни условия",
            body: "Анализ на пространството, архитектурните дадености, начина на живот, нуждите, приоритетите, бюджета и ограниченията, които определят посоката на проекта.",
          },
          {
            number: "02",
            title: "Пространствена структура",
            body: "Функционално разпределение, движение, връзки между зоните и позициониране на основното обзавеждане. Тук се изгражда логиката, върху която стъпват всички следващи решения.",
          },
          {
            number: "03",
            title: "Концепция и разработка",
            body: "Формиране и развитие на визуалната посока чрез материали, цветове, светлина, пропорции и характер на пространството. 3D визуализациите позволяват концепцията да бъде проверена и прецизирана като цялост преди преминаване към техническата част.",
          },
          {
            number: "04",
            title: "Техническа документация и спецификации",
            body: "Работни чертежи и разработки за електроинсталация, осветление, ВиК, настилки, тавани, стени, детайли и мебели по поръчка, заедно с конкретни материали, продукти и оборудване — необходимата база за последователно и точно изпълнение.",
          },
        ],
      },
      about: {
        label: "DG Interior Design",
        title: "Личен подход към всеки проект.",
        body: "DG Interior Design е студио за интериорен дизайн с индивидуален подход към всеки проект. В основата на работата стои разбирането, че добрият интериор не се повтаря, а се създава спрямо конкретното пространство и хората, които го обитават.\n\nРешенията не следват готова формула. Те се изграждат според архитектурата, начина на живот, нуждите и личните предпочитания на клиента — чрез разговор, наблюдение, анализ и последователно развитие на проекта.\n\nКогато проектът го изисква, в процеса се включват архитекти, инженери, производители и други специалисти. Така различните части на проекта могат да бъдат разработени в обща посока и с необходимата техническа прецизност.\n\nДарина Грозева",
        cta: "DG Interior Design",
      },
      contact: {
        label: "Контакт",
        title: "Нека първо уточним откъде започваме,\nкато зададем правилните въпроси.",
        body: "Ако обмисляте интериорен проект, първата стъпка е спокойно да уточним нуждите, ограниченията и очакванията към пространството.",
        cta: "Разкажете ми за проекта",
      },
    },
    aboutPage: {
      introLabel: "ЗА DG INTERIOR DESIGN",
      introTitle: "DG Interior Design",
      introBody: "DG Interior Design е студио за интериорен дизайн с индивидуален подход към всеки проект. В основата на работата стои разбирането, че добрият интериор не се повтаря, а се създава спрямо конкретното пространство и хората, които го обитават.\n\nРаботата по всеки проект се развива според архитектурата, начина на живот, нуждите и личните предпочитания на клиента. Решенията не следват готова формула, а се изграждат чрез разговор, наблюдение, анализ и последователно развитие на проекта.",
      roleLabel: "Личната роля",
      roleTitle: "От първия разговор до финалното решение.",
      roleBody: "Всеки проект се води от мен — от първия разговор и анализа на пространството до развитието на концепцията, техническите решения и подготовката за реализация.\n\nЗа мен добрият интериор не е само визуална концепция. Той трябва да бъде функционален, последователен и реално изпълним — от пространственото решение и материалите до техническата документация и детайла.\n\nТака се запазва една ясна посока от началото до края, а личното ми участие във всеки етап помага решенията да останат свързани не само с конкретното пространство и неговите ограничения, но и с човека, който ще го използва — с неговите нужди, навици и начин на живот. Работата остава последователна и ясно структурирана през целия процес.",
      signatureName: "Дарина Грозева",
      signatureStudio: "DG Interior Design",
      collaborationLabel: "Сътрудничество",
      collaborationTitle: "Работя ли сама? Не.",
      collaborationBody: "Интериорният проект събира различни професионални области. Според нуждите на конкретния обект работя с архитекти, инженери, електро и ВиК специалисти, мебелисти, изпълнители и производители — хора с дългогодишен опит, на които имам доверие и с които сме изградили начин на работа във времето.\n\nТяхната експертиза се включва там, където е необходима, а моята роля е да пазя общата проектна логика и да координирам решенията така, че архитектурата, функциите, материалите и техническото изпълнение да следват една посока. Понякога именно те поставят граници пред някоя по-смела идея, а друг път намираме начин тя да бъде реализирана без компромис със смисъла на проекта.\n\nРаботя и в партньорство с производители, вносители и търговски компании в сферата на мебелите, осветлението, декорацията, строителните материали и обзавеждането. Всеки материал и продукт се подбира като част от цялостното решение — според проекта, качеството, бюджета и начина, по който ще се използва пространството.",
      clientLabel: "За клиента",
      clientTitle: "Какво означава това за клиента",
      clientItems: [
        "Една ясна проектна посока от началото до реализацията.",
        "Координирани решения между отделните специалисти и изпълнители.",
        "Техническа проверка на важните решения преди изпълнение.",
        "Развитие на проекта в рамките на предварително определена бюджетна рамка и по-ясно планиране на разходите.",
        "По-малко импровизация и несъответствия по време на реализацията.",
      ],
      cta: "Разкажете ми за проекта",
    },
  },
  en: {
    siteName: "DG Interior Design",
    localeIndicator: "Language",
    menuLabel: "Menu",
    navigation: {
      home: "Home",
      about: "DG Interior Design",
      projects: "Projects",
      services: "Services",
      process: "Process",
      blog: "Blog",
      contacts: "Contacts",
    },
    footer: {
      tagline: "Form comes last",
      taglineSecondary: "Before it, there must be meaning",
      studioTitle: "DG Interior Design",
      studioText: "An interior begins with the person — with their needs, perceptions and way of life.",
      faq: "Frequently asked questions",
      privacy: "Privacy policy",
      contactsTitle: "Contacts",
      availability: "Interior projects in Bulgaria and abroad",
      contactCta: "Contact the designer",
      cookies: "Cookies",
      terms: "Terms and conditions",
    },
    home: {
      imagePlaceholderLabel: "Temporary image placeholder",
      hero: {
        title: "FORM COMES LAST.",
        supportingText:
          "An interior begins with function, ways of living and architecture — with movement, light and the technical logic that shapes the space.",
        cta: "View the projects",
      },
      approach: {
        label: "Approach",
        title: "An interior is a system, not a collection of separate decisions.",
        body: "Layout, movement, light, materials, technical solutions and budget are considered as interconnected conditions.\n\nEvery decision affects the others, which is why the project develops as a whole rather than as a sequence of separately selected furniture, colours and materials.\n\nThe logic of the specific space and the needs of the people who will inhabit it become the foundation on which its character is gradually built.",
      },
      selectedProjects: {
        label: "Selected projects",
        title: "Spaces developed outward from their context.",
        cta: "All projects",
        items: [
          {
            title: "Temporary project 01",
            location: "Location pending",
            year: "—",
          },
          {
            title: "Temporary project 02",
            location: "Location pending",
            year: "—",
          },
          {
            title: "Temporary project 03",
            location: "Location pending",
            year: "—",
          },
        ],
      },
      services: {
        label: "Services",
        title: "A complete interior project develops as a coherent process.",
        body: "It includes functional planning, a spatial and visual concept, 3D visualisations, technical documentation, the selection of specific materials, products and equipment, as well as the development of bespoke furniture.\n\nEach stage builds on the decisions made in the previous one, creating a coherent and feasible project.\n\nNot every property, however, requires the same scope. Depending on the space, the stage of renovation and the specific task, the work may be limited to an individual part of the process — for example, a functional solution, a concept or a specific development.",
        cta: "View the services",
      },
      process: {
        label: "Process",
        title: "A sequence of connected decisions.",
        cta: "View the full process",
        steps: [
          {
            number: "01",
            title: "Context and initial conditions",
            body: "An analysis of the space, its architectural conditions, ways of living, needs, priorities, budget and constraints that define the direction of the project.",
          },
          {
            number: "02",
            title: "Spatial structure",
            body: "Functional layout, movement, relationships between zones and the positioning of the principal furnishings. This establishes the logic on which every subsequent decision is based.",
          },
          {
            number: "03",
            title: "Concept and development",
            body: "The visual direction is formed and developed through materials, colour, light, proportions and the character of the space. 3D visualisations allow the concept to be reviewed and refined as a whole before proceeding to the technical stage.",
          },
          {
            number: "04",
            title: "Technical documentation and specifications",
            body: "Working drawings and detailed plans for electrical systems, lighting, plumbing, flooring, ceilings, walls, details and bespoke furniture, together with specified materials, products and equipment — the necessary basis for consistent and accurate execution.",
          },
        ],
      },
      about: {
        label: "DG Interior Design",
        title: "A personal approach to every project.",
        body: "DG Interior Design is an interior design studio with an individual approach to every project. At the heart of its work is the understanding that good interior design is not repeated, but created in response to the specific space and the people who inhabit it.\n\nThe solutions do not follow a ready-made formula. They are developed according to the architecture, way of life, needs and personal preferences of the client — through dialogue, observation, analysis and the consistent development of the project.",
        cta: "DG Interior Design",
      },
      contact: {
        label: "Contact",
        title: "Let us first establish where to begin — with the right questions.",
        body: "If you are considering an interior project, the first step is to calmly clarify the needs, constraints and expectations for the space.",
        cta: "Tell me about the project",
      },
    },
    aboutPage: {
      introLabel: "ABOUT DG INTERIOR DESIGN",
      introTitle: "DG Interior Design",
      introBody: "DG Interior Design is an interior design studio with an individual approach to every project. At the heart of its work is the understanding that good interior design is not repeated, but created in response to the specific space and the people who inhabit it.\n\nEach project develops according to the architecture, way of life, needs and personal preferences of the client. Solutions do not follow a ready-made formula, but are built through dialogue, observation, analysis and the consistent development of the project.",
      roleLabel: "Personal role",
      roleTitle: "From the first conversation to the final solution.",
      roleBody: "I lead every project — from the first conversation and analysis of the space to the development of the concept, technical solutions and preparation for implementation.\n\nFor me, good interior design is not only a visual concept. It must be functional, coherent and genuinely feasible — from the spatial solution and materials to the technical documentation and detailing.\n\nThis maintains one clear direction from beginning to end, while my personal involvement at every stage helps ensure that the decisions remain connected not only to the specific space and its constraints, but also to the person who will use it — their needs, habits and way of life. The work remains consistent and clearly structured throughout the process.",
      signatureName: "Darina Grozeva",
      signatureStudio: "DG Interior Design",
      collaborationLabel: "Collaboration",
      collaborationTitle: "Do I work alone? No.",
      collaborationBody: "An interior design project brings together different professional fields. Depending on the needs of the specific property, I work with architects, engineers, electrical and plumbing specialists, furniture makers, contractors and manufacturers — experienced professionals whom I trust and with whom I have developed an established way of working over time.\n\nTheir expertise is involved where it is needed, while my role is to maintain the overall project logic and coordinate the decisions so that the architecture, functions, materials and technical execution follow one direction. Sometimes they are the ones who set boundaries for a bolder idea; at other times, together we find a way to realise it without compromising the meaning of the project.\n\nI also work in partnership with manufacturers, importers and commercial companies in the fields of furniture, lighting, decoration, building materials and furnishings. Every material and product is selected as part of the complete solution — according to the project, quality, budget and the way the space will be used.",
      clientLabel: "For the client",
      clientTitle: "What this means for the client",
      clientItems: [
        "One clear project direction from the beginning through to implementation.",
        "Coordinated decisions between specialists and contractors.",
        "Technical verification of key decisions before implementation.",
        "Development of the project within a predefined budget framework and clearer cost planning.",
        "Less improvisation and fewer inconsistencies during execution.",
      ],
      cta: "Tell me about the project",
    },
  },
  ru: {
    siteName: "DG Interior Design",
    localeIndicator: "Язык",
    menuLabel: "Меню",
    navigation: {
      home: "Главная",
      about: "DG Interior Design",
      projects: "Проекты",
      services: "Услуги",
      process: "Процесс",
      blog: "Блог",
      contacts: "Контакты",
    },
    footer: {
      tagline: "Форма приходит последней",
      taglineSecondary: "До неё должен быть смысл",
      studioTitle: "DG Interior Design",
      studioText: "Интерьер начинается с человека — с его потребностей, ощущений и образа жизни.",
      faq: "Часто задаваемые вопросы",
      privacy: "Политика конфиденциальности",
      contactsTitle: "Контакты",
      availability: "Интерьерные проекты в Болгарии и за рубежом",
      contactCta: "Связаться с дизайнером",
      cookies: "Файлы cookie",
      terms: "Условия использования",
    },
    home: {
      imagePlaceholderLabel: "Временное место для изображения",
      hero: {
        title: "ФОРМА ПРИХОДИТ ПОСЛЕДНЕЙ.",
        supportingText:
          "Интерьер начинается с функции, образа жизни и архитектуры — с движения, света и технической логики, которые формируют пространство.",
        cta: "Посмотреть проекты",
      },
      approach: {
        label: "Подход",
        title: "Интерьер — это система, а не набор отдельных решений.",
        body: "Планировка, движение, свет, материалы, технические решения и бюджет рассматриваются как взаимосвязанные условия.\n\nКаждое решение влияет на остальные, поэтому проект развивается как единое целое, а не как последовательность отдельно выбранных предметов мебели, цветов и материалов.\n\nЛогика конкретного пространства и потребности людей, которые будут в нём жить, становятся основой, на которой постепенно формируется его характер.",
      },
      selectedProjects: {
        label: "Избранные проекты",
        title: "Пространства, которые развиваются из своего контекста.",
        cta: "Все проекты",
        items: [
          {
            title: "Временный проект 01",
            location: "Локация уточняется",
            year: "—",
          },
          {
            title: "Временный проект 02",
            location: "Локация уточняется",
            year: "—",
          },
          {
            title: "Временный проект 03",
            location: "Локация уточняется",
            year: "—",
          },
        ],
      },
      services: {
        label: "Услуги",
        title: "Комплексный интерьерный проект развивается как последовательный процесс.",
        body: "Он включает функциональную планировку, пространственную и визуальную концепцию, 3D-визуализации, техническую документацию, подбор конкретных материалов, изделий и оборудования, а также разработку мебели на заказ.\n\nКаждый этап опирается на решения предыдущего, чтобы сформировать последовательный и реализуемый проект.\n\nОднако не каждому объекту требуется одинаковый объём работы. В зависимости от пространства, стадии ремонта и конкретной задачи работа может быть ограничена отдельной частью процесса — например, функциональным решением, концепцией или конкретной разработкой.",
        cta: "Посмотреть услуги",
      },
      process: {
        label: "Процесс",
        title: "Последовательность взаимосвязанных решений.",
        cta: "Посмотреть весь процесс",
        steps: [
          {
            number: "01",
            title: "Контекст и исходные условия",
            body: "Анализ пространства, архитектурных особенностей, образа жизни, потребностей, приоритетов, бюджета и ограничений, которые определяют направление проекта.",
          },
          {
            number: "02",
            title: "Пространственная структура",
            body: "Функциональная планировка, движение, связи между зонами и расположение основных предметов обстановки. Здесь формируется логика, на которой основываются все последующие решения.",
          },
          {
            number: "03",
            title: "Концепция и разработка",
            body: "Формирование и развитие визуального направления через материалы, цвет, свет, пропорции и характер пространства. 3D-визуализации позволяют проверить и уточнить концепцию как единое целое до перехода к технической части.",
          },
          {
            number: "04",
            title: "Техническая документация и спецификации",
            body: "Рабочие чертежи и разработки по электрике, освещению, водоснабжению и канализации, напольным покрытиям, потолкам, стенам, деталям и мебели на заказ, а также конкретные материалы, изделия и оборудование — необходимая основа для последовательной и точной реализации.",
          },
        ],
      },
      about: {
        label: "DG Interior Design",
        title: "Индивидуальный подход к каждому проекту.",
        body: "DG Interior Design — студия дизайна интерьеров с индивидуальным подходом к каждому проекту. В основе работы лежит понимание того, что хороший интерьер не повторяется, а создаётся для конкретного пространства и людей, которые в нём живут.\n\nРешения не следуют готовой формуле. Они формируются с учётом архитектуры, образа жизни, потребностей и личных предпочтений клиента — через диалог, наблюдение, анализ и последовательное развитие проекта.",
        cta: "DG Interior Design",
      },
      contact: {
        label: "Контакт",
        title: "Сначала определим, с чего начать, — с правильных вопросов.",
        body: "Если вы рассматриваете интерьерный проект, первый шаг — спокойно уточнить потребности, ограничения и ожидания от пространства.",
        cta: "Расскажите мне о проекте",
      },
    },
    aboutPage: {
      introLabel: "О DG INTERIOR DESIGN",
      introTitle: "DG Interior Design",
      introBody: "DG Interior Design — студия дизайна интерьеров с индивидуальным подходом к каждому проекту. В основе работы лежит понимание того, что хороший интерьер не повторяется, а создаётся для конкретного пространства и людей, которые в нём живут.\n\nРабота над каждым проектом развивается с учётом архитектуры, образа жизни, потребностей и личных предпочтений клиента. Решения не следуют готовой формуле, а формируются через диалог, наблюдение, анализ и последовательное развитие проекта.",
      roleLabel: "Личная роль",
      roleTitle: "От первого разговора до окончательного решения.",
      roleBody: "Каждый проект веду я — от первого разговора и анализа пространства до разработки концепции, технических решений и подготовки к реализации.\n\nДля меня хороший интерьер — это не только визуальная концепция. Он должен быть функциональным, последовательным и действительно реализуемым — от пространственного решения и материалов до технической документации и деталей.\n\nТак сохраняется единое ясное направление от начала до конца, а моё личное участие на каждом этапе помогает решениям оставаться связанными не только с конкретным пространством и его ограничениями, но и с человеком, который будет им пользоваться, — с его потребностями, привычками и образом жизни. Работа остаётся последовательной и чётко структурированной на протяжении всего процесса.",
      signatureName: "Дарина Грозева",
      signatureStudio: "DG Interior Design",
      collaborationLabel: "Сотрудничество",
      collaborationTitle: "Работаю ли я одна? Нет.",
      collaborationBody: "Интерьерный проект объединяет разные профессиональные области. В зависимости от потребностей конкретного объекта я работаю с архитекторами, инженерами, специалистами по электрике и водоснабжению, мебельщиками, подрядчиками и производителями — опытными профессионалами, которым я доверяю и с которыми со временем выстроила устойчивый рабочий процесс.\n\nИх экспертиза подключается там, где она необходима, а моя роль — сохранять общую логику проекта и координировать решения, чтобы архитектура, функции, материалы и техническая реализация следовали единому направлению. Иногда именно они обозначают границы для более смелой идеи, а в других случаях мы вместе находим способ реализовать её без ущерба для смысла проекта.\n\nЯ также сотрудничаю с производителями, импортёрами и торговыми компаниями в сфере мебели, освещения, декора, строительных материалов и предметов интерьера. Каждый материал и продукт подбирается как часть целостного решения — с учётом проекта, качества, бюджета и того, как будет использоваться пространство.",
      clientLabel: "Для клиента",
      clientTitle: "Что это означает для клиента",
      clientItems: [
        "Единое и ясное направление проекта от начала до реализации.",
        "Согласованные решения между специалистами и подрядчиками.",
        "Техническая проверка ключевых решений до начала выполнения работ.",
        "Разработка проекта в рамках предварительно определённого бюджета и более чёткое планирование расходов.",
        "Меньше импровизации и несоответствий в процессе реализации.",
      ],
      cta: "Расскажите мне о проекте",
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
