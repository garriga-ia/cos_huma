import { systems_es } from './data_es';
import { systems_en } from './data_en';

export type SystemId = 'locomotor' | 'excretor' | 'reproductor' | 'nervios' | 'respiratori' | 'circulatori' | 'digestiu';

export interface Flashcard {
  q: string;
  a: string;
}

export interface TestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ApuntsSection {
  title: string;
  icon: string;
  content: string | string[];
}

export interface SystemData {
  id: SystemId;
  title: string;
  icon: string;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  apunts: {
    missio: string;
    sections: ApuntsSection[];
    tips: string[];
    sabies_que?: string;
  };
  test: TestQuestion[];
  flashcards: Flashcard[];
}

export const systems_ca: SystemData[] = [
  {
    id: 'locomotor',
    title: 'Aparell Locomotor',
    icon: '🦴',
    color: '#b7791f',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-500',
    apunts: {
      missio: "És la 'carrosseria' i el motor del teu cos. La seva missió és protegir els teus òrgans vitals (com un escut) i permetre't realitzar qualsevol moviment, des de parpellejar fins a saltar tanques.",
      sabies_que: "L'os fèmur és més fort que el formigó! Pot suportar fins a 30 vegades el pes del teu cos sense trencar-se.",
      sections: [
        { title: 'Els Ossos (L\'Esquelet)', icon: '☠️', content: "Tenim 206 ossos. Són el magatzem de calci del cos i la seva fàbrica de sang (a dins seu es creen les cèl·lules sanguínies)." },
        { title: 'Els Músculs (El Motor)', icon: '💪', content: "N'hi ha més de 630. Funcionen com gomes elàstiques que s'estiren i s'encullen per estirar els ossos. Els més actius són els dels ulls (es mouen 100.000 vegades al dia!)." },
        { title: 'Articulacions i Lligaments', icon: '🦾', content: "Són les frontisses que permeten que els ossos no xoquin entre si. Els lligaments actuen com cintes adhesives ultra-resistents per mantenir-ho tot unit." }
      ],
      tips: [
        "Per tenir ossos de ferro: pren calci (llet, iogurt, bròquil) i vitamina D (un polsim de sol!).",
        "L'exercici de força (motxilla, saltar) ajuda a que els teus ossos es facin més densos i forts."
      ]
    },
    test: [
      { question: "Quina feina molt important fan els nostres ossos a part d'aguantar-nos drets?", options: ["A) Produir la sang.", "B) Ajudar a pair el menjar.", "C) Protegir els òrgans vitals (com el cor o el cervell)."], correctIndex: 2, explanation: "Molt bé! Són com l'armadura del nostre cos." },
      { question: "Què permet que els ossos es puguin moure i doblegar sense fer-nos mal?", options: ["A) Les articulacions i els músculs que es contreuen.", "B) Les venes.", "C) Els nervis de la pell."], correctIndex: 0, explanation: "Correcte! És un treball en equip entre articulacions i músculs." },
      { question: "El colze és una articulació del braç. Saps quins ossos uneix?", options: ["A) El fèmur i la tíbia.", "B) El cúbit, el radi i l'húmer.", "C) El crani i la columna."], correctIndex: 1, explanation: "Exacte! Et permet doblegar i estirar el braç." },
      { question: "Per què ens serveix l'articulació de la columna vertebral?", options: ["A) Per unir la mà amb el braç.", "B) Per mastegar el menjar.", "C) Per doblegar el tronc i mantenir la postura."], correctIndex: 2, explanation: "Així és! Ens permet girar-nos i agafar coses de terra." },
      { question: "Com podem enfortir els nostres ossos i músculs per evitar lesions?", options: ["A) Fent exercicis de resistència (com fer servir bandes elàstiques).", "B) Dormint molt durant el dia.", "C) No movent-nos de la cadira."], correctIndex: 0, explanation: "Genial! Mantenir-se actiu i fer força és la clau." }
    ],
    flashcards: [
      { q: "Per què serveix el sistema locomotor?", a: "Per protegir els òrgans i permetre el moviment." },
      { q: "Quants ossos i músculs tenim quan som adults?", a: "206 ossos i més de 630 músculs." },
      { q: "Quina articulació permet moure el braç en moltes direccions?", a: "L'espatlla." },
      { q: "Com podem enfortir els ossos i músculs?", a: "Fent exercicis de resistència (com aixecar pesos lleugers)." },
      { q: "Nomena 3 músculs del cos:", a: "Pectoral, bíceps i quadríceps." }
    ]
  },
  {
    id: 'excretor',
    title: 'Aparell Excretor',
    icon: '🧼',
    color: '#38a169',
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-700',
    borderClass: 'border-emerald-500',
    apunts: {
      missio: "És la planta de tractament de residus del cos. S'encarrega de netejar la sang de substàncies tòxiques i mantenir l'equilibri d'aigua en el teu organisme.",
      sabies_que: "Els teus ronyons filtren tota la teva sang unes 40 vegades al dia. És com si netegessin una piscina sencera cada mes!",
      sections: [
        { title: 'Els Ronyons (Els Filtres)', icon: '🫘', content: "Contenen milions d'unitats anomenades 'nefrones' que actuen com coladors intel·ligents que decideixen què es queda i què se'n va." },
        { title: 'Vies Urinàries', icon: '🛝', content: "Els urèters són canonades que porten l'orina a la bufeta (un globus muscular que pot guardar fins a mig litre)." },
        { title: 'La Pell (Excreció Extra)', icon: '💦', content: "A través de la suor, la pell també elimina sals i toxines, a més de refrescar-te quan el motor del cos s'escalfa." }
      ],
      tips: [
        "Beu aigua fins i tot quan no tinguis set; els teus ronyons la necessiten per treballar sense esforç.",
        "No t'aguantis les ganes d'anar al bany: l'orina estancada pot causar infeccions."
      ]
    },
    test: [
      { question: "El cos necessita eliminar la 'brossa' (substàncies tòxiques). Quines dues coses fem servir per expulsar-la?", options: ["A) La sang i la saliva.", "B) L'orina i la suor.", "C) L'oxigen i els nutrients."], correctIndex: 1, explanation: "Correcte! L'orina i la suor són els nostres 'camions d'escombraries'." },
      { question: "Quins òrgans actuen com a coladors per filtrar la sang i crear les gotes d'orina?", options: ["A) La bufeta.", "B) Els urèters.", "C) Els ronyons."], correctIndex: 2, explanation: "Molt bé! Són com dos filtres netejadors." },
      { question: "Un op tenim l'orina feta, on s'acumula i es guarda fins que anem al lavabo?", options: ["A) A la uretra.", "B) A la bufeta.", "C) Als ronyons."], correctIndex: 1, explanation: "Així és! Funciona com un petit globus que s'omple." },
      { question: "La pell també ajuda a netejar el cos suant quan fem esport. De què està feta la suor?", options: ["A) D'aigua i sals.", "B) Només d'aigua pura.", "C) D'aigua i sucre."], correctIndex: 0, explanation: "Exacte! Per això la suor té un gust una mica salat." },
      { question: "Si no cuidem l'aparell excretor, què ens pot passar?", options: ["A) Que ens posem molt forts.", "B) Que les cèl·lules deixin de funcionar i ens posem malalts.", "C) Que tinguem més son."], correctIndex: 1, explanation: "Ben vist. L'hem de cuidar bevent aigua i anant al lavabo!" }
    ],
    flashcards: [
      { q: "Quina és la funció de l'aparell excretor?", a: "Expulsar les substàncies tòxiques del cos." },
      { q: "Quina és la funció dels ronyons?", a: "Filtrar la sang per formar l'orina." },
      { q: "Quina funció té la pell en l'excreció?", a: "Expulsar residus a través de la suor." },
      { q: "On s'acumula l'orina abans d'anar al lavabo?", a: "A la bufeta." },
      { q: "Digues una norma d'higiene important.", a: "Dutxar-se i rentar-se les mans sovint." }
    ]
  },
  {
    id: 'reproductor',
    title: 'Aparell Reproductor',
    icon: '🌱',
    color: '#dd6b20',
    bgClass: 'bg-orange-100',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-500',
    apunts: {
      missio: "És el sistema encarregat de la continuïtat de la vida. Permet que els éssers humans creïn nous individus perquè l'espècie segueixi endavant.",
      sabies_que: "Tots els éssers humans vam començar sent una sola cèl·lula microscòpica (el zigot), que contenia totes les instruccions per construir el teu cos sencer.",
      sections: [
        { title: 'Òrgans Femenins', icon: '👧', content: "Inclouen els ovaris (on es guarden els òvuls) i l'úter, que és un múscul increïble que pot expandir-se per allotjar un bebè." },
        { title: 'Òrgans Masculins', icon: '👦', content: "Inclouen els testicles (encarregats de produir espermatozoides) i canals conductors per al transport de les cèl·lules reproductores." },
        { title: 'La Pubertat', icon: '⚡', content: "És l'etapa de grans canvis. El cervell envia senyals químiques (hormones) que transformen el cos de nen/a en adult." }
      ],
      tips: [
        "L'higiene íntima és fonamental durant el desenvolupament per evitar molèsties i infeccions.",
        "Els canvis físics i d'humor són normals: el teu cos s'està reconfigurant!"
      ]
    },
    test: [
      { question: "Quina és la missió o funció principal de l'aparell reproductor?", options: ["A) Crear nous éssers vius.", "B) Digerir els aliments forts.", "C) Ajudar-nos a moure les cames."], correctIndex: 0, explanation: "Molt bé! Així és com creix la vida." },
      { question: "Hi ha òrgans diferents per a cada sexe. Quin d'aquests forma part de l'aparell femení?", options: ["A) Els testicles.", "B) L'úter.", "C) Les vesícules seminals."], correctIndex: 1, explanation: "Correcte! L'úter és l'òrgan femení." },
      { question: "I quin d'aquests òrgans forma part de l'aparell reproductor masculí?", options: ["A) El penis.", "B) La trompa de fal·lopi.", "C) Els ovaris."], correctIndex: 0, explanation: "Exacte! I també els testicles i els conductes." },
      { question: "Quan les nenes arriben a la pubertat, el seu cos canvia. Quin canvi és típic?", options: ["A) Es fan molt més baixetes.", "B) Els canvia la veu a una de molt greu.", "C) Els baixa la regla i es desenvolupen els pits."], correctIndex: 2, explanation: "Així és, és un pas natural per fer-se gran." },
      { question: "I quan els nens arriben a la pubertat, què els sol passar al cos?", options: ["A) Deixen de créixer de cop.", "B) Els canvia el to de veu i els creix pèl pel cos.", "C) Les cames es fan més curtes."], correctIndex: 1, explanation: "Molt bé! El canvi de veu és molt evident." }
    ],
    flashcards: [
      { q: "Quina és la funció de l'aparell reproductor?", a: "Crear nous éssers vius." },
      { q: "Nomena alguns òrgans masculins:", a: "Testicles, conductes deferents, vesícules seminals i penis." },
      { q: "Nomena alguns òrgans femenins:", a: "Vagina, úter, trompa de fal·lopi, vulva i ovaris." },
      { q: "Quins canvis tenen les noies a la pubertat?", a: "Desenvolupament dels pits, pèl i la regla." },
      { q: "Quins canvis tenen els nois a la pubertat?", a: "Pèl pel cos i canvis en el to de veu." }
    ]
  },
  {
    id: 'nervios',
    title: 'Sistema Nerviós',
    icon: '🧠',
    color: '#805ad5',
    bgClass: 'bg-purple-100',
    textClass: 'text-purple-700',
    borderClass: 'border-purple-500',
    apunts: {
      missio: "És l'ordinador central i la xarxa de comunicacions del teu cos. Ho controla tot: des dels batecs del teu cor fins als teus pensaments més complexos.",
      sabies_que: "La informació viatja pels teus nervis a una velocitat de fins a 400 km/h. Més ràpid que un cotxe de Fórmula 1!",
      sections: [
        { title: 'L\'Encèfal', icon: '🛰️', content: "Format pel cervell (pensar/memòria), el cerevel (equilibri) i el bulb raquidi (control de la respiració i el cor)." },
        { title: 'La Medul·la Espinal', icon: '🎢', content: "És l'autopista principal que recorre la teva esquena. Per ella baixen les ordres del cervell i pugen els avisos dels sentits." },
        { title: 'Els Nervis', icon: '🔌', content: "Són cables ultra-fins que arriben a cada mil·límetre de la teva pell i òrgans. Envien senyals elèctrics sense parar." }
      ],
      tips: [
        "El cervell es neteja mentre dorms. Per això necessites 9 hores de son per 'reiniciar-te'.",
        "Aprendre coses noves (música, idiomes) crea noves connexions neuronals."
      ]
    },
    test: [
      { question: "Si toquem una cosa que crema, apartem la mà de seguida. Quina part envia l'avís de dolor al cervell?", options: ["A) Els músculs.", "B) Els ossos.", "C) Els nervis."], correctIndex: 2, explanation: "Correcte! Els nervis actuen de manera instintiva." },
      { question: "Hi ha una part molt important amagada a dins de la columna vertebral per estar protegida. Quina és?", options: ["A) El cerevel.", "B) La medul·la espinal.", "C) El bulb raquidi."], correctIndex: 1, explanation: "Molt bé! Condueix les sensacions fins al cervell." },
      { question: "Quina part s'encarrega d'assegurar les funcions vitals (com respirar) encara que estiguem dormint?", options: ["A) El bulb raquidi.", "B) El cerevel.", "C) Els sentits."], correctIndex: 0, explanation: "Així és! El bulb raquidi no descansa mai." },
      { question: "Els òrgans dels sentits (ulls, orelles...) recullen informació. Cap a on l'envien per saber què passa?", options: ["A) Cap a l'estómac.", "B) Cap al cor.", "C) Cap a l'encèfal (cervell)."], correctIndex: 2, explanation: "Exacte! L'encèfal és com l'ordinador central." },
      { question: "El sistema nerviós treballa molt. Com el posdem cuidar i ajudar a descansar?", options: ["A) Dormint entre 8 i 10 hores, i evitant pantalles.", "B) Jugant molt al mòbil abans de dormir.", "C) Menjant molts dolços."], correctIndex: 0, explanation: "Molt ben pensat! El cervell necessita descansar de les pantalles." }
    ],
    flashcards: [
      { q: "De què s'encarrega el sistema nerviós?", a: "De donar resposta segons el que arriba de l'exterior." },
      { q: "Què fa el cerevel?", a: "Processa informació que ve d'altres àrees." },
      { q: "Quina és la funció del bulb raquidi?", a: "Assegurar les funcions vitals del cos." },
      { q: "Com podem cuidar el sistema nerviós?", a: "Dormir entre 8 i 10 hores, i evitar mirar pantalles." }
    ]
  },
  {
    id: 'respiratori',
    title: 'Aparell Respiratori',
    icon: '🌬️',
    color: '#319795',
    bgClass: 'bg-teal-100',
    textClass: 'text-teal-700',
    borderClass: 'border-teal-500',
    apunts: {
      missio: "És el sistema d'intercanvi d'energia. Atrapa l'oxigen de l'aire (el combustible de les teves cèl·lules) i expulsa el diòxid de carboni (el fum del motor).",
      sabies_que: "Els teus pulmons no són iguals. El d'esquerra és més petit per deixar lloc al cor. Treballen en equip!",
      sections: [
        { title: 'Vies Respiratòries', icon: '👃', content: "Fosses nasals (filtre d'aire), laringe (on hi ha les teves cordes vocals) i la tràquea (el tub principal)." },
        { title: 'Pulmons i Bronquis', icon: '🫁', content: "La tràquea es divideix en bronquis, que semblen branques d'un arbre invertit dins dels teus pulmons." },
        { title: 'Alvèols (La Màgia)', icon: '🧼', content: "Són bossetes microscòpiques envoltades de sang. Aquí és on l'oxigen salta de l'aire a les teves venes." }
      ],
      tips: [
        "Respirar pel nas neteja i escalfa l'aire abans que arribi als teus pulmons.",
        "Fer exercici aeròbic (córrer, nedar) augmenta la teva capacitat pulmonar."
      ]
    },
    test: [
      { question: "Per què és millor respirar pel nas? Què fan les fosses nasals amb l'aire?", options: ["A) L'omplen de diòxid de carboni.", "B) El converteixen en sang cap al cor.", "C) El filtren, l'escalfen i l'humitegen."], correctIndex: 2, explanation: "Perfecte! Per això l'aire arriba ben net als pulmons." },
      { question: "Quan parlem o cantem, fem servir les cordes vocals. A quin òrgan amagat al coll es troben?", options: ["A) A la laringe.", "B) A la tràquea.", "C) Als bronquis."], correctIndex: 0, explanation: "Molt bé! La laringe deixa passar l'aire i ens deixa parlar." },
      { question: "Dins dels pulmons hi ha unes petites bosses on la sang agafa l'oxigen. Com es diuen?", options: ["A) Alvèols pulmonars.", "B) Bronquíols.", "C) Lòbuls."], correctIndex: 0, explanation: "Correcte! Aquí és on es fa la màgia de l'intercanvi de gasos." },
      { question: "Agafem oxigen de l'aire per viure, però... quin gas expulsem cap a fora perquè ens fa mal?", options: ["A) El nitrogen.", "B) El diòxid de carboni.", "C) L'heli."], correctIndex: 1, explanation: "Així mateix! Expulsem el diòxid de carboni." },
      { question: "Si et fixes bé, el pulmó esquerre només té dos lòbuls i és una mica més petit que el dret. Per què?", options: ["A) Perquè per l'esquerre respirem menys.", "B) Per deixar espai per a l'estómac.", "C) Perquè és el lloc on es troba el cor."], correctIndex: 2, explanation: "Exacte! El cor necessita el seu espai a l'esquerra del pit." }
    ],
    flashcards: [
      { q: "Quina és la funció de l'aparell respiratori?", a: "Captar oxigen i expulsar el diòxid de carboni." },
      { q: "Què fan les fosses nasals?", a: "Filtren, escalfen i humitegen l'aire." },
      { q: "On es troben les cordes vocals?", a: "A la laringe." },
      { q: "On es fa l'intercanvi de gasos?", a: "Als alvèols pulmonars." },
      { q: "Per què el pulmó esquerre només té dos lòbuls (és més petit)?", a: "Perquè és on es troba el cor." }
    ]
  },
  {
    id: 'circulatori',
    title: 'Aparell Circulatori',
    icon: '❤️',
    color: '#e53e3e',
    bgClass: 'bg-red-100',
    textClass: 'text-red-700',
    borderClass: 'border-red-500',
    apunts: {
      missio: "És el servei de missatgeria urgent 24h. Transporta oxigen, nutrients i defenses a cada racó del teu cos a través d'una xarxa de canonades infinites.",
      sabies_que: "Si estiréssim tots els teus vasos sanguinis, farien la volta al món dues vegades i mitja!",
      sections: [
        { title: 'El Cor (La Bomba)', icon: '🫀', content: "És un múscul incansable. Bombeja sang sense parar. En tota una vida bategarà uns 3.000 milions de vegades!" },
        { title: 'La Sang (El Transport)', icon: '🩸', content: "Conté glòbuls vermells (oxigen), blancs (soldats contra bacteris) i plaquetes (pega per tancar ferides)." },
        { title: 'Artèries, Venes i Capil·lars', icon: '🛣️', content: "Les artèries porten la sang 'fresca' i les venes porten la sang de tornada per netejar-la. Els capil·lars són tan prims que la sang hi passa d'un en un." }
      ],
      tips: [
        "L'exercici cardiovascular fa que el teu cor sigui més gran i eficient (batega menys vegades però amb més força).",
        "Beure aigua ajuda a que la sang sigui més fluida i circuli millor."
      ]
    },
    test: [
      { question: "Què fan exactament els glòbuls vermells dins la nostra sang?", options: ["A) Protegeixen l'organisme.", "B) Donen color vermell a la sang i transporten l'oxigen.", "C) Cicatritzen les ferides."], correctIndex: 1, explanation: "Així és! Són els 'camions' que porten l'oxigen per tot el cos." },
      { question: "Si et fas un tall petit i surt sang, quina part treballa de seguida per tapar la ferida?", options: ["A) Els glòbuls blancs.", "B) El plasma.", "C) Les plaquetes."], correctIndex: 2, explanation: "Correcte! Les plaquetes fan com un tap per cicatrizar." },
      { question: "Els vasos sanguinis són els tubs per on viatja la sang. Quins són els més primets de tots?", options: ["A) Los capil·lars.", "B) Les venes.", "C) Les artèries."], correctIndex: 0, explanation: "Molt bé! Són tan prims com un cabell." },
      { question: "El cor no para mai de treballar. Quantes pulsacions aproximades fa cada dia?", options: ["A) Unes 10.000 pulsacions.", "B) Unes 100.000 pulsacions.", "C) Unes 1.000 pulsacions."], correctIndex: 1, explanation: "Exacte! Batega unes 100.000 vegades al dia per repartir l'energia." },
      { question: "Si poséssim totes les nostres venes i artèries en fila índia, fins on arribarien?", options: ["A) Donarien dues voltes i mitja a la Terra.", "B) Arribarien fins a la Lluna.", "C) Donarien la volta a Catalunya."], correctIndex: 0, explanation: "Increíble, oi? Mesuren uns 97.000 km!" }
    ],
    flashcards: [
      { q: "Quina és la funció de l'aparell circulatori?", a: "Transportar nutrients i oxigen per tot el cos." },
      { q: "Quins són els components del sistema?", a: "El cor i els vasos sanguinis (venes, artèries i capil·lars)." },
      { q: "Quina feina fan els glòbuls blancs?", a: "Protegeixen l'organisme." },
      { q: "Quina feina fan les plaquetes?", a: "Cicatritzen les ferides." },
      { q: "Quantes pulsacions fa el cor cada dia?", a: "100.000 pulsacions diàries." },
      { q: "Quina és la llargada de les venes i artèries juntes?", a: "97.000 km (dues voltes i mitja a la Terra)." }
    ]
  },
  {
    id: 'digestiu',
    title: 'Aparell Digestiu',
    icon: '🍎',
    color: '#3182ce',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-700',
    borderClass: 'border-blue-500',
    apunts: {
      missio: "És la fàbrica de combustible. La seva feina és descompondre el menjar fins a convertir-lo en molècules tan petites que puguin entrar a la teva sang.",
      sabies_que: "El teu intestí prim mesura uns 7 metres. És tan llarg com un autobús escolar!",
      sections: [
        { title: 'La Boca (Trituradora)', icon: '👄', content: "La digestió comença aquí. La saliva conté enzims que comencen a desfer els carbohidrats mentre mastegues." },
        { title: 'L\'Estómac (El Reactor)', icon: '🛍️', content: "És una bossa de múscul amb àcids molt forts (podrien desfer metall!) que converteixen el menjar en una pasta anomenada quim." },
        { title: 'Intestí Prim i Gros', icon: '🪢', content: "En el prim s'absorbeixen els nutrients. En el gros es recupera l'aigua i es compacten els residus finals." }
      ],
      tips: [
        "Mastegar 20 vegades cada bofí ajuda a que el teu estómac treballi molt menys i tinguis més energia.",
        "La fibra (fruita amb pell, llegums) és com l'escombra que neteja els teus intestins per dins."
      ]
    },
    test: [
      { question: "Quan el menjar es barreja amb la saliva a la boca, què es forma?", options: ["A) El bol alimentari.", "B) El quim.", "C) La bilis."], correctIndex: 0, explanation: "Molt bé! Les dents trituren i la saliva ajuda a fer el bol alimentari." },
      { question: "Quin òrgan és com una bossa que desfà el menjar amb els seus sucs gàstrics?", options: ["A) El pàncrees.", "B) L'estómac.", "C) L'esòfag."], correctIndex: 1, explanation: "Exacte! L'estómac és la bossa on es forma el quim." },
      { question: "Quin tub llarg (de 7 metres!) s'encarrega d'absorbir els nutrients bons per al cos?", options: ["A) L'intestí gros.", "B) El tub digestiu.", "C) L'intestí prim."], correctIndex: 2, explanation: "Correcte! L'intestí prim agafa tot el que necessitem." },
      { question: "Quina part s'encarrega d'absorbir l'aigua i preparar els excrements?", options: ["A) L'intestí gros.", "B) La vesícula biliar.", "C) Els ronyons."], correctIndex: 0, explanation: "Molt bé! És l'últim pas abans de l'anus." },
      { question: "Què és el millor que pots fer quan t'asseus a dinar per ajudar a la teva digestió?", options: ["A) Menjar molt ràpid per anar a jugar.", "B) Mastegar bé i menjar a poc a poc.", "C) Prendre només sucs i dolços."], correctIndex: 1, explanation: "Així mateix! Cal mastegar bé i sense pressa." }
    ],
    flashcards: [
      { q: "Quina és la funció de l'aparell digestiu?", a: "Transformar els aliments en nutrients." },
      { q: "On es tritura el menjar i es barreja amb la saliva?", a: "A la boca." },
      { q: "Com es diu la massa pastosa que se forma a l'estómac?", a: "El Quim." },
      { q: "Quin òrgan fa 7 metres de llarg i absorbeix nutrients?", a: "L'intestí prim." },
      { q: "On s'absorbeix l'aigua i es formen els excrements?", a: "L'intestí gros." },
      { q: "Per on s'expulsen les restes que no necessitem?", a: "Per l'anus." },
      { q: "Digues 1 hàbit saludable pel sistema digestiu.", a: "Beure molta aigua cada dia." }
    ]
  }
];

export function getSystems(language: string): SystemData[] {
  if (language === 'es') return systems_es;
  if (language === 'en') return systems_en;
  return systems_ca;
}
