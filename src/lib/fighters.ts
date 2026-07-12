export interface Fighter {
  slug: string;
  name: string;
  nickname: string;
  category: string;
  weightClass: string;
  image: string;
  story: string;
  achievements: string[];
  stats: { wins: string; losses: string; draws: string };
  quote: string;
}

export const fighters: Fighter[] = [
  {
    slug: "lennox-chigango",
    name: "Lennox Chigango",
    nickname: "The Hurricane",
    category: "Youth",
    weightClass: "Lightweight",
    image: "/images/vfba-portrait-1.jpg",
    story:
      "Lennox came to VFBA as a young boy with no direction. Through boxing, he found discipline, purpose, and a future. He is now one of VFBA's most competitive youth fighters, representing the academy at national level.",
    achievements: [
      "VFBA Youth Champion",
      "National Youth Boxing Qualifier",
      "Matabeleland North Representative",
    ],
    stats: { wins: "12", losses: "3", draws: "1" },
    quote:
      "Boxing gave me what nothing else could — a reason to wake up and fight for something.",
  },
  {
    slug: "crein-moyo",
    name: "Crein Moyo",
    nickname: "The Beast",
    category: "Youth",
    weightClass: "Welterweight",
    image: "/images/vfba-portrait-2.jpg",
    story:
      "Crein grew up in the streets of Victoria Falls. VFBA gave him shelter, training, and a family. His aggressive style and relentless work ethic have made him one of the most exciting young fighters in the region.",
    achievements: [
      "Regional Tournament Medalist",
      "VFBA Most Improved Fighter",
      "Youth Development Programme Graduate",
    ],
    stats: { wins: "8", losses: "2", draws: "0" },
    quote:
      "When I step in the ring, I fight for every child who was told they would never be anything.",
  },
  {
    slug: "bright-moyo",
    name: "Bright Moyo",
    nickname: "The Hope",
    category: "Youth",
    weightClass: "Featherweight",
    image: "/images/vfba-community-2.jpg",
    story:
      "Bright is a living testament to VFBA's impact. Without the academy's support, he would likely have been lost to the streets. The academy paid his school fees and gave him a home. He now trains competitively and mentors younger boxers.",
    achievements: [
      "Five-Nation Tournament Participant",
      "VFBA Academic Achievement Award",
      "Junior Coach Mentor",
    ],
    stats: { wins: "6", losses: "1", draws: "2" },
    quote:
      "If the academy had not paid for my fees, the chances were high that I would have been into drugs. VFBA gave me hope.",
  },
  {
    slug: "tobias-mupfuti",
    name: "Tobias Mupfuti",
    nickname: "The Founder",
    category: "Coach",
    weightClass: "Head Coach",
    image: "/images/rise-tobias-portrait.jpg",
    story:
      "Abandoned at eight, homeless on the streets of Victoria Falls. Boxing saved Tobias's life. He built VFBA from nothing — training under trees, then a rented classroom, and now one of the biggest gyms in the city. He is the heart and soul of every fighter who walks through the door.",
    achievements: [
      "Founder, Victoria Falls Boxing Academy",
      "Executive Producer — Rise Film",
      "Tribeca Film Festival 2025",
      "19+ International Awards",
    ],
    stats: { wins: "—", losses: "—", draws: "—" },
    quote:
      "We try by every means so that they do not have time to go to the streets. After training, they are tired; they do their homework and sleep.",
  },
];

export function getFighterBySlug(slug: string): Fighter | undefined {
  return fighters.find((f) => f.slug === slug);
}

export function getFightersByCategory(category: string): Fighter[] {
  return fighters.filter((f) => f.category === category);
}
