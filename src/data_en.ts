import { SystemData } from './data';

export const systems_en: SystemData[] = [
  {
    id: 'locomotor',
    title: 'Locomotor System',
    icon: '🦴',
    color: '#b7791f',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-500',
    apunts: {
      missio: "It's your body's 'chassis' and engine. Its mission is to protect your vital organs (like a shield) and allow you to perform any movement, from blinking to jumping hurdles.",
      sabies_que: "The femur bone is stronger than concrete! It can support up to 30 times your body weight without breaking.",
      sections: [
        { title: 'Bones (The Skeleton)', icon: '☠️', content: "We have 206 bones. They are the body's calcium warehouse and its blood factory (blood cells are created inside them)." },
        { title: 'Muscles (The Engine)', icon: '💪', content: "There are more than 630. They work like rubber bands that stretch and shrink to pull on the bones. The most active ones are in your eyes (moving 100,000 times a day!)." },
        { title: 'Joints and Ligaments', icon: '🦾', content: "These are the hinges that prevent bones from crashing into each other. Ligaments act like ultra-strong adhesive tapes to keep everything together." }
      ],
      tips: [
        "For iron-strong bones: get calcium (milk, yogurt, broccoli) and vitamin D (a bit of sunshine!).",
        "Strength exercises (carrying a backpack, jumping) help your bones become denser and stronger."
      ]
    },
    test: [
      { question: "What very important job do our bones do besides keeping us upright?", options: ["A) Produce blood.", "B) Help digest food.", "C) Protect vital organs (like the heart or brain)."], correctIndex: 2, explanation: "Great! They are like your body's armor." },
      { question: "What allows bones to move and bend without hurting us?", options: ["A) Joints and muscles that contract.", "B) Veins.", "C) Nerves in the skin."], correctIndex: 0, explanation: "Correct! It's teamwork between joints and muscles." },
      { question: "The elbow is a joint in the arm. Do you know which bones it connects?", options: ["A) The femur and tibia.", "B) The ulna, radius, and humerus.", "C) The skull and spine."], correctIndex: 1, explanation: "Exactly! It lets you bend and stretch your arm." },
      { question: "What is the purpose of the spinal column joint?", options: ["A) To connect the hand to the arm.", "B) To chew food.", "C) To bend the trunk and maintain posture."], correctIndex: 2, explanation: "That's right! It allows us to turn and pick things up from the floor." },
      { question: "How can we strengthen our bones and muscles to avoid injuries?", options: ["A) By doing resistance exercises (like using elastic bands).", "B) By sleeping a lot during the day.", "C) By not moving from the chair."], correctIndex: 0, explanation: "Genial! Staying active and doing strength work is the key." },
      { question: "Where are blood cells manufactured?", options: ["A) In the heart.", "B) Inside the bones.", "C) In the leg muscles."], correctIndex: 1, explanation: "Exactly! Bones are our blood 'factory'." },
      { question: "Muscles work in opposing pairs. What is it called when a muscle shortens to pull the bone?", options: ["A) Contraction.", "B) Relaxation.", "C) Extension."], correctIndex: 0, explanation: "Correct! By contracting, the muscle becomes shorter and thicker." },
      { question: "If the femur is the longest bone in the body, where is it located?", options: ["A) In the arm.", "B) In the leg.", "C) In the back."], correctIndex: 1, explanation: "Great! It's the thigh bone and it's super resistant." },
      { question: "Which mineral is essential for strong bones?", options: ["A) Iron.", "B) Calcium.", "C) Potassium."], correctIndex: 1, explanation: "Correct! Calcium gives hardness to your bones." },
      { question: "What connects a muscle to a bone?", options: ["A) Ligament.", "B) Tendon.", "C) Cartilage."], correctIndex: 1, explanation: "Well done! Tendons are like ropes that transmit muscle force to the bone." }
    ],
    flashcards: [
      { q: "What is the locomotor system for?", a: "To protect organs and allow movement." },
      { q: "How many bones and muscles do we have as adults?", a: "206 bones and more than 630 muscles." },
      { q: "Which joint allows the arm to move in many directions?", a: "The shoulder." },
      { q: "How can we strengthen bones and muscles?", a: "By doing resistance exercises and eating calcium." },
      { q: "Name 3 muscles in the body:", a: "Pectoral, biceps, and quadriceps." },
      { q: "Which mineral is fundamental for strong bones?", a: "Calcium." },
      { q: "What connects bones to each other in joints?", a: "Ligaments." },
      { q: "What is the name of the bone that protects the brain?", a: "The skull." },
      { q: "Which bone is the longest in the body?", a: "The femur." },
      { q: "Which bone protects the heart and lungs?", a: "The ribs." }
    ]
  },
  {
    id: 'excretor',
    title: 'Excretory System',
    icon: '🧼',
    color: '#38a169',
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-700',
    borderClass: 'border-emerald-500',
    apunts: {
      missio: "It's the body's waste treatment plant. It cleans the blood of toxic substances and maintains the water balance in your organism.",
      sabies_que: "Your kidneys filter all your blood about 40 times a day. It's like cleaning an entire swimming pool every month!",
      sections: [
        { title: 'Kidneys (The Filters)', icon: '🫘', content: "They contain millions of units called 'nephrons' that act as smart strainers, deciding what stays and what goes." },
        { title: 'Urinary Tract', icon: '🛝', content: "The ureters are pipes that carry urine to the bladder (a muscular balloon that can hold up to half a liter)." },
        { title: 'The Skin (Extra Excretion)', icon: '💦', content: "Through sweat, the skin also eliminates sales and toxins, besides cooling you down when the body's engine overheats." }
      ],
      tips: [
        "Drink water even when you're not thirsty; your kidneys need it to work effortlessly.",
        "Don't hold back the urge to go to the bathroom: stagnant urine can cause infections."
      ]
    },
    test: [
      { question: "The body needs to eliminate 'trash' (toxic substances). What two things do we use to expel it?", options: ["A) Blood and saliva.", "B) Urine and sweat.", "C) Oxygen and nutrients."], correctIndex: 1, explanation: "Correct! Urine and sweat are our 'garbage trucks'." },
      { question: "Which organs act as strainers to filter the blood and create urine drops?", options: ["A) The bladder.", "B) The ureters.", "C) The kidneys."], correctIndex: 2, explanation: "Very well! They are like two cleaning filters." },
      { question: "Once urine is made, where is it collected and stored until we go to the bathroom?", options: ["A) In the urethra.", "B) In the bladder.", "C) In the kidneys."], correctIndex: 1, explanation: "That's it! It works like a small balloon that fills up." },
      { question: "The skin also helps clean the body by sweating when we do sports. What is sweat made of?", options: ["A) Water and sales.", "B) Only pure water.", "C) Water and sugar."], correctIndex: 0, explanation: "Exactly! That's why sweat tastes a bit salty." },
      { question: "If we don't take care of the excretory system, what can happen to us?", options: ["A) We get very strong.", "B) Cells stop working and we get sick.", "C) We get more sleepy."], correctIndex: 1, explanation: "Well seen. We have to take care of it by drinking water and going to the bathroom!" },
      { question: "What are the microscopic units that filter blood inside the kidney called?", options: ["A) Nephrons.", "B) Neurons.", "C) Alveoli."], correctIndex: 0, explanation: "Exactly! Nephrons are smart micro-filters." },
      { question: "What percentage of urine is approximately water?", options: ["A) 50%.", "B) 95%.", "C) 10%."], correctIndex: 1, explanation: "Correct! Urine is almost all water, with some waste." },
      { question: "What would happen if we drank very little water for several days?", options: ["A) Kidneys would work better.", "B) Kidneys would have to work very hard and could fail.", "C) Sweat would be sweeter."], correctIndex: 1, explanation: "Very well! Water is the 'lubricant' for your filters." },
      { question: "Organ that expels urine to the outside:", options: ["A) Urethra.", "B) Ureter.", "C) Kidney."], correctIndex: 0, explanation: "Correct! The urethra is the final exit." },
      { question: "The skin expels waste through...", options: ["A) Urine.", "B) Sweat.", "C) Saliva."], correctIndex: 1, explanation: "Good! Sweat is water with waste mineral sales." }
    ],
    flashcards: [
      { q: "What is the function of the excretory system?", a: "To expel toxic substances from the body." },
      { q: "What is the function of the kidneys?", a: "To filter the blood to form urine." },
      { q: "What role does the skin play in excretion?", a: "Expelling waste and cooling through sweat." },
      { q: "Where does urine accumulate before going to the bathroom?", a: "In the bladder." },
      { q: "What are the pipes connecting kidneys to the bladder called?", a: "Ureters." },
      { q: "Where does urine exit to the outside?", a: "Through the urethra." },
      { q: "How many times a day is all blood filtered?", a: "Approximately 40 times." },
      { q: "What are nephrons?", a: "Smart micro-filters inside the kidney." },
      { q: "What is sweat mainly made of?", a: "Water and mineral sales." },
      { q: "Name a disease of the excretory system:", a: "Cystitis (urine infection) or kidney stones." }
    ]
  },
  {
    id: 'reproductor',
    title: 'Reproductive System',
    icon: '🌱',
    color: '#dd6b20',
    bgClass: 'bg-orange-100',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-500',
    apunts: {
      missio: "It's the system responsible for the continuity of life. It allows humans to create new individuals so the species can move forward.",
      sabies_que: "Every human started as a single microscopic cell (the zygote), which contained all the instructions to build your entire body.",
      sections: [
        { title: 'Female Organs', icon: '👧', content: "Include the ovaries (where eggs are stored) and the uterus, an incredible muscle that can expand to house a baby." },
        { title: 'Male Organs', icon: '👦', content: "Include the testicles (responsible for producing sperm) and conducting channels for the transport of reproductive cells." },
        { title: 'Puberty', icon: '⚡', content: "It's the stage of big changes. The brain sends chemical signals (hormones) that transform the child's body into an adult." }
      ],
      tips: [
        "Intimate hygiene is essential during development to avoid discomfort and infections.",
        "Physical and mood changes are normal: your body is reconfiguring itself!"
      ]
    },
    test: [
      { question: "What is the mission or main function of the reproductive system?", options: ["A) Create new living beings.", "B) Digest strong foods.", "C) Help us move our legs."], correctIndex: 0, explanation: "Very well! That's how life grows." },
      { question: "There are different organs for each sex. Which of these is part of the female system?", options: ["A) Testicles.", "B) Uterus.", "C) Seminal vesicles."], correctIndex: 1, explanation: "Correct! The uterus is the female organ." },
      { question: "And which of these organs is part of the male reproductive system?", options: ["A) Penis.", "B) Fallopian tube.", "C) Ovaries."], correctIndex: 0, explanation: "Exactly! And also the testicles and ducts." },
      { question: "When girls reach puberty, their body changes. What change is typical?", options: ["A) They become much shorter.", "B) Their voice changes to a very deep one.", "C) They get their period and breasts develop."], correctIndex: 2, explanation: "That's right, it's a natural step to becoming an adult." },
      { question: "And when boys reach puberty, what usually happens to their body?", options: ["A) They stop growing suddenly.", "B) Their voice tone changes and they grow body hair.", "C) Legs become shorter."], correctIndex: 1, explanation: "Very well! The voice change is very evident." },
      { question: "What is the first cell formed by the union of an egg and a sperm called?", options: ["A) Embryo.", "B) Zygote.", "C) Fetus."], correctIndex: 1, explanation: "Correct! It's the seed of a new life." },
      { question: "Where are eggs stored in the woman's body?", options: ["A) In the uterus.", "B) In the ovaries.", "C) In the vulva."], correctIndex: 1, explanation: "Good! Ovaries are the egg warehouses." },
      { question: "Which chemical signals cause changes in puberty?", options: ["A) Vitamins.", "B) Hormones.", "C) Blood cells."], correctIndex: 1, explanation: "Exactly! Hormones are the messengers of change." },
      { question: "Elastic organ where the baby grows:", options: ["A) Uterus.", "B) Vagina.", "C) Tubes."], correctIndex: 0, explanation: "Very well! The uterus expands as the baby grows." },
      { question: "Male organs that produce sperm:", options: ["A) Vesicles.", "B) Testicles.", "C) Penis."], correctIndex: 1, explanation: "Correct! They work at a slightly lower temperature than the rest of the body." }
    ],
    flashcards: [
      { q: "What is the function of the reproductive system?", a: "To create new living beings." },
      { q: "Name some male organs:", a: "Testicles, vas deferens, seminal vesicles, and penis." },
      { q: "Name some female organs:", a: "Vagina, uterus, fallopian tubes, vulva, and ovaries." },
      { q: "What changes do girls have in puberty?", a: "Breast development, hair, and the period." },
      { q: "What changes do boys have in puberty?", a: "Body hair and voice tone changes." },
      { q: "What is the zygote?", a: "The first microscopic cell of a new being." },
      { q: "Which organ protects and feeds the baby during pregnancy?", a: "The uterus." },
      { q: "What are hormones?", a: "Chemical signals that cause changes in the body." },
      { q: "Where are eggs produced?", a: "In the ovaries." },
      { q: "Where are sperm produced?", a: "In the testicles." }
    ]
  },
  {
    id: 'nervios',
    title: 'Nervous System',
    icon: '🧠',
    color: '#805ad5',
    bgClass: 'bg-purple-100',
    textClass: 'text-purple-700',
    borderClass: 'border-purple-500',
    apunts: {
      missio: "It's the central computer and communication network of your body. It controls everything: from your heartbeats to your most complex thoughts.",
      sabies_que: "Information travels through your nerves at a speed of up to 400 km/h. Faster than a Formula 1 car!",
      sections: [
        { title: 'The Encephalon', icon: '🛰️', content: "Made up of the brain (thinking/memory), the cerebellum (balance), and the brainstem (control of breathing and heart)." },
        { title: 'The Spinal Cord', icon: '🎢', content: "It's the main highway running down your back. Brain orders go down through it, and sensory warnings go up." },
        { title: 'The Nerves', icon: '🔌', content: "These are ultra-fine cables that reach every millimeter of your skin and organs. They send electrical signals non-stop." }
      ],
      tips: [
        "The brain cleans itself while you sleep. That's why you need 9 hours of sleep to 'reset'.",
        "Learning new things (music, languages) creates new neural connections."
      ]
    },
    test: [
      { question: "If we touch something that burns, we pull our hand away immediately. Which part sends the pain warning to the brain?", options: ["A) Muscles.", "B) Bones.", "C) Nerves."], correctIndex: 2, explanation: "Correct! Nerves act instinctively." },
      { question: "There is a very important part hidden inside the spine to be protected. What is it?", options: ["A) Cerebellum.", "B) Spinal cord.", "C) Brainstem."], correctIndex: 1, explanation: "Very well! It conducts sensations to the brain." },
      { question: "Which part is responsible for ensuring vital functions (like breathing) even while we are sleeping?", options: ["A) Brainstem.", "B) Cerebellum.", "C) Senses."], correctIndex: 0, explanation: "That's it! The brainstem never rests." },
      { question: "The sensory organs (eyes, ears...) collect information. Where do they send it to know what's happening?", options: ["A) To the stomach.", "B) To the heart.", "C) To the encephalon (brain)."], correctIndex: 2, explanation: "Exactly! The encephalon is like the central computer." },
      { question: "The nervous system works hard. How can we take care of it and help it rest?", options: ["A) By sleeping between 8 and 10 hours and avoiding screens.", "B) By playing on the mobile a lot before bed.", "C) By eating many sweets."], correctIndex: 0, explanation: "Very well thought out! The brain needs rest from screens." },
      { question: "Which part of the encephalon controls balance so you don't fall?", options: ["A) Brain.", "B) Cerebellum.", "C) Brainstem."], correctIndex: 1, explanation: "Good! The cerebellum is the master of balance and coordination." },
      { question: "Nerves that carry information from organs to the brain are called...", options: ["A) Sensory.", "B) Motor.", "C) Electrical."], correctIndex: 0, explanation: "Correct! They capture sensations (cold, heat, pain)." },
      { question: "And nerves that carry orders from the brain to muscles are called...", options: ["A) Sensory.", "B) Motor.", "C) Fast."], correctIndex: 1, explanation: "Exactly! Motor comes from movement." },
      { question: "Which organ is responsible for memory and intelligence?", options: ["A) Cerebellum.", "B) Brain.", "C) Cord."], correctIndex: 1, explanation: "Very well! The brain is the largest and most complex part." },
      { question: "What are the cells of the nervous system called?", options: ["A) Nephrons.", "B) Neurons.", "C) Blood cells."], correctIndex: 1, explanation: "Perfect! They have a very special star shape." }
    ],
    flashcards: [
      { q: "What is the nervous system in charge of?", a: "Controlling the body and responding to the outside." },
      { q: "What does the cerebellum do?", a: "Controls balance and coordination." },
      { q: "What is the function of the brainstem?", a: "Controlling involuntary functions (heartbeat, breathing)." },
      { q: "How can we take care of the nervous system?", a: "Sleep well, avoid stress, and reduce screens." },
      { q: "What is the spinal cord?", a: "The main communication route inside the spine." },
      { q: "How does information travel through nerves?", a: "Through very fast electrical impulses." },
      { q: "What are neurons?", a: "Specialized cells of the nervous system." },
      { q: "At what speed does the nervous signal travel?", a: "Up to 400 km/h." },
      { q: "Which part of the body controls language and thought?", a: "The brain." },
      { q: "Which system collects information from outside?", a: "The sensory organs." }
    ]
  },
  {
    id: 'respiratori',
    title: 'Respiratory System',
    icon: '🌬️',
    color: '#319795',
    bgClass: 'bg-teal-100',
    textClass: 'text-teal-700',
    borderClass: 'border-teal-500',
    apunts: {
      missio: "It's the energy exchange system. It catches oxygen from the air (your cells' fuel) and expels carbon dioxide (the engine's smoke).",
      sabies_que: "Your lungs are not the same. The left one is smaller to make room for the heart. They work as a team!",
      sections: [
        { title: 'Respiratory Tract', icon: '👃', content: "Nasal passages (air filter), larynx (where your vocal cords are), and the trachea (the main pipe)." },
        { title: 'Lungs and Bronchi', icon: '🫁', content: "The trachea divides into bronchi, which look like branches of an inverted tree inside your lungs." },
        { title: 'Alveoli (The Magic)', icon: '🧼', content: "These are microscopic sacs surrounded by blood. This is where oxygen jumps from the air into your veins." }
      ],
      tips: [
        "Breathing through the nose cleans and warms the air before it reaches your lungs.",
        "Aerobic exercise (running, swimming) increases your lung capacity."
      ]
    },
    test: [
      { question: "Why is it better to breathe through the nose? What do the nasal passages do with the air?", options: ["A) Fill it with carbon dioxide.", "B) Turn it into blood towards the heart.", "C) Filter, warm, and moisten it."], correctIndex: 2, explanation: "Perfect! That's why the air arrives clean to the lungs." },
      { question: "When we talk or sing, we use vocal cords. In which organ hidden in the neck are they found?", options: ["A) In the larynx.", "B) In the trachea.", "C) In the bronchi."], correctIndex: 0, explanation: "Very well! The larynx lets air pass and lets us talk." },
      { question: "Inside the lungs, there are small sacs where the blood takes oxygen. What are they called?", options: ["A) Pulmonary alveoli.", "B) Bronchioles.", "C) Lobes."], correctIndex: 0, explanation: "Correct! This is where the gas exchange magic happens." },
      { question: "We take oxygen from the air to live, but... what gas do we expel because it hurts us?", options: ["A) Nitrogen.", "B) Carbon dioxide.", "C) Helium."], correctIndex: 1, explanation: "Exactly! We expel carbon dioxide." },
      { question: "If you look closely, the left lung only has two lobes and is a bit smaller than the right. Why?", options: ["A) Because we breathe less through the left one.", "B) To leave space for the stomach.", "C) Because it's where the heart is located."], correctIndex: 2, explanation: "Exactly! The heart needs its space on the left of the chest." },
      { question: "What muscle helps the lungs inflate and deflate?", options: ["A) Abdominal.", "B) Diaphragm.", "C) Pectoral."], correctIndex: 1, explanation: "Good! The diaphragm moves down for air to enter and up to expel it." },
      { question: "The tube that goes down the neck and divides into two before the lungs is...", options: ["A) Esophagus.", "B) Trachea.", "C) Larynx."], correctIndex: 1, explanation: "Correct! The trachea has rings to stay always open." },
      { question: "If oxygen enters the blood, what gas exits the blood to the lung?", options: ["A) Oxygen.", "B) Carbon dioxide.", "C) Hydrogen."], correctIndex: 1, explanation: "Very well! It's the gas exchange." },
      { question: "What are the thinnest branches of the bronchi called?", options: ["A) Alveoli.", "B) Bronchioles.", "C) Capillaries."], correctIndex: 1, explanation: "Exactly! They are like the small twigs of a tree." },
      { question: "What happens in the alveoli?", options: ["A) Air is warmed.", "B) Oxygen passes to the blood.", "C) Voice is produced."], correctIndex: 1, explanation: "Perfect! It's the key point of respiration." }
    ],
    flashcards: [
      { q: "What is the function of the respiratory system?", a: "To catch oxygen and expel carbon dioxide." },
      { q: "What do nasal passages do?", a: "Filter, warm, and moisten the air." },
      { q: "Where are the vocal cords located?", a: "In the larynx." },
      { q: "Where does the gas exchange happen?", a: "In the pulmonary alveoli." },
      { q: "Why does the left lung only have two lobes?", a: "To leave space for the heart." },
      { q: "What is the diaphragm?", a: "The muscle that moves the lungs." },
      { q: "What is the trachea?", a: "The main pipe that carries air to the lungs." },
      { q: "Where does oxygen go after the alveoli?", a: "To the blood." },
      { q: "What is the process of taking air in called?", a: "Inspiration." },
      { q: "What is the process of letting air out called?", a: "Expiration." }
    ]
  },
  {
    id: 'circulatori',
    title: 'Circulatory System',
    icon: '❤️',
    color: '#e53e3e',
    bgClass: 'bg-red-100',
    textClass: 'text-red-700',
    borderClass: 'border-red-500',
    apunts: {
      missio: "It's the 24h urgent messaging service. It transports oxygen, nutrients, and defenses to every corner of your body through an infinite network of pipes.",
      sabies_que: "If we stretched out all your blood vessels, they would go around the world two and a half times!",
      sections: [
        { title: 'The Heart (The Pump)', icon: '🫀', content: "It's a tireless muscle. It pumps blood non-stop. In a lifetime, it will beat about 3 billion times!" },
        { title: 'The Blood (The Transport)', icon: '🩸', content: "Contains red blood cells (oxygen), white blood cells (soldiers against bacteria), and platelets (glue to close wounds)." },
        { title: 'Arteries, Veins, and Capillaries', icon: '🛣️', content: "Arteries carry 'fresh' blood, and veins bring blood back to be cleaned. Capillaries are so thin that blood passes one by one." }
      ],
      tips: [
        "Cardiovascular exercise makes your heart bigger and more efficient (it beats fewer times but with more force).",
        "Drinking water helps blood be more fluid and circulate better."
      ]
    },
    test: [
      { question: "What exactly do red blood cells do inside our blood?", options: ["A) Protect the organism.", "B) Give blood its red color and transport oxygen.", "C) Heal wounds."], correctIndex: 1, explanation: "That's it! They are the 'trucks' that carry oxygen throughout the body." },
      { question: "If you get a small cut and blood comes out, which part works immediately to plug the wound?", options: ["A) White blood cells.", "B) Plasma.", "C) Platelets."], correctIndex: 2, explanation: "Correct! Platelets act like a plug to heal." },
      { question: "Blood vessels are the tubes through which blood travels. Which are the thinnest of all?", options: ["A) Capillaries.", "B) Veins.", "C) Arteries."], correctIndex: 0, explanation: "Very well! They are as thin as a hair." },
      { question: "The heart never stops working. How many beats approximately does it make each day?", options: ["A) About 10,000 beats.", "B) About 100,000 beats.", "C) About 1,000 beats."], correctIndex: 1, explanation: "Exactly! It beats about 100,000 times a day to distribute energy." },
      { question: "If we put all our veins and arteries in a single line, how far would they reach?", options: ["A) They would go around the Earth two and a half times.", "B) They would reach the Moon.", "C) They would go around Catalonia."], correctIndex: 0, explanation: "Incredible, right? They measure about 97,000 km!" },
      { question: "What are the vessels that carry blood FROM the heart to the body called?", options: ["A) Veins.", "B) Arteries.", "C) Nerves."], correctIndex: 1, explanation: "Very well! Arteries carry blood with high pressure." },
      { question: "White blood cells are like...", options: ["A) Delivery trucks.", "B) Defense soldiers.", "C) Glue."], correctIndex: 1, explanation: "Exactly! They fight against viruses and bacteria." },
      { question: "What is the yellowish liquid where blood cells float called?", options: ["A) Serum.", "B) Plasma.", "C) Water."], correctIndex: 1, explanation: "Good! Plasma is mainly water with nutrients." },
      { question: "The heart has 4 chambers. What are the two top ones called?", options: ["A) Ventricles.", "B) Atria.", "C) Valves."], correctIndex: 1, explanation: "Correct! Atria receive blood." },
      { question: "And the two bottom chambers of the heart?", options: ["A) Ventricles.", "B) Atria.", "C) Arteries."], correctIndex: 0, explanation: "Perfect! Ventricles pump blood out." }
    ],
    flashcards: [
      { q: "What is the function of the circulatory system?", a: "To transport nutrients and oxygen throughout the body." },
      { q: "What are the components of the system?", a: "The heart and blood vessels (veins, arteries, and capillaries)." },
      { q: "What job do white blood cells do?", a: "Protect the organism against infections." },
      { q: "What job do platelets do?", a: "Heal wounds and stop bleeding." },
      { q: "How many beats does the heart make each day?", a: "About 100,000 beats." },
      { q: "What is the total length of blood vessels?", a: "97,000 km." },
      { q: "What do red blood cells do?", a: "Transport oxygen thanks to hemoglobin." },
      { q: "What is the difference between arteries and veins?", a: "Arteries exit the heart, veins enter the heart." },
      { q: "What is the pulse?", a: "The pressure wave of blood being pumped." },
      { q: "Name a part of the heart:", a: "Atrium, ventricle, or valves." }
    ]
  },
  {
    id: 'digestiu',
    title: 'Digestive System',
    icon: '🍎',
    color: '#3182ce',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-700',
    borderClass: 'border-blue-500',
    apunts: {
      missio: "It's the fuel factory. Its job is to break down food until it turns into molecules so small they can enter your blood.",
      sabies_que: "Your small intestine is about 7 meters long. That's as long as a school bus!",
      sections: [
        { title: 'The Mouth (Crusher)', icon: '👄', content: "Digestion starts here. Saliva contains enzymes that start breaking down carbohydrates while you chew." },
        { title: 'The Stomach (The Reactor)', icon: '🛍️', content: "It's a muscular bag with very strong acids (they could dissolve metal!) that turn food into a paste called chyme." },
        { title: 'Small and Large Intestine', icon: '🪢', content: "In the small intestine, nutrients are absorbed. In the large one, water is recovered and final waste is compacted." }
      ],
      tips: [
        "Chewing 20 times each bite helps your stomach work much less and gives you more energy.",
        "Fiber (fruit with skin, legumes) is like the broom that cleans your intestines from the inside."
      ]
    },
    test: [
      { question: "When food mixes with saliva in the mouth, what is formed?", options: ["A) The food bolus.", "B) Chyme.", "C) Bile."], correctIndex: 0, explanation: "Very well! Teeth crush and saliva helps make the food bolus." },
      { question: "Which organ is like a bag that dissolves food with its gastric juices?", options: ["A) The pancreas.", "B) The stomach.", "C) The esophagus."], correctIndex: 1, explanation: "Exactly! The stomach is the bag where chyme is formed." },
      { question: "Which long tube (7 meters!) is responsible for absorbing good nutrients for the body?", options: ["A) The large intestine.", "B) The digestive tract.", "C) The small intestine."], correctIndex: 2, explanation: "Correct! The small intestine takes everything we need." },
      { question: "Which part is responsible for absorbing water and preparing excrement?", options: ["A) The large intestine.", "B) The gallbladder.", "C) The kidneys."], correctIndex: 0, explanation: "Very well! It's the last step before the anus." },
      { question: "What is the best thing you can do when you sit down to eat to help your digestion?", options: ["A) Eat very fast to go play.", "B) Chew well and eat slowly.", "C) Have only juices and sweets."], correctIndex: 1, explanation: "Exactly! You have to chew well and without rushing." },
      { question: "What is the liquid mass that exits the stomach called?", options: ["A) Chyme.", "B) Chyle.", "C) Bolus."], correctIndex: 0, explanation: "Good! Chyme is formed in the stomach." },
      { question: "What liquid does the liver make to help digest fats?", options: ["A) Saliva.", "B) Bile.", "C) Insulin."], correctIndex: 1, explanation: "Exactly! Bile is stored in the gallbladder." },
      { question: "The tube connecting the mouth to the stomach is...", options: ["A) Trachea.", "B) Esophagus.", "C) Intestine."], correctIndex: 1, explanation: "Correct! The esophagus pushes food down." },
      { question: "Where does digestion end and nutrients are absorbed?", options: ["A) Small intestine.", "B) Large intestine.", "C) Stomach."], correctIndex: 0, explanation: "Very well! The small intestine is the key absorption point." },
      { question: "What is the large intestine for?", options: ["A) Crushing.", "B) Absorbing water and forming feces.", "C) Making bile."], correctIndex: 1, explanation: "Perfect! It's the final phase of water recycling." }
    ],
    flashcards: [
      { q: "What is the function of the digestive system?", a: "Transforming food into nutrients." },
      { q: "Where is food crushed and mixed with saliva?", a: "In the mouth." },
      { q: "What is the pasty mass that forms in the stomach called?", a: "Chyme." },
      { q: "Which organ is 7 meters long and absorbs nutrients?", a: "The small intestine." },
      { q: "Where is water absorbed and excrement formed?", a: "In the large intestine." },
      { q: "Through where is waste the body doesn't need expelled?", a: "Through the anus." },
      { q: "What does the liver produce?", a: "Bile." },
      { q: "What is the food bolus?", a: "Chewed food mixed with saliva." },
      { q: "What are gastric juices?", a: "Acidic liquids from the stomach to break down food." },
      { q: "Name a gland attached to the digestive system:", a: "Liver or Pancreas." }
    ]
  }
];
