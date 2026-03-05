// Mock data for events
export interface Event {
  id: string;
  title: string;
  marathiTitle: string;
  category: 'Camping' | 'Trek' | 'Heritage' | 'Nature' | 'Himalayan' | 'Training';
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  location: string;
  duration: string;
  date: string;
  price: number;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  terrain: string;
  whatIncluded: string[];
  whatToBring: string[];
  prerequisites: {
    fitnessLevel: string;
    ageLimit: string;
    experience: string;
    safety: string[];
  };
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  gallery: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  month?: string;
  isFeatured?: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Fireflies Camping at Bhandardara',
    marathiTitle: 'भंडारदरा फायरफ्लाय कॅम्पिंग',
    category: 'Camping',
    difficulty: 'Easy',
    location: 'Bhandardara, Maharashtra',
    duration: '2 Days / 1 Night',
    date: 'June 15-16, 2026',
    price: 2500,
    shortDescription: 'Experience the magic of thousands of fireflies lighting up the night sky. A perfect weekend getaway with nature.',
    detailedDescription: 'Witness the mesmerizing natural phenomenon of fireflies at Bhandardara. This camping experience offers you a chance to reconnect with nature, enjoy stargazing, bonfire nights, and witness thousands of fireflies creating a magical ambiance. Perfect for families, couples, and nature enthusiasts.',
    image: 'https://images.unsplash.com/photo-1692113784234-9ae8a9a2d91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZGFyayUyMG5pZ2h0JTIwZ2xvd2luZyUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIzNjcxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Valley camping near lake with easy hiking trails',
    whatIncluded: [
      'Transportation from Mumbai/Pune',
      'Camping tents and sleeping bags',
      'All meals (Dinner, Breakfast, Lunch)',
      'Bonfire evening',
      'Guided nature walk',
      'First aid support',
      'Event coordinator'
    ],
    whatToBring: [
      'Personal medicines',
      'Flashlight/torch',
      'Comfortable trekking shoes',
      'Light jacket for night',
      'Water bottle',
      'Personal toiletries',
      'Camera (optional)',
      'Power bank'
    ],
    prerequisites: {
      fitnessLevel: 'Basic fitness - suitable for beginners',
      ageLimit: '8 years and above',
      experience: 'No prior camping experience required',
      safety: [
        'Follow guide instructions at all times',
        'Do not wander alone in the dark',
        'Keep safe distance from fire',
        'Do not disturb wildlife',
        'Carry all waste back'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Setup',
        activities: [
          '3:00 PM - Departure from meeting point',
          '6:00 PM - Arrival at campsite',
          '6:30 PM - Tent allocation and setup',
          '7:30 PM - Evening tea and snacks',
          '8:30 PM - Bonfire and music',
          '9:30 PM - Dinner',
          '10:30 PM - Firefly watch experience',
          '11:30 PM - Stargazing session',
          '12:00 AM - Rest time'
        ]
      },
      {
        day: 2,
        title: 'Exploration & Departure',
        activities: [
          '6:00 AM - Wake up call',
          '6:30 AM - Morning tea',
          '7:00 AM - Sunrise viewing',
          '8:00 AM - Breakfast',
          '9:00 AM - Guided nature walk',
          '11:00 AM - Free time & photography',
          '12:30 PM - Lunch',
          '2:00 PM - Pack up and departure',
          '5:00 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542737313-f65089d2f2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudHMlMjBuaWdodCUyMHN0YXJzfGVufDF8fHx8MTc3MjM2NzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1770564512956-60b16034f38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGFkdmVudHVyZSUyMGZyaWVuZHMlMjBoaWtpbmd8ZW58MXx8fHwxNzcyMzY3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    faq: [
      {
        question: 'What is the best time to see fireflies?',
        answer: 'The peak season for fireflies is between mid-May to mid-June. The best viewing time is after 10 PM when it gets completely dark.'
      },
      {
        question: 'Are children allowed?',
        answer: 'Yes, children above 8 years are welcome. Adult supervision is mandatory for children at all times.'
      },
      {
        question: 'What if it rains?',
        answer: 'We have waterproof tents and contingency plans. In case of heavy rain warning, we will reschedule or refund.'
      },
      {
        question: 'Is food vegetarian?',
        answer: 'We serve both vegetarian and non-vegetarian options. Please inform us about dietary restrictions in advance.'
      }
    ]
  },
  {
    id: '2',
    title: 'Kalsubai Peak Trek',
    marathiTitle: 'कळसुबाई शिखर ट्रेक',
    category: 'Trek',
    difficulty: 'Moderate',
    location: 'Kalsubai, Ahmednagar',
    duration: '1 Day',
    date: 'Every Weekend',
    price: 1200,
    shortDescription: 'Conquer the highest peak of Maharashtra. Challenge yourself with this moderate difficulty trek.',
    detailedDescription: 'Summit the highest peak of Maharashtra at 5,400 feet. This one-day trek offers stunning views of the Sahyadri ranges, ancient temples, and a sense of achievement. The trail includes iron ladders and steep climbs, making it perfect for adventure seekers.',
    image: 'https://images.unsplash.com/photo-1589541842632-f7c7dba011f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjB0cmVrJTIwc3VucmlzZSUyME1haGFyYXNodHJhfGVufDF8fHx8MTc3MjM2NzExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Rocky mountain trail with iron ladders',
    whatIncluded: [
      'Expert trek leader',
      'First aid kit',
      'Breakfast and lunch',
      'Forest permits',
      'Achievement certificate'
    ],
    whatToBring: [
      'Trekking shoes (mandatory)',
      'Minimum 2 liters water',
      'Energy bars/dry fruits',
      'Sun cap and sunglasses',
      'Light backpack',
      'Rain jacket',
      'Personal medicines'
    ],
    prerequisites: {
      fitnessLevel: 'Moderate fitness required - should be able to walk 2-3 hours',
      ageLimit: '12 years and above',
      experience: 'Basic trekking experience recommended',
      safety: [
        'Hold railings on iron ladders firmly',
        'Do not rush or overtake on narrow sections',
        'Stay hydrated throughout',
        'Inform guide immediately if feeling unwell',
        'Avoid trekking during heavy rain'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Trek Day',
        activities: [
          '5:30 AM - Departure from base point',
          '7:00 AM - Arrival at Bari village (base)',
          '7:30 AM - Trek briefing and breakfast',
          '8:00 AM - Trek begins',
          '10:00 AM - Reach temple (midpoint)',
          '11:30 AM - Summit reach - peak photography',
          '12:30 PM - Descent begins',
          '2:00 PM - Lunch at base',
          '3:00 PM - Departure to city',
          '5:00 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [],
    faq: [
      {
        question: 'How difficult is this trek?',
        answer: 'It is rated moderate. There are steep sections and iron ladders, but anyone with basic fitness can complete it with determination.'
      },
      {
        question: 'Can beginners attempt this trek?',
        answer: 'Yes, beginners with good fitness levels can attempt. Our guides will support throughout the journey.'
      },
      {
        question: 'What about monsoon trekking?',
        answer: 'Monsoon makes it challenging with slippery rocks. We recommend it for experienced trekkers only during this season.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rajmachi Fort Heritage Trek',
    marathiTitle: 'राजमाची किल्ला धरोहर ट्रेक',
    category: 'Heritage',
    difficulty: 'Easy',
    location: 'Rajmachi, Lonavala',
    duration: '2 Days / 1 Night',
    date: 'Every Weekend',
    price: 1800,
    shortDescription: 'Explore the historic Rajmachi Fort with overnight camping. Perfect blend of history and nature.',
    detailedDescription: 'Walk through history as you trek to Rajmachi Fort, a strategic Maratha fort with two peaks - Shrivardhan and Manaranjan. Enjoy the monsoon greenery, village life, and camp under the stars near the ancient fort ruins.',
    image: 'https://images.unsplash.com/photo-1594527369969-37ca2eba568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZm9ydCUyMGhlcml0YWdlJTIwSW5kaWF8ZW58MXx8fHwxNzcyMzY3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Forest trail through villages and fort ruins',
    whatIncluded: [
      'Trek guide',
      'Camping tents',
      'All meals (3 meals)',
      'Fort entry permits',
      'History storytelling session',
      'Morning tea at fort'
    ],
    whatToBring: [
      'Comfortable walking shoes',
      'Light backpack',
      'Water bottle',
      'Torch/flashlight',
      'Warm layer for night',
      'Personal hygiene items'
    ],
    prerequisites: {
      fitnessLevel: 'Basic fitness - easy trek suitable for families',
      ageLimit: '10 years and above',
      experience: 'No experience required',
      safety: [
        'Do not climb unstable fort walls',
        'Stay with the group',
        'Watch for loose stones',
        'Keep the heritage site clean'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Trek & Fort Exploration',
        activities: [
          '2:00 PM - Departure from meeting point',
          '4:00 PM - Arrival at Lonavala base',
          '4:30 PM - Trek starts through villages',
          '7:00 PM - Reach Rajmachi fort base',
          '7:30 PM - Tent setup and freshen up',
          '8:30 PM - Bonfire and fort history session',
          '9:30 PM - Dinner',
          '10:30 PM - Stargazing and rest'
        ]
      },
      {
        day: 2,
        title: 'Sunrise & Return',
        activities: [
          '5:30 AM - Wake up for sunrise',
          '6:00 AM - Sunrise from fort peak',
          '7:30 AM - Breakfast',
          '8:30 AM - Fort exploration and photography',
          '11:00 AM - Pack up',
          '12:00 PM - Descent begins',
          '2:00 PM - Lunch at village',
          '3:00 PM - Departure',
          '5:00 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1594527369969-37ca2eba568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZm9ydCUyMGhlcml0YWdlJTIwSW5kaWF8ZW58MXx8fHwxNzcyMzY3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    faq: [
      {
        question: 'Is this suitable for senior citizens?',
        answer: 'Yes, the trek is easy-paced and suitable for senior citizens with basic mobility.'
      },
      {
        question: 'What is the fort history?',
        answer: 'Rajmachi was a strategic fort during Maratha empire, used for surveillance of trade routes between Mumbai and Pune.'
      }
    ]
  },
  {
    id: '4',
    title: 'Sandhan Valley Rappelling',
    marathiTitle: 'सांधन व्हॅली रॅपलिंग',
    category: 'Trek',
    difficulty: 'Hard',
    location: 'Sandhan Valley, Nashik',
    duration: '2 Days / 1 Night',
    date: 'November - March',
    price: 3200,
    shortDescription: 'The Valley of Shadows - An extreme adventure with rappelling, rock climbing, and camping.',
    detailedDescription: 'Experience the thrill of descending into Sandhan Valley, also known as the Valley of Shadows. This extreme trek involves rappelling down 300ft cliffs, navigating through narrow gorges, rock patches, and water ponds. Only for the brave-hearted!',
    image: 'https://images.unsplash.com/photo-1771365155373-b514a58b9e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmUlMjBleHRyZW1lfGVufDF8fHx8MTc3MjM2NzEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Deep valley gorge with rock climbing and water crossings',
    whatIncluded: [
      'Expert rappelling instructors',
      'All safety equipment (harness, rope, helmet)',
      'Camping stay',
      'All meals',
      'Waterproof bags',
      'Insurance coverage'
    ],
    whatToBring: [
      'Sturdy trekking shoes',
      'Extra pair of clothes',
      'Dry fruits and energy bars',
      'Minimum 3 liters water',
      'Gloves for rope work',
      'Small first aid kit',
      'Fully charged phone with power bank'
    ],
    prerequisites: {
      fitnessLevel: 'High fitness required - involves physical strain',
      ageLimit: '18 to 45 years',
      experience: 'Prior trekking experience mandatory',
      safety: [
        'Listen carefully to rappelling instructions',
        'Never unhook safety gear without permission',
        'Inform about any health conditions',
        'Follow rope discipline strictly',
        'Not suitable for those with fear of heights or claustrophobia'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Approach Trek & Valley Entry',
        activities: [
          '6:00 AM - Departure from meeting point',
          '10:00 AM - Arrival at Samrad village',
          '10:30 AM - Breakfast and gear check',
          '11:30 AM - Trek begins towards valley top',
          '1:00 PM - Reach rappelling point',
          '1:30 PM - Safety briefing and demo',
          '2:00 PM - Rappelling activity begins',
          '4:00 PM - Enter the valley',
          '5:00 PM - Navigate through gorge',
          '7:00 PM - Camp setup at valley base',
          '8:00 PM - Dinner and bonfire',
          '10:00 PM - Rest'
        ]
      },
      {
        day: 2,
        title: 'Valley Exploration & Exit',
        activities: [
          '6:00 AM - Wake up',
          '6:30 AM - Breakfast',
          '7:30 AM - Valley exploration',
          '9:00 AM - Rock climbing patch',
          '11:00 AM - Water crossing sections',
          '1:00 PM - Packed lunch',
          '2:00 PM - Exit trek begins',
          '5:00 PM - Reach top',
          '6:00 PM - Departure',
          '10:00 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1771365155373-b514a58b9e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmUlMjBleHRyZW1lfGVufDF8fHx8MTc3MjM2NzEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    faq: [
      {
        question: 'Do I need prior rappelling experience?',
        answer: 'No, but you should be physically fit and mentally prepared. Our instructors will train you on-site.'
      },
      {
        question: 'Is this safe?',
        answer: 'Yes, we use international standard equipment and certified instructors. However, adventure activities have inherent risks.'
      },
      {
        question: 'Can I bring my camera?',
        answer: 'Yes, but keep it in waterproof bags. GoPro type action cameras are recommended.'
      }
    ]
  },
  {
    id: '5',
    title: 'Konkan Coastal Camping',
    marathiTitle: 'कोकण किनारी कॅम्पिंग',
    category: 'Nature',
    difficulty: 'Easy',
    location: 'Kashid Beach, Raigad',
    duration: '2 Days / 1 Night',
    date: 'October - March',
    price: 2200,
    shortDescription: 'Relax by the pristine beaches of Konkan. Beach camping with water sports and bonfire.',
    detailedDescription: 'Escape to the serene beaches of Konkan for a perfect beach camping experience. Enjoy water sports, beach volleyball, bonfire nights, and fresh seafood. Wake up to the sound of waves and witness stunning sunsets and sunrises.',
    image: 'https://images.unsplash.com/photo-1655204715186-cd3deabe0dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNhbXBpbmclMjBzdW5zZXQlMjBJbmRpYXxlbnwxfHx8fDE3NzIzNjcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Sandy beach with coastal area',
    whatIncluded: [
      'Beach camping tents',
      'All meals with seafood special',
      'Water sports (Kayaking, Banana boat)',
      'Beach volleyball setup',
      'Bonfire evening',
      'Music system',
      'Beach games equipment'
    ],
    whatToBring: [
      'Swimwear',
      'Beach towel',
      'Sunscreen',
      'Sunglasses and cap',
      'Flip flops',
      'Change of clothes',
      'Camera',
      'Personal medicines'
    ],
    prerequisites: {
      fitnessLevel: 'No fitness requirement - relaxing activity',
      ageLimit: 'All ages welcome',
      experience: 'No experience needed',
      safety: [
        'Swim only in designated safe zones',
        'Life jackets mandatory for water sports',
        'Avoid going into water after sunset',
        'Keep valuables in tent',
        'Follow beach cleanup guidelines'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Beach Arrival & Activities',
        activities: [
          '9:00 AM - Departure from meeting point',
          '1:00 PM - Arrival at Kashid beach',
          '1:30 PM - Welcome drink and lunch',
          '2:30 PM - Tent allocation and rest',
          '4:00 PM - Beach games and volleyball',
          '5:00 PM - Water sports session',
          '6:30 PM - Sunset viewing',
          '7:30 PM - Evening tea and snacks',
          '8:30 PM - Bonfire and music',
          '9:30 PM - Special seafood dinner',
          '11:00 PM - Beach walk and rest'
        ]
      },
      {
        day: 2,
        title: 'Sunrise & Departure',
        activities: [
          '6:00 AM - Sunrise viewing',
          '7:00 AM - Morning beach walk',
          '8:00 AM - Breakfast',
          '9:00 AM - Free time and photography',
          '10:30 AM - Water sports second session',
          '12:00 PM - Checkout and lunch',
          '1:30 PM - Departure',
          '5:30 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1655204715186-cd3deabe0dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNhbXBpbmclMjBzdW5zZXQlMjBJbmRpYXxlbnwxfHx8fDE3NzIzNjcxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    faq: [
      {
        question: 'Can non-swimmers join?',
        answer: 'Absolutely! Life jackets are provided for water sports, and you can enjoy beach activities without swimming.'
      },
      {
        question: 'Is this family friendly?',
        answer: 'Yes, perfect for families with children of all ages.'
      }
    ]
  },
  {
    id: '6',
    title: 'Harishchandragad Night Trek',
    marathiTitle: 'हरिश्चंद्रगड रात्री ट्रेक',
    category: 'Trek',
    difficulty: 'Hard',
    location: 'Harishchandragad, Ahmednagar',
    duration: '1 Day (Night Trek)',
    date: 'Full Moon Nights',
    price: 1500,
    shortDescription: 'Legendary night trek to witness sunrise from the Konkan Kada cliff. An unforgettable experience.',
    detailedDescription: 'Trek through the night to reach Harishchandragad fort, famous for its scary yet breathtaking Konkan Kada cliff. Watch the sunrise over the Sahyadri mountains, explore ancient caves, and visit Kedareshwar temple with its unique hanging pillar.',
    image: 'https://images.unsplash.com/photo-1756885767593-712d83fd36c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHRyZWslMjBtb3VudGFpbnMlMjBtb29ubGlnaHR8ZW58MXx8fHwxNzcyMzY3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Rocky mountain trail with caves',
    whatIncluded: [
      'Night trek guide with support team',
      'Breakfast on top',
      'First aid',
      'Achievement certificate',
      'Headlamps provided'
    ],
    whatToBring: [
      'Good quality trekking shoes',
      'Warm jacket (it gets very cold)',
      'Flashlight with extra batteries',
      'Minimum 2 liters water',
      'Energy food',
      'Small blanket or sleeping bag',
      'Gloves',
      'Emergency medicines'
    ],
    prerequisites: {
      fitnessLevel: 'High fitness - involves 4-5 hours of night trekking',
      ageLimit: '16 years and above',
      experience: 'Moderate trekking experience required',
      safety: [
        'Never go near Konkan Kada edge',
        'Strictly stay with group during night',
        'Carry working flashlight mandatory',
        'Wear proper trekking shoes',
        'Not recommended for people with vertigo'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Night Trek to Summit',
        activities: [
          '11:00 PM - Departure from meeting point',
          '1:30 AM - Arrival at Khireshwar village',
          '2:00 AM - Trek briefing',
          '2:30 AM - Night trek begins',
          '6:00 AM - Reach fort top',
          '6:30 AM - Sunrise from Konkan Kada',
          '8:00 AM - Breakfast',
          '9:00 AM - Temple and caves exploration',
          '11:00 AM - Descent begins',
          '2:00 PM - Reach base',
          '3:00 PM - Departure',
          '5:30 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1756885767593-712d83fd36c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHRyZWslMjBtb3VudGFpbnMlMjBtb29ubGlnaHR8ZW58MXx8fHwxNzcyMzY3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    faq: [
      {
        question: 'Is night trekking safe?',
        answer: 'Yes, our experienced guides know the trail well. We use headlamps and trek in groups.'
      },
      {
        question: 'What if I cannot complete the trek?',
        answer: 'Our support team will assist. In rare cases, we arrange alternative routes or rest points.'
      },
      {
        question: 'How cold does it get?',
        answer: 'Temperature can drop to 10-15°C at night on the mountain. Warm clothing is essential.'
      }
    ],
    month: 'October',
    isFeatured: true
  },
  {
    id: '7',
    title: 'Ratangad Fort Trek',
    marathiTitle: 'रतनगड किल्ला ट्रेक',
    category: 'Trek',
    difficulty: 'Moderate',
    location: 'Ratangad, Ahmednagar',
    duration: '1 Day',
    date: 'Every Weekend',
    price: 1100,
    shortDescription: 'The Jewel Fort of Sahyadris with stunning views and rock-cut caves.',
    detailedDescription: 'Ratangad, meaning "Jewel Fort", offers one of the best trekking experiences in Sahyadris. The fort features a famous needle-shaped pinnacle, ancient caves, and panoramic views. Monsoon transforms this trek into a magical experience with clouds and waterfalls.',
    image: 'https://images.unsplash.com/photo-1670702146868-bc7797ef47a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBoZXJvJTIwbW91bnRhaW4lMjBkYXJrfGVufDF8fHx8MTc3MjM2NzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Mountain trail with rock-cut steps and caves',
    whatIncluded: [
      'Professional trek guide',
      'Breakfast and lunch',
      'First aid support',
      'Forest entry permits',
      'Certificate'
    ],
    whatToBring: [
      'Trekking shoes',
      '2 liters water',
      'Energy snacks',
      'Rain gear',
      'Extra clothes',
      'Torch'
    ],
    prerequisites: {
      fitnessLevel: 'Moderate - comfortable with 3-4 hours trekking',
      ageLimit: '12 years and above',
      experience: 'Basic trekking experience helpful',
      safety: [
        'Avoid climbing the pinnacle in rain',
        'Stay on marked trails',
        'Careful near cliff edges',
        'Follow guide instructions'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Ratangad Fort Trek',
        activities: [
          '6:00 AM - Departure from meeting point',
          '8:30 AM - Reach Ratanwadi village',
          '9:00 AM - Breakfast and briefing',
          '9:30 AM - Trek begins',
          '11:30 AM - Reach fort and explore caves',
          '12:30 PM - Lunch break',
          '1:30 PM - Descent starts',
          '3:00 PM - Return to base',
          '3:30 PM - Departure',
          '6:00 PM - Arrival at drop point'
        ]
      }
    ],
    gallery: [],
    faq: [
      {
        question: 'Can I climb the pinnacle?',
        answer: 'Yes, but only in dry weather with proper guidance. It requires rock climbing skills.'
      },
      {
        question: 'Is it better in monsoon?',
        answer: 'Monsoon offers spectacular views with greenery and clouds, but trails are slippery.'
      }
    ],
    month: 'July',
    isFeatured: true
  },
  {
    id: '8',
    title: 'Torna Fort Trek',
    marathiTitle: 'तोरणा किल्ला ट्रेक',
    category: 'Heritage',
    difficulty: 'Moderate',
    location: 'Torna, Pune',
    duration: '1 Day',
    date: 'Every Weekend',
    price: 1000,
    shortDescription: 'The first fort captured by Shivaji Maharaj - a historic trek with great significance.',
    detailedDescription: 'Torna Fort holds immense historical importance as the first fort captured by Chhatrapati Shivaji Maharaj in 1643. Standing at 4603 feet, it offers spectacular views of nearby forts and valleys. A must-do for history enthusiasts and trekkers.',
    image: 'https://images.unsplash.com/photo-1594527369969-37ca2eba568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZm9ydCUyMGhlcml0YWdlJTIwSW5kaWF8ZW58MXx8fHwxNzcyMzY3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Rocky mountain path with historical structures',
    whatIncluded: [
      'Expert guide with historical knowledge',
      'Breakfast and lunch',
      'First aid kit',
      'Entry permits',
      'Achievement certificate'
    ],
    whatToBring: [
      'Good trekking shoes',
      'Water (minimum 2 liters)',
      'Sun protection',
      'Energy bars',
      'Camera',
      'Small backpack'
    ],
    prerequisites: {
      fitnessLevel: 'Moderate fitness - steep climbs involved',
      ageLimit: '10 years and above',
      experience: 'Beginner friendly with basic fitness',
      safety: [
        'Do not venture into dangerous areas',
        'Respect historical structures',
        'Stay hydrated',
        'Follow time schedule'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Torna Fort Trek',
        activities: [
          '6:00 AM - Departure',
          '8:00 AM - Reach Velhe village base',
          '8:30 AM - Breakfast',
          '9:00 AM - Trek starts',
          '11:30 AM - Reach fort top',
          '12:00 PM - Historical tour and lunch',
          '2:00 PM - Descent begins',
          '4:00 PM - Reach base',
          '4:30 PM - Departure',
          '6:30 PM - Drop at meeting point'
        ]
      }
    ],
    gallery: [],
    faq: [
      {
        question: 'What is special about Torna Fort?',
        answer: 'It was the first fort captured by Shivaji Maharaj, marking the beginning of the Maratha empire.'
      },
      {
        question: 'How difficult is the trek?',
        answer: 'Moderate difficulty with some steep sections. Anyone with basic fitness can complete it.'
      }
    ],
    month: 'November',
    isFeatured: true
  },
  {
    id: '9',
    title: 'Visapur Fort Trek',
    marathiTitle: 'विसापूर किल्ला ट्रेक',
    category: 'Trek',
    difficulty: 'Easy',
    location: 'Visapur, Lonavala',
    duration: '1 Day',
    date: 'Every Weekend',
    price: 900,
    shortDescription: 'Easy monsoon trek perfect for beginners with scenic views and historical ruins.',
    detailedDescription: 'Visapur Fort is an ideal beginner trek offering panoramic views of Lonavala and surrounding forts. The wide plateau at the top, ancient structures, and monsoon beauty make it a popular choice for first-time trekkers and families.',
    image: 'https://images.unsplash.com/photo-1589541842632-f7c7dba011f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjB0cmVrJTIwc3VucmlzZSUyME1haGFyYXNodHJhfGVufDF8fHx8MTc3MjM2NzExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    terrain: 'Gentle mountain slopes with wide trails',
    whatIncluded: [
      'Trek guide',
      'Breakfast and lunch',
      'First aid',
      'Entry permits',
      'Certificate'
    ],
    whatToBring: [
      'Comfortable shoes',
      'Water bottle',
      'Light snacks',
      'Rain jacket',
      'Cap',
      'Camera'
    ],
    prerequisites: {
      fitnessLevel: 'Easy - suitable for all ages',
      ageLimit: '8 years and above',
      experience: 'No experience required - perfect for beginners',
      safety: [
        'Stay with group',
        'Watch for slippery rocks',
        'Respect heritage site',
        'Carry enough water'
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Visapur Fort Trek',
        activities: [
          '7:00 AM - Departure from meeting point',
          '9:00 AM - Reach Patan village base',
          '9:30 AM - Breakfast',
          '10:00 AM - Trek begins',
          '12:00 PM - Reach fort top',
          '12:30 PM - Explore and lunch',
          '2:00 PM - Descent starts',
          '3:30 PM - Return to base',
          '4:00 PM - Departure',
          '6:00 PM - Arrival'
        ]
      }
    ],
    gallery: [],
    faq: [
      {
        question: 'Is this good for first-time trekkers?',
        answer: 'Absolutely! Visapur is one of the easiest treks in Sahyadris, perfect for beginners and families.'
      },
      {
        question: 'Best season to visit?',
        answer: 'Monsoon (July-September) is the best time when everything is lush green.'
      }
    ],
    month: 'August',
    isFeatured: false
  }
];

// Blog posts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Monsoon Trekking Tips for Sahyadris',
    excerpt: 'Monsoon brings the Sahyadris to life. Learn the essential tips for safe and enjoyable monsoon trekking.',
    content: 'Monsoon season transforms the Western Ghats into a paradise...',
    author: 'Durgaraj Pawar',
    date: 'March 1, 2026',
    category: 'Trekking Tips',
    image: 'https://images.unsplash.com/photo-1712186870004-d8653d9a0af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBTYWh5YWRyaSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzIzNjcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Top 10 Beginner-Friendly Treks in Maharashtra',
    excerpt: 'New to trekking? Start your adventure with these easy and beautiful treks perfect for beginners.',
    content: 'Starting your trekking journey can be intimidating...',
    author: 'Ramesh Kulkarni',
    date: 'February 28, 2026',
    category: 'Trek Guides',
    image: 'https://images.unsplash.com/photo-1589541842632-f7c7dba011f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjB0cmVrJTIwc3VucmlzZSUyME1haGFyYXNodHJhfGVufDF8fHx8MTc3MjM2NzExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'History of Maratha Forts in Sahyadris',
    excerpt: 'Explore the rich history and strategic importance of forts built by Chhatrapati Shivaji Maharaj.',
    content: 'The Sahyadri mountain range is dotted with magnificent forts...',
    author: 'Durgaraj Pawar',
    date: 'February 25, 2026',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1594527369969-37ca2eba568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZm9ydCUyMGhlcml0YWdlJTIwSW5kaWF8ZW58MXx8fHwxNzcyMzY3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '10 min'
  }
];

// Training programs
export interface TrainingProgram {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  image: string;
  modules: string[];
  outcomes: string[];
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: '1',
    title: 'Basic Mountaineering Course',
    marathiTitle: 'मूलभूत गिर्यारोहण अभ्यासक्रम',
    description: 'Learn fundamental mountaineering skills including rope work, navigation, and safety protocols.',
    duration: '7 Days',
    level: 'Beginner',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1771365155373-b514a58b9e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmUlMjBleHRyZW1lfGVufDF8fHx8MTc3MjM2NzEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    modules: [
      'Introduction to Mountaineering',
      'Rope Work and Knots',
      'Map Reading and Navigation',
      'Camping Techniques',
      'First Aid and Rescue',
      'Weather Understanding',
      'Practical Field Training'
    ],
    outcomes: [
      'Certified Basic Mountaineer',
      'Independent Trek Planning Skills',
      'Safety and Rescue Knowledge',
      'Confidence in Mountain Terrain'
    ]
  },
  {
    id: '2',
    title: 'Rock Climbing Workshop',
    marathiTitle: 'खडक गिर्यारोहण कार्यशाळा',
    description: 'Master the art of rock climbing with professional instructors using international safety standards.',
    duration: '3 Days',
    level: 'Intermediate',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1771365155373-b514a58b9e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmUlMjBleHRyZW1lfGVufDF8fHx8MTc3MjM2NzEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    modules: [
      'Climbing Equipment Knowledge',
      'Belaying Techniques',
      'Route Planning',
      'Top Rope Climbing',
      'Lead Climbing Basics',
      'Safety Protocols'
    ],
    outcomes: [
      'Rock Climbing Certification',
      'Equipment Handling Skills',
      'Route Reading Ability',
      'Belaying Certification'
    ]
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'The fireflies camping was magical! The organization was excellent, food was great, and our guide Ramesh was knowledgeable and friendly. Highly recommended!',
    avatar: ''
  },
  {
    id: 2,
    name: 'Amit Deshmukh',
    location: 'Pune',
    rating: 5,
    text: 'Kalsubai trek was challenging but worth every step. The sense of achievement at the summit was incredible. Professional team and safety measures were top-notch.',
    avatar: ''
  },
  {
    id: 3,
    name: 'Sneha & Rohit',
    location: 'Thane',
    rating: 5,
    text: 'Perfect weekend getaway! Rajmachi fort trek with camping was a beautiful experience. Good for couples and families alike. Will join more trips!',
    avatar: ''
  },
  {
    id: 4,
    name: 'Vikram Patil',
    location: 'Nashik',
    rating: 5,
    text: 'Sandhan Valley was an adrenaline rush! The rappelling was thrilling, and the valley exploration was epic. Only for adventure seekers. Loved it!',
    avatar: ''
  }
];

// Team members
export const teamMembers = [
  {
    id: 1,
    name: 'Keshav Ugale',
    role: 'Founder & Chief Trek Leader',
    bio: '25+ years of mountaineering experience. Internationally trained instructor. Co-founder of Sahyadri Mitra Foundation (Durgaraj).',
    image: ''
  },
  {
    id: 2,
    name: 'Jyoti Ugale',
    role: 'Co-Founder & Director',
    bio: 'Co-founded Durgaraj in 1999. Expert in nature conservation and adventure training. National level mountaineer.',
    image: ''
  },
  {
    id: 3,
    name: 'Om Ugale',
    role: 'Trek Coordinator',
    bio: 'Manages trek logistics and participant coordination. Passionate about introducing youth to adventure sports.',
    image: ''
  },
  {
    id: 4,
    name: 'Vrushali Ugale',
    role: 'Operations Manager',
    bio: 'Handles camp operations and participant safety. Trained in first aid and emergency response protocols.',
    image: ''
  }
];