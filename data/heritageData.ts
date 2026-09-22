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
  category: 'Architecture' | 'Sculpture' | 'Relic' | 'Inscription' | 'Monument' | 'Manuscript';
  material: string;
  dimensions: string;
  imageUrl: string;
  galleryImages?: { url: string; caption: string }[];
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
  },
  {
    id: 'ambedkar-constitution-manuscript',
    title: 'Original Calligraphed Constitution of India',
    nativeTitle: 'भारतीय संविधान मूल हस्तलिखित पांडुलिपि',
    subtitle: 'Preamble & Sovereign Charter Framed by Dr. B.R. Ambedkar',
    era: 'Modern',
    period: 'Constituent Assembly of India',
    year: '1949–1950 CE',
    location: 'Parliament House, New Delhi',
    category: 'Manuscript',
    material: 'Handmade Mill Parchment, Black Ink & Gold Leaf Illuminations',
    dimensions: '45.7 cm × 30.5 cm × 231 pages',
    imageUrl: '/images/exhibits/ambedkar-constitution-manuscript.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/ambedkar-constitution-manuscript.jpg',
        caption: 'Illuminated Preamble calligraphed by Prem Behari Narain Raizada with artwork by Beohar Rammanohar Sinha'
      },
      {
        url: '/images/exhibits/ambedkar-drafting-presentation.jpg',
        caption: 'Dr. Babasaheb Ambedkar, Chairman of the Drafting Committee, presenting the final draft on 25 November 1949'
      },
      {
        url: '/images/exhibits/ambedkar-deekshabhoomi.jpg',
        caption: 'Deekshabhoomi Stupa in Nagpur commemorating Dr. Ambedkar’s civil rights renaissance'
      }
    ],
    fallbackGradient: 'from-amber-950 via-slate-900 to-indigo-950',
    audioDuration: '2m 35s',
    audioTranscript: 'You are examining the supreme manuscript of modern India: the original handwritten Constitution. Dr. B.R. Ambedkar, as Chairman of the Drafting Committee, steered the creation of this monumental document guaranteeing liberty, equality, fraternity, and justice. The manuscript was not printed with movable type; every syllable was calligraphed by master scribe Prem Behari Narain Raizada with No. 303 nibs in flowing italic style. The borders were illustrated by artist Beohar Rammanohar Sinha and Nandalal Bose of Santiniketan. The original copy is preserved inside a hermetically sealed helium-filled vitrine in the Library of the Parliament of India.',
    shortDescription: 'The 231-page original calligraphed Constitution of India, architected by Dr. B.R. Ambedkar with Santiniketan art.',
    longDescription: 'Completed on 26 November 1949 and coming into full effect on 26 January 1950, the Constitution of India is the longest written national charter in the world. Dr. Bhimrao Ramji Ambedkar championed fundamental rights, abolition of untouchability, affirmative empowerment, and constitutional remedies as the "heart and soul" of the republic. The parchment pages were crafted from pure handmade cotton rag paper manufactured at the Forest Research Institute, Dehradun, designed to endure for over a thousand years.',
    provenance: 'Drafted by the committee chaired by Dr. B.R. Ambedkar; unanimously adopted by the Constituent Assembly; preserved in the Parliament Library, New Delhi.',
    highlights: [
      'Hand-calligraphed in flowing italic by Prem Behari Narain Raizada without any typesetting',
      'Decorated with 22 miniature illustrations chronicling 5,000 years of Indian civilizational history',
      'Signed in original ink by Dr. B.R. Ambedkar, Jawaharlal Nehru, and all 284 assembly members'
    ],
    tags: ['Constitution', 'Dr. Ambedkar', 'Manuscript', 'Modern', 'Democracy', 'Calligraphy'],
    artifact3D: {
      color: '#1e3a8a',
      wireframeColor: '#f59e0b',
      geometryType: 'cube',
      hotspots: [
        {
          id: 'preamble',
          title: 'The Preamble Calligraphy',
          description: 'Masterfully penned in italic script declaring India a Sovereign Socialist Secular Democratic Republic.',
          x: 50,
          y: 45
        },
        {
          id: 'borders',
          title: 'Santiniketan Illuminations',
          description: 'Ornate borders featuring Vedic motifs, Bull Capital, and floral arabesques by Beohar Rammanohar Sinha.',
          x: 82,
          y: 20
        },
        {
          id: 'signatures',
          title: 'Drafting Committee Signatures',
          description: 'Historical ink signatures led by Dr. B.R. Ambedkar and Constituent Assembly delegates.',
          x: 48,
          y: 80
        }
      ]
    }
  },
  {
    id: 'ambedkar-deekshabhoomi',
    title: 'Deekshabhoomi Stupa & Memorial',
    nativeTitle: 'दीक्षाभूमी नागपूर',
    subtitle: 'Sacred Monument of Social Emancipation & Wisdom',
    era: 'Modern',
    period: 'Modern Republic of India',
    year: '1956–2001 CE',
    location: 'Nagpur, Maharashtra',
    category: 'Monument',
    material: 'Dholpur Sandstone, Granite & Marble',
    dimensions: '120 ft (36.5 m) height, 120 ft diameter',
    imageUrl: '/images/exhibits/ambedkar-deekshabhoomi.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/ambedkar-deekshabhoomi.jpg',
        caption: 'Grand hemispherical Dholpur sandstone stupa at Deekshabhoomi, Nagpur'
      },
      {
        url: '/images/exhibits/ambedkar-constitution-manuscript.jpg',
        caption: 'Dr. Ambedkar’s masterpiece: The original handwritten Constitution of India'
      }
    ],
    fallbackGradient: 'from-amber-950 via-stone-900 to-indigo-950',
    audioDuration: '2m 10s',
    audioTranscript: 'Deekshabhoomi in Nagpur is the largest hollow Buddhist stupa in Asia. It marks the sacred spot where, on 14 October 1956 (Ashoka Vijayadashami), Dr. B.R. Ambedkar and over 500,000 adherents renounced discriminatory caste hierarchies to embrace Buddhism. Taking the 22 vows of ethical conduct and rational equality, Babasaheb initiated a non-violent renaissance of social dignity that transformed modern India.',
    shortDescription: 'Asia’s largest hollow stupa commemorating Dr. B.R. Ambedkar’s historic social awakening and mass revival.',
    longDescription: 'Designed by architect Sheo Dan Mal, the monumental stupa blends ancient Sanchi Buddhist aesthetics with modern architectural grandeur. Clad in pink Dholpur sandstone, the circular hall accommodates thousands of visitors under an uninterrupted hemispherical dome. A sacred bronze relic of the Buddha and personal memorial items of Babasaheb Ambedkar are enshrined in the central sanctum.',
    provenance: 'Constructed under the Dr. Babasaheb Ambedkar Smarak Samiti on the historic conversion grounds of 1956.',
    highlights: [
      'Largest hollow stupa in Asia with an uninterrupted 120-foot hemispherical dome',
      'Site of the 1956 historic mass spiritual awakening led by Dr. B.R. Ambedkar',
      'Enshrines the 22 vows of compassion, equality, and rationalist morality'
    ],
    tags: ['Ambedkar', 'Monument', 'Deekshabhoomi', 'Buddhism', 'Modern', 'Nagpur'],
    artifact3D: {
      color: '#d97706',
      wireframeColor: '#38bdf8',
      geometryType: 'sphere',
      hotspots: [
        {
          id: 'dome',
          title: 'Sandstone Stupa Dome',
          description: 'Hollow hemispherical dome spanning 120 feet without internal support columns.',
          x: 50,
          y: 35
        },
        {
          id: 'sanctum',
          title: 'Central Relic Hall',
          description: 'Enshrines Buddha statues and Dr. Ambedkar’s commemorative urn and archival exhibits.',
          x: 50,
          y: 72
        }
      ]
    }
  },
  {
    id: 'nehru-manuscripts',
    title: 'The Discovery of India & Tryst with Destiny Manuscripts',
    nativeTitle: 'डिस्कवरी ऑफ इंडिया मूल हस्तलिपि',
    subtitle: 'Foundational Chronicles of Modern Indian Identity',
    era: 'Modern',
    period: 'Freedom Struggle & Dawn of Independence',
    year: '1944–1947 CE',
    location: 'Ahmednagar Fort & New Delhi',
    category: 'Manuscript',
    material: 'Handwritten Ink on Prison Folios & Bond Paper',
    dimensions: 'Over 1,000 handwritten folios in bound albums',
    imageUrl: '/images/exhibits/nehru-signing-constitution.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/nehru-signing-constitution.jpg',
        caption: 'Prime Minister Jawaharlal Nehru signing the original calligraphed Constitution of India'
      },
      {
        url: '/images/exhibits/nehru-teen-murti-bhavan.jpg',
        caption: 'Teen Murti Bhavan in New Delhi, residence and national memorial repository of Nehru’s papers'
      },
      {
        url: '/images/exhibits/nehru-anand-bhavan.jpg',
        caption: 'Anand Bhavan in Prayagraj, the ancestral Nehru mansion and nerve-centre of the independence movement'
      }
    ],
    fallbackGradient: 'from-blue-950 via-stone-900 to-amber-950',
    audioDuration: '2m 20s',
    audioTranscript: 'Between 1942 and 1945, while imprisoned by British authorities in the remote fortress of Ahmednagar, Jawaharlal Nehru penned over a thousand pages by hand. This mammoth manuscript became "The Discovery of India"—a lyrical synthesis of five millennia of philosophy, art, science, and resilience. Displayed alongside is Nehru’s original speech transcript of "Tryst with Destiny," delivered at midnight on 14–15 August 1947, featuring his own last-minute handwritten edits.',
    shortDescription: 'Nehru’s 1,000-page prison manuscript of "The Discovery of India" and his handwritten "Tryst with Destiny" speech draft.',
    longDescription: 'Nehru’s literary output combined statesman vision with poetic prose. Written with pen in prison conditions without access to a full library, "The Discovery of India" traced the civilizational continuity from the Indus Valley through the Upanishads, Ashoka, the Golden Age, Mughal synthesis, to the freedom struggle. In his "Tryst with Destiny" draft, Nehru crossed out "date with destiny" in pencil to write "tryst with destiny", composing one of the most iconic political addresses in human history.',
    provenance: 'Preserved and catalogued by the Nehru Memorial Museum & Library (Pradhanmantri Sangrahalaya), Teen Murti Bhavan, New Delhi.',
    highlights: [
      'Handwritten while in solitary confinement inside the military quarters of Ahmednagar Fort',
      'Contains Nehru’s handwritten margin corrections on the historic "Tryst with Destiny" draft',
      'Seminal philosophical text articulating the concept of "Unity in Diversity"'
    ],
    tags: ['Nehru', 'Discovery of India', 'Manuscript', 'Modern', 'Freedom Struggle'],
    artifact3D: {
      color: '#0284c7',
      wireframeColor: '#f59e0b',
      geometryType: 'cube',
      hotspots: [
        {
          id: 'tryst-opening',
          title: 'Opening Midnight Inscription',
          description: '"Long years ago we made a tryst with destiny..." penned in Nehru’s distinctive hand.',
          x: 48,
          y: 35
        },
        {
          id: 'ahmednagar-notes',
          title: 'Ahmednagar Prison Notebooks',
          description: 'Over 1,000 closely written leaves documenting Indian history and art.',
          x: 52,
          y: 75
        }
      ]
    }
  },
  {
    id: 'nehru-teen-murti-bhavan',
    title: 'Teen Murti Bhavan & Anand Bhavan',
    nativeTitle: 'तीन मूर्ति भवन एवं आनंद भवन',
    subtitle: 'Cradle of Freedom Struggle & Prime Ministerial Residence',
    era: 'Modern',
    period: 'Colonial Era to Modern Republic',
    year: '1930–1964 CE',
    location: 'New Delhi & Prayagraj (Allahabad)',
    category: 'Monument',
    material: 'Sandstone, Teakwood, Stucco & Classical Colonnades',
    dimensions: '30-acre estate with neoclassical porticoes',
    imageUrl: '/images/exhibits/nehru-teen-murti-bhavan.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/nehru-teen-murti-bhavan.jpg',
        caption: 'Neoclassical facade of Teen Murti Bhavan, New Delhi'
      },
      {
        url: '/images/exhibits/nehru-anand-bhavan.jpg',
        caption: 'Anand Bhavan in Prayagraj, historic home of the Nehru family and Congress Working Committee'
      },
      {
        url: '/images/exhibits/nehru-signing-constitution.jpg',
        caption: 'Historical photograph of Prime Minister Nehru signing the Indian Constitution'
      }
    ],
    fallbackGradient: 'from-emerald-950 via-stone-900 to-amber-950',
    audioDuration: '2m 15s',
    audioTranscript: 'Teen Murti Bhavan in New Delhi, designed by British architect Robert Tor Russell, served as the residence of the Commander-in-Chief before becoming the home of India’s first Prime Minister, Jawaharlal Nehru, for sixteen historic years. Here, foundational policies on non-alignment, atomic energy, space research, and modern institutes of technology were debated. In Prayagraj stands Anand Bhavan, the Nehru family’s ancestral mansion where Mahatma Gandhi, Sardar Patel, and the Congress Working Committee orchestrated the civil disobedience movement.',
    shortDescription: 'Historic residences in New Delhi and Prayagraj where the architecture of modern India’s democracy was forged.',
    longDescription: 'Both Anand Bhavan and Teen Murti Bhavan stand as pilgrimage sites of India’s modern history. Teen Murti gets its name from the memorial sculpture of three bronze cavalrymen by Leonard Jennings commemorating the Jodhpur, Hyderabad, and Mysore Lancers. Within its halls, Nehru’s private study, bedroom, gifts from world leaders, and an immense archive of state papers and manuscripts are preserved in pristine original condition.',
    provenance: 'Dedicated to the nation; now housing the Pradhanmantri Sangrahalaya, Nehru Memorial Library, and Planetarium.',
    highlights: [
      'Neoclassical sandstone architecture housing Nehru’s original study and private library',
      'Anand Bhavan in Prayagraj was donated to the nation in 1970 by Indira Gandhi',
      'Center of global diplomacy during the Non-Aligned Movement summits'
    ],
    tags: ['Nehru', 'Monument', 'Teen Murti', 'Anand Bhavan', 'Modern', 'Architecture'],
    artifact3D: {
      color: '#065f46',
      wireframeColor: '#fbbf24',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'portico',
          title: 'Classical Sandstone Peristyle',
          description: 'Neoclassical portico greeting state dignitaries and world leaders.',
          x: 50,
          y: 40
        },
        {
          id: 'three-lancers',
          title: 'Teen Murti Statues',
          description: 'Memorial bronze cavalrymen sculpted by Leonard Jennings.',
          x: 50,
          y: 78
        }
      ]
    }
  },
  {
    id: 'gandhi-manuscripts',
    title: 'Original Manuscripts of Mahatma Gandhi',
    nativeTitle: 'सत्य के प्रयोग एवं हिन्द स्वराज हस्तलिखित पांडुलिपि',
    subtitle: 'Handwritten Doctrines of Satyagraha & Universal Ahimsa',
    era: 'Modern',
    period: 'Satyagraha & Independence Movement',
    year: '1909–1928 CE',
    location: 'Sabarmati Ashram & National Gandhi Museum',
    category: 'Manuscript',
    material: 'Handwritten Ink on SS Kildonan Castle Stationery & Handspun Khadi Paper',
    dimensions: '271 handwritten pages (Hind Swaraj)',
    imageUrl: '/images/exhibits/gandhi-writing-manuscript.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/gandhi-writing-manuscript.jpg',
        caption: 'Mahatma Gandhi writing his letters and philosophical manuscripts in 1942'
      },
      {
        url: '/images/exhibits/gandhi-god-is-truth-manuscript.jpg',
        caption: 'Gandhi’s iconic handwritten signed note: "God is Truth"'
      },
      {
        url: '/images/exhibits/gandhi-sabarmati-ashram.jpg',
        caption: 'Hriday Kunj cottage at Sabarmati Ashram, Ahmedabad'
      }
    ],
    fallbackGradient: 'from-amber-950 via-stone-900 to-orange-950',
    audioDuration: '2m 25s',
    audioTranscript: 'Between 13 and 22 November 1909, aboard the steamship SS Kildonan Castle sailing from London to South Africa, Mohandas Karamchand Gandhi wrote furiously. When his right hand grew exhausted, he switched to his left hand to finish the 271-page manuscript of "Hind Swaraj" (Indian Home Rule). Later at Sabarmati Ashram, he penned his monumental autobiography, "The Story of My Experiments with Truth". His neat handwriting and unvarnished honesty redefined the moral compass of political resistance worldwide.',
    shortDescription: 'Gandhi’s original bilingual handwritten manuscripts of "Hind Swaraj" and his spiritual autobiography.',
    longDescription: 'Written on ship’s stationery with ink and fountain pen, "Hind Swaraj" is regarded as Gandhi’s philosophical manifesto, critiquing industrialized greed and championing moral self-rule (Swaraj) and active non-violence (Satyagraha). At Sabarmati, Gandhi penned weekly chapters of "The Story of My Experiments with Truth" in Gujarati for the journal Navajivan, translated into English by his close secretary Mahadev Desai.',
    provenance: 'Preserved in the archives of Sabarmati Ashram Preservation and Memorial Trust and National Gandhi Museum, New Delhi.',
    highlights: [
      'Written ambidextrously: when his right hand cramped, Gandhi continued writing with his left hand',
      'Original handwritten sheet proclaiming the philosophical maxim "God is Truth"',
      'Recognized by UNESCO’s Memory of the World Register as world heritage literature'
    ],
    tags: ['Gandhi', 'Manuscript', 'Hind Swaraj', 'Satyagraha', 'Ahimsa', 'Modern'],
    artifact3D: {
      color: '#92400e',
      wireframeColor: '#fde047',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'ambidextrous-folio',
          title: 'Left-Handed Script Folio',
          description: 'Written when Gandhi’s right arm was paralyzed by muscle cramps on the Kildonan Castle.',
          x: 48,
          y: 40
        },
        {
          id: 'truth-maxim',
          title: '"God is Truth" Manuscript Note',
          description: 'Historic signed axiom encapsulating Gandhi’s ontological philosophy.',
          x: 52,
          y: 75
        }
      ]
    }
  },
  {
    id: 'gandhi-sabarmati-ashram',
    title: 'Sabarmati Ashram (Hriday Kunj)',
    nativeTitle: 'साबरमती आश्रम (हृदय कुंज)',
    subtitle: 'Sanctuary of Non-Violence & Launchpad of the Salt March',
    era: 'Modern',
    period: 'Indian Independence Movement',
    year: '1917–1930 CE',
    location: 'Ahmedabad, Gujarat',
    category: 'Monument',
    material: 'Vernacular Earth, Wood, Baked Terracotta Tiles & Lime Plaster',
    dimensions: '36-acre tranquil ashram riverbank complex',
    imageUrl: '/images/exhibits/gandhi-sabarmati-ashram.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/gandhi-sabarmati-ashram.jpg',
        caption: 'Hriday Kunj, the dwelling of Mahatma Gandhi and Kasturba at Sabarmati Ashram'
      },
      {
        url: '/images/exhibits/gandhi-writing-manuscript.jpg',
        caption: 'Mahatma Gandhi working at his writing desk'
      },
      {
        url: '/images/exhibits/gandhi-god-is-truth-manuscript.jpg',
        caption: 'Original handwritten note "God is Truth" preserved in the ashram archives'
      }
    ],
    fallbackGradient: 'from-amber-950 via-stone-800 to-yellow-950',
    audioDuration: '2m 15s',
    audioTranscript: 'Perched on the tranquil banks of the Sabarmati River between a jail and a crematorium, Sabarmati Ashram was founded by Mahatma Gandhi in 1917. The small, tiled cottage known as Hriday Kunj was the personal dwelling of Gandhi and Kasturba. From these serene verandahs, Gandhi launched the world-renowned Salt Satyagraha on 12 March 1930, marching 241 miles to Dandi to break the British salt tax, vowing never to return until India was free.',
    shortDescription: 'Gandhi’s riverside hermitage and the historic starting point of the 1930 Dandi Salt March.',
    longDescription: 'Designed with profound simplicity using locally sourced timber, whitewashed mud brick, and clay roof tiles, Sabarmati Ashram embodied the Gandhian ideal of voluntary simplicity and self-reliance. Hriday Kunj preserves Gandhi’s simple round spectacles, writing desk (bajoth), wooden sandals (paduka), and original spinning wheels (charkha). Designed by famed architect Charles Correa in 1963, the Gandhi Smarak Sangrahalaya adjacent to Hriday Kunj houses thousands of original letters, photographs, and manuscripts.',
    provenance: 'Preserved by the Sabarmati Ashram Preservation and Memorial Trust; designated a national monument of India.',
    highlights: [
      'Epoch-defining departure point of the 241-mile Dandi Salt March in 1930',
      'Hriday Kunj preserves Gandhi’s original low writing desk and portable charkha',
      'Charles Correa-designed open-air museum housing over 30,000 original letters'
    ],
    tags: ['Gandhi', 'Sabarmati', 'Dandi March', 'Monument', 'Gujarat', 'Modern'],
    artifact3D: {
      color: '#78350f',
      wireframeColor: '#fbbf24',
      geometryType: 'cube',
      hotspots: [
        {
          id: 'bajoth-desk',
          title: 'Gandhi’s Writing Desk (Bajoth)',
          description: 'Low wooden floor desk where thousands of national letters and articles were drafted.',
          x: 45,
          y: 65
        },
        {
          id: 'verandah',
          title: 'Riverfront Open Verandah',
          description: 'Where morning and evening multifaith community prayers took place.',
          x: 55,
          y: 35
        }
      ]
    }
  },
  {
    id: 'kalam-manuscripts',
    title: 'Dr. Kalam’s Scientific Manuscripts & Rocket Flight Notes',
    nativeTitle: 'डॉ. कलाम के वैज्ञानिक नोट्स एवं पांडुलिपि',
    subtitle: 'Handwritten Trajectory Calculus, SLV-3 Logs & Wings of Fire',
    era: 'Modern',
    period: 'Indian Space & Missile Renaissance',
    year: '1979–2002 CE',
    location: 'ISRO Thumba, VSSC & Rameswaram',
    category: 'Manuscript',
    material: 'Technical Grid Paper, Blue Ballpoint Ink & Typewritten Annotated Folios',
    dimensions: 'Engineering notebooks, flight logs & draft typescripts',
    imageUrl: '/images/exhibits/kalam-house-rameswaram.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/kalam-house-rameswaram.jpg',
        caption: 'The ancestral House of Kalam in Rameswaram, preserving his early books and scientific models'
      },
      {
        url: '/images/exhibits/kalam-national-memorial.jpg',
        caption: 'Dr. A.P.J. Abdul Kalam National Memorial in Rameswaram'
      },
      {
        url: '/images/exhibits/kalam-memorial-exterior.jpg',
        caption: 'Full-scale SLV-3 and missile scale exhibits flanking the memorial'
      }
    ],
    fallbackGradient: 'from-blue-950 via-slate-900 to-amber-950',
    audioDuration: '2m 30s',
    audioTranscript: 'Before he became the beloved 11th President of India, Dr. A.P.J. Abdul Kalam served as Project Director of India’s first Satellite Launch Vehicle (SLV-3) at ISRO. In his meticulously kept engineering journals, Kalam recorded intricate rocket aerodynamic equations, stage separation sequences, and propellant weight calculations in neat cursive. Following the historic 18 July 1980 launch that placed the Rohini satellite into orbit, Kalam authored "Wings of Fire" and "India 2020: A Vision for the New Millennium," articulating how science and youth could propel India into a developed nation.',
    shortDescription: 'Dr. Kalam’s original handwritten SLV-3 flight trajectory notebooks and inspirational "Wings of Fire" drafts.',
    longDescription: 'Known universally as the "People’s President" and "Missile Man of India," Dr. Avul Pakir Jainulabdeen Abdul Kalam lived an austere life dedicated to science and education. His notebooks reveal deep mathematical rigor paired with poetic vision. Across these folios are Kalam’s diagrams of four-stage solid propellant launch vehicles, mission failure recovery logs, and his personal motto: "Dream is not that which you see while sleeping, it is something that does not let you sleep." His drafts of "India 2020" laid out blueprints for technology-driven societal transformation.',
    provenance: 'Preserved by the Defense Research and Development Organisation (DRDO), ISRO archives, and the House of Kalam in Rameswaram.',
    highlights: [
      'Handwritten engineering trajectory calculations from the landmark 1980 SLV-3 Rohini launch',
      'Original annotated typescripts of his autobiography "Wings of Fire"',
      'Dr. Kalam’s handwritten poems and visionary addresses delivered to millions of school students'
    ],
    tags: ['Abdul Kalam', 'Manuscript', 'ISRO', 'Space', 'Wings of Fire', 'Modern'],
    artifact3D: {
      color: '#0369a1',
      wireframeColor: '#38bdf8',
      geometryType: 'cylinder',
      hotspots: [
        {
          id: 'slv3-thrust-curve',
          title: 'SLV-3 Thrust & Trajectory Curves',
          description: 'Calculations for four-stage solid propellant staging into near-Earth orbit.',
          x: 50,
          y: 35
        },
        {
          id: 'vision-manifesto',
          title: 'India 2020 Blueprints',
          description: 'Handwritten roadmaps on education, energy independence, and critical technologies.',
          x: 50,
          y: 75
        }
      ]
    }
  },
  {
    id: 'kalam-national-memorial',
    title: 'Dr. A.P.J. Abdul Kalam National Memorial',
    nativeTitle: 'டாக்டர் ஏ. பி. ஜே. அப்துல் கலாம் தேசிய நினைவகம்',
    subtitle: 'Architectural Ode to the Missile Man & People’s President',
    era: 'Modern',
    period: '21st Century Republic of India',
    year: '2017 CE',
    location: 'Peikarumbu, Rameswaram, Tamil Nadu',
    category: 'Monument',
    material: 'Jaisalmer Yellow Marble, Chettinad Stone & Granite',
    dimensions: '2.11 acres site with 500-meter missile-inspired landscape',
    imageUrl: '/images/exhibits/kalam-national-memorial.jpg',
    galleryImages: [
      {
        url: '/images/exhibits/kalam-national-memorial.jpg',
        caption: 'Main facade of the Dr. A.P.J. Abdul Kalam National Memorial at Rameswaram'
      },
      {
        url: '/images/exhibits/kalam-memorial-exterior.jpg',
        caption: 'Grand central dome inspired by Rashtrapati Bhavan and India Gate portals'
      },
      {
        url: '/images/exhibits/kalam-house-rameswaram.jpg',
        caption: 'House of Kalam on Mosque Street in Rameswaram'
      }
    ],
    fallbackGradient: 'from-amber-900 via-stone-900 to-sky-950',
    audioDuration: '2m 20s',
    audioTranscript: 'Erected on the island where young Kalam once delivered newspapers along the sea coast, the Dr. A.P.J. Abdul Kalam National Memorial at Peikarumbu, Rameswaram, is an architectural marvel built in record time by the DRDO. The entrance portal mirrors the iconic India Gate, while the magnificent central dome was inspired by the Rashtrapati Bhavan. Within its sunlit galleries stand life-size bronze statues of Dr. Kalam playing his beloved veena, replicas of the Agni missile, and thousands of personal artifacts illustrating his journey from humble beginnings to the presidency.',
    shortDescription: 'The monumental national memorial in Rameswaram blending India Gate and Rashtrapati Bhavan architecture.',
    longDescription: 'Inaugurated on 27 July 2017 by Prime Minister Narendra Modi, the memorial honors Dr. Kalam’s multi-faceted life as aerospace scientist, author, mentor, and President. Crafted with radiant yellow marble from Jaisalmer, Rajasthan, and stone carved by artisans from Bengaluru and Karaikudi, the complex features four dedicated galleries celebrating his youth in Rameswaram, his ISRO and DRDO missile milestones, his presidency, and his final inspiring hours lecturing at IIM Shillong.',
    provenance: 'Engineered and constructed by the Defense Research and Development Organisation (DRDO); maintained by the Ministry of Defense.',
    highlights: [
      'Central dome inspired by Rashtrapati Bhavan and entrance gates modeled on India Gate',
      'Life-sized bronze statue of Dr. Kalam playing the Rudra Veena in his study',
      'Full-scale scale replicas of SLV-3, Agni, and Prithvi launch vehicles'
    ],
    tags: ['Abdul Kalam', 'Monument', 'Rameswaram', 'Memorial', 'DRDO', 'Modern'],
    artifact3D: {
      color: '#d97706',
      wireframeColor: '#fbbf24',
      geometryType: 'sphere',
      hotspots: [
        {
          id: 'central-dome',
          title: 'Rashtrapati Bhavan Cupola',
          description: 'Ornate yellow marble dome evoking the presidential palace where Dr. Kalam resided.',
          x: 50,
          y: 35
        },
        {
          id: 'missile-spires',
          title: 'Aerospace Pylons',
          description: 'Monolithic markers commemorating ISRO’s SLV-3 and DRDO missile innovations.',
          x: 50,
          y: 80
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
  },
  {
    id: 'epoch-modern',
    name: 'Modern Nation & Freedom Renaissance',
    range: '1857 CE – Present',
    epochEra: 'Freedom Struggle to the Space Age',
    description: 'From the moral awakening of Satyagraha and the handwritten drafting of the Constitution to satellite rocketry and nuclear self-reliance.',
    icon: 'Milestone',
    milestones: [
      {
        year: '1909 CE',
        event: 'Gandhi Pens Hind Swaraj Manuscript',
        description: 'Mahatma Gandhi writes his 271-page philosophical manifesto on moral self-rule aboard the SS Kildonan Castle.'
      },
      {
        year: '1944 CE',
        event: 'Nehru Writes The Discovery of India',
        description: 'Imprisoned at Ahmednagar Fort, Jawaharlal Nehru synthesizes 5,000 years of civilizational continuity.'
      },
      {
        year: '1949 CE',
        event: 'Dr. Ambedkar Delivers Final Constitution Draft',
        description: 'The Constituent Assembly adopts the original calligraphed Constitution enshrining liberty, equality, and justice.'
      },
      {
        year: '1980 CE',
        event: 'Dr. Kalam Directs Historic SLV-3 Launch',
        description: 'Dr. A.P.J. Abdul Kalam successfully deploys the Rohini satellite into orbit, launching India into the global space club.'
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
  },
  {
    id: 6,
    question: 'Who was the Chief Architect and Drafting Committee Chairman of the calligraphed Constitution of India?',
    options: [
      'Dr. Rajendra Prasad',
      'Dr. B.R. Ambedkar',
      'Sardar Vallabhbhai Patel',
      'Maulana Abul Kalam Azad'
    ],
    correctAnswer: 1,
    explanation: 'Dr. B.R. Ambedkar served as Chairman of the Drafting Committee, spearheading the monumental creation of the Constitution of India.',
    relatedExhibitId: 'ambedkar-constitution-manuscript'
  },
  {
    id: 7,
    question: 'Where was Jawaharlal Nehru imprisoned when he wrote the 1,000-page manuscript of "The Discovery of India"?',
    options: [
      'Cellular Jail, Andaman',
      'Yerwada Central Jail',
      'Ahmednagar Fort',
      'Naini Central Prison'
    ],
    correctAnswer: 2,
    explanation: 'Nehru wrote "The Discovery of India" between 1942 and 1945 during his imprisonment by the British inside Ahmednagar Fort.',
    relatedExhibitId: 'nehru-manuscripts'
  },
  {
    id: 8,
    question: 'Aboard which steamship did Mahatma Gandhi write the original manuscript of "Hind Swaraj" in 1909?',
    options: [
      'SS Rajputana',
      'SS Kildonan Castle',
      'SS City of Venice',
      'INS Vikrant'
    ],
    correctAnswer: 1,
    explanation: 'Gandhi penned the 271-page manuscript of "Hind Swaraj" aboard the SS Kildonan Castle while voyaging from London to South Africa.',
    relatedExhibitId: 'gandhi-manuscripts'
  },
  {
    id: 9,
    question: 'Before serving as India’s 11th President, Dr. A.P.J. Abdul Kalam was Project Director for which historic space launch vehicle?',
    options: [
      'GSLV Mk III',
      'Chandrayaan-1',
      'SLV-3 (Rohini Satellite)',
      'Mangalyaan Mars Orbiter'
    ],
    correctAnswer: 2,
    explanation: 'Dr. A.P.J. Abdul Kalam led India’s first Satellite Launch Vehicle (SLV-3) project, putting the Rohini satellite into orbit on 18 July 1980.',
    relatedExhibitId: 'kalam-manuscripts'
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
    { zone: 'Zone D', name: 'Medieval Architectural Engineering Courtyard', items: '14 Scale Models' },
    { zone: 'Zone E', name: 'Modern Renaissance, Manuscripts & Memorials Hall', items: '16 Manuscripts & Relics' }
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
