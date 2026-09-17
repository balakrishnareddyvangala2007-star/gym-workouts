import { Program, Feature, Testimonial, PricingPlan, Trainer, GymGalleryItem } from '../types';

export const GYM_DETAILS = {
  name: 'Fierce Fitness Gym',
  tagline: 'Hyderabad’s Premier High-Intensity Training Destination',
  rating: 5.0,
  reviewsCount: '560+',
  address: 'Mohan Reddy Complex, Gundlapochampally, Hyderabad, Telangana 500100',
  landmark: 'Near Gundlapochampally Main Road, Secunderabad - Medchal Zone',
  phone: '+91 91778 04696',
  phoneRaw: '+919177804696',
  whatsappUrl: "https://wa.me/919177804696?text=Hi,%20I'm%20interested%20in%20joining%20Fierce%20Fitness!",
  email: 'fiercefitnesshyd@gmail.com',
  timings: {
    weekdays: 'Monday – Saturday: 5:30 AM – 9:30 PM',
    sunday: 'Sunday: 6:00 AM – 1:00 PM',
    closingTime: '9:30 PM',
  },
  stats: [
    { label: 'Google Rating', value: '5.0 ★', sublabel: '560+ Verified Reviews' },
    { label: 'Floor Space', value: '8,500+', sublabel: 'Sq. Ft. Air-Conditioned' },
    { label: 'Imported Machines', value: '70+', sublabel: 'Commercial Grade Biomechanics' },
    { label: 'Member Transformations', value: '1,200+', sublabel: 'Success Stories in Hyderabad' },
  ]
};

export const FEATURES: Feature[] = [
  {
    id: 'equipment',
    title: 'Modern Imported Equipment',
    description: 'Biomechanical selectorized plate-loaded machines, Olympic power racks, calibrated plates, and advanced cardio consoles designed to isolate muscle safely.',
    iconName: 'Dumbbell',
    highlight: 'Commercial Grade Tech'
  },
  {
    id: 'trainers',
    title: 'Certified Personal Trainers',
    description: 'Dedicated national-level certified coaches who build customized split routines, enforce strict form, track progression, and maintain daily accountability.',
    iconName: 'Award',
    highlight: 'REPs & K11 Certified'
  },
  {
    id: 'community',
    title: 'Vibrant & Motivating Community',
    description: 'An uplifting, non-intimidating culture where beginners and seasoned lifters thrive together. High-tempo acoustics and energetic workout sessions.',
    iconName: 'Users',
    highlight: 'Zero Ego, 100% Support'
  },
  {
    id: 'hygiene',
    title: 'Pristine Hygiene & Amenities',
    description: 'Hospital-grade sanitized benches, dual-zone air conditioning, sanitized water stations, spacious changing rooms, and secure locker facilities.',
    iconName: 'ShieldCheck',
    highlight: 'Regular Sanitization Rounds'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength',
    title: 'Strength & Hypertrophy',
    tagline: 'Build Raw Power & Lean Muscle Mass',
    description: 'Targeted progressive overload protocols featuring heavy compounds, deadlift platforms, dumbbell racks up to 50kg, and isolation stations.',
    features: ['Progressive Overload Tracking', 'Olympic Squat & Bench Platforms', 'Calibrated Steel & Bumper Plates', 'Isolation Cable Stacks'],
    intensity: 'High',
    duration: '60 - 75 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'cardio-hiit',
    title: 'Cardio & HIIT Conditioning',
    tagline: 'Torch Calories & Amplify Stamina',
    description: 'Metabolic circuit training blending assault bikes, curved motorless treadmills, rowers, battle ropes, and kettlebell plyometrics.',
    features: ['Target Heart Rate Monitoring', 'Interval Circuit Stations', 'High Calorie Burn (800+ kcal)', 'Endurance & Stamina Boosting'],
    intensity: 'Extreme',
    duration: '45 - 50 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'personal-training',
    title: '1-on-1 Personal Training',
    tagline: 'Customized Fast-Track Transformations',
    description: 'Bespoke fitness blueprint with individualized exercise prescription, postural correction, body composition tracking, and structured nutritional coaching.',
    features: ['Macro & Meal Plan Guidance', 'Weekly Body Composition Scans', 'Strict Technique Correction', 'Guaranteed Milestone Results'],
    intensity: 'High',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'functional',
    title: 'Functional & Cross-Training',
    tagline: 'Athletic Mobility & Core Resilience',
    description: 'Dynamic multi-planar movements utilizing sled turf lanes, plyo boxes, Bulgarian bags, suspension rings, and core stability systems.',
    features: ['Acrobatic & Mobility Drills', '20-Meter Sled & Turf Track', 'Joint Longevity & Injury Prevention', 'Explosive Functional Power'],
    intensity: 'Medium',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80'
  }
];

