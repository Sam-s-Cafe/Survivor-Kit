
import { Bunker, RadioStation, FieldGuideEntry, Remedy, RemedyCategory } from './types';

export const BUNKERS: Bunker[] = [
  { id: 'bunker_1', name: "Alpha Sierra Bunker", location: { lat: 34.0522, lng: -118.2437 }, type: 'official' },
  { id: 'bunker_2', name: "Bravo Zulu Refuge", location: { lat: 40.7128, lng: -74.0060 }, type: 'official' },
  { id: 'bunker_3', name: "Charlie Delta Shelter", location: { lat: 41.8781, lng: -87.6298 }, type: 'official' },
  { id: 'bunker_4', name: "Echo Foxtrot Point", location: { lat: 29.7604, lng: -95.3698 }, type: 'official' },
  { id: 'bunker_5', name: "Golf Hotel Outpost", location: { lat: 49.2827, lng: -123.1207 }, type: 'official' },
];

const placeholderThumbnail = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMzNzQxNTEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2U1ZTdlYiI+T0ZGTElORSBWSURFTzwvdGV4dD48L3N2Zz4=';

export const SURVIVAL_VIDEOS = [
  { id: 1, title: 'How to Purify Water', description: 'Essential techniques for making water safe to drink.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 2, title: 'Building a Basic Shelter', description: 'Learn to construct a temporary shelter from natural materials.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 3, title: 'First Aid Fundamentals', description: 'Covering wound care, splinting, and other life-saving basics.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 4, title: 'Signaling for Rescue', description: 'Methods to increase your visibility to rescue teams.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 5, title: 'Essential Knot Tying', description: 'Master 5 key knots for shelter, traps, and general utility.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 6, title: 'Fire Starting: Bow Drill Method', description: 'Create fire by friction when modern tools fail.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 7, title: 'Fire Starting: Flint & Steel', description: 'A reliable method for creating sparks and fire.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 8, title: 'Foraging: Identifying 5 Common Edible Plants', description: 'A beginner\'s guide to safe plant identification.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 9, title: 'Basic Small Game Trapping', description: 'Learn to set a simple but effective snare trap.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 10, title: 'Field Dressing a Small Animal', description: 'Properly process game to prevent contamination.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 11, title: 'Using a Map and Compass', description: 'Navigate accurately without relying on electronics.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 12, title: 'Celestial Navigation Basics', description: 'Use the sun and stars to find your direction.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 13, title: 'Creating a Makeshift Spear', description: 'Craft a basic defensive and hunting tool.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 14, title: 'Basic Self-Defense Techniques', description: 'Simple moves to protect yourself in a confrontation.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 15, title: 'Camouflage and Concealment', description: 'Blend into your environment to avoid detection.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 16, title: 'Setting Up a Tripwire Alarm', description: 'Create an early warning system for your camp.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 17, title: 'Conserving and Rationing Food', description: 'Make your food supplies last as long as possible.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 18, title: 'Maintaining Mental Resilience', description: 'Psychological strategies for surviving high-stress situations.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 19, title: 'Building a Smokery for Meat Preservation', description: 'Preserve meat for long-term storage.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 20, title: 'Crafting Containers from Bark', description: 'Make waterproof containers from natural materials.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 21, title: 'Creating Char Cloth for Tinder', description: 'A superior fire-starting material that catches any spark.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 22, title: 'Long-Term Shelter Construction', description: 'Build a more durable and insulated shelter.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 23, title: 'Sourcing and Purifying Salt', description: 'An essential mineral for health and food preservation.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 24, title: 'Reading Weather Patterns', description: 'Predict weather changes by observing clouds and wind.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
  { id: 25, title: 'Basic Tool Sharpening in the Field', description: 'Maintain your knife and axe with natural stones.', thumbnailUrl: placeholderThumbnail, videoUrl: '' },
];

export const NATURAL_REMEDIES: Remedy[] = [
  {
    id: 1, title: 'Plantain Poultice', category: 'Insect Bites',
    description: 'A common weed that helps draw out toxins and reduce inflammation from stings and bites.',
    ingredients: ['Fresh plantain leaves (Plantago major)', 'Clean water (optional)'],
    instructions: [
      'Find fresh, clean plantain leaves.',
      'Chew or crush the leaves to create a pulp.',
      'Apply the crushed leaf pulp directly to the bite or sting.',
      'Cover with a larger leaf or a clean piece of cloth and replace every 2-4 hours.'
    ],
  },
  {
    id: 2, title: 'Turmeric Paste for Wounds', category: 'Wound Care',
    description: 'Turmeric has natural antiseptic and anti-inflammatory properties that can help clean minor cuts and prevent infection.',
    ingredients: ['Turmeric powder', 'Clean water'],
    instructions: [
      'Clean the wound thoroughly with clean water.',
      'Mix a small amount of turmeric powder with a few drops of water to form a thick paste.',
      'Gently apply the paste over the minor wound and cover with a clean bandage.',
      'This is for minor scratches only. Deep bites require immediate medical attention.'
    ],
  },
  {
    id: 3, title: 'Ginger Root Tea', category: 'Digestive Aid',
    description: 'Soothes an upset stomach, reduces nausea, and can help with cold symptoms.',
    ingredients: ['Fresh ginger root', 'Honey (if available)', 'Hot water'],
    instructions: [
      'Peel and slice a small piece of ginger root.',
      'Steep the ginger slices in hot water for 5-10 minutes.',
      'If you have honey, stir in a teaspoon to help soothe the throat.',
      'Drink slowly while warm.'
    ],
  },
  {
    id: 4, title: 'Activated Charcoal', category: 'Digestive Aid',
    description: 'Can help treat some types of poisoning or an upset stomach by absorbing toxins. USE WITH EXTREME CAUTION.',
    ingredients: ['Activated charcoal (from a fire, ensure it is fully cooled and from non-poisonous wood)'],
    instructions: [
      'Crush cooled charcoal into a fine powder.',
      'Mix one tablespoon of powder with a glass of water and drink immediately.',
      'WARNING: This is a last resort. Incorrect use can be harmful. Do not use for caustic substances like lye or acids.'
    ],
  },
  {
    id: 5, title: 'Crushed Garlic Application', category: 'Wound Care',
    description: 'Garlic has potent antimicrobial properties. Can be used on minor cuts to prevent infection.',
    ingredients: ['1-2 cloves of fresh garlic'],
    instructions: [
      'Crush a fresh clove of garlic to release its oils.',
      'Apply the crushed garlic directly to a cleaned, minor wound. There may be a stinging sensation.',
      'Cover with a clean bandage. Do not leave on for more than 20-30 minutes as it can irritate the skin.'
    ],
  },
  {
    id: 6, title: 'Mint for Nausea & Headaches', category: 'Pain Relief',
    description: 'Mint can calm an upset stomach and ease tension headaches.',
    ingredients: ['Fresh mint leaves'],
    instructions: [
      'For nausea, chew on fresh mint leaves or steep them in hot water for a soothing tea.',
      'For headaches, crush the leaves and rub the oils onto your temples and forehead.'
    ],
  },
  {
    id: 7, title: 'Willow Bark Tea', category: 'Pain Relief',
    description: 'The bark of the willow tree contains salicin, a chemical similar to aspirin. It helps relieve pain and reduce fever.',
    ingredients: ['Strips of willow bark', 'Water'],
    instructions: [
      'Carefully shave strips of bark from a willow tree.',
      'Steep about a tablespoon of the bark in a cup of hot water for 10-15 minutes.',
      'Strain the tea and drink. Do not consume if allergic to aspirin.'
    ]
  },
  {
    id: 8, title: 'Yarrow for Minor Wounds', category: 'Wound Care',
    description: 'Known as "nature\'s bandage," yarrow can help stop bleeding from minor cuts and scrapes.',
    ingredients: ['Fresh yarrow leaves'],
    instructions: [
      'Clean the wound first.',
      'Crush fresh yarrow leaves and apply them directly to the bleeding cut as a poultice.',
      'The leaves have properties that can help coagulate blood.'
    ]
  },
  {
    id: 9, title: 'Aloe Vera for Burns', category: 'Skin Issues',
    description: 'The gel inside an aloe vera leaf is excellent for soothing minor burns, including sunburn.',
    ingredients: ['One aloe vera leaf'],
    instructions: [
      'Break off a leaf from an aloe vera plant.',
      'Slice it open lengthwise and squeeze out the clear gel.',
      'Apply the gel directly to the burn for immediate cooling relief.'
    ]
  },
  {
    id: 10, title: 'Echinacea Tincture', category: 'General Wellness',
    description: 'Thought to boost the immune system, potentially shortening the duration of the common cold.',
    ingredients: ['Echinacea roots and flowers', 'High-proof alcohol (if available)'],
    instructions: [
      'Chop the echinacea parts and place them in a jar.',
      'Cover with alcohol and seal. Let it sit for 4-6 weeks, shaking daily.',
      'Strain the liquid. Use a few drops in water when you feel a cold coming on.'
    ]
  },
  {
    id: 11, title: 'Chamomile Tea for Anxiety', category: 'General Wellness',
    description: 'A calming herb that can help reduce anxiety and promote sleep.',
    ingredients: ['Dried or fresh chamomile flowers', 'Hot water'],
    instructions: [
      'Place a tablespoon of chamomile flowers in a cup.',
      'Pour hot water over them and let steep for 5 minutes.',
      'Strain and drink before bedtime or during stressful moments.'
    ]
  },
  {
    id: 12, title: 'Peppermint Tea for Digestion', category: 'Digestive Aid',
    description: 'Helps relieve symptoms of indigestion, gas, and bloating.',
    ingredients: ['Fresh or dried peppermint leaves', 'Hot water'],
    instructions: [
      'Steep peppermint leaves in hot water for 5-10 minutes.',
      'Drink after a meal to aid digestion.'
    ]
  },
  {
    id: 13, title: 'Dandelion Root Decoction', category: 'Digestive Aid',
    description: 'Dandelion root can act as a mild laxative and aid in liver function.',
    ingredients: ['Roasted dandelion roots', 'Water'],
    instructions: [
      'Simmer a tablespoon of chopped, roasted dandelion root in water for 15 minutes.',
      'Strain and drink to support digestive health.'
    ]
  },
  {
    id: 14, title: 'Pine Needle Tea', category: 'General Wellness',
    description: 'A rich source of Vitamin C, useful for preventing scurvy and boosting immunity.',
    ingredients: ['A handful of young pine needles', 'Hot water'],
    instructions: [
      'Chop the pine needles to help release their essence.',
      'Pour hot (not boiling) water over them and let steep for 10 minutes.',
      'WARNING: Identify the pine tree correctly; some evergreens like the Yew tree are highly poisonous.'
    ]
  },
  {
    id: 15, title: 'Mullein Leaf for Coughs', category: 'Respiratory Aid',
    description: 'Mullein acts as an expectorant, helping to clear mucus from the lungs.',
    ingredients: ['Dried mullein leaves', 'Hot water'],
    instructions: [
      'Steep the dried leaves in hot water for 10 minutes.',
      'Strain through a fine cloth to remove the plant\'s tiny hairs, which can irritate the throat.',
      'Drink to soothe a persistent cough.'
    ]
  },
  {
    id: 16, title: 'Oak Bark for Diarrhea', category: 'Digestive Aid',
    description: 'The tannins in oak bark have an astringent property that can help with diarrhea.',
    ingredients: ['Inner bark of an oak tree', 'Water'],
    instructions: [
      'Boil a small amount of oak bark in water for 10-15 minutes.',
      'Let it cool and strain. Drink a small amount to help settle the digestive system.'
    ]
  },
  {
    id: 17, title: 'Jewelweed for Poison Ivy', category: 'Skin Issues',
    description: 'A natural remedy for the rash caused by poison ivy, often found growing near it.',
    ingredients: ['Fresh jewelweed stems and leaves'],
    instructions: [
      'Crush the juicy stems and leaves of the jewelweed plant.',
      'Rub the resulting liquid and pulp over the affected skin area as soon as possible after contact with poison ivy.'
    ]
  },
  {
    id: 18, title: 'Witch Hazel Astringent', category: 'Skin Issues',
    description: 'A natural astringent to clean wounds, soothe insect bites, and reduce minor swelling.',
    ingredients: ['Witch hazel twigs and bark', 'Water'],
    instructions: [
      'Boil the witch hazel twigs in water for 20 minutes.',
      'Strain the liquid and let it cool. Apply to skin with a clean cloth.'
    ]
  },
  {
    id: 19, title: 'Clove Oil for Toothache', category: 'Pain Relief',
    description: 'Clove contains eugenol, a natural anesthetic and antiseptic.',
    ingredients: ['Whole cloves'],
    instructions: [
      'Place a whole clove directly against the aching tooth or gum.',
      'Gently bite down to release its oil. Hold it in place for several minutes.',
      'This provides temporary relief from dental pain.'
    ]
  },
  {
    id: 20, title: 'Valerian Root for Sleep', category: 'General Wellness',
    description: 'A powerful sedative herb to aid with insomnia and stress.',
    ingredients: ['Dried valerian root', 'Hot water'],
    instructions: [
      'Steep one teaspoon of dried valerian root in hot water for 15 minutes.',
      'The tea has a strong, earthy smell. Drink 30 minutes before bed.'
    ]
  },
  {
    id: 21, title: 'Feverfew for Migraines', category: 'Pain Relief',
    description: 'Can help prevent migraines and reduce their severity.',
    ingredients: ['Fresh feverfew leaves'],
    instructions: [
      'Chew one or two fresh leaves daily as a preventative measure.',
      'Can cause mouth sores in some individuals. Can also be made into a tea.'
    ]
  },
  {
    id: 22, title: 'Thyme Tea for Sore Throat', category: 'Respiratory Aid',
    description: 'Thyme has antimicrobial properties and can help soothe a sore throat and cough.',
    ingredients: ['Fresh or dried thyme', 'Hot water', 'Honey (optional)'],
    instructions: [
      'Steep a teaspoon of thyme in hot water for 10 minutes.',
      'Strain and add honey to taste. Gargle or drink slowly.'
    ]
  },
  {
    id: 23, title: 'Calendula Salve', category: 'Skin Issues',
    description: 'A gentle and soothing salve for minor cuts, burns, and irritated skin.',
    ingredients: ['Dried calendula flowers', 'Olive oil', 'Beeswax (if available)'],
    instructions: [
      'Infuse dried calendula flowers in olive oil by heating gently for several hours.',
      'Strain the flowers out. For every cup of infused oil, add 1/4 cup of beeswax.',
      'Heat until beeswax is melted, then pour into a container to cool.'
    ]
  },
  {
    id: 24, title: 'Elderberry Syrup', category: 'General Wellness',
    description: 'A potent antiviral, especially effective for colds and flu.',
    ingredients: ['Dried elderberries', 'Water', 'Honey'],
    instructions: [
      'Simmer dried elderberries in water for 45 minutes.',
      'Smash the berries to release remaining juice and strain the liquid.',
      'Once cooled to lukewarm, mix in honey until dissolved. Store in a sealed container.',
      'WARNING: Raw elderberries are poisonous. They must be cooked.'
    ]
  },
  {
    id: 25, title: 'Slippery Elm for Sore Throat', category: 'Respiratory Aid',
    description: 'The inner bark creates a gel-like substance (mucilage) that coats and soothes a sore throat.',
    ingredients: ['Powdered slippery elm bark', 'Hot water'],
    instructions: [
      'Mix one teaspoon of slippery elm powder with a cup of hot water, stirring until it thickens.',
      'Drink slowly to coat the throat.'
    ]
  }
];


export const RADIO_STATIONS: RadioStation[] = [
  { name: "Groove Salad", frequency: "98.7", streamUrl: "https://ice1.somafm.com/groovesalad-128-mp3" },
  { name: "Drone Zone", frequency: "102.3", streamUrl: "https://ice1.somafm.com/dronezone-128-mp3" },
  { name: "Radio Paradise", frequency: "91.5", streamUrl: "http://stream.radioparadise.com/mp3-128" },
  { name: "Secret Agent", frequency: "107.9", streamUrl: "https://ice1.somafm.com/secretagent-128-mp3" },
];

const createPlantImage = (svgContent: string) => `data:image/svg+xml;base64,${btoa(svgContent)}`;
const backgroundRect = (color = "#374151") => `<rect width="100" height="100" fill="${color}"/>`;

export const FIELD_GUIDE_ENTRIES: FieldGuideEntry[] = [
    {
        id: 1, name: "Dandelion (Taraxacum officinale)",
        description: "Recognized by its bright yellow flower that turns into a puffball of seeds. Leaves are toothed and grow in a rosette from the base.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V40" stroke="#4d7c0f" stroke-width="4"/><path d="M50 85 L30 70 M50 85 L70 70 M50 70 L35 55 M50 70 L65 55 M50 55 L40 40 M50 55 L60 40" stroke="#4d7c0f" stroke-width="3" fill="none"/><circle cx="50" cy="25" r="15" fill="#facc15"/><circle cx="50" cy="25" r="8" fill="#f59e0b"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="30" fill="#facc15"/><circle cx="50" cy="50" r="15" fill="#f59e0b"/><path d="M50 50 L 10 40 M50 50 L 20 25 M50 50 L 40 15 M50 50 L 60 15 M50 50 L 80 25 M50 50 L 90 40 M50 50 L 85 60 M50 50 L 70 80 M50 50 L 50 85 M50 50 L 30 80 M50 50 L 15 60" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="25" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="1 2"/><path d="M50 50 L10 50 M50 50 L90 50 M50 50 L50 10 M50 50 L50 90 M50 50 L20 20 M50 50 L80 80 M50 50 L20 80 M50 50 L80 20" stroke="#e5e7eb" stroke-width="1"/><circle cx="50" cy="50" r="5" fill="#d1d5db"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Lawns, roadsides, disturbed soil. Widespread globally.",
        warning: "Leaves, flowers, and roots are all edible. Leaves are best when young and can be eaten raw or cooked. Avoid plants from pesticide-treated areas."
    },
    {
        id: 2, name: "Broadleaf Plantain (Plantago major)",
        description: "Broad, oval leaves with prominent parallel veins. Grows low to the ground. Flower stalks are tall and thin.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="65" rx="40" ry="25" fill="#4d7c0f"/><ellipse cx="35" cy="60" rx="25" ry="35" transform="rotate(-30 35 60)" fill="#65a30d"/><ellipse cx="65" cy="60" rx="25" ry="35" transform="rotate(30 65 60)" fill="#4d7c0f"/><path d="M55 20 V60" stroke="#84cc16" stroke-width="3"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="50" rx="35" ry="45" fill="#4d7c0f"/><path d="M50 5 C50 50, 20 50, 20 95 M50 5 C50 50, 80 50, 80 95 M50 5 C50 50, 35 50, 35 95 M50 5 C50 50, 65 50, 65 95 M50 5 C50 50, 50 50, 50 95" stroke="#65a30d" stroke-width="2" fill="none"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 V10" stroke="#84cc16" stroke-width="4"/><rect x="47" y="10" width="6" height="50" fill="#a3e635" rx="3"/><circle cx="50" cy="15" r="2" fill="white"/><circle cx="48" cy="25" r="2" fill="white"/><circle cx="52" cy="35" r="2" fill="white"/><circle cx="50" cy="45" r="2" fill="white"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Compacted soil, lawns, paths. Widespread globally.",
        warning: "Young leaves are edible raw. Older, tougher leaves can be cooked like spinach. Has medicinal properties for insect bites (poultice)."
    },
    {
        id: 3, name: "Yarrow (Achillea millefolium)",
        description: "Features fern-like, feathery leaves and grows in stalks with flat-topped clusters of small, white or pinkish flowers.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 V15" stroke="#166534" stroke-width="3"/><path d="M50 80 L70 60 M50 70 L70 50 M50 60 L70 40 M50 50 L70 30 M50 80 L30 60 M50 70 L30 50 M50 60 L30 40 M50 50 L30 30" stroke="#16a34a" stroke-width="2" fill="none"/><ellipse cx="50" cy="20" rx="20" ry="10" fill="#f0fdf4"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 V 20 M50 80 L 20 50 M50 80 L 80 50 M35 65 L 15 45 M35 65 L 55 45 M65 65 L 45 45 M65 65 L 85 45" stroke="#16a34a" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="30" rx="35" ry="15" fill="#f0fdf4"/><circle cx="50" cy="30" r="3" fill="#fde047"/><circle cx="40" cy="25" r="3" fill="#fde047"/><circle cx="60" cy="25" r="3" fill="#fde047"/><circle cx="35" cy="35" r="3" fill="#fde047"/><circle cx="65" cy="35" r="3" fill="#fde047"/><circle cx="70" cy="30" r="3" fill="#fde047"/><circle cx="30" cy="30" r="3" fill="#fde047"/></svg>`),
        ],
        edibility: "Caution",
        habitat: "Fields, meadows, roadsides. Widespread in the Northern Hemisphere.",
        warning: "Primarily medicinal (stops bleeding). Can be consumed as a tea, but may cause skin sensitivity. Use sparingly."
    },
    {
        id: 4, name: "Stinging Nettle (Urtica dioica)",
        description: "Grows in dense patches. Heart-shaped, serrated leaves covered in tiny stinging hairs. Can grow several feet high.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V10" stroke="#14532d" stroke-width="4"/><path d="M50 80 l-25 -15 v-10 l25 15 l25 -15 v10 z" fill="#166534"/><path d="M50 50 l-25 -15 v-10 l25 15 l25 -15 v10 z" fill="#16a34a"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 C 10 30, 20 80, 50 90 C 80 80, 90 30, 50 10 Z" fill="#16a34a" stroke="#14532d" stroke-width="2"/><circle cx="40" cy="40" r="1" fill="white"/><circle cx="60" cy="40" r="1" fill="white"/><circle cx="35" cy="60" r="1" fill="white"/><circle cx="65" cy="60" r="1" fill="white"/><circle cx="50" cy="30" r="1" fill="white"/><circle cx="50" cy="75" r="1" fill="white"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M40 90 V20" stroke="#14532d" stroke-width="3"/><path d="M40 80 l-15-10 v-5 l15 10 l15-10 v5z" fill="#16a34a"/><path d="M60 90 V30" stroke="#14532d" stroke-width="3"/><path d="M60 70 l-15-10 v-5 l15 10 l15-10 v5z" fill="#166534"/></svg>`),
        ],
        edibility: "Edible (Cooked)",
        habitat: "Moist, nutrient-rich soil, woodlands, riverbanks.",
        warning: "MUST BE COOKED or dried to neutralize stinging hairs. A highly nutritious green, like spinach. Wear gloves when harvesting."
    },
    {
        id: 5, name: "Red Clover (Trifolium pratense)",
        description: "Recognizable by its three-lobed leaves (clover) and a globe-shaped, reddish-pink flower head.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 V45" stroke="#16a34a" stroke-width="3"/><path d="M50 60 C 40 50 40 30 50 30 C 60 30 60 50 50 60z" fill="#16a34a"/><path d="M35 75 C 25 65 25 45 35 45 C 45 45 45 65 35 75z" fill="#16a34a"/><path d="M65 75 C 55 65 55 45 65 45 C 75 45 75 65 65 75z" fill="#16a34a"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="40" r="25" fill="#db2777"/><path d="M50 40 L20 35 M50 40 L80 35 M50 40 L30 15 M50 40 L70 15 M50 40 L50 10 M50 40 L25 60 M50 40 L75 60" stroke="#f472b6" stroke-width="3" fill="none"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V55" stroke="#16a34a" stroke-width="4"/><circle cx="50" cy="35" r="20" fill="#db2777"/><path d="M50 75 C 40 65 40 45 50 45 C 60 45 60 65 50 75z" fill="#16a34a"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Fields, lawns, meadows. Widespread.",
        warning: "Flowers and leaves are edible raw or cooked. Can be made into a tea. Consume in moderation."
    },
    {
        id: 6, name: "Cattail (Typha latifolia)",
        description: "Tall, grass-like plant found in marshes, with a distinctive brown, sausage-shaped flower head.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect("#52525b")}<path d="M50 95 V 10" stroke="#16a34a" stroke-width="6"/><path d="M40 95 C 40 50 60 50 60 15" stroke="#84cc16" stroke-width="4" fill="none"/><path d="M60 95 C 60 50 40 50 40 15" stroke="#84cc16" stroke-width="4" fill="none"/><ellipse cx="50" cy="35" rx="10" ry="25" fill="#854d0e"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="50" rx="15" ry="40" fill="#854d0e" stroke="#522d04" stroke-width="2"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 C 50 50 40 50 40 5" stroke="#84cc16" stroke-width="8" fill="none"/><path d="M60 95 C 60 50 50 50 50 5" stroke="#a3e635" stroke-width="8" fill="none"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Marshes, ponds, ditches, and wetlands.",
        warning: "Multiple parts are edible depending on the season (shoots, pollen, roots). Ensure water source is not contaminated."
    },
    {
        id: 7, name: "Burdock (Arctium lappa)",
        description: "Large, heart-shaped, wavy-edged leaves. In its second year, it produces purple, thistle-like flowers that become burrs.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50,95 C 60,75 40,75 50,55 C 60,35 40,35 50,15" fill="none" stroke="#a3e635" stroke-width="4" /><path d="M50,95 C 40,75 60,75 50,55 C 40,35 60,35 50,15" fill="none" stroke="#166534" stroke-width="4" transform="translate(5,0)"/><path d="M50,95 C 10,70 10,40, 50,20" fill="#16a34a"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="20" fill="#a855f7"/><path d="M50 50 L10 50 M50 50 L90 50 M50 50 L50 10 M50 50 L50 90" stroke="#7e22ce" stroke-width="2"/><path d="M50 50 L 20 20 M50 50 L 80 80 M50 50 L20 80 M50 50 L80 20" stroke="#a855f7" stroke-width="3" stroke-linecap="round"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 V 90" stroke="#a16207" stroke-width="10" stroke-linecap="round"/><path d="M50 40 L 65 50 M50 60 L 65 70" stroke="#ca8a04" stroke-width="4" stroke-linecap="round"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Disturbed soil, roadsides, fields.",
        warning: "The taproot (of first-year plants) is the primary edible part, similar to a carrot. Must be peeled and cooked."
    },
    {
        id: 8, name: "Lamb's Quarters (Chenopodium album)",
        description: "Diamond-shaped leaves with a toothed edge, covered in a fine white powder, especially on new growth. Can grow quite tall.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V10" stroke="#166534" stroke-width="4"/><path d="M50 70 l-30-15 l5-20 l25 5 z" fill="#dcfce7"/><path d="M50 50 l-25-20 l10-20 l15 10 z" fill="#f0fdf4"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 L 10 40 L 50 90 L 90 40 Z" fill="#f0fdf4" stroke="#84cc16" stroke-width="2" /></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 L 10 40 L 50 90 L 90 40 Z" fill="#a3e635"/><circle cx="50" cy="50" r="20" fill="white" opacity="0.5"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Gardens, fields, disturbed soil. Very common weed.",
        warning: "A highly nutritious wild green, related to spinach and quinoa. Steam or boil. Contains oxalates, so cook before eating."
    },
    {
        id: 9, name: "Chicory (Cichorium intybus)",
        description: "Basal leaves look similar to dandelion. Stems are tough and woody, with bright blue (sometimes white or pink) flowers that open in the morning.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V20" stroke="#4d7c0f" stroke-width="3"/><path d="M50 30 L 70 25 M50 30 L 30 25" stroke="#4d7c0f" stroke-width="3"/><circle cx="72" cy="24" r="8" fill="#60a5fa"/><circle cx="28" cy="24" r="8" fill="#60a5fa"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="30" fill="#60a5fa"/><path d="M50 50 L 20 50 M50 50 L 80 50 M50 50 L 50 20 M50 50 L 50 80 M50 50 L 30 30 M50 50 L 70 70 M50 50 L 30 70 M50 50 L 70 30" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="1 10"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 5 V 95" stroke="#a16207" stroke-width="8" stroke-linecap="round"/><path d="M50 30 L 60 40 M50 50 L 60 60" stroke="#ca8a04" stroke-width="3" stroke-linecap="round"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Roadsides, fields, waste areas.",
        warning: "Leaves are edible but bitter. The roasted root is a well-known coffee substitute."
    },
    {
        id: 10, name: "Self-Heal (Prunella vulgaris)",
        description: "A low-growing plant with lance-shaped leaves and a squarish stem. Flowers are purple/violet and form a dense, club-like head.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 V 40" stroke="#16a34a" stroke-width="4"/><path d="M50 70 l-20-10 l5-10 l15 5z" fill="#4d7c0f"/><path d="M50 70 l 20-10 l-5-10 l-15 5z" fill="#4d7c0f"/><ellipse cx="50" cy="30" rx="15" ry="10" fill="#9333ea"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50,90 C 20,80 20,60 50,50" stroke="#16a34a" stroke-width="3" fill="none"/><path d="M50,70 l-20-10 v-5 l20 10 l20-10 v5z" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="50" rx="20" ry="30" fill="#9333ea"/><ellipse cx="50" cy="40" rx="5" ry="3" fill="#a855f7"/><ellipse cx="45" cy="50" rx="5" ry="3" fill="#a855f7"/><ellipse cx="55" cy="50" rx="5" ry="3" fill="#a855f7"/><ellipse cx="50" cy="60" rx="5" ry="3" fill="#a855f7"/></svg>`),
        ],
        edibility: "Caution",
        habitat: "Lawns, woods, fields. Very common.",
        warning: "Considered edible (young leaves and stems), but primarily known for its extensive medicinal uses in wound healing."
    },
    {
        id: 11, name: "Mullein (Verbascum thapsus)",
        description: "In its first year, a rosette of large, soft, fuzzy, gray-green leaves. In the second year, a tall flower stalk (up to 6ft+) emerges with yellow flowers.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><filter id="fuzzy"><feGaussianBlur in="SourceGraphic" stdDeviation="2"/></filter></defs>${backgroundRect()}<ellipse cx="50" cy="70" rx="40" ry="20" fill="#8c998d" filter="url(#fuzzy)"/><ellipse cx="30" cy="65" rx="30" ry="18" fill="#aab6aa" filter="url(#fuzzy)" transform="rotate(-15 30 65)"/><ellipse cx="70" cy="65" rx="30" ry="18" fill="#8c998d" filter="url(#fuzzy)" transform="rotate(15 70 65)"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V5" stroke="#8c998d" stroke-width="8"/><circle cx="50" cy="15" r="5" fill="#facc15"/><circle cx="50" cy="25" r="5" fill="#facc15"/><circle cx="50" cy="35" r="5" fill="#facc15"/><circle cx="50" cy="45" r="5" fill="#facc15"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><filter id="fuzzy"><feGaussianBlur in="SourceGraphic" stdDeviation="2"/></filter></defs>${backgroundRect()}<ellipse cx="50" cy="50" rx="40" ry="45" fill="#aab6aa" filter="url(#fuzzy)"/></svg>`),
        ],
        edibility: "Caution",
        habitat: "Dry, sunny, disturbed soil, fields, and roadsides.",
        warning: "Not a food source. Leaves are famously used to make a tea for respiratory ailments (must be finely strained). Soft leaves can be used as 'nature's toilet paper'."
    },
    {
        id: 12, name: "Wild Garlic / Ramps (Allium tricoccum/ursinum)",
        description: "Broad, smooth, light green leaves that appear in spring. A strong onion or garlic smell when crushed is the key identifier.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M40 90 C 20 50, 60 50, 40 10" stroke="#84cc16" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M60 90 C 40 50, 80 50, 60 10" stroke="#a3e635" stroke-width="12" fill="none" stroke-linecap="round"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M30 90 C 10 50, 50 50, 30 10" stroke="#84cc16" stroke-width="10" fill="none"/><path d="M50 90 C 30 50, 70 50, 50 10" stroke="#a3e635" stroke-width="10" fill="none"/><path d="M70 90 C 50 50, 90 50, 70 10" stroke="#84cc16" stroke-width="10" fill="none"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 C 40 85, 60 85, 50 75" fill="#f3e8ff" stroke-width="2" stroke="#e9d5ff"/><path d="M50 75 v-20" stroke="#a3e635" stroke-width="3"/><circle cx="50" cy="45" r="10" fill="white"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Moist, deciduous forests.",
        warning: "CRITICAL: Must have a garlic/onion smell. Deadly look-alikes like Lily of the Valley do not have this smell. All parts are edible."
    },
    {
        id: 13, name: "Cleavers (Galium aparine)",
        description: "A sprawling plant with square stems and leaves arranged in star-like whorls. The entire plant is covered in tiny hooked hairs, making it cling to surfaces.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M10 90 L 90 10" stroke="#4d7c0f" stroke-width="3"/><path d="M50 50 l 20 0 M50 50 l -20 0 M50 50 l 0 20 M50 50 l 0 -20 M50 50 l 14 14 M50 50 l -14 -14 M50 50 l 14 -14 M50 50 l -14 14" stroke="#84cc16" stroke-width="2" transform="translate(10, -10)"/><path d="M50 50 l 20 0 M50 50 l -20 0 M50 50 l 0 20 M50 50 l 0 -20 M50 50 l 14 14 M50 50 l -14 -14 M50 50 l 14 -14 M50 50 l -14 14" stroke="#84cc16" stroke-width="2" transform="translate(-20, 20)"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 50 l 40 0 M50 50 l -40 0 M50 50 l 0 40 M50 50 l 0 -40 M50 50 l 28 28 M50 50 l -28 -28 M50 50 l 28 -28 M50 50 l -28 28" stroke="#84cc16" stroke-width="3"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 50 l 40 0 M50 50 l -40 0" stroke="#4d7c0f" stroke-width="2" /><circle cx="90" cy="50" r="2" fill="#a3e635"/><circle cx="10" cy="50" r="2" fill="#a3e635"/></svg>`),
        ],
        edibility: "Edible (Cooked)",
        habitat: "Hedgerows, woodlands, gardens.",
        warning: "The clinging texture makes it unpleasant raw. Best when boiled or steamed, which softens the hairs. Young shoots are best."
    },
    {
        id: 14, name: "Sweet Violet (Viola odorata)",
        description: "Low-growing plant with heart-shaped leaves and distinctive purple (or white) flowers with a sweet scent.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 90 C 20 70, 20 40, 50 30 C 80 40, 80 70, 50 90" fill="#166534"/><path d="M50 40 C 40 30, 40 10, 50 10 C 60 10, 60 30, 50 40" fill="#a855f7"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 20 C 20 10, 20 40, 50 40 C 80 40, 80 10, 50 20" fill="#a855f7"/><path d="M50 40 v 20" stroke="#16a34a" stroke-width="2"/><circle cx="50" cy="35" r="3" fill="yellow"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 20 C 10 30, 20 80, 50 90 C 80 80, 90 30, 50 20 Z" fill="#16a34a" stroke="#14532d" stroke-width="2"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Woodlands, shady banks.",
        warning: "Both leaves and flowers are edible and high in vitamins. Can be used in salads or made into a syrup or tea."
    },
    {
        id: 15, name: "Garlic Mustard (Alliaria petiolata)",
        description: "In first year, a rosette of kidney-shaped leaves. In second year, a taller stalk with triangular, toothed leaves and clusters of small, white, four-petaled flowers.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V20" stroke="#166534" stroke-width="3"/><path d="M50 70 l-25-10 v-10 l25 10 l25-10 v10z" fill="#4d7c0f"/><circle cx="50" cy="18" r="4" fill="white"/><circle cx="58" cy="22" r="4" fill="white"/><circle cx="42" cy="22" r="4" fill="white"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 C 20 40, 30 90, 50 90 C 70 90, 80 40, 50 10" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="5" fill="white"/><path d="M50 50 l 10-10 M50 50 l -10 10 M50 50 l -10-10 M50 50 l 10 10" stroke="white" stroke-width="2"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Disturbed woods, trailsides. Highly invasive in North America.",
        warning: "All parts are edible. Leaves and flowers have a mild garlic/mustard flavor. Best in spring before it becomes too bitter."
    },
    {
        id: 16, name: "Common Chickweed (Stellaria media)",
        description: "A low-growing, sprawling weed with small, oval leaves and tiny, white flowers so deeply lobed they appear to have 10 petals instead of 5.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50" fill="none" stroke="#84cc16" stroke-width="3"/><circle cx="50" cy="50" r="5" fill="#a3e635"/><circle cx="30" cy="40" r="5" fill="#a3e635"/><circle cx="70" cy="60" r="5" fill="#a3e635"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 30 L 40 50 L 50 70 L 60 50 Z" fill="#84cc16" stroke="#4d7c0f" stroke-width="1"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 30 L 48 50 L 50 70 L 52 50 Z" fill="white"/><path d="M30 50 L 50 48 L 70 50 L 50 52 Z" fill="white" transform="rotate(90 50 50)"/><circle cx="50" cy="50" r="3" fill="yellow"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Cool, moist, shady areas. Lawns, gardens.",
        warning: "A nutritious and mild-tasting green, excellent raw in salads or as a cooked vegetable. Has a single line of fine hairs along its stem."
    },
    {
        id: 17, name: "Shepherd's Purse (Capsella bursa-pastoris)",
        description: "Starts as a rosette of lobed leaves. Produces a tall stem with small white flowers that develop into unique, heart-shaped or triangular seed pods.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V 10" stroke="#16a34a" stroke-width="3"/><path d="M50 40 L 40 30 L 50 20 L 60 30 z" fill="#84cc16"/><path d="M50 60 L 40 50 L 50 40 L 60 50 z" fill="#84cc16"/><path d="M50 80 L 40 70 L 50 60 L 60 70 z" fill="#84cc16"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 20 L 20 40 L 50 90 L 80 40 Z" stroke="#166534" stroke-width="2" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 20 L 30 40 L 50 60 L 70 40 z" fill="#84cc16" stroke="#4d7c0f" stroke-width="2"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Disturbed soil, fields, gardens.",
        warning: "Leaves, flowers, and especially the seed pods are edible. They have a peppery, mustard-like taste."
    },
    {
        id: 18, name: "Japanese Knotweed (Reynoutria japonica)",
        description: "Grows in dense thickets with hollow, bamboo-like stems. Leaves are large, spade-shaped. Sprays of small, creamy-white flowers in late summer.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<rect x="45" y="10" width="10" height="80" fill="#a3e635" rx="3"/><path d="M45 30 h 10 M45 50 h 10 M45 70 h 10" stroke="#166534" stroke-width="2"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 10 L 15 50 L 50 90 L 85 50 Z" fill="#166534" /></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<rect x="25" y="10" width="10" height="80" fill="#a3e635" rx="3"/><rect x="45" y="10" width="10" height="80" fill="#166534" rx="3"/><rect x="65" y="10" width="10" height="80" fill="#a3e635" rx="3"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Riverbanks, roadsides, waste areas. Extremely invasive.",
        warning: "Only the young, tender shoots in spring are edible. They taste like sour rhubarb and must be cooked. Do not spread any part of the plant."
    },
    {
        id: 19, name: "Curly Dock (Rumex crispus)",
        description: "Long, lance-shaped leaves with distinctively wavy or 'crisped' edges. Produces a tall stalk which turns reddish-brown as seeds mature.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V 5" stroke="#be123c" stroke-width="4"/><path d="M50 80 C 60 70 40 70 50 60 C 60 50 40 50 50 40 C 60 30 40 30 50 20" fill="none" stroke="#16a34a" stroke-width="3"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50,95 C 60,75 40,75 50,55 C 60,35 40,35 50,15" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 95 V 5" stroke="#be123c" stroke-width="6"/><circle cx="50" cy="20" r="3" fill="#fecaca"/><circle cx="50" cy="30" r="3" fill="#fecaca"/><circle cx="50" cy="40" r="3" fill="#fecaca"/></svg>`),
        ],
        edibility: "Edible (Cooked)",
        habitat: "Fields, pastures, roadsides.",
        warning: "Young leaves are edible but must be boiled (and water discarded) to reduce oxalic acid. Very high in Vitamin A and C."
    },
    {
        id: 20, name: "Purslane (Portulaca oleracea)",
        description: "A low-growing succulent with reddish, fleshy stems and small, paddle-shaped, fleshy leaves.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M20 80 Q 50 50, 80 80" stroke="#be123c" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="30" cy="70" rx="10" ry="6" fill="#4d7c0f"/><ellipse cx="70" cy="70" rx="10" ry="6" fill="#4d7c0f"/><ellipse cx="50" cy="55" rx="10" ry="6" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M20 20 L 80 80" stroke="#be123c" stroke-width="5" stroke-linecap="round"/><ellipse cx="30" cy="30" rx="10" ry="6" fill="#4d7c0f"/><ellipse cx="70" cy="70" rx="10" ry="6" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<ellipse cx="50" cy="50" rx="12" ry="8" fill="#4d7c0f"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Sunny, dry, disturbed areas, gardens, cracks in pavement.",
        warning: "All aerial parts are edible. Can be eaten raw (crunchy, slightly sour) or cooked. Very high in omega-3 fatty acids."
    },
    {
        id: 21, name: "Wood Sorrel (Oxalis stricta)",
        description: "Looks like clover but has distinct heart-shaped leaflets (3 per leaf). Flowers are typically yellow and have 5 petals.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 50 C 40 40 40 20 50 20 C 60 20 60 40 50 50z" fill="#84cc16"/><path d="M35 70 C 25 60 25 40 35 40 C 45 40 45 60 35 70z" fill="#84cc16"/><path d="M65 70 C 55 60 55 40 65 40 C 75 40 75 60 65 70z" fill="#84cc16"/><path d="M50 95 V50" stroke="#4d7c0f" stroke-width="2"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<path d="M50 50 C 40 40 40 20 50 20 C 60 20 60 40 50 50z" fill="#84cc16" stroke="#4d7c0f" stroke-width="1"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect()}<circle cx="50" cy="50" r="15" fill="#facc15"/><circle cx="50" cy="50" r="5" fill="#f59e0b"/></svg>`),
        ],
        edibility: "Edible",
        habitat: "Woods, lawns, gardens.",
        warning: "Leaves, flowers, and seed pods have a pleasant, sour, lemony taste. Contains oxalic acid, so consume in moderation."
    },
    {
        id: 22, name: "Pokeweed (Phytolacca americana)",
        description: "A large herbaceous plant with thick, reddish-purple stems, large leaves, and drooping clusters of dark purple to black berries.",
        imageUrls: [
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect("#52525b")}<path d="M50 95 V 20" stroke="#9333ea" stroke-width="8"/><path d="M50 70 l-30-15 v-10 l30 15 l30-15 v10 z" fill="#166534"/><path d="M50 40 l-15-10 v-5 l15 10 l15-10 v5 z" fill="#4d7c0f"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect("#52525b")}<path d="M50 20 Q 30 50, 50 80" stroke="#9333ea" stroke-width="4" fill="none"/><circle cx="35" cy="40" r="5" fill="#4c1d95"/><circle cx="40" cy="50" r="5" fill="#2e104e"/><circle cx="45" cy="60" r="5" fill="#4c1d95"/><circle cx="50" cy="70" r="5" fill="#2e104e"/></svg>`),
            createPlantImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${backgroundRect("#52525b")}<circle cx="50" cy="50" r="7" fill="#2e104e" stroke="#1e1b4b" stroke-width="2"/><text x="50%" y="85%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14" fill="#fca5a5">POISON</text></svg>`),
        ],
        edibility: "POISONOUS",
        habitat: "Fields, fencerows, woodland edges.",
        warning: "HIGHLY TOXIC. All parts are poisonous, especially the root. Berries are toxic to humans. While young shoots ('poke sallet') are eaten in some regions, they require specific, repeated boiling procedures to be safe. Avoid entirely unless an expert."
    }
];
