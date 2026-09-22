export interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

export interface Artifact3D {
  color: string;
  wireframeColor: string;
  geometryType: 'cylinder' | 'cube' | 'torus' | 'sphere';
  hotspots: Hotspot[];
}

export interface Exhibit {
  id: string;
  title: string;
  nativeTitle?: string;
  subtitle: string;
  era: 'Ancient' | 'Classical' | 'Medieval' | 'Early Modern' | 'Modern';
  period: string;
  year: string;
  location: string;
  category: 'Architecture' | 'Sculpture' | 'Relic' | 'Inscription' | 'Monument';
  material: string;
  dimensions: string;
  imageUrl: string;
  fallbackGradient: string;
  audioDuration: string;
  audioTranscript: string;
  shortDescription: string;
  longDescription: string;
  provenance: string;
  highlights: string[];
  tags: string[];
  artifact3D: Artifact3D;
}

export interface Epoch {
  id: string;
  name: string;
  range: string;
  epochEra: string;
  description: string;
  icon: string;
  milestones: {
    year: string;
    event: string;
    description: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedExhibitId?: string;
}

export const EXHIBITS: Exhibit[] = [
  {
    id: 'konark-wheel',
    title: 'The Sun Temple Wheel of Konark',
    nativeTitle: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ଚକ୍ର',
    subtitle: 'Chariot Wheel of the Celestial Sun God',
    era: 'Medieval',
    period: 'Eastern Ganga Dynasty',
    year: 'c. 1250 CE',
    location: 'Odisha, India',
    category: 'Architecture',
    material: 'Khondalite Stone & Chlorite',
    dimensions: '3.0 meters (9.8 ft) diameter',
    imageUrl: 'https://images.unsplash.com/photo-1609137144822-4467c9c0ab43?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-900 via-orange-800 to-stone-900',
    audioDuration: '2m 14s',
    audioTranscript: 'Welcome to the Sun Temple of Konark. Before you stands one of the twenty-four monumental chariot wheels carved into the temple plinth. Each wheel functions as an intricate sundial. Notice the eight major spokes and eight minor spokes; the shadows cast across the decorative beadings allow precise calculation of the hour down to minutes.',
    shortDescription: 'An architectural sundial engineered with astronomical precision to calculate time through shadow-play.',
    longDescription: 'Carved under King Narasimhadeva I, Konark temple was conceptualized as a colossal chariot for the solar deity Surya, pulled by seven spirited horses. The wheels are legendary masterworks of Kalinga architecture, depicting pastoral motifs, celestial dancers, musicians, and intricate foliage on each hub and rim.',
    provenance: 'UNESCO World Heritage Site designated in 1984. Preserved and studied by the Archaeological Survey of India.',
    highlights: [
      'Engineered as a working astronomical sundial accurate to within three minutes',
      'Intricately carved hubs depicting mythological avatars and royal court life',
      'Seven pulling horses symbolize the seven days of the week and solar spectra'
    ],
    tags: ['Astronomy', 'Stone Carving', 'UNESCO', 'Sun God', 'Medieval'],
    artifact3D: {
      color: '#b45309',
      wireframeColor: '#f59e0b',
      geometryType: 'torus',
      hotspots: [
        {
          id: 'hub',
          title: 'Central Axle Hub',
          description: 'Carved with dancing deities; served as the gnomon casting the principal shadow.',
          x: 50,
          y: 50
        },
        {
          id: 'rim',
          title: 'Perimeter Carvings',
          description: 'Features miniature filigree depicting 60 daily time intervals (ghatis).',
          x: 82,
          y: 48
        },
        {
          id: 'spoke',
          title: 'Primary Sundial Spoke',
          description: 'Broad sculpted spoke with medallion reliefs illustrating daily seasonal rites.',
          x: 49,
          y: 20
        }
      ]
    }
  },
  {
    id: 'sanchi-stupa',
    title: 'The Great Stupa at Sanchi',
    nativeTitle: 'साँची का महान स्तूप',
    subtitle: 'Sacred Hemisphere of Peace & Cosmic Order',
    era: 'Ancient',
    period: 'Maurya to Satavahana Empire',
    year: '3rd Century BCE – 1st Century CE',
    location: 'Madhya Pradesh, India',
    category: 'Monument',
    material: 'Sandstone & Brick Core',
    dimensions: '36.5m diameter, 16.4m height',
    imageUrl: 'https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-yellow-950 via-stone-800 to-stone-900',
    audioDuration: '1m 58s',
    audioTranscript: 'The Great Stupa at Sanchi is the oldest existing stone structure in India, initially commissioned by Emperor Ashoka the Great. The massive hemispherical dome symbolizes the vault of heaven enclosing sacred relics. Walk around clockwise along the stone pradakshina path to view the four monumental gateways, or toranas, teeming with Jataka tale carvings.',
    shortDescription: 'The oldest stone sanctuary of Buddhist art, commissioned by Emperor Ashoka the Great.',
    longDescription: 'Sanchi stands as the pinnacle of early Buddhist architectural evolution. Surrounding the hemispherical anda dome is an elevated terrace and ground balustrade. The four ornately carved Torana gateways facing the cardinal directions are celebrated for their narrative bas-reliefs illustrating episodes from the Buddha’s life and past incarnations.',
    provenance: 'Rediscovered in 1818 by British General Henry Taylor; restored by Sir John Marshall in the early 20th century.',
    highlights: [
      'Four monumental Torana gateways aligned precisely to cardinal directions',
      'Finely polished Ashokan pillar fragments inscribed with royal edicts of concord',
      'Harmika and triple-umbrella (chhatra) crowning the dome symbolizing the Three Jewels'
    ],
    tags: ['Ashoka', 'Buddhism', 'Architecture', 'Ancient', 'Relic'],
    artifact3D: {
      color: '#78716c',
      wireframeColor: '#d97706',
      geometryType: 'sphere',
      hotspots: [
        {
          id: 'anda',
          title: 'Anda (The Dome)',
          description: 'Symbol of the cosmic sphere containing inner relic caskets.',
          x: 50,
          y: 42
        },
        {
          id: 'torana',
          title: 'South Torana Gateway',
          description: 'The oldest gateway, intricately carved with lions, elephants, and Ashokan wheel.',
          x: 48,
          y: 78
        },
        {
          id: 'harmika',
          title: 'Harmika & Chhatra',
          description: 'Square railing crown holding the 3 umbrella tiers symbolizing faith, law, and monastic community.',
          x: 50,
          y: 15
        }
      ]
    }
  },
  {
    id: 'chola-nataraja',
    title: 'The Bronze Nataraja of Chola',
    nativeTitle: 'நடராஜர் திருவுருவம்',
    subtitle: 'Cosmic Dance of Creation & Annihilation',
    era: 'Medieval',
    period: 'Imperial Chola Dynasty',
    year: 'c. 10th Century CE',
    location: 'Thanjavur, Tamil Nadu',
    category: 'Sculpture',
    material: 'Panchaloha Bronze (Lost-Wax Casting)',
    dimensions: '112 cm × 102 cm',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-950 via-zinc-900 to-black',
    audioDuration: '2m 30s',
    audioTranscript: 'Regarded by art historians worldwide as a sublime fusion of religion and physics, Shiva Nataraja dances within the prabhamandala halo of cosmic fire. In his upper right hand rests the damaru drum signifying the pulse of creation; in his upper left, the flame of dissolution. Beneath his right foot lies the dwarf Apasmara, personifying human ignorance.',
    shortDescription: 'Masterpiece of lost-wax bronze casting depicting the cosmic rhythm of the universe.',
    longDescription: 'During the golden age of the Imperial Cholas under Raja Raja Chola I and Queen Sembiyan Mahadevi, Tamil metalsmiths perfected the cire-perdue (lost wax) method. The Nataraja image encapsulates dynamic equilibrium: intense kinetic motion in the flying dreadlocks combined with supreme meditative stillness in the divine visage.',
    provenance: 'Cast in the Kaveri river basin workshops; currently exhibited in leading international and national antiquities galleries.',
    highlights: [
      'Intricate cire-perdue (lost wax) metallurgy with 5 sacred metals (panchaloha)',
      'Prabhamandala flaming halo represents cyclical cosmic time',
      'The raised left foot offers refuge (anugraha) to spiritual seekers'
    ],
    tags: ['Bronze', 'Chola', 'Iconography', 'Sacred Art', 'Sculpture'],
    artifact3D: {
      color: '#b45309',
      wireframeColor: '#fbbf24',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'damaru',
          title: 'Damaru Drum',
          description: 'Hourglass drum producing the primal sound vibration (Om) initiating creation.',
          x: 28,
          y: 35
        },
        {
          id: 'apasmara',
          title: 'Subjugation of Apasmara',
          description: 'The dwarf of spiritual ignorance, delusion, and arrogance pressed underfoot.',
          x: 52,
          y: 84
        },
        {
          id: 'abhaya',
          title: 'Abhaya Mudra Hand',
          description: 'Front right hand offering protection and fearlessness to all sentient beings.',
          x: 44,
          y: 45
        }
      ]
    }
  },
  {
    id: 'ashoka-pillar-capital',
    title: 'Lion Capital of Ashoka',
    nativeTitle: 'अशोक का सिंह चतुर्मुख स्तंभशीर्ष',
    subtitle: 'Emblem of Sovereign Dharma & Justice',
    era: 'Ancient',
    period: 'Maurya Empire',
    year: 'c. 250 BCE',
    location: 'Sarnath, Uttar Pradesh',
    category: 'Sculpture',
    material: 'Chunar Sandstone with Mirror Polish',
    dimensions: '2.15 meters in height',
    imageUrl: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-900 via-stone-800 to-stone-950',
    audioDuration: '2m 05s',
    audioTranscript: 'You are viewing the supreme emblem adopted by the Republic of India. Carved from a single monolith of fine-grained Chunar sandstone, four Asiatic lions stand back-to-back atop an abacus adorned with the 24-spoked Wheel of Law. The miraculous mirror-like glassy polish achieved by Mauryan sculptors has endured over twenty-two centuries.',
    shortDescription: 'Four back-to-back lions proclaiming universal peace, carved with lustrous Mauryan polish.',
    longDescription: 'Commissioned by Emperor Ashoka to mark the site where Gautama Buddha delivered his first sermon (the Dhammacakkappavattana Sutta). The capital stands atop an inverted lotus flower. On the cylindrical abacus are high-relief depictions of an elephant, a galloping horse, a bull, and a lion, separated by four Ashoka Chakras.',
    provenance: 'Excavated at Deer Park Sarnath by F.O. Oertel in 1905. Housed in the Sarnath Museum.',
    highlights: [
      'Four guardian lions symbolizing power, courage, pride, and confidence',
      'The 24-spoke Ashoka Chakra now adorns the center of the National Flag of India',
      'Inverted bell-shaped lotus representing the spiritual ascent of pure consciousness'
    ],
    tags: ['Maurya', 'Ashoka', 'National Emblem', 'Sandstone', 'Ancient'],
    artifact3D: {
      color: '#d97706',
      wireframeColor: '#fef08a',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'lions',
          title: 'Four Majestic Lions',
          description: 'Facing the four cardinal directions, roaring the message of Dharma worldwide.',
          x: 50,
          y: 25
        },
        {
          id: 'chakra',
          title: '24-Spoke Wheel of Law',
          description: 'Spokes denote the 24 ethical virtues and the cycle of dependent origination.',
          x: 50,
          y: 65
        },
        {
          id: 'lotus',
          title: 'Inverted Bell Lotus',
          description: 'Perennial symbol of beauty and spiritual detachment blossoming out of mud.',
          x: 50,
          y: 88
        }
      ]
    }
  },
  {
    id: 'hampi-stone-chariot',
    title: 'The Stone Chariot of Hampi',
    nativeTitle: 'ಹಂಪಿ ಕಲ್ಲಿನ ರಥ',
    subtitle: 'Shrine to Garuda in the Vijayanagara Capital',
    era: 'Medieval',
    period: 'Vijayanagara Empire',
    year: '16th Century CE',
    location: 'Hampi, Karnataka',
    category: 'Monument',
    material: 'Interlocking Granite Slabs',
    dimensions: '4.5 meters in height',
    imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4439c27?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-orange-950 via-stone-800 to-amber-950',
    audioDuration: '2m 10s',
    audioTranscript: 'Standing proudly within the courtyard of the Vittala Temple complex, this stone chariot is actually a dedicated shrine to Garuda, the divine bird mount. Though it appears to be carved from a single monolithic boulder, it was ingeniously constructed using interlocking granite blocks, disguised with delicate ornamental joints.',
    shortDescription: 'One of the three grand stone chariots of India, famed for its interlocking granite joints.',
    longDescription: 'Commissioned under King Krishnadevaraya of the Vijayanagara Empire, inspired by the Konark chariot temples. In front of the wheels stand two sculpted guardian elephants. In historical times, the stone wheels were capable of rotating on their stone axles during ceremonial festivities.',
    provenance: 'Heart of the UNESCO World Heritage site of Hampi ruins along the banks of the Tungabhadra river.',
    highlights: [
      'Mastery of granite joinery so seamless it mirrors monolithic carving',
      'Guarded by stone elephants leading the procession',
      'Featured on the official 50 Indian Rupee currency note'
    ],
    tags: ['Granite', 'Vijayanagara', 'UNESCO', 'Medieval', 'Chariot'],
    artifact3D: {
      color: '#71717a',
      wireframeColor: '#fb923c',
      geometryType: 'cube',
      hotspots: [
        {
          id: 'wheels',
          title: 'Granite Rotating Wheels',
          description: 'Spoked stone wheels intricately carved with floral hubs and axle pins.',
          x: 25,
          y: 72
        },
        {
          id: 'sanctum',
          title: 'Garuda Sanctum',
          description: 'Inner shrine that housed the idol of Garuda facing the main Vittala sanctum.',
          x: 50,
          y: 40
        },
        {
          id: 'canopy',
          title: 'Dravidian Shikhara Tower',
          description: 'Originally surmounted by a tiered brick and stucco tower.',
          x: 50,
          y: 18
        }
      ]
    }
  },
  {
    id: 'dancing-girl-mohenjo-daro',
    title: 'The Dancing Girl of Mohenjo-daro',
    nativeTitle: 'موہنجوداڑو دی رقاصہ',
    subtitle: 'Bronze Matriarch of the Harappan Bronze Age',
    era: 'Ancient',
    period: 'Indus Valley Civilization',
    year: 'c. 2300–1750 BCE',
    location: 'Sindh, Indus Valley',
    category: 'Relic',
    material: 'Lost-Wax Bronze Casting',
    dimensions: '10.5 cm in height',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-950 via-stone-900 to-zinc-950',
    audioDuration: '1m 45s',
    audioTranscript: 'Discovered in 1926 by archaeologist Ernest Mackay in a modest house at Mohenjo-daro, this four-inch bronze figurine stunned 20th-century archaeologists. It demonstrates that metallurgy, anatomy, and expressive posture were already deeply understood over four thousand years ago. Her left arm is covered entirely in bangles, resting confidently on her hip.',
    shortDescription: 'A 4,500-year-old bronze sculpture displaying uncanny poise and lost-wax mastery.',
    longDescription: 'Known affectionately as the Dancing Girl, British archaeologist Mortimer Wheeler wrote: "She is about fifteen years old I should guess, no more, but she stands, her hands on her hips, and moves with the music... There is an insolent pride in her whole carriage." Her hairstyle is styled into an elaborate bun resting over her shoulder.',
    provenance: 'Excavated in the HR area of Mohenjo-daro; preserved in the National Museum, New Delhi.',
    highlights: [
      'Oldest known major masterpiece of lost-wax casting in human history',
      'Left arm adorned with 25 bangles up to the shoulder made of shell or metal',
      'Naturalistic body posture showcasing contrapposto stance millennia before ancient Greece'
    ],
    tags: ['Indus Valley', 'Bronze Age', 'Harappa', 'Sculpture', 'Ancient'],
    artifact3D: {
      color: '#78350f',
      wireframeColor: '#f59e0b',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'arm',
          title: 'Arm of Bangles',
          description: 'A stacked armlet of 25 bangles, holding a small amulet or vessel.',
          x: 32,
          y: 52
        },
        {
          id: 'face',
          title: 'Expressive Visage',
          description: 'Half-closed confident eyes, broad lips, tilted head denoting musical rhythm.',
          x: 50,
          y: 18
        },
        {
          id: 'stance',
          title: 'Contrapposto Posture',
          description: 'Subtle weight shift onto right leg creating a lively dynamic gesture.',
          x: 52,
          y: 75
        }
      ]
    }
  }
];

