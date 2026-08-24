const QUIZ_DATA = {
  sandalia: {
    id: "sandalia",
    name: "Sandália",
    shuffleQuestions: true,
    questions: [
      {
        id: "sandalia-1",
        category: "sandalia",
        question: "Qual é o material principal utilizado no cabedal (parte de cima) deste modelo?",
        options: [
          "Sintético com brilho",
          "Couro legítimo",
          "Tecido têxtil",
          "Sintético fosco"
        ],
        correctAnswer: "Sintético com brilho",
        explanation: "A ficha técnica deste modelo especifica sintético com brilho como material do cabedal."
      },
      {
        id: "sandalia-2",
        category: "sandalia",
        question: "Qual tipo de solado é mais adequado para garantir a funcionalidade dessa Sandália?",
        options: [
          "TPU",
          "PVC",
          "Borracha vulcanizada",
          "EVA"
        ],
        correctAnswer: "TPU",
        explanation: "O solado em TPU foi definido como o mais adequado para este modelo."
      },
      {
        id: "sandalia-3",
        category: "sandalia",
        question: "Qual é o sistema de fechamento utilizado para ajustar a sandália ao pé?",
        options: [
          "Fivela",
          "Velcro",
          "Elástico",
          "Atacador"
        ],
        correctAnswer: "Fivela",
        explanation: "O ajuste ao pé é feito por meio de fivela."
      },
      {
        id: "sandalia-4",
        category: "sandalia",
        question: "Na ficha técnica, qual componente é essencial para o conforto interno em contato direto com o pé?",
        options: [
          "Taloneira",
          "Palmilha de montagem",
          "Contraforte",
          "Forro têxtil"
        ],
        correctAnswer: "Taloneira",
        explanation: "A taloneira é o componente responsável pelo conforto interno em contato direto com o pé."
      },
      {
        id: "sandalia-5",
        category: "sandalia",
        question: "Qual textura ou acabamento é predominante na estética deste modelo?",
        options: [
          "Sintético com brilho",
          "Acabamento fosco",
          "Textura em relevo tipo croco",
          "Efeito metalizado"
        ],
        correctAnswer: "Sintético com brilho",
        explanation: "O acabamento predominante é o sintético com brilho."
      },
      {
        id: "sandalia-6",
        category: "sandalia",
        question: "Considerando a durabilidade, qual parte da sandália requer reforço estrutural oculto?",
        options: [
          "Alma de aço (localizada no meio da palmilha)",
          "Contraforte de PVC",
          "Couraça na biqueira",
          "Reforço em fibra no solado"
        ],
        correctAnswer: "Alma de aço (localizada no meio da palmilha)",
        explanation: "O reforço estrutural oculto deste modelo é a alma de aço, localizada no meio da palmilha."
      },
      {
        id: "sandalia-7",
        category: "sandalia",
        question: "Qual é a silhueta ou formato predominante da biqueira deste modelo?",
        options: [
          "Bico Quadrado",
          "Bico Redondo",
          "Bico Fino (Chanel)",
          "Bico Amendoado"
        ],
        correctAnswer: "Bico Quadrado",
        explanation: "A biqueira deste modelo tem formato quadrado."
      }
    ]
  },

  tenis: {
    id: "tenis",
    name: "Tênis",
    shuffleQuestions: true,
    questions: [
      {
        id: "tenis-1",
        category: "tenis",
        question: "Qual é o material principal utilizado no cabedal (parte de cima) deste tênis?",
        options: [
          "Sintético com kinite",
          "Couro legítimo",
          "Tecido knit (malha)",
          "Sintético com brilho"
        ],
        correctAnswer: "Sintético com kinite",
        explanation: "O cabedal deste modelo é produzido em sintético com kinite."
      },
      {
        id: "tenis-2",
        category: "tenis",
        question: "Qual tipo de solado é mais adequado para garantir a funcionalidade deste tênis?",
        options: [
          "PVC expandido ou TR",
          "TPU injetado",
          "Borracha vulcanizada",
          "EVA expandido"
        ],
        correctAnswer: "PVC expandido ou TR",
        explanation: "O solado indicado para este modelo é o PVC expandido ou TR."
      },
      {
        id: "tenis-3",
        category: "tenis",
        question: "Qual é o sistema de fechamento utilizado para ajustar o tênis ao pé?",
        options: [
          "Atacador",
          "Velcro",
          "Elástico sem cadarço",
          "Fivela lateral"
        ],
        correctAnswer: "Atacador",
        explanation: "O ajuste ao pé é feito por meio de atacador."
      },
      {
        id: "tenis-4",
        category: "tenis",
        question: "Na ficha técnica, qual componente é essencial para o conforto interno em contato direto com o pé?",
        options: [
          "Palmilha de montagem e palmilha de conforto",
          "Somente taloneira reforçada",
          "Forro têxtil simples",
          "Contraforte acolchoado"
        ],
        correctAnswer: "Palmilha de montagem e palmilha de conforto",
        explanation: "O conforto interno depende da palmilha de montagem em conjunto com a palmilha de conforto."
      },
      {
        id: "tenis-5",
        category: "tenis",
        question: "Qual textura ou acabamento é predominante na estética deste modelo?",
        options: [
          "Design da costura.",
          "Acabamento metalizado",
          "Textura emborrachada",
          "Efeito acetinado"
        ],
        correctAnswer: "Design da costura.",
        explanation: "O destaque estético predominante deste modelo é o design da costura."
      },
      {
        id: "tenis-6",
        category: "tenis",
        question: "Considerando a durabilidade, qual parte do tênis requer reforço estrutural oculto?",
        options: [
          "Contraforte e Bico",
          "Alma de aço na palmilha",
          "Couraça lateral",
          "Reforço em fibra na entressola"
        ],
        correctAnswer: "Contraforte e Bico",
        explanation: "O reforço estrutural oculto está no contraforte e no bico."
      },
      {
        id: "tenis-7",
        category: "tenis",
        question: "Qual é a silhueta ou formato predominante da biqueira deste modelo?",
        options: [
          "Bico Redondo",
          "Bico Quadrado",
          "Bico Fino",
          "Bico Amendoado"
        ],
        correctAnswer: "Bico Redondo",
        explanation: "A biqueira deste modelo tem formato redondo."
      }
    ]
  },

  bota: {
    id: "bota",
    name: "Bota",
    shuffleQuestions: true,
    questions: [
      {
        id: "bota-1",
        category: "bota",
        question: "Qual é o material principal utilizado no cabedal (parte de cima) deste modelo?",
        options: [
          "Couro",
          "Sintético com brilho",
          "Nobuck",
          "Camurça"
        ],
        correctAnswer: "Couro",
        explanation: "O cabedal deste modelo é produzido em couro."
      },
      {
        id: "bota-2",
        category: "bota",
        question: "Qual tipo de solado é mais adequado para garantir a funcionalidade da bota?",
        options: [
          "PVC",
          "TPU",
          "Borracha vulcanizada",
          "TR (Termoplástico de Resina)"
        ],
        correctAnswer: "PVC",
        explanation: "O solado indicado para este modelo é o PVC."
      },
      {
        id: "bota-3",
        category: "bota",
        question: "Qual é o sistema de fechamento utilizado para ajustar a bota ao pé?",
        options: [
          "Atacador, zíper e puxador",
          "Somente fivela",
          "Velcro duplo",
          "Elástico lateral com atacador"
        ],
        correctAnswer: "Atacador, zíper e puxador",
        explanation: "O ajuste ao pé é feito por atacador, zíper e puxador."
      },
      {
        id: "bota-4",
        category: "bota",
        question: "Na ficha técnica, qual componente é essencial para o conforto interno em contato direto com o pé?",
        options: [
          "Palmilha de montagem e palmilha de conforto",
          "Somente taloneira reforçada",
          "Forro têxtil acolchoado",
          "Contraforte interno macio"
        ],
        correctAnswer: "Palmilha de montagem e palmilha de conforto",
        explanation: "O conforto interno depende da palmilha de montagem em conjunto com a palmilha de conforto."
      },
      {
        id: "bota-5",
        category: "bota",
        question: "Qual textura ou acabamento é predominante na estética deste modelo?",
        options: [
          "Vira (parte da sola)",
          "Costura decorativa aparente",
          "Acabamento envernizado",
          "Detalhe em metal na sola"
        ],
        correctAnswer: "Vira (parte da sola)",
        explanation: "O destaque estético predominante deste modelo é a vira, parte da sola."
      },
      {
        id: "bota-6",
        category: "bota",
        question: "Considerando a durabilidade, qual parte da bota requer reforço estrutural oculto?",
        options: [
          "Contraforte e Bico",
          "Alma de aço na palmilha",
          "Couraça lateral",
          "Reforço em fibra na haste"
        ],
        correctAnswer: "Contraforte e Bico",
        explanation: "O reforço estrutural oculto está no contraforte e no bico."
      },
      {
        id: "bota-7",
        category: "bota",
        question: "Qual é a silhueta ou formato predominante da biqueira deste modelo?",
        options: [
          "Bico Redondo",
          "Bico Quadrado",
          "Bico Fino",
          "Bico Amendoado"
        ],
        correctAnswer: "Bico Redondo",
        explanation: "A biqueira deste modelo tem formato redondo."
      }
    ]
  },

  producao: {
    id: "producao",
    name: "Produção",
    shuffleQuestions: false,
    questions: [
      {
        id: "producao-1",
        category: "producao",
        question: "Durante a montagem do tênis, o cabedal passa pela etapa de ensacar. O que acontece nesse processo?",
        options: [
          "O ensacador coloca a forma no cabedal e puxa o cordão, dando forma ao sapato.",
          "O cabedal é costurado diretamente à sola nesta etapa.",
          "O calçado recebe o acabamento final e é embalado.",
          "A sola é vulcanizada sob pressão e calor."
        ],
        correctAnswer: "O ensacador coloca a forma no cabedal e puxa o cordão, dando forma ao sapato.",
        explanation: "No ensacamento, o ensacador coloca a forma no cabedal e puxa o cordão, ajudando a dar forma ao sapato. Depois, o processo segue para as próximas etapas da montagem."
      },
      {
        id: "producao-2",
        category: "producao",
        question: "Depois de passar por algumas etapas da produção, o tênis chega à revisão de mesa. Qual é a importância dessa etapa?",
        options: [
          "Verificar o produto e identificar possíveis problemas antes de continuar o processo.",
          "Aplicar o adesivo entre cabedal e sola.",
          "Realizar o corte dos moldes do cabedal.",
          "Embalar o produto para expedição."
        ],
        correctAnswer: "Verificar o produto e identificar possíveis problemas antes de continuar o processo.",
        explanation: "A revisão permite verificar se o produto está seguindo corretamente e identificar possíveis problemas antes que ele avance para as próximas etapas."
      },
      {
        id: "producao-3",
        category: "producao",
        question: "Antes da união entre o cabedal e a sola, algumas superfícies passam por processos de preparação. Qual é a finalidade dessa preparação?",
        options: [
          "Preparar as superfícies para favorecer a união adequada entre cabedal e sola.",
          "Higienizar o calçado antes da etiquetagem.",
          "Aplicar o verniz de acabamento final no cabedal.",
          "Reforçar a costura da taloneira."
        ],
        correctAnswer: "Preparar as superfícies para favorecer a união adequada entre cabedal e sola.",
        explanation: "A asperação química e mecânica fazem parte da preparação das superfícies. Depois dessa preparação, é aplicado o adesivo conforme o processo utilizado na linha."
      },
      {
        id: "producao-4",
        category: "producao",
        question: "Depois da preparação e união dos componentes, o tênis passa por outras etapas de montagem e acabamento. Qual é a importância da centralização?",
        options: [
          "Garantir que os componentes estejam posicionados corretamente no calçado.",
          "Secar o adesivo aplicado na sola.",
          "Resfriar o calçado após a vulcanização.",
          "Cortar os excessos de material da sola."
        ],
        correctAnswer: "Garantir que os componentes estejam posicionados corretamente no calçado.",
        explanation: "A centralização contribui para que os componentes do calçado fiquem corretamente posicionados. Depois, o processo segue pelas demais etapas de acabamento, incluindo desenformar e colocar a taloneira."
      },
      {
        id: "producao-5",
        category: "producao",
        question: "O tênis chegou às etapas finais. O que acontece antes de ele seguir para a expedição?",
        options: [
          "O produto passa pelas etapas finais de acabamento, recebe a etiqueta, é colocado na caixa e preparado para a expedição.",
          "O produto retorna para a etapa de montagem do cabedal.",
          "O produto passa por nova aplicação de adesivo.",
          "O produto é enviado para revisão de mesa novamente."
        ],
        correctAnswer: "O produto passa pelas etapas finais de acabamento, recebe a etiqueta, é colocado na caixa e preparado para a expedição.",
        explanation: "Depois das etapas de produção e acabamento, o tênis recebe os procedimentos finais, como buxinha, etiqueta e embalagem, sendo então colocado na caixa e encaminhado para a expedição."
      }
    ]
  }
};

// Ordem e metadados de exibição das categorias na tela de seleção.
// "image" é o caminho sugerido do arquivo dentro de assets/images/.
const CATEGORY_LIST = [
  { id: "sandalia", label: "Sandália", image: "assets/images/sandalia.png" },
  { id: "tenis", label: "Tênis", image: "assets/images/tenis.png" },
  { id: "bota", label: "Bota", image: "assets/images/bota.png" },
  { id: "producao", label: "Produção", image: "assets/images/producao.png" }
];
