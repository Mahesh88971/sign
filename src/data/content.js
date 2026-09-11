export const signs = [
  { name: 'Hello', icon: 'H', category: 'Basics', context: 'A warm welcome that opens the door to a conversation.', color: 'coral' },
  { name: 'Love', icon: 'L', category: 'Feelings', context: 'A feeling that can be seen, held and shared.', color: 'rose' },
  { name: 'Friend', icon: 'F', category: 'Connection', context: 'Connection made visible through two people meeting.', color: 'gold' },
  { name: 'World', icon: 'W', category: 'Ideas', context: 'A way to hold the people and places around us.', color: 'blue' },
  { name: 'Dream', icon: 'D', category: 'Feelings', context: 'A gesture for the future you can already imagine.', color: 'violet' },
  { name: 'Music', icon: 'M', category: 'Culture', context: 'Rhythm translated into movement and expression.', color: 'mint' },
  { name: 'Laugh', icon: 'Q', category: 'Feelings', context: 'Joy that does not need a soundtrack.', color: 'yellow' },
  { name: 'Home', icon: '⌂', category: 'Connection', context: 'The place, people or feeling you return to.', color: 'terracotta' },
  { name: 'Family', icon: '♧', category: 'Connection', context: 'A sign shaped by everyday relationships.', color: 'green' },
  { name: 'Help', icon: '+', category: 'Everyday', context: 'A small gesture that makes asking easier.', color: 'sky' },
]

export const stories = [
  { title: 'LOVE', text: 'How emotion can be expressed without sound.', tag: 'EMOTION / 04 MIN', tone: 'story-love' },
  { title: 'FAMILY', text: 'How signs become part of everyday relationships.', tag: 'IDENTITY / 07 MIN', tone: 'story-family' },
  { title: 'IDENTITY', text: 'How language connects people to community.', tag: 'COMMUNITY / 06 MIN', tone: 'story-identity' },
  { title: 'DREAM', text: 'How expression can exist beyond spoken words.', tag: 'CREATIVITY / 05 MIN', tone: 'story-dream' },
]

export const cultures = [
  { title: 'Cinema', icon: '▣', text: 'Stories designed to be watched, felt and shared.' },
  { title: 'Music', icon: '♫', text: 'Meet rhythm through movement, vibration and light.' },
  { title: 'Gaming', icon: '⌘', text: 'Play built around visual communication.' },
  { title: 'Food', icon: '◒', text: 'Discover food culture through visual storytelling.' },
  { title: 'Travel', icon: '✈', text: 'Useful signs for moving through the world.' },
  { title: 'Art', icon: '✧', text: 'Sign language as visual expression.' },
  { title: 'Children', icon: '◉', text: 'A bright first world for curious minds.' },
  { title: 'Technology', icon: '⌬', text: 'Build tools that make language more visible.' },
]

export const creators = [
  { name: 'Ananya Rao', role: 'Dancer & storyteller', sign: 'Dream', initials: 'AR', color: 'creator-coral' },
  { name: 'Rohan Mehta', role: 'Game designer', sign: 'Play', initials: 'RM', color: 'creator-blue' },
  { name: 'Mira Joseph', role: 'ISL educator', sign: 'Welcome', initials: 'MJ', color: 'creator-gold' },
]

export const challenges = ['Hello', 'Friend', 'Love', 'Thank you', 'Dream']
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => ({ letter, code: `ISL-${String(index + 1).padStart(2, '0')}` }))
export const actions = [
  'Enter the world', 'Explore SignVerse', 'Open sign-in', 'Switch language', 'Open menu',
  'Discover the hook', 'Play Hello', 'Replay motion', 'Try the sign', 'Play pronunciation',
  'Choose Hello', 'Choose Love', 'Choose Friend', 'Choose World', 'Choose Dream',
  'Choose Music', 'Search signs', 'Filter Basics', 'Filter Feelings', 'Filter Culture',
  'Open story', 'Watch story', 'Choose Cinema', 'Choose Gaming', 'Choose Travel',
  'Choose Art', 'Start music', 'Pause music', 'Open camera', 'Stop camera',
  'Try camera again', 'Learn sign meaning', 'Complete challenge', 'Skip challenge', 'Unlock badge',
  'Explore India', 'Explore America', 'Explore Britain', 'Watch creator story', 'Upload story',
  'High contrast', 'Large text', 'Reduced motion', 'Share experience', 'Return home',
  'Open library', 'Open culture', 'Open community', 'Open accessibility', 'Enter again',
]
