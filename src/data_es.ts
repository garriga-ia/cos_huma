import { SystemData } from './data';

export const systems_es: SystemData[] = [
  {
    id: 'locomotor',
    title: 'Aparato Locomotor',
    icon: '🦴',
    color: '#b7791f',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-500',
    apunts: {
      missio: "Es la 'carrocería' y el motor de tu cuerpo. Su misión es proteger tus órganos vitales (como un escudo) y permitirte realizar cualquier movimiento, desde pestañear hasta saltar vallas.",
      sabies_que: "¡El hueso fémur es más fuerte que el hormigón! Puede soportar hasta 30 veces el peso de tu cuerpo sin romperse.",
      sections: [
        { title: 'Los Huesos (El Esqueleto)', icon: '☠️', content: "Tenemos 206 bones. Son el almacén de calcio del cuerpo y su fábrica de sangre (dentro de ellos se crean las células sanguíneas)." },
        { title: 'Los Músculos (El Motor)', icon: '💪', content: "Hay más de 630. Funcionan como gomas elásticas que se estiran y encogen para tirar de los huesos. Los más activos son los de los ojos (¡se mueven 100.000 veces al día!)." },
        { title: 'Articulaciones y Ligamentos', icon: '🦾', content: "Son las bisagras que permiten que los huesos no choquen entre sí. Los ligamentos actúan como cintas adhesivas ultra-resistentes para mantenerlo todo unido." }
      ],
      tips: [
        "Para tener huesos de hierro: toma calcio (leche, yogur, brócoli) y vitamina D (¡un poco de sol!).",
        "El ejercicio de fuerza (mochila, saltar) ayuda a que tus huesos se hagan más densos y fuertes."
      ]
    },
    test: [
      { question: "¿Qué trabajo muy importante hacen nuestros huesos aparte de mantenernos erguidos?", options: ["A) Producir la sangre.", "B) Ayudar a digerir la comida.", "C) Proteger los órganos vitales (como el corazón o el cerebro)."], correctIndex: 2, explanation: "¡Muy bien! Son como la armadura de nuestro cuerpo." },
      { question: "¿Qué permite que los huesos se puedan mover y doblar sin hacernos daño?", options: ["A) Las articulaciones y los músculos que se contraen.", "B) Las venas.", "C) Los nervios de la piel."], correctIndex: 0, explanation: "¡Correcto! Es un trabajo en equipo entre articulaciones y músculos." },
      { question: "El codo es una articulación del brazo. ¿Sabes qué huesos une?", options: ["A) El fémur y la tibia.", "B) El cúbito, el radio y el húmero.", "C) El cráneo y la columna."], correctIndex: 1, explanation: "¡Exacto! Te permite doblar y estirar el brazo." },
      { question: "¿Para qué nos sirve la articulación de la columna vertebral?", options: ["A) Para unir la mano con el brazo.", "B) Para masticar la comida.", "C) Para doblar el tronco y mantener la postura."], correctIndex: 2, explanation: "¡Así es! Nos permite girarnos y coger cosas del suelo." },
      { question: "¿Cómo podemos fortalecer nuestros huesos y músculos para evitar lesiones?", options: ["A) Haciendo ejercicios de resistencia (como usar bandas elásticas).", "B) Durmiendo mucho durante el día.", "C) No moviéndonos de la silla."], correctIndex: 0, explanation: "¡Genial! Mantenerse activo y hacer fuerza es la clave." },
      { question: "¿Dónde se fabrican las células de la sangre?", options: ["A) En el corazón.", "B) En el interior de los huesos.", "C) En los músculos de las piernas."], correctIndex: 1, explanation: "¡Exacto! Los huesos son la 'fábrica' de nuestra sangre." },
      { question: "Los músculos funcionan por parejas de forma opuesta. ¿Cómo se llama cuando un músculo se acorta para tirar del hueso?", options: ["A) Contracción.", "B) Relajación.", "C) Extensión."], correctIndex: 0, explanation: "¡Correcto! Al contraerse, el músculo se hace más corto y grueso." },
      { question: "Si el fémur es el hueso más largo del cuerpo, ¿en qué parte se encuentra?", options: ["A) En el brazo.", "B) En la pierna.", "C) En la espalda."], correctIndex: 1, explanation: "¡Muy bien! Es el hueso del muslo y es súper resistente." },
      { question: "¿Qué mineral es fundamental para unos huesos fuertes?", options: ["A) Hierro.", "B) Calcio.", "C) Potasio."], correctIndex: 1, explanation: "¡Correcto! El calcio da dureza a tus huesos." },
      { question: "Unión de un músculo con un hueso, ¿cómo se llama?", options: ["A) Ligamento.", "B) Tendón.", "C) Cartílago."], correctIndex: 1, explanation: "¡Bien! Los tendones son como cuerdas que transmiten la fuerza del músculo al hueso." }
    ],
    flashcards: [
      { q: "¿Para qué sirve el sistema locomotor?", a: "Para proteger los órganos y permitir el movimiento." },
      { q: "¿Cuántos huesos y músculos tenemos cuando somos adultos?", a: "206 huesos y más de 630 músculos." },
      { q: "¿Qué articulación permite mover el brazo en muchas direcciones?", a: "El hombro." },
      { q: "¿Cómo podemos fortalecer los huesos y músculos?", a: "Haciendo ejercicios de resistencia y comiendo calcio." },
      { q: "Nombra 3 músculos del cuerpo:", a: "Pectoral, bíceps y cuádriceps." },
      { q: "¿Qué mineral es fundamental para que los huesos sean fuertes?", a: "El calcio." },
      { q: "¿Qué une los huesos entre sí en las articulaciones?", a: "Los ligamentos." },
      { q: "¿Cómo se llama el hueso que protege el cerebro?", a: "El cráneo." },
      { q: "¿Qué hueso es el más largo del cuerpo?", a: "El fémur." },
      { q: "¿Qué hueso protege el corazón y los pulmones?", a: "Las costillas." }
    ]
  },
  {
    id: 'excretor',
    title: 'Aparato Excretor',
    icon: '🧼',
    color: '#38a169',
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-700',
    borderClass: 'border-emerald-500',
    apunts: {
      missio: "Es la planta de tratamiento de residuos del cuerpo. Se encarga de limpiar la sangre de sustancias tóxicas y mantener el equilibrio de agua en tu organismo.",
      sabies_que: "Tus riñones filtran toda tu sangre unas 40 veces al día. ¡Es como si limpiaran una piscina entera cada mes!",
      sections: [
        { title: 'Los Riñones (Los Filtros)', icon: '🫘', content: "Contienen millones de unidades llamadas 'nefronas' que actúan como coladores inteligentes que deciden qué se queda y qué se va." },
        { title: 'Vías Urinarias', icon: '🛝', content: "Los uréteres son tuberías que llevan la orina a la vejiga (un globo muscular que puede guardar hasta medio litro)." },
        { title: 'La Piel (Excreción Extra)', icon: '💦', content: "A través del sudor, la piel también elimina sales y toxinas, además de refrescarte cuando el motor del cuerpo se calienta." }
      ],
      tips: [
        "Bebe agua incluso cuando no tengas sed; tus riñones la necesitan para trabajar sin esfuerzo.",
        "No aguantes las ganas de ir al baño: la orina estancada puede causar infecciones."
      ]
    },
    test: [
      { question: "El cuerpo necesita eliminar la 'basura' (sustancias tóxicas). ¿Qué dos cosas usamos para expulsarla?", options: ["A) La sangre y la saliva.", "B) La orina y el sudor.", "C) El oxígeno y los nutrientes."], correctIndex: 1, explanation: "¡Correcto! La orina y el sudor son nuestros 'camiones de basura'." },
      { question: "¿Qué órganos actúan como coladores para filtrar la sangre y crear las gotas de orina?", options: ["A) La vejiga.", "B) Los uréteres.", "C) Los riñones."], correctIndex: 2, explanation: "¡Muy bien! Son como dos filtros limpiadores." },
      { question: "Una vez tenemos la orina hecha, ¿dónde se acumula y se guarda hasta que vamos al lavabo?", options: ["A) En la uretra.", "B) En la vejiga.", "C) En los riñones."], correctIndex: 1, explanation: "¡Así es! Funciona como un pequeño globo que se llena." },
      { question: "La piel también ayuda a limpiar el cuerpo sudando cuando hacemos deporte. ¿De qué está hecho el sudor?", options: ["A) De agua y sales.", "B) Solo de agua pura.", "C) De agua y azúcar."], correctIndex: 0, explanation: "¡Exacto! Por eso el sudor tiene un sabor un poco salado." },
      { question: "Si no cuidamos el aparato excretor, ¿qué nos puede pasar?", options: ["A) Que nos pongamos muy fuertes.", "B) Que las células dejen de funcionar y nos pongamos enfermos.", "C) Que tengamos más sueño."], correctIndex: 1, explanation: "Bien visto. ¡Lo tenemos que cuidar bebiendo agua y yendo al lavabo!" },
      { question: "¿Cómo se llaman las unidades microscópicas que filtran la sangre dentro del riñón?", options: ["A) Nefronas.", "B) Neuronas.", "C) Alvéolos."], correctIndex: 0, explanation: "¡Exacto! Las nefronas son los micro-filtros inteligentes." },
      { question: "¿Qué porcentaje de orina es agua aproximadamente?", options: ["A) El 50%.", "B) El 95%.", "C) El 10%."], correctIndex: 1, explanation: "¡Correcto! La orina es casi toda agua, con un poco de residuos." },
      { question: "¿Qué pasaría si bebiéramos muy poca agua durante varios días?", options: ["A) Los riñones trabajarían mejor.", "B) Los riñones tendrían que esforzarse mucho y podrían fallar.", "C) El sudor sería más dulce."], correctIndex: 1, explanation: "¡Muy bien! El agua es el 'lubricante' de tus filtros." },
      { question: "Órgano que expulsa la orina al exterior:", options: ["A) Uretra.", "B) Uréter.", "C) Riñón."], correctIndex: 0, explanation: "¡Correcto! La uretra es la salida final." },
      { question: "La piel expulsa residuos mediante...", options: ["A) La orina.", "B) El sudor.", "C) La saliva."], correctIndex: 1, explanation: "¡Bien! El sudor es agua con sales minerales de desecho." }
    ],
    flashcards: [
      { q: "¿Cuál es la función del aparato excretor?", a: "Expulsar las sustancias tóxicas del cuerpo." },
      { q: "¿Cuál es la función de los riñones?", a: "Filtrar la sangre para formar la orina." },
      { q: "¿Qué función tiene la piel en la excreción?", a: "Expulsar residuos y refrescar a través del sudor." },
      { q: "¿Dónde se acumula la orina antes de ir al lavabo?", a: "En la vejiga." },
      { q: "¿Cómo se llaman las tuberías que conectan riñones con la vejiga?", a: "Uréteres." },
      { q: "¿Por dónde sale la orina al exterior?", a: "Por la uretra." },
      { q: "¿Cuántas veces al día se filtra toda la sangre?", a: "Aproximadamente 40 veces." },
      { q: "¿Qué son las nefronas?", a: "Micro-filtros inteligentes dentro del riñón." },
      { q: "¿De qué está hecho principalmente el sudor?", a: "Agua y sales minerales." },
      { q: "Cita una enfermedad del aparato excretor:", a: "Cistitis (infección de orina) o piedras en el riñón." }
    ]
  },
  {
    id: 'reproductor',
    title: 'Aparato Reproductor',
    icon: '🌱',
    color: '#dd6b20',
    bgClass: 'bg-orange-100',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-500',
    apunts: {
      missio: "Es el sistema encargado de la continuidad de la vida. Permite que los seres humanos creen nuevos individuos para que la especie siga adelante.",
      sabies_que: "Todos los seres humanos empezamos siendo una sola célula microscópica (el cigoto), que contenía todas las instrucciones para construir tu cuerpo entero.",
      sections: [
        { title: 'Órganos Femeninos', icon: '👧', content: "Incluyen los ovarios (donde se guardan los óvulos) y el útero, que es un músculo increíble que puede expandirse para alojar a un bebé." },
        { title: 'Órganos Masculinos', icon: '👦', content: "Incluyen los testículos (encargados de producir espermatozoides) y canales conductores para el transporte de las células reproductoras." },
        { title: 'La Pubertad', icon: '⚡', content: "Es la etapa de grandes cambios. El cerebro envía señales químicas (hormonas) que transforman el cuerpo de niño/a en adulto." }
      ],
      tips: [
        "La higiene íntima es fundamental durante el desarrollo para evitar molestias e infecciones.",
        "Los cambios físicos y de humor son normales: ¡tu cuerpo se está reconfigurando!"
      ]
    },
    test: [
      { question: "¿Cuál es la misión o función principal del aparato reproductor?", options: ["A) Crear nuevos seres vivos.", "B) Digerir los alimentos fuertes.", "C) Ayudarnos a mover las piernas."], correctIndex: 0, explanation: "¡Muy bien! Así es como crece la vida." },
      { question: "Hay órganos diferentes para cada sexo. ¿Cuál de estos forma parte del aparato femenino?", options: ["A) Los testículos.", "B) El útero.", "C) Las vesículas seminales."], correctIndex: 1, explanation: "¡Correcto! El útero es el órgano femenino." },
      { question: "¿Y cuál de estos órganos forma parte del aparato reproductor masculino?", options: ["A) El pene.", "B) La trompa de falopio.", "C) Los ovarios."], correctIndex: 0, explanation: "¡Exacto! Y también los testículos y los conductos." },
      { question: "Cuando las niñas llegan a la pubertad, su cuerpo cambia. ¿Qué cambio es típico?", options: ["A) Se hacen mucho más bajitas.", "B) Les cambia la voz a una muy grave.", "C) Les baja la regla y se desarrollan los pechos."], correctIndex: 2, explanation: "Así es, es un paso natural para hacerse mayor." },
      { question: "Y cuando los niños llegan a la pubertad, ¿qué les suele pasar al cuerpo?", options: ["A) Dejan de crecer de golpe.", "B) Les cambia el tono de voz y les crece vello por el cuerpo.", "C) Las piernas se hacen más cortas."], correctIndex: 1, explanation: "¡Muy bien! El cambio de voz es muy evidente." },
      { question: "¿Cómo se llama la primera célula que se forma al unirse un óvulo y un espermatozoide?", options: ["A) Embrión.", "B) Cigoto.", "C) Feto."], correctIndex: 1, explanation: "¡Correcto! Es la semilla de una nueva vida." },
      { question: "¿Dónde se guardan los óvulos en el cuerpo de la mujer?", options: ["A) En el útero.", "B) En los ovarios.", "C) En la vulva."], correctIndex: 1, explanation: "¡Bien! Los ovarios son los almacenes de óvulos." },
      { question: "¿Qué señales químicas provocan los cambios en la pubertad?", options: ["A) Vitaminas.", "B) Hormonas.", "C) Glóbulos."], correctIndex: 1, explanation: "¡Exacto! Las hormonas son los mensajeros del cambio." },
      { question: "Órgano elástico donde crece el bebé:", options: ["A) Útero.", "B) Vagina.", "C) Trompas."], correctIndex: 0, explanation: "¡Muy bien! El útero se expande a medida que el bebé crece." },
      { question: "Órganos masculinos que fabrican espermatozoides:", options: ["A) Vesículas.", "B) Testículos.", "C) Pene."], correctIndex: 1, explanation: "¡Correcto! Funcionan a una temperatura un poco más baja que el resto del cuerpo." }
    ],
    flashcards: [
      { q: "¿Cuál es la función del aparato reproductor?", a: "Crear nuevos seres vivos." },
      { q: "Nombra algunos órganos masculinos:", a: "Testículos, conductos deferentes, vesículas seminales y pene." },
      { q: "Nombra algunos órganos femeninos:", a: "Vagina, útero, trompa de falopio, vulva y ovarios." },
      { q: "¿Qué cambios tienen las chicas en la pubertad?", a: "Desarrollo de los pechos, vello y la regla." },
      { q: "¿Qué cambios tienen los chicos en la pubertad?", a: "Vello por el cuerpo y cambios en el tono de voz." },
      { q: "¿Qué es el cigoto?", a: "La primera célula microscópica de un nuevo ser." },
      { q: "¿Qué órgano protege y alimenta al bebé en el embarazo?", a: "El útero." },
      { q: "¿Qué son las hormonas?", a: "Señales químicas que provocan cambios en el cuerpo." },
      { q: "¿Dónde se producen los óvulos?", a: "En los ovarios." },
      { q: "¿Dónde se producen los espermatozoides?", a: "En los testículos." }
    ]
  },
  {
    id: 'nervios',
    title: 'Sistema Nervioso',
    icon: '🧠',
    color: '#805ad5',
    bgClass: 'bg-purple-100',
    textClass: 'text-purple-700',
    borderClass: 'border-purple-500',
    apunts: {
      missio: "Es el ordenador central y la red de comunicaciones de tu cuerpo. Controla todo: desde los latidos de tu corazón hasta tus pensamientos más complejos.",
      sabies_que: "La información viaja por tus nervios a una velocidad de hasta 400 km/h. ¡Más rápido que un coche de Fórmula 1!",
      sections: [
        { title: 'El Encéfalo', icon: '🛰️', content: "Formado por el cerebro (pensar/memoria), el cerebelo (equilibrio) y el bulbo raquídeo (control de la respiración y el corazón)." },
        { title: 'La Médula Espinal', icon: '🎢', content: "Es la autopista principal que recorre tu espalda. Por ella bajan las órdenes del cerebro y suben los avisos de los sentidos." },
        { title: 'Los Nervios', icon: '🔌', content: "Son cables ultra-finos que llegan a cada milímetro de tu piel y órganos. Envían señales eléctricas sin parar." }
      ],
      tips: [
        "El cerebro se limpia mientras duermes. Por eso necesitas 9 horas de sueño para 'reiniciarte'.",
        "Aprender cosas nuevas (música, idiomas) crea nuevas conexiones neuronales."
      ]
    },
    test: [
      { question: "Si tocamos una cosa que quema, apartamos la mano enseguida. ¿Qué parte envía el aviso de dolor al cerebro?", options: ["A) Los músculos.", "B) Los huesos.", "C) Los nervios."], correctIndex: 2, explanation: "¡Correcto! Los nervios actúan de manera instintiva." },
      { question: "Hay una parte muy importante escondida dentro de la columna vertebral para estar protegida. ¿Cuál es?", options: ["A) El cerebelo.", "B) La médula espinal.", "C) El bulbo raquídeo."], correctIndex: 1, explanation: "¡Muy bien! Conduce las sensaciones hasta el cerebro." },
      { question: "¿Qué parte se encarga de asegurar las funciones vitales (como respirar) aunque estemos durmiendo?", options: ["A) El bulbo raquídeo.", "B) El cerebelo.", "C) Los sentidos."], correctIndex: 0, explanation: "¡Así es! El bulbo raquídeo no descansa nunca." },
      { question: "Los órganos de los sentidos (ojos, orejas...) recogen información. ¿Hacia dónde la envían para saber qué pasa?", options: ["A) Hacia el estómago.", "B) Hacia el corazón.", "C) Hacia el encéfalo (cerebro)."], correctIndex: 2, explanation: "¡Exacto! El encéfalo es como el ordenador central." },
      { question: "El sistema nervioso trabaja mucho. ¿Cómo lo podemos cuidar y ayudar a descansar?", options: ["A) Durmiendo entre 8 y 10 horas, y evitando pantallas.", "B) Jugando mucho al móvil antes de dormir.", "C) Comiendo muchos dulces."], correctIndex: 0, explanation: "¡Muy bien pensado! El cerebro necesita descansar de las pantallas." },
      { question: "¿Qué parte del encéfalo controla el equilibrio para que no te caigas?", options: ["A) El cerebro.", "B) El cerebelo.", "C) El bulbo."], correctIndex: 1, explanation: "¡Bien! El cerebelo es el maestro del equilibrio y la coordinación." },
      { question: "Los nervios que llevan información desde los órganos al cerebro se llaman...", options: ["A) Sensitivos.", "B) Motores.", "C) Eléctricos."], correctIndex: 0, explanation: "¡Correcto! Captan sensaciones (frío, calor, dolor)." },
      { question: "Y los nervios que llevan las órdenes del cerebro a los músculos se llaman...", options: ["A) Sensitivos.", "B) Motores.", "C) Rápidos."], correctIndex: 1, explanation: "¡Exacto! Motores viene de movimiento." },
      { question: "¿Qué órgano es el responsable de la memoria y la inteligencia?", options: ["A) Cerebelo.", "B) Cerebro.", "C) Médula."], correctIndex: 1, explanation: "¡Muy bien! El cerebro es la parte más grande y compleja." },
      { question: "¿Cómo se llaman las células del sistema nervioso?", options: ["A) Nefronas.", "B) Neuronas.", "C) Glóbulos."], correctIndex: 1, explanation: "¡Perfecto! Tienen una forma de estrella muy especial." }
    ],
    flashcards: [
      { q: "¿De qué se encarga el sistema nervioso?", a: "De controlar el cuerpo y responder al exterior." },
      { q: "¿Qué hace el cerebelo?", a: "Controla el equilibrio y la coordinación." },
      { q: "¿Cuál es la función del bulbo raquídeo?", a: "Controlar funciones involuntarias (latidos, respiración)." },
      { q: "¿Cómo podemos cuidar el sistema nervioso?", a: "Dormir bien, evitar estrés y reducir pantallas." },
      { q: "¿Qué es la médula espinal?", a: "La vía principal de comunicación dentro de la columna." },
      { q: "¿Cómo viaja la información por los nervios?", a: "Mediante impulsos eléctricos muy rápidos." },
      { q: "¿Qué son las neuronas?", a: "Las células especializadas del sistema nervioso." },
      { q: "¿A qué velocidad viaja la señal nerviosa?", a: "Hasta 400 km/h." },
      { q: "¿Qué parte del cuerpo controla el lenguaje y el pensamiento?", a: "El cerebro." },
      { q: "¿Qué sistema recoge información de fuera?", a: "Los órganos de los sentidos." }
    ]
  },
  {
    id: 'respiratori',
    title: 'Aparato Respiratorio',
    icon: '🌬️',
    color: '#319795',
    bgClass: 'bg-teal-100',
    textClass: 'text-teal-700',
    borderClass: 'border-teal-500',
    apunts: {
      missio: "Es el sistema de intercambio de energía. Atrapa el oxígeno del aire (el combustible de tus células) y expulsa el dióxido de carbono (el humo del motor).",
      sabies_que: "Tus pulmones no son iguales. El izquierdo es más pequeño para dejar sitio al corazón. ¡Trabajan en equipo!",
      sections: [
        { title: 'Vías Respiratorias', icon: '👃', content: "Fosas nasales (filtro de aire), laringe (donde están tus cuerdas vocales) y la tráquea (el tubo principal)." },
        { title: 'Pulmones y Bronquios', icon: '🫁', content: "La tráquea se divide en bronquios, que parecen ramas de un árbol invertido dentro de tus pulmones." },
        { title: 'Alvéolos (La Magia)', icon: '🧼', content: "Son bolsitas microscópicas rodeadas de sangre. Aquí es donde el oxígeno salta del aire a tus venas." }
      ],
      tips: [
        "Respirar por la nariz limpia y calienta el aire antes de que llegue a tus pulmones.",
        "Hacer ejercicio aeróbico (correr, nadar) aumenta tu capacidad pulmonar."
      ]
    },
    test: [
      { question: "¿Por qué es mejor respirar por la nariz? ¿Qué hacen las fosas nasales con el aire?", options: ["A) Lo llenan de dióxido de carbono.", "B) Lo convierten en sangre hacia el corazón.", "C) Lo filtran, lo calientan y lo humedecen."], correctIndex: 2, explanation: "¡Perfecto! Por eso el aire llega bien limpio a los pulmones." },
      { question: "Cuando hablamos o cantamos, usamos las cuerdas vocales. ¿En qué órgano escondido en el cuello se encuentran?", options: ["A) En la laringe.", "B) En la tráquea.", "C) En los bronquios."], correctIndex: 0, explanation: "¡Muy bien! La laringe deja pasar el aire y nos deja hablar." },
      { question: "Dentro de los pulmones hay unas pequeñas bolsas donde la sangre coge el oxígeno. ¿Cómo se llaman?", options: ["A) Alvéolos pulmonares.", "B) Bronquiolos.", "C) Lóbulos."], correctIndex: 0, explanation: "¡Correcto! Aquí es donde se hace la magia del intercambio de gases." },
      { question: "Cogemos oxígeno del aire para vivir, pero... ¿qué gas expulsamos hacia fuera porque nos hace daño?", options: ["A) El nitrógeno.", "B) El dióxido de carbono.", "C) El helio."], correctIndex: 1, explanation: "¡Eso mismo! Expulsamos el dióxido de carbono." },
      { question: "Si te fijas bien, el pulmón izquierdo solo tiene dos lóbulos y es un poco más pequeño que el derecho. ¿Por qué?", options: ["A) Porque por el izquierdo respiramos menos.", "B) Para dejar espacio para el estómago.", "C) Porque es el lugar donde se encuentra el corazón."], correctIndex: 2, explanation: "¡Exacto! El corazón necesita su espacio a la izquierda del pecho." },
      { question: "¿Cómo se llama el músculo que ayuda a los pulmones a inflarse y desinflarse?", options: ["A) Abdominal.", "B) Diafragma.", "C) Pectoral."], correctIndex: 1, explanation: "¡Bien! El diafragma baja para que entre aire y sube para expulsarlo." },
      { question: "El tubo que baja por el cuello y se divide en dos antes de los pulmones es...", options: ["A) El esófago.", "B) La tráquea.", "C) La laringe."], correctIndex: 1, explanation: "¡Correcto! La tráquea tiene unos anillos para estar siempre abierta." },
      { question: "Si el oxígeno entra en la sangre, ¿qué gas sale de la sangre hacia el pulmón?", options: ["A) Oxígeno.", "B) Dióxido de carbono.", "C) Hidrógeno."], correctIndex: 1, explanation: "¡Muy bien! Es el intercambio de gases." },
      { question: "¿Cómo se llaman las ramas más finas de los bronquios?", options: ["A) Alvéolos.", "B) Bronquiolos.", "C) Capilares."], correctIndex: 1, explanation: "¡Exacto! Son como las ramitas de un árbol." },
      { question: "¿Qué sucede en los alvéolos?", options: ["A) El aire se calienta.", "B) El oxígeno pasa a la sangre.", "C) Se produce la voz."], correctIndex: 1, explanation: "¡Perfecto! Es el punto clave de la respiración." }
    ],
    flashcards: [
      { q: "¿Cuál es la función del aparato respiratorio?", a: "Captar oxígeno y expulsar el dióxido de carbono." },
      { q: "¿Qué hacen las fosas nasales?", a: "Filtran, calientan y humedecen el aire." },
      { q: "¿Dónde se encuentran las cuerdas vocales?", a: "En la laringe." },
      { q: "¿Dónde se hace el intercambio de gases?", a: "En los alvéolos pulmonares." },
      { q: "¿Por qué el pulmón izquierdo solo tiene dos lóbulos?", a: "Para dejar espacio al corazón." },
      { q: "¿Qué es el diafragma?", a: "El músculo que mueve los pulmones." },
      { q: "¿Qué es la tráquea?", a: "El tubo principal que lleva aire a los pulmones." },
      { q: "¿Hacia dónde va el oxígeno después de los alvéolos?", a: "A la sangre." },
      { q: "¿Cómo se llama el proceso de coger aire?", a: "Inspiración." },
      { q: "¿Cómo se llama el proceso de soltar aire?", a: "Espiración." }
    ]
  },
  {
    id: 'circulatori',
    title: 'Aparato Circulatorio',
    icon: '❤️',
    color: '#e53e3e',
    bgClass: 'bg-red-100',
    textClass: 'text-red-700',
    borderClass: 'border-red-500',
    apunts: {
      missio: "Es el servicio de mensajería urgente 24h. Transporta oxígeno, nutrientes y defensas a cada rincón de tu cuerpo a través de una red de tuberías infinitas.",
      sabies_que: "Si estiréramos todos tus vasos sanguíneos, ¡darían la vuelta al mundo dos veces y media!",
      sections: [
        { title: 'El Corazón (La Bomba)', icon: '🫀', content: "Es un músculo incansable. Bombea sangre sin parar. ¡En toda una vida latirá unos 3.000 millones de veces!" },
        { title: 'La Sangre (El Transporte)', icon: '🩸', content: "Contiene glóbulos rojos (oxígeno), blancos (soldados contra bacterias) y plaquetas (pegamento para cerrar heridas)." },
        { title: 'Arterias, Venas y Capilares', icon: '🛣️', content: "Las arterias llevan la sangre 'fresca' y las venas traen la sangre de vuelta para limpiarla. Los capilares son tan finos que la sangre pasa de uno en uno." }
      ],
      tips: [
        "El ejercicio cardiovascular hace que tu corazón sea más grande y eficiente (late menos veces pero con más fuerza).",
        "Beber agua ayuda a que la sangre sea más fluida y circule mejor."
      ]
    },
    test: [
      { question: "¿Qué hacen exactamente los glóbulos rojos dentro de nuestra sangre?", options: ["A) Protegen el organismo.", "B) Dan color rojo a la sangre y transportan el oxígeno.", "C) Cicatrizan las heridas."], correctIndex: 1, explanation: "¡Así es! Son los 'camiones' que llevan el oxígeno por todo el cuerpo." },
      { question: "Si te haces un corte pequeño y sale sangre, ¿qué parte trabaja enseguida para tapar la herida?", options: ["A) Los glóbulos blancos.", "B) El plasma.", "C) Las plaquetas."], correctIndex: 2, explanation: "¡Correcto! Las plaquetas hacen como un tapón para cicatrizar." },
      { question: "Los vasos sanguíneos son los tubos por donde viaja la sangre. ¿Cuáles son los más finitos de todos?", options: ["A) Los capilares.", "B) Las venas.", "C) Las arterias."], correctIndex: 0, explanation: "¡Muy bien! Son tan finos como un cabello." },
      { question: "El corazón no para nunca de trabajar. ¿Cuántas pulsaciones aproximadas hace cada día?", options: ["A) Unas 10.000 pulsaciones.", "B) Unas 100.000 pulsaciones.", "C) Unas 1.000 pulsaciones."], correctIndex: 1, explanation: "¡Exacto! Late unas 100.000 veces al día para repartir la energía." },
      { question: "Si pusiéramos todas nuestras venas y arterias en fila india, ¿hasta dónde llegarían?", options: ["A) Darían dos vueltas y media a la Tierra.", "B) Llegarían hasta la Luna.", "C) Darían la vuelta a Cataluña."], correctIndex: 0, explanation: "Increíble, ¿verdad? ¡Miden unos 97.000 km!" },
      { question: "¿Cómo se llaman los vasos que llevan la sangre DESDE el corazón al cuerpo?", options: ["A) Venas.", "B) Arterias.", "C) Nervios."], correctIndex: 1, explanation: "¡Muy bien! Las arterias llevan la sangre con mucha presión." },
      { question: "Los glóbulos blancos son como...", options: ["A) Camiones de reparto.", "B) Soldados defensores.", "C) Pegamento."], correctIndex: 1, explanation: "¡Exacto! Luchan contra los virus y bacterias." },
      { question: "¿Cómo se llama el líquido amarillento donde flotan las células de la sangre?", options: ["A) Suero.", "B) Plasma.", "C) Agua."], correctIndex: 1, explanation: "¡Bien! El plasma es principalmente agua con nutrientes." },
      { question: "El corazón tiene 4 cavidades. ¿Cómo se llaman las dos de arriba?", options: ["A) Ventrículos.", "B) Aurículas.", "C) Válvulas."], correctIndex: 1, explanation: "¡Correcto! Las aurículas reciben la sangre." },
      { question: "¿Y las dos cavidades de abajo del corazón?", options: ["A) Ventrículos.", "B) Aurículas.", "C) Arterias."], correctIndex: 0, explanation: "¡Perfecto! Los ventrículos impulsan la sangre hacia fuera." }
    ],
    flashcards: [
      { q: "¿Cuál es la función del aparato circulatorio?", a: "Transportar nutrientes y oxígeno por todo el cuerpo." },
      { q: "¿Cuáles son los componentes del sistema?", a: "El corazón y los vasos sanguíneos (venas, arterias y capilares)." },
      { q: "¿Qué trabajo hacen los glóbulos blancos?", a: "Protegen el organismo contra infecciones." },
      { q: "¿Qué trabajo hacen las plaquetas?", a: "Cicatrizan las heridas y detienen hemorragias." },
      { q: "¿Cuántas pulsaciones hace el corazón cada día?", a: "Unas 100.000 pulsaciones." },
      { q: "¿Cuál es la longitud de los vasos sanguíneos juntos?", a: "97.000 km." },
      { q: "¿Qué hacen los glóbulos rojos?", a: "Transportan oxígeno gracias a la hemoglobina." },
      { q: "¿Qué diferencia hay entre arterias y venas?", a: "Arterias salen del corazón, venas entran al corazón." },
      { q: "¿Qué es el pulso?", a: "La onda de presión de la sangre al ser bombeada." },
      { q: "Nombra una parte del corazón:", a: "Aurícula, ventrículo o válvulas." }
    ]
  },
  {
    id: 'digestiu',
    title: 'Aparato Digestivo',
    icon: '🍎',
    color: '#3182ce',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-700',
    borderClass: 'border-blue-500',
    apunts: {
      missio: "Es la fábrica de combustible. Su trabajo es descomponer la comida hasta convertirla en moléculas tan pequeñas que puedan entrar en tu sangre.",
      sabies_que: "Tu intestino delgado mide unos 7 metros. ¡Es tan largo como un autobús escolar!",
      sections: [
        { title: 'La Boca (Trituradora)', icon: '👄', content: "La digestión empieza aquí. La saliva contiene enzimas que empiezan a deshacer los carbohidratos mientras masticas." },
        { title: 'El Estómago (El Reactor)', icon: '🛍️', content: "Es una bolsa de músculo con ácidos muy fuertes (¡podrían deshacer metal!) que convierten la comida en una pasta llamada quimo." },
        { title: 'Intestino Delgado y Grueso', icon: '🪢', content: "En el delgado se absorben los nutrientes. En el grueso se recupera el agua y se compactan los residuos finales." }
      ],
      tips: [
        "Masticar 20 veces cada bocado ayuda a que tu estómago trabaje mucho menos y tengas más energía.",
        "La fibra (fruta con piel, legumbres) es como la escoba que limpia tus intestinos por dentro."
      ]
    },
    test: [
      { question: "Cuando la comida se mezcla con la saliva en la boca, ¿qué se forma?", options: ["A) El bolo alimenticio.", "B) El quimo.", "C) La bilis."], correctIndex: 0, explanation: "¡Muy bien! Los dientes trituran y la saliva ayuda a hacer el bolo alimenticio." },
      { question: "¿Qué órgano es como una bolsa que deshace la comida con sus jugos gástricos?", options: ["A) El páncreas.", "B) El estómago.", "C) El esófago."], correctIndex: 1, explanation: "¡Exacto! El estómago es la bolsa donde se forma el quimo." },
      { question: "¿Qué tubo largo (¡de 7 metros!) se encarga de absorber los nutrientes buenos para el cuerpo?", options: ["A) El intestino grueso.", "B) El tubo digestivo.", "C) El intestino delgado."], correctIndex: 2, explanation: "¡Correcto! El intestino delgado coge todo lo que necesitamos." },
      { question: "¿Qué parte se encarga de absorber el agua y preparar los excrements?", options: ["A) El intestino grueso.", "B) La vesícula biliar.", "C) Los riñones."], correctIndex: 0, explanation: "¡Muy bien! Es el último paso antes del ano." },
      { question: "¿Qué es lo mejor que puedes hacer cuando te sientas a comer para ayudar a tu digestión?", options: ["A) Comer muy rápido para ir a jugar.", "B) Masticar bien y comer despacio.", "C) Tomar solo zumos y dulces."], correctIndex: 1, explanation: "¡Eso mismo! Hay que masticar bien y sin prisa." },
      { question: "¿Cómo se llama la masa líquida que sale del estómago?", options: ["A) Quimo.", "B) Quilo.", "C) Bolo."], correctIndex: 0, explanation: "¡Bien! En el estómago se forma el quimo." },
      { question: "¿Qué líquido fabrica el hígado para ayudar a digerir las grasas?", options: ["A) Saliva.", "B) Bilis.", "C) Insulina."], correctIndex: 1, explanation: "¡Exacto! La bilis se guarda en la vesícula biliar." },
      { question: "El tubo que conecta la boca con el estómago es...", options: ["A) La tráquea.", "B) El esófago.", "C) El intestino."], correctIndex: 1, explanation: "¡Correcto! El esófago empuja la comida hacia abajo." },
      { question: "¿Dónde termina la digestión y se absorben los nutrientes?", options: ["A) Intestino delgado.", "B) Intestino grueso.", "C) Estómago."], correctIndex: 0, explanation: "¡Muy bien! El intestino delgado es el punto clave de absorción." },
      { question: "¿Para qué sirve el intestino grueso?", options: ["A) Para triturar.", "B) Para absorber agua y formar heces.", "C) Para fabricar bilis."], correctIndex: 1, explanation: "¡Perfecto! Es la fase final de reciclaje de agua." }
    ],
    flashcards: [
      { q: "¿Cuál es la función del aparato digestivo?", a: "Transformar los alimentos en nutrientes." },
      { q: "¿Dónde se tritura la comida y se mezcla con la saliva?", a: "En la boca." },
      { q: "¿Cómo se llama la masa pastosa que se forma en el estómago?", a: "El Quimo." },
      { q: "¿Qué órgano mide 7 metros de largo y absorbe nutrientes?", a: "El intestino delgado." },
      { q: "¿Dónde se absorbe el agua y se forman los excrementos?", a: "En el intestino grueso." },
      { q: "¿Por dónde se expulsan los restos que no necesitamos?", a: "Por el ano." },
      { q: "¿Qué fabrica el hígado?", a: "La bilis." },
      { q: "¿Qué es el bolo alimenticio?", a: "La comida masticada y mezclada con saliva." },
      { q: "¿Qué son los jugos gástricos?", a: "Líquidos ácidos del estómago para deshacer la comida." },
      { q: "Nombra una glándula aneja al sistema digestivo:", a: "Hígado o Páncreas." }
    ]
  }
];
