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
    slug: "prince-urengwa",
    name: "Prince Urengwa",
    nickname: "The Diamond",
    category: "Youth",
    weightClass: "Pinweight",
    image: "/images/vfba-portrait-1.jpg",
    story:
      "At six years old, Prince was found collecting plastic bottle tops at the Victoria Falls town dump — too poor to attend school, abandoned with only his grandmother to look after him. Tobius invited him on a morning run and changed the course of his life. By age 10, Prince became a winning Junior boxer and has since defeated every opponent in the country in his weight class.",
    achievements: [
      "Zimbabwe Pinweight Gold Medalist",
      "National Junior Champion — Undefeated in Division",
      "Youngest VFBA Fighter to Win National Title",
    ],
    stats: { wins: "24", losses: "0", draws: "0" },
    quote:
      "Before VFBA, I was at the dump collecting bottle tops. Now I collect gold medals.",
  },
  {
    slug: "personal-mpofu",
    name: "Personal Mpofu",
    nickname: "The Warrior",
    category: "Youth",
    weightClass: "Paperweight",
    image: "/images/vfba-portrait-2.jpg",
    story:
      "Personal came from a struggling family unable to provide for him. Inspired by Prince's transformation, he joined VFBA and found purpose through boxing. He has become one of the academy's most decorated young fighters, carrying the hopes of the entire community into the ring.",
    achievements: [
      "Zimbabwe Paperweight Gold Medalist",
      "National Youth Boxing Champion",
      "Five-Nation Championship Representative",
    ],
    stats: { wins: "18", losses: "2", draws: "1" },
    quote:
      "Boxing gave me a family when I had none. VFBA gave me a future when I had nothing.",
  },
  {
    slug: "lennox-chigango",
    name: "Lennox Chigango",
    nickname: "The Hurricane",
    category: "Youth",
    weightClass: "Lightweight",
    image: "/images/vfba-training-1.jpg",
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
    slug: "tobius-muposiwa",
    name: "Tobius Muposiwa",
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