export const GALLERY: GymGalleryItem[] = [
  {
    id: 'g1',
    title: 'Heavy Free Weights Arena',
    category: 'Free Weights',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    description: 'Dumbbells from 2.5kg to 50kg, multiple flat and incline benches with Olympic grip bars.'
  },
  {
    id: 'g2',
    title: 'Biomechanical Selectorized Zone',
    category: 'Machines',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    description: 'Imported convergent and divergent resistance cable towers and pin-loaded machines.'
  },
  {
    id: 'g3',
    title: 'Sprint Turf & Sled Track',
    category: 'Functional',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty weighted prowler sleds, battle ropes, and functional agility drills.'
  },
  {
    id: 'g4',
    title: 'Cardiovascular Conditioning Deck',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    description: 'Commercial touch-screen treadmills, stair climbers, air bikes, and rowing machines.'
  },
  {
    id: 'g5',
    title: 'Olympic Squat & Deadlift Racks',
    category: 'Free Weights',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    description: 'Solid rubber drop platforms with zero vibration and calibrated bumper plates.'
  },
  {
    id: 'g6',
    title: 'Stretch & Core Mobility Studio',
    category: 'Functional',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: 'Dedicated foam rolling, resistance bands, and post-workout recovery zone.'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Vikram R. Reddy',
    role: 'Head Strength Coach & Founder',
    certifications: ['ACE Certified', 'CSCS Strength Coach', 'K11 Master Trainer'],
    experienceYears: 11,
    specialty: 'Powerlifting, Hypertrophy & Body Recomposition',
    bio: 'Former state-level powerlifter with over a decade of experience transforming sedentary individuals into high-performing athletes in Hyderabad.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't2',
    name: 'Pooja Sharma',
    role: 'Senior Functional & HIIT Specialist',
    certifications: ['CrossFit L2', 'REPs India Certified', 'Nutrition Specialist'],
    experienceYears: 7,
    specialty: 'Women’s Fitness, Fat Loss & Conditioning',
    bio: 'Passionate about athletic conditioning and empowering women to break barriers with weights, functional strength, and sustainable nutrition habits.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't3',
    name: 'Karthik Varma',
    role: 'Biomechanics & Rehabilitation Coach',
    certifications: ['ISSA Master Trainer', 'Postural Alignment Certified'],
    experienceYears: 8,
    specialty: 'Injury Recovery, Spine Health & Muscle Isolation',
    bio: 'Specializes in pain-free lifting, joint mobility, and helping clients with desk-bound postures regain athletic freedom.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev1',
    name: 'Sai Krishna Chaitanya',
    role: 'IT Professional (Gundlapochampally)',
    rating: 5,
    date: '2 weeks ago',
    content: 'Hands down the best gym in and around Gundlapochampally! The equipment is brand new and imported, not cheap replicas. Trainers Vikram and team are always on the floor actively correcting posture without pushing you to buy expensive packages immediately.',
    highlightTag: 'Trainers',
    verified: true
  },
  {
    id: 'rev2',
    name: 'Ananya Deshmukh',
    role: 'Software Consultant',
    rating: 5,
    date: '1 month ago',
    content: 'As a woman, finding a gym with a respectful, non-creepy, and uplifting crowd was my #1 priority. Fierce Fitness has such a positive vibe! The hygiene is immaculate, washrooms are clean, and the AC actually keeps up during peak hours.',
    highlightTag: 'Atmosphere',
    verified: true
  },
  {
    id: 'rev3',
    name: 'Rameshwar Naidu',
    role: 'Business Owner',
    rating: 5,
    date: '3 weeks ago',
    content: 'Lost 14 kg in 4 months under their personal coaching program. Their nutrition guidance is practical (you can still eat home cooked South Indian meals) and the machines isolate muscles so well that my chronic lower back pain completely vanished.',
    highlightTag: 'Results',
    verified: true
  },
  {
    id: 'rev4',
    name: 'Nikhil Kumar Teja',
    role: 'College Athlete',
    rating: 5,
    date: '2 months ago',
    content: '560+ Google 5-star reviews is completely genuine. The squat racks, deadlift platform with calibrated plates, and dumbbells going all the way up to 50kg make this heaven for serious lifters. Open till 9:30 PM is a huge bonus after late office shifts.',
    highlightTag: 'Equipment',
    verified: true
  },
  {
    id: 'rev5',
    name: 'Haritha Reddy',
    role: 'Doctor & Mother of two',
    rating: 5,
    date: '3 weeks ago',
    content: 'Joined for general stamina and strength after child birth. The trainers are polite, patient, and knowledgeable. The atmosphere inside Mohan Reddy complex is energetic with great music and zero congestion even during evenings.',
    highlightTag: 'Atmosphere',
    verified: true
  },
  {
    id: 'rev6',
    name: 'Mohammed Farhan',
    role: 'Logistics Manager',
    rating: 5,
    date: '1 month ago',
    content: 'Affordable membership compared to fancy franchised gyms, but equipment quality and trainer attentiveness is 10x better. Taking the 1-day free trial was the best decision. Renewed for the annual plan immediately.',
    highlightTag: 'Results',
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Kickstart',
    period: 'Per Month',
    price: 1999,
    originalPrice: 2499,
    highlight: 'Ideal for trial & short-term focus',
    features: [
      'Full Gym Floor & Equipment Access',
      'Cardio & Free Weights Zone',
      'Locker & Shower Facility',
      'Complimentary Initial Fitness Assessment',
      'General Trainer Assistance on Floor',
      'Valid Mon-Sun during all operating hours'
    ]
  },
  {
    id: 'quarterly',
    name: 'Quarterly Transformation',
    period: '3 Months Plan',
    price: 4999,
    originalPrice: 6999,
    popular: true,
    savings: 'Save ₹2,000 (Most Popular)',
    highlight: 'Recommended for visible physique changes',
    features: [
      'Everything in Monthly Plan',
      'Personalized Workout Split Routine',
      'Custom Macronutrient & Diet Framework',
      'Bi-Weekly Body Composition & Fat % Scans',
      '2 Complimentary 1-on-1 Personal Training Sessions',
      'Priority Locker Allocation & Fierce Shaker Bottle'
    ]
  },
  {
    id: 'annual',
    name: 'Annual Elite Champion',
    period: '12 Months Plan',
    price: 13999,
    originalPrice: 19999,
    savings: 'Only ~₹1,166/month (Best Value)',
    highlight: 'Ultimate commitment for lifetime fitness',
    features: [
      'Unlimited 365-Day All-Access Pass',
      'Zero Admission / Enrollment Fee',
      '6 Complimentary Personal Training Sessions',
      'Monthly Advanced InBody Scan & Report',
      'Custom Nutrition + Supplement Protocol',
      'Up to 45 Days Membership Freeze Option',
      'Exclusive Fierce Gym Performance T-Shirt'
    ]
  }
];

export const FAQS = [
  {
    q: 'Where is Fierce Fitness Gym located in Gundlapochampally?',
    a: 'We are located at Mohan Reddy Complex, Gundlapochampally, Hyderabad, Telangana 500100. We are easily accessible with ample two-wheeler and four-wheeler parking right at the complex.'
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday to Saturday from 5:30 AM to 9:30 PM continuously. On Sundays, we are open from 6:00 AM to 1:00 PM for morning strength & recovery workouts.'
  },
  {
    q: 'Can I get a Free Trial before paying for a membership?',
    a: 'Yes! We provide a 100% Free 1-Day Trial Pass. You can experience our imported equipment, consult with a floor trainer, and feel the vibe with zero pressure.'
  },
  {
    q: 'Do you offer Personal Training (PT)?',
    a: 'Yes, we have certified male and female personal trainers specializing in fat loss, muscle building, powerlifting, and postpartum fitness. PT packages can be tailored to your goals.'
  },
  {
    q: 'Is the gym beginner-friendly?',
    a: 'Absolutely. More than 40% of our members started as complete beginners. Our floor trainers guide you through machine adjustments, warm-ups, and safe techniques every single day.'
  }
];