export const EPOCHS: Epoch[] = [
  {
    id: 'epoch-ancient',
    name: 'Dawn of Civilization & Maurya',
    range: '3300 BCE – 185 BCE',
    epochEra: 'Bronze Age to Early Classical',
    description: 'From grid-planned cities along the Indus and Saraswati to the continent-spanning empire of Ashoka preaching Dharma.',
    icon: 'Landmark',
    milestones: [
      {
        year: '2500 BCE',
        event: 'Metropolitan Urbanism at Mohenjo-daro',
        description: 'Advanced covered drainage, dockyards at Lothal, standardized weights, and lost-wax metallurgy.'
      },
      {
        year: 'c. 500 BCE',
        event: 'Second Urbanization & Vedic Upanishads',
        description: 'Rise of Magadha, Gautama Buddha, Mahavira, and profound philosophical discourses.'
      },
      {
        year: '250 BCE',
        event: 'Ashokan Rock Edicts & Pillar Capitals',
        description: 'Emperor Ashoka erects monuments across India proclaiming compassion, religious tolerance, and ethical governance.'
      }
    ]
  },
  {
    id: 'epoch-classical',
    name: 'Classical Golden Age',
    range: '185 BCE – 600 CE',
    epochEra: 'Satavahanas, Kushans & Gupta Golden Age',
    description: 'Flourishing of mathematics (invention of decimal zero), astronomy (Aryabhata), Sanskrit literature (Kalidasa), and Ajanta cave murals.',
    icon: 'Sparkles',
    milestones: [
      {
        year: '1st Century CE',
        event: 'Silk Route & Gandhara Greco-Buddhist Art',
        description: 'Syncretic synthesis of Mediterranean sculpting aesthetics and Buddhist devotional iconography.'
      },
      {
        year: 'c. 450 CE',
        event: 'Establishment of Nalanda University',
        description: 'World’s earliest residential university hosting 10,000 scholars from China, Korea, Persia, and Tibet.'
      },
      {
        year: '499 CE',
        event: 'Aryabhatiya Astronomical Treatise',
        description: 'Aryabhata calculates the value of Pi, posits the Earth’s spherical axial rotation, and explains solar eclipses.'
      }
    ]
  },
  {
    id: 'epoch-medieval',
    name: 'Medieval Temple & Maritime Kingdoms',
    range: '600 CE – 1526 CE',
    epochEra: 'Pallava, Chola, Rashtrakuta & Delhi Sultanates',
    description: 'Rock-cut monoliths at Ellora, soaring Dravidian gopurams, oceanic Chola naval expeditions, and astronomical sundials.',
    icon: 'Compass',
    milestones: [
      {
        year: 'c. 760 CE',
        event: 'Kailasa Temple Carved Top-to-Bottom',
        description: 'Over 200,000 tonnes of basalt bedrock excavated downward to create the world’s largest monolithic sanctuary at Ellora.'
      },
      {
        year: '1010 CE',
        event: 'Brihadisvara Temple Built by Raja Raja Chola',
        description: 'Granite vimana tower crowned with an 80-tonne monolithic cupola, dominating South Indian temple architecture.'
      },
      {
        year: '1250 CE',
        event: 'Sun Temple at Konark',
        description: 'King Narasimhadeva I builds the massive solar chariot with 24 working sundial wheels.'
      }
    ]
  },
  {
    id: 'epoch-early-modern',
    name: 'Early Modern Renaissance & Synthesis',
    range: '1526 CE – 1857 CE',
    epochEra: 'Mughal Architecture & Vijayanagara Splendor',
    description: 'Monumental symmetry, marble pietre dure inlays, and the pinnacle of Deccan stonecraft at Hampi and Fatehpur Sikri.',
    icon: 'Crown',
    milestones: [
      {
        year: '1565 CE',
        event: 'Vijayanagara Stone Chariot & Musical Pillars',
        description: 'Hampi’s Vittala temple introduces monolithic granite pillars tuned to musical octaves.'
      },
      {
        year: '1648 CE',
        event: 'The Taj Mahal Completed in Agra',
        description: 'Shah Jahan’s marble mausoleum achieves timeless symmetry with Persian, Indian, and Ottoman architectural harmony.'
      },
      {
        year: '1734 CE',
        event: 'Jantar Mantar Observatories by Jai Singh II',
        description: 'Massive stone astronomical instruments constructed in Jaipur to calibrate planetary tables with bare-eye observation.'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How do the 24 carved stone wheels of the Konark Sun Temple function?',
    options: [
      'As musical resonant bells',
      'As astronomical sundials calculating hours down to minutes',
      'As millstones for ceremonial offerings',
      'As defensive barricades during sieges'
    ],
    correctAnswer: 1,
    explanation: 'The 24 wheels of Konark function as astronomical sundials. The shadow cast by the central axle hub across the spokes indicates the precise time of day.',
    relatedExhibitId: 'konark-wheel'
  },
  {
    id: 2,
    question: 'Which ancient Indian ruler commissioned the Lion Capital of Sarnath and the Great Stupa at Sanchi?',
    options: [
      'King Harsha',
      'Chandragupta Maurya',
      'Emperor Ashoka the Great',
      'Raja Raja Chola'
    ],
    correctAnswer: 2,
    explanation: 'Emperor Ashoka the Great commissioned both the Lion Capital at Sarnath and the initial Great Stupa at Sanchi in the 3rd Century BCE to propagate Dharma and peace.',
    relatedExhibitId: 'ashoka-pillar-capital'
  },
  {
    id: 3,
    question: 'In the iconic Chola Nataraja bronze, what does the creature (Apasmara) pinned under Shiva’s foot represent?',
    options: [
      'Physical illness',
      'Human ignorance and spiritual delusion',
      'Natural earthquakes',
      'Seasonal drought'
    ],
    correctAnswer: 1,
    explanation: 'The dwarf Apasmara symbolizes spiritual ignorance, arrogance, and illusion. Shiva stamps upon him to bestow wisdom and freedom upon humanity.',
    relatedExhibitId: 'chola-nataraja'
  },
  {
    id: 4,
    question: 'The 4,500-year-old "Dancing Girl" figurine from Mohenjo-daro was sculpted using which advanced metallurgical technique?',
    options: [
      'Hammered iron sheets',
      'Sand-cast pewter',
      'Lost-wax bronze casting (cire-perdue)',
      'Carved soapstone'
    ],
    correctAnswer: 2,
    explanation: 'The Dancing Girl is the earliest known masterpiece made with lost-wax bronze casting (cire-perdue), an engineering craft still used in fine jewelry today.',
    relatedExhibitId: 'dancing-girl-mohenjo-daro'
  },
  {
    id: 5,
    question: 'Why was the Stone Chariot in Hampi originally engineered with rotating granite wheels?',
    options: [
      'To roll during temple chariot processions',
      'To power water pumps from the Tungabhadra River',
      'To open secret subterranean chambers',
      'To adjust the temple alignment during equinoxes'
    ],
    correctAnswer: 0,
    explanation: 'Historically, the stone wheels were capable of rotating on their granite axles during annual temple festivals before being cemented in place for safety by conservators.',
    relatedExhibitId: 'hampi-stone-chariot'
  }
];

export const VISITOR_INFO = {
  kioskId: 'KIOSK-MAIN-HALL-04',
  galleryName: 'Hall of Antiquity & Civilizational Wonders',
  openingHours: '09:00 AM – 06:30 PM (Tuesday to Sunday)',
  museumRules: [
    'Photography permitted without flash or commercial tripod rigs.',
    'Do not touch preserved stone carvings or glass display vitrines.',
    'Audio guides are free; please maintain audio courtesy in sacred gallery halls.',
    'Emergency call buttons located at every kiosk terminal pedestal.'
  ],
  galleryZones: [
    { zone: 'Zone A', name: 'Indus-Saraswati Proto-Historic Gallery', items: '24 Artifacts' },
    { zone: 'Zone B', name: 'Mauryan & Buddhist Edicts Hall', items: '18 Artifacts' },
    { zone: 'Zone C', name: 'Imperial Chola Bronze Sanctuary', items: '32 Sculptures' },
    { zone: 'Zone D', name: 'Medieval Architectural Engineering Courtyard', items: '14 Scale Models' }
  ]
};

export const UI_TRANSLATIONS = {
  en: {
    title: 'HERITAGE KIOSK',
    subtitle: 'Interactive Cultural Portal',
    touchToExplore: 'Touch anywhere to explore the museum',
    searchPlaceholder: 'Search artifacts, monuments, dynasties...',
    allEras: 'All Eras',
    allCategories: 'All Categories',
    listenAudio: 'Listen Audio Guide',
    inspect3d: '3D Inspect View',
    viewDetails: 'Examine Exhibit',
    quizTitle: 'Heritage Trivia Challenge',
    timelineTitle: 'Epoch Timeline',
    visitorGuide: 'Visitor Guide',
    accessibility: 'Accessibility',
    highContrast: 'High Contrast',
    fontNormal: 'Standard Font',
    fontLarge: 'Enlarged Font',
    scanForMobile: 'Take Guide to Mobile',
    scanDescription: 'Scan this QR code with your smartphone to continue your audio tour on personal earbuds.',
    highlights: 'Key Architectural Highlights',
    provenance: 'Historical Provenance',
    transcript: 'Narrator Transcript',
    close: 'Close',
    back: 'Back to Gallery',
    startQuiz: 'Start Knowledge Challenge',
    submit: 'Submit Answer',
    next: 'Next Question',
    restartQuiz: 'Try Again'
  },
  hi: {
    title: 'विरासत कियोस्क',
    subtitle: 'संस्कृतिक इंटरैक्टिव पोर्टल',
    touchToExplore: 'संग्रहालय अन्वेषण के लिए कहीं भी स्पर्श करें',
    searchPlaceholder: 'कलाकृतियां, स्मारक, राजवंश खोजें...',
    allEras: 'सभी युग',
    allCategories: 'सभी श्रेणियां',
    listenAudio: 'ऑडियो गाइड सुनें',
    inspect3d: '3D निरीक्षण देखें',
    viewDetails: 'विस्तार से देखें',
    quizTitle: 'विरासत प्रश्नोत्तरी',
    timelineTitle: 'कालक्रम समयरेखा',
    visitorGuide: 'दर्शक मार्गदर्शिका',
    accessibility: 'सुगमता',
    highContrast: 'उच्च कंट्रास्ट',
    fontNormal: 'सामान्य फ़ॉन्ट',
    fontLarge: 'बड़ा फ़ॉन्ट',
    scanForMobile: 'मोबाइल पर गाइड ले जाएं',
    scanDescription: 'अपने व्यक्तिगत ईयरफोन पर ऑडियो टूर जारी रखने के लिए अपने फोन से इस क्यूआर कोड को स्कैन करें।',
    highlights: 'प्रमुख वास्तुशिल्प विशेषताएं',
    provenance: 'ऐतिहासिक प्रासंगिकता',
    transcript: 'कथावाचक प्रतिलेख',
    close: 'बंद करें',
    back: 'दीर्घा पर वापस जाएं',
    startQuiz: 'प्रश्नोत्तरी शुरू करें',
    submit: 'उत्तर दें',
    next: 'अगला प्रश्न',
    restartQuiz: 'पुनः प्रयास करें'
  },
  es: {
    title: 'QUIOSCO DEL PATRIMONIO',
    subtitle: 'Portal Cultural Interactivo',
    touchToExplore: 'Toque en cualquier lugar para explorar',
    searchPlaceholder: 'Buscar artefactos, monumentos, dinastías...',
    allEras: 'Todas las eras',
    allCategories: 'Todas las categorías',
    listenAudio: 'Escuchar audioguía',
    inspect3d: 'Inspección 3D',
    viewDetails: 'Examinar pieza',
    quizTitle: 'Desafío del Patrimonio',
    timelineTitle: 'Línea de Tiempo',
    visitorGuide: 'Guía del Visitante',
    accessibility: 'Accesibilidad',
    highContrast: 'Alto contraste',
    fontNormal: 'Fuente normal',
    fontLarge: 'Fuente grande',
    scanForMobile: 'Llevar guía al móvil',
    scanDescription: 'Escanee este código QR para continuar el recorrido en sus propios auriculares.',
    highlights: 'Aspectos Destacados',
    provenance: 'Procedencia Histórica',
    transcript: 'Transcripción del Narrador',
    close: 'Cerrar',
    back: 'Volver a la Galería',
    startQuiz: 'Comenzar Desafío',
    submit: 'Enviar Respuesta',
    next: 'Siguiente',
    restartQuiz: 'Reiniciar'
  },
  fr: {
    title: 'KIOSQUE DU PATRIMOINE',
    subtitle: 'Portail Culturel Interactif',
    touchToExplore: 'Touchez pour explorer le musée',
    searchPlaceholder: 'Rechercher des artefacts, monuments, dynasties...',
    allEras: 'Toutes les ères',
    allCategories: 'Toutes les catégories',
    listenAudio: 'Écouter l’audioguide',
    inspect3d: 'Inspection 3D',
    viewDetails: 'Examiner l’œuvre',
    quizTitle: 'Défi Quizz Patrimoine',
    timelineTitle: 'Frise Chronologique',
    visitorGuide: 'Guide des Visiteurs',
    accessibility: 'Accessibilité',
    highContrast: 'Contraste Élevé',
    fontNormal: 'Police Normale',
    fontLarge: 'Police Agrandie',
    scanForMobile: 'Transférer sur Mobile',
    scanDescription: 'Scannez ce code QR pour continuer votre visite audio sur vos écouteurs personnels.',
    highlights: 'Points Forts',
    provenance: 'Provenance Historique',
    transcript: 'Transcription',
    close: 'Fermer',
    back: 'Retour à la Galerie',
    startQuiz: 'Lancer le Quizz',
    submit: 'Valider',
    next: 'Suivant',
    restartQuiz: 'Recommencer'
  }
};
