export const NEIGHBORHOODS = [
  'All Areas', 'Golden', 'Downtown', 'Capitol Hill',
  'LoDo', 'RiNo', 'Highlands', 'Wash Park', 'Arvada', 'Lakewood'
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const events = [
  { id: 1, title: 'Cherry Creek Arts Festival', venue: 'Cherry Creek North', day: 'Sat–Sun', emoji: '🎨', tags: ['This weekend', 'Outdoors'], dist: '4.2 mi', category: 'Arts' },
  { id: 2, title: 'Civic Center Park Movie Night', venue: 'Downtown Denver', day: 'Friday 8pm', emoji: '⛲', tags: ['Tonight', 'Outdoors'], dist: '14.8 mi', category: 'Outdoors' },
  { id: 3, title: 'Golden Farmers Market', venue: 'Downtown Golden', day: 'Saturday 8am', emoji: '🌿', tags: ['This weekend', 'Family'], dist: '0.8 mi', category: 'Family' },
  { id: 4, title: 'Denver Art Museum Free Day', venue: 'Golden Triangle', day: 'Sunday', emoji: '🏛️', tags: ['This weekend', 'Arts'], dist: '12.1 mi', category: 'Arts' },
  { id: 5, title: 'Confluence Park Cleanup Social', venue: 'LoHi', day: 'Saturday 9am', emoji: '🌊', tags: ['This weekend', 'Outdoors'], dist: '11.4 mi', category: 'Outdoors' },
  { id: 6, title: 'Red Rocks Star Gazing Night', venue: 'Morrison', day: 'Friday 9pm', emoji: '🔭', tags: ['Tonight', 'Outdoors'], dist: '6.1 mi', category: 'Outdoors' },
];

export const concerts = [
  { id: 1, title: 'Civic Center Summer Concert', venue: 'Civic Center Park', day: 'Fri 7pm', emoji: '🎸', genre: 'Rock', type: 'Outdoor', tags: ['Tonight'], dist: '14.8 mi' },
  { id: 2, title: 'Jazz in the Park', venue: 'City Park', day: 'Sat 2–5pm', emoji: '🎷', genre: 'Jazz', type: 'Parks', tags: ['This Sat'], dist: '11.3 mi' },
  { id: 3, title: 'Colorado Symphony Pop-Up', venue: 'Union Station', day: 'Sun 1pm', emoji: '🎻', genre: 'Classical', type: 'Plazas', tags: [], dist: '13.5 mi' },
  { id: 4, title: 'Open Mic Night — Tennyson Block', venue: 'Berkeley', day: 'Thu 8pm · Weekly', emoji: '🎤', genre: 'Hip-Hop', type: 'Bars', tags: ['Weekly'], dist: '9.2 mi' },
  { id: 5, title: 'Bluegrass on the Rocks', venue: 'Golden', day: 'Sat 3pm', emoji: '🪕', genre: 'Country', type: 'Outdoor', tags: ['This Sat'], dist: '1.8 mi' },
  { id: 6, title: 'RiNo Art District Block Party', venue: 'RiNo', day: 'Sat 5pm', emoji: '🎺', genre: 'Jazz', type: 'Outdoor', tags: ['This Sat'], dist: '13.1 mi' },
];

export const activities = [
  { id: 1, title: 'Free Outdoor Yoga — Splash Point', venue: 'Golden', day: 'Sat & Sun 8am', emoji: '🧘', tags: ['Instructor-led', 'Weekly'], category: 'Fitness', dist: '0.7 mi' },
  { id: 2, title: 'Intro Watercolor Workshop', venue: 'Lakewood Arts Center', day: 'Sat 10am', emoji: '🎨', tags: ['Supplies incl.', 'New series'], category: 'Arts & Craft', dist: '4.1 mi' },
  { id: 3, title: 'CrossFit Golden — Free Community WOD', venue: 'Golden', day: 'Every Sat 9am', emoji: '🔥', tags: ['Instructor-led', 'All levels'], category: 'Fitness', dist: '1.3 mi' },
  { id: 4, title: 'Sur La Table — Free Knife Skills Demo', venue: 'Cherry Creek', day: 'Sun 1pm', emoji: '🍳', tags: ['Chef-led'], category: 'Cooking', dist: '8.2 mi' },
  { id: 5, title: 'Google — Free AI Tools Workshop', venue: 'Denver Central Library', day: 'Thu 6pm', emoji: '💻', tags: ['Instructor-led', 'New'], category: 'Tech & Skills', dist: '13.4 mi' },
  { id: 6, title: 'Gracie Jiu-Jitsu — Free Intro Class', venue: 'Arvada', day: 'Ongoing · First class', emoji: '🥋', tags: ['First class'], category: 'Fitness', dist: '5.6 mi' },
  { id: 7, title: 'Guitar Center — Free Group Lesson', venue: 'Westminster', day: 'Sat 11am', emoji: '🎸', tags: ['Instructor-led'], category: 'Arts & Craft', dist: '7.8 mi' },
  { id: 8, title: 'CSU Extension — Free Gardening Clinic', venue: 'Golden', day: 'Wed 5:30pm', emoji: '🌱', tags: ['Expert-led', 'Weekly'], category: 'Wellness', dist: '0.9 mi' },
  { id: 9, title: 'REI — Free Gear & Skills Clinic', venue: 'Lakewood', day: 'Sat 10am', emoji: '🏕️', tags: ['Expert-led'], category: 'Tech & Skills', dist: '4.8 mi' },
  { id: 10, title: 'Meditation Drop-In — Shambhala', venue: 'Capitol Hill', day: 'Sun 10am · Weekly', emoji: '🕯️', tags: ['Instructor-led', 'Weekly'], category: 'Wellness', dist: '12.0 mi' },
];

export const happyHours = [
  { id: 1, title: "Woody's Wood-Fired Pizza", hood: 'Golden', day: 'Monday', time: '3–6pm · Mon–Fri', emoji: '🍺', deals: ['$3 drafts', '$2 off pizza'] },
  { id: 2, title: 'The Corner Office', hood: 'Downtown', day: 'Monday', time: '4–6pm · Mon–Thu', emoji: '🍹', deals: ['$5 cocktails', 'Half-off apps'] },
  { id: 3, title: 'Our Mutual Friend', hood: 'RiNo', day: 'Tuesday', time: '4–7pm · Tue–Fri', emoji: '🍻', deals: ['$4 pints', '$1 off growlers'] },
  { id: 4, title: 'Linger', hood: 'Highlands', day: 'Tuesday', time: '3–5:30pm · Tue–Sun', emoji: '🍷', deals: ['$6 wine', '$8 cocktails', '$5 small plates'] },
  { id: 5, title: 'Williams & Graham', hood: 'Capitol Hill', day: 'Wednesday', time: '5–7pm · Wed only', emoji: '🥃', deals: ['$7 whiskey', '$9 cocktails'] },
  { id: 6, title: 'Rioja', hood: 'LoDo', day: 'Wednesday', time: '4–6:30pm · Mon–Wed', emoji: '🍸', deals: ['$6 wine', '$7 craft beer', '$5 bites'] },
  { id: 7, title: 'Golden City Brewery', hood: 'Golden', day: 'Thursday', time: '4–7pm · Thu–Sat', emoji: '🏔️', deals: ['$4 pints', '$2 off flights'] },
  { id: 8, title: 'Wash Perk', hood: 'Wash Park', day: 'Thursday', time: '3–6pm · Thu–Fri', emoji: '🌮', deals: ['$4 tacos', '$5 margaritas'] },
  { id: 9, title: 'Biju\'s Little Curry Shop', hood: 'RiNo', day: 'Friday', time: '5–7pm · Fri only', emoji: '🎨', deals: ['$5 beers', 'Free samosas'] },
  { id: 10, title: 'Avanti Food & Beverage', hood: 'LoDo', day: 'Friday', time: '3–6pm · Fri', emoji: '🥂', deals: ['$4 drafts', '$6 wine', '$5 shots'] },
  { id: 11, title: 'Tap Fourteen', hood: 'Downtown', day: 'Saturday', time: '12–4pm · Sat–Sun', emoji: '🍺', deals: ['$4 pints', '$2 off flights'] },
  { id: 12, title: 'Brewery Bar & Grill', hood: 'Arvada', day: 'Sunday', time: '4–7pm · Sun', emoji: '🍻', deals: ['$3 domestic', '$4 craft', '$5 wings'] },
];

export const freeStuff = [
  { id: 1, title: 'Chipotle — Free burrito, new app users', venue: 'Golden · 1.1 mi', category: 'App Promos', emoji: '🌯', detail: 'Download app + first order', urgency: 'Ends Sunday', dist: '1.1 mi' },
  { id: 2, title: 'Mod Pizza — Buy one, get one free', venue: 'Arvada · 3.8 mi', category: 'With Purchase', emoji: '🍕', detail: 'BOGO this week only', urgency: 'This week', dist: '3.8 mi' },
  { id: 3, title: 'Dutch Bros — Free drink, grand opening', venue: 'Lakewood · 4.2 mi', category: 'Grand Openings', emoji: '🥤', detail: 'New location opening day', urgency: 'Sat only', dist: '4.2 mi' },
  { id: 4, title: 'Ulta — Free skincare sample kit', venue: 'Lakewood · 4.4 mi', category: 'With Purchase', emoji: '🧴', detail: '$35+ purchase · While supplies last', urgency: null, dist: '4.4 mi' },
  { id: 5, title: 'Blank Canvas Brewery — Free growler fill', venue: 'Lakewood · 5.1 mi', category: 'App Promos', emoji: '☕', detail: 'New loyalty sign-up', urgency: null, dist: '5.1 mi' },
  { id: 6, title: 'IHOP — Free short stack, birthday month', venue: 'Wheat Ridge · 6.2 mi', category: 'Food & Drink', emoji: '🧇', detail: 'No purchase needed', urgency: null, dist: '6.2 mi' },
  { id: 7, title: 'Planet Fitness — Free day pass', venue: 'Arvada · 4.9 mi', category: 'Samples', emoji: '🏋️', detail: 'No commitment · Walk in', urgency: 'Limited time', dist: '4.9 mi' },
  { id: 8, title: 'Sephora — Birthday gift bag', venue: 'Cherry Creek · 8.1 mi', category: 'Food & Drink', emoji: '🎁', detail: 'Birthday month · Beauty Insider required', urgency: null, dist: '8.1 mi' },
];

export const almostFree = [
  { id: 1, title: 'Bowlero Arvada — 2 Games + Shoes', venue: 'Arvada', dist: '4.1 mi', detail: 'Weekday only', emoji: '🎳', was: 28, now: 8, category: 'Activities' },
  { id: 2, title: "Beau Jo's Mountain Pizza — Large Pie", venue: 'Golden', dist: '1.2 mi', detail: 'Mon–Wed lunch', emoji: '🍕', was: 22, now: 9, category: 'Food' },
  { id: 3, title: 'CorePower Yoga — Week Unlimited', venue: 'Lakewood', dist: '3.8 mi', detail: 'New students only', emoji: '🧘', was: 75, now: 1, category: 'Fitness' },
  { id: 4, title: 'Alamo Drafthouse — Tues Matinee', venue: 'Denver', dist: '13 mi', detail: 'Every Tuesday', emoji: '🎬', was: 19, now: 5, category: 'Entertainment' },
  { id: 5, title: 'Rec Center Day Pass — Golden', venue: 'Golden', dist: '0.9 mi', detail: 'Pool + gym', emoji: '🏊', was: 12, now: 3, category: 'Fitness' },
  { id: 6, title: 'Top Golf — Hour of Play', venue: 'Centennial', dist: '22 mi', detail: 'Weekday AM', emoji: '🎯', was: 45, now: 12, category: 'Activities' },
  { id: 7, title: 'Punch Bowl Social — 2hr Bowling', venue: 'Denver', dist: '14 mi', detail: 'Mon–Thu before 6pm', emoji: '🎳', was: 35, now: 10, category: 'Entertainment' },
  { id: 8, title: 'Denver Museum of Nature & Science', venue: 'Denver', dist: '11.2 mi', detail: 'First Sunday of month', emoji: '🦕', was: 22, now: 4, category: 'Experiences' },
];
