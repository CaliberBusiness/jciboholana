import { prefixImagePaths } from '@/lib/assetPath';

export const navigationLinks = [
  { label: 'Cover', href: '#home' },
  { label: 'Chapter', href: '#about' },
  { label: 'JCI', href: '#jci' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Voices', href: '#voices' },
  { label: 'Impact', href: '#programs' },
  { label: 'Network', href: '#partners' },
];

export const heroContent = prefixImagePaths({
  issue: 'Issue No. 12',
  date: 'March 2026',
  overline: 'ON THE GO magazine',
  title: 'PresTine',
  subtitle:
    "Issue No. 12 gathers the president's message, the 2026 board, chapter voices, and the featured project stories carried in the souvenir issue.",
  primaryAction: { label: 'Explore the chapter', href: '/about' },
  secondaryAction: { label: 'Meet the board', href: '/leadership' },
  coverImage: '/images/otg/cover/pres-tine-front-cover.jpg',
});

export const chapterIntro = prefixImagePaths({
  eyebrow: 'The Chapter',
  title: 'PRISTINE Leadership: Leading with Purpose and Integrity.',
  intro: [
    'JCI Boholana Kisses has always been a community of empowered women dedicated to leadership development, community service, and nation-building. Through the years, our organization has proven that when passionate leaders come together, remarkable things happen.',
    'As we begin a new chapter, PRISTINE calls us to elevate our commitment to serve with integrity, collaborate with purpose, and lead with authenticity. Under this call to action, we aim to strengthen our programs, empower our members, and deepen our impact in the communities we serve.',
  ],
  pullQuote:
    'Together, let us lead with clarity, serve with purpose, and create a future that is truly PRISTINE.',
  presidentNoteTitle: 'From the President',
  presidentNote:
    'Every project, every initiative, and every partnership will reflect the essence of PRISTINE leadership: intentional, meaningful, and sustainable.',
  presidentExcerpt:
    'PRISTINE is more than a theme; it is a mindset.',
  featureImage: '/images/otg/leadership/president-pristine.jpg',
});

export const values = [
  {
    title: 'JCI Mission',
    description:
      'To provide leadership development opportunities that empower young people to create positive change.',
  },
  {
    title: 'JCI Vision',
    description: 'To be the foremost global network of young leaders.',
  },
  {
    title: 'JCI Values',
    description:
      "We believe that faith in God gives meaning and purpose to human life; that the brotherhood of man transcends the sovereignty of nations; that economic justice can best be won by free men through free enterprise; that government should be of laws rather than of men; that earth's great treasure lies in human personality; and that service to humanity is the best work of life.",
  },
];

export const valuesPage = {
  eyebrow: 'JCI Values',
  title: 'JCI Values, Mission, and Vision.',
  intro:
    "The issue presents the official JCI values together with the organization's mission and vision.",
  beliefs: [
    'We believe that faith in God gives meaning and purpose to human life.',
    'That the brotherhood of man transcends the sovereignty of nations.',
    'That economic justice can best be won by free men through free enterprise.',
    'That government should be of laws rather than of men.',
    "That earth's great treasure lies in human personality.",
    'And that service to humanity is the best work of life.',
  ],
  mission:
    'To provide leadership development opportunities that empower young people to create positive change.',
  vision: 'To be the foremost global network of young leaders.',
};

export const jciOverview = {
  eyebrow: 'About JCI',
  title: 'About JCI',
  lead:
    'JCI Boholana Kisses is a dynamic local organization under Junior Chamber International (JCI), composed of empowered women and LGBTQ+ leaders who are committed to creating positive change in their communities. Guided by the values of leadership, service, and collaboration, the organization serves as an inclusive platform where women and LGBTQ+ individuals can develop their skills, expand their networks, and contribute meaningfully to society.',
  paragraphs: [
    'As a member-driven organization, JCI Boholana Kisses actively implements community development projects, leadership training, and social initiatives that aim to uplift individuals and inspire responsible citizenship. Through these programs, members are given opportunities to grow as leaders while addressing real needs within the community.',
    'Beyond service, the organization fosters strong camaraderie and sisterhood among its members. Each project and activity strengthens bonds while reinforcing the shared mission of empowering women to become catalysts of positive transformation.',
  ],
  visionLabel: 'Global Vision',
  vision:
    'Anchored in the global vision of Junior Chamber International, to be the leading global network of young active citizens, JCI Boholana Kisses continues to champion leadership, compassion, and sustainable impact, proving that empowered women working together can create meaningful and lasting change.',
  pillars: ['Leadership', 'Service', 'Collaboration', 'Sisterhood'],
};

export const legacyContent = {
  eyebrow: 'Past Presidents',
  title: 'The presidents recognized in the issue.',
  intro:
    'The OTG spread honors the chapter presidents who served from 2009-2010 through 2024-2025.',
};

export const pastPresidents = prefixImagePaths([
  {
    years: '2009-2010',
    name: 'Cecil Therese Atup',
    photo: '/images/otg/past-presidents/cecil-therese-atup.jpeg',
  },
  {
    years: '2011',
    name: 'Cheryl Tirol',
    photo: '/images/otg/past-presidents/cheryl-tirol.jpg',
  },
  {
    years: '2012',
    name: 'Arizza Nancy Jule Tirol',
    photo: '/images/otg/past-presidents/arizza-nancy-jule-tirol.jpg',
  },
  {
    years: '2013',
    name: 'Adam Tagactac',
    photo: '/images/otg/past-presidents/adam-tagactac.jpg',
  },
  {
    years: '2014',
    name: 'Ma. Alyssa Escabarte',
    photo: '/images/otg/past-presidents/ma-alyssa-escabarte.jpg',
  },
  {
    years: '2015',
    name: 'Ehra May Apale-Fernandez',
    photo: '/images/otg/past-presidents/ehra-may-apale-fernandez.jpeg',
  },
  {
    years: '2016',
    name: 'Virna Avergonzado',
    photo: '/images/otg/past-presidents/virna-avergonzado.jpeg',
  },
  {
    years: '2017',
    name: 'Ginelee Marie Lumayag-Tabat',
    photo: '/images/otg/past-presidents/ginelee-marie-lumayag-tabat.jpeg',
  },
  {
    years: '2018',
    name: 'Camille Maluenda-Tan',
    photo: '/images/otg/past-presidents/camille-maluenda-tan.jpg',
  },
  {
    years: '2019',
    name: 'Mae Angelyn Te-Lustre',
    photo: '/images/otg/past-presidents/mae-angelyn-te-lustre.jpg',
  },
  {
    years: '2020',
    name: 'Chrissa Beth Bantugan-Ranis',
    photo: '/images/otg/past-presidents/chrissa-beth-bantugan-ranis.jpeg',
  },
  {
    years: '2021',
    name: 'Kay Caesar Penales',
    photo: '/images/otg/past-presidents/kay-caesar-penales.jpg',
  },
  {
    years: '2022',
    name: 'Gayle Suzette Yu-Batausa',
    photo: '/images/otg/past-presidents/gayle-suzette-yu-batausa.jpeg',
  },
  {
    years: '2023',
    name: 'Deb Jomarleh Ucang',
    photo: '/images/otg/past-presidents/deb-jomarleh-ucang.jpg',
  },
  {
    years: '2024-2025',
    name: 'Zoila Jean Cenabre',
    photo: '/images/otg/past-presidents/zoila-jean-cenabre.jpg',
  },
]);

export const impactStats = [
  { value: 323, suffix: '+', label: 'Youth Served' },
  { value: 16, suffix: '', label: 'Years Since Charter' },
  { value: 16, suffix: '', label: 'Board Leaders' },
  { value: 7, suffix: '', label: 'Featured Projects' },
];

export const presidentFeature = prefixImagePaths({
  eyebrow: '2026 President',
  title: 'PRISTINE Leadership',
  subtitle: 'Leading with Purpose and Integrity',
  byline: 'By Ma. Christine O. Torralba',
  image: '/images/otg/leadership/president-pristine.jpg',
  pullQuote: 'PRISTINE is more than a theme; it is a mindset.',
  pillars: ['Pure in intention', 'Refined in action', 'Transformative in impact', 'Lead with authenticity'],
  paragraphs: [
    'Leadership is not merely about holding a title. It is about creating meaningful impact, inspiring others, and leaving every space better than we found it. As I humbly accept the responsibility of serving as the Incoming President of JCI Boholana Kisses, I am guided by a vision that reflects clarity, excellence, and purposeful service: PRISTINE.',
    'PRISTINE represents the standard of leadership and service we aspire to uphold: pure in intention, refined in action, and transformative in impact. In a world filled with challenges and opportunities, young leaders must remain grounded in values while courageously stepping forward to create change.',
    'JCI Boholana Kisses has always been a community of empowered women dedicated to leadership development, community service, and nation-building. Through the years, our organization has proven that when passionate leaders come together, remarkable things happen. As we begin a new chapter, PRISTINE calls us to elevate our commitment, to serve with integrity, collaborate with purpose, and lead with authenticity.',
    'Under this call to action, we aim to strengthen our programs, empower our members, and deepen our impact in the communities we serve. Every project, every initiative, and every partnership will reflect the essence of PRISTINE leadership: intentional, meaningful, and sustainable.',
    'But PRISTINE is more than a theme; it is the courage to pursue excellence, the discipline to stay true to our values, and the passion to uplift others along the way.',
    'To every member of JCI Boholana Kisses, I invite you to embrace this journey with me. Let us continue to build a chapter that inspires action, cultivates leadership, and transforms lives. Together, let us lead with clarity, serve with purpose, and create a future that is truly PRISTINE.',
  ],
});

export const leadershipContent = prefixImagePaths({
  eyebrow: 'Leadership',
  title: '2026 Board of Directors',
  intro:
    'The Board of Directors of JCI Boholana Kisses is composed of passionate and committed leaders who guide the organization in fulfilling its mission of creating positive change in the community.',
  groupPhoto: '/images/photos-grid.jpg',
  groupPhotoCaption:
    'The 2026 board directors image anchors the chapter roster and the year ahead.',
  boardOverviewTitle: 'About the BOD',
  boardOverview: [
    'As part of the global network of Junior Chamber International, the Board ensures that the organization remains aligned with the values of leadership development, community service, and active citizenship.',
    'Through strategic leadership, collaboration, and dedication, they help cultivate opportunities for members to develop their skills, expand their influence, and contribute meaningfully to society.',
    'More than administrators, the Board of Directors serves as mentors and role models, inspiring every member of JCI Boholana Kisses to embody the spirit of service, leadership, and sisterhood.',
    'Together, they lead the organization with purpose and vision, ensuring that every initiative reflects the commitment of JCI to empower young leaders and build a better future for all.',
  ],
  president: {
    name: 'Ma. Christine O. Torralba',
    role: 'President',
    image: '/images/otg/leadership/president-pristine.jpg',
    description:
      'Under this call to action, we aim to strengthen our programs, empower our members, and deepen our impact in the communities we serve.',
  },
});

export const boardMembers = prefixImagePaths([
  {
    name: 'Zoila Jean Cenabre',
    role: 'Immediate Past President',
    image: '/images/otg/leadership/zoila-jean-cenabre.jpg',
  },
  {
    name: 'Frank Lorenzo R. Pizarras',
    role: 'Legal Counsel',
    image: '/images/otg/leadership/frank-lorenzo-pizarras.jpg',
  },
  {
    name: 'Francis Diane F. Cimafranca',
    role: 'EVP, Internal Affairs',
    image: '/images/otg/leadership/francis-diane-cimafranca.jpg',
  },
  {
    name: 'Alennith Mae J. Fajardo',
    role: 'EVP, External Affairs',
    image: '/images/otg/leadership/alennith-mae-fajardo.jpg',
  },
  {
    name: 'John Sean Rupert G. Hene',
    role: 'LO Secretary General',
    image: '/images/otg/leadership/john-sean-rupert-hene.jpg',
  },
  {
    name: 'Jessa Marie B. Caberte',
    role: 'LO Treasurer',
    image: '/images/otg/leadership/jessa-marie-caberte.jpg',
  },
  {
    name: 'Joyce Trexie Marie B. Cabagnot',
    role: 'Local Skills Development Director',
    image: '/images/otg/leadership/joyce-trexie-cabagnot.jpg',
  },
  {
    name: 'Lovely Mariz B. Quirol',
    role: 'VP for Community Development',
    image: '/images/otg/leadership/lovely-mariz-quirol.jpg',
  },
  {
    name: 'Melody Joy G. Malinao',
    role: 'VP for Business Development',
    image: '/images/otg/leadership/melody-joy-malinao.jpg',
  },
  {
    name: 'Ma. Christie A. Acero',
    role: 'VP for Linkages',
    image: '/images/otg/leadership/ma-christie-acero.jpg',
  },
  {
    name: 'Samantha Mari A. Hibaya',
    role: 'VP for Membership Development',
    image: '/images/otg/leadership/samantha-mari-hibaya.jpg',
  },
  {
    name: 'Rochelle Marie L. Martin',
    role: 'Director for National Relations',
    image: '/images/otg/leadership/rochelle-marie-martin.jpeg',
  },
  {
    name: 'Teonikka Marie T. Gumila',
    role: 'Director for National Programs',
    image: '/images/otg/leadership/teonikka-marie-gumila.jpg',
  },
  {
    name: 'Ruby Jane L. Ebol',
    role: 'Director for Public Health',
    image: '/images/otg/leadership/ruby-jane-ebol.jpg',
  },
  {
    name: 'Christine Marie B. Lanada',
    role: 'Director for Internationalism',
    image: '/images/otg/leadership/christine-marie-lanada.jpg',
  },
]);

export const printOnlyMessages = [];

export const messages = prefixImagePaths([
  {
    category: 'National Message',
    author: 'Atty. Patrick D. Maglinao',
    role: '2026 National President, JCI Philippines',
    chapter: 'JCI Philippines',
    image: '/images/otg/messages/patrick-maglinao.jpg',
    excerpt:
      'Your installation is more than a ceremony. It is a promise to the people of Bohol and to the global JCI movement that the spirit of service is alive and thriving.',
    body: [
      'Today, you stand at the threshold of your one year to lead, carrying the torch of an organization known for its grace, resilience, and unwavering dedication to the community.',
      'As you navigate the challenges and triumphs of the coming year, remember that your greatest strength lies in your unity. You are a tapestry of diverse talents, and it is through your collaboration that the most impactful projects will come to life.',
      'Whether you are spearheading community development, fostering international relations, or providing business opportunities for your members, do so with the "Boholana" heart: strong, nurturing, and bold.',
    ],
  },
  {
    category: 'National Message',
    author: 'Joseph Ginno T. Jaralve',
    role: '2026 National Executive Vice President, JCI Philippines',
    chapter: 'JCI Philippines',
    image: '/images/otg/messages/joseph-ginno-jaralve.jpg',
    excerpt:
      'Nawa\'y patuloy kayo maging mga natatanging batang lider na may malinaw at busilak na pangarap para sa bawat Pilipino.',
    body: [
      'Sa okasyon ng ika-17 na Pagtatalaga at Pagsasalin ng Tungkulin ng Junior Chamber International – Boholana Kisses, ipinaabot ko ang mainit na pagbati sa kapwa Lupon ng mga Tagapangasiwa sa patapos na taong 2025 at papasok na taong 2026.',
      'Para sa walang sawang suporta ni Pangulong Zoila Jean Cenabre sa JCI Boholana Kisses, nais kong bigyang-kilala ang galing at sakripisyo mo sa taong 2025. Inaasahan ko ang patuloy pang suporta sa ating organisasyon sa higit pang mabigat na hamon sa taong 2027. Salamat kaayo, Pres. Z!',
      'Para sa papasok na pamunuan ni Pangulong Christine Torralba, sa iyong angking galing, na pinatibay ng iyong mahabang karanasan sa ating organisasyon, hangad ko ang higit pang talas ng isip, lakas ng pangangatawan, at sigasig ng pagpupunyagi. Galingan mo, Pres. Doc Tin!',
      'Para sa lahat ng kasapi ng JCI Boholana Kisses na may temang "Pristine 2026", nawa\'y patuloy kayo maging mga natatanging batang lider na may malinaw at busilak na pangarap para sa bawat Pilipino. Go, Grow, Glow, JCI Philippines!',
    ],
  },
  {
    category: 'National Message',
    author: 'Charinna G. Barro-Quilaneta',
    role: '2026 National Treasurer, JCI Philippines',
    chapter: 'JCI Philippines',
    image: '/images/otg/messages/charinna-barro-quilaneta.jpeg',
    excerpt:
      'As we celebrate Women\'s Month, we honor the strength, resilience, and invaluable contributions of women who continue to shape our communities and inspire progress.',
    body: [
      'In the same spirit, I extend my heartfelt congratulations to JCI Boholana Kisses on the celebration of your 17th Induction and Turnover Ceremonies, a milestone that reflects years of empowered leadership, purposeful service, and a shared commitment to creating positive change.',
      'My sincere commendations to the 2025 President, Zoila Jean D. Cenabre, for a remarkable year of leadership under the banner Gen Z: Inheritors of the Future, together with her 2025 Board of Directors. Thank you for rising to the challenge to Build Better in 2025.',
      'I extend my warmest wishes to the incoming 2026 President, Ma. Christine O. Torralba, as she leads with PrisTine Intentions alongside her 2026 Board of Directors. I look forward to seeing how your leadership will inspire the chapter to grow and continue making a difference in the communities you serve.',
      'Congratulations once again to JCI Boholana Kisses. I look forward to a year of collaboration and shared impact as we continue to Charge Forward to Sustain the Future.',
    ],
  },
  {
    category: 'National Message',
    author: 'Atty. Lian E. Rimando',
    role: '2026 National Secretary General, JCI Philippines',
    chapter: 'JCI Philippines',
    image: '/images/otg/messages/lian-rimando.jpg',
    excerpt:
      'Guided by this year\'s inspiring theme, "Pristine 2026," may your organization continue to exemplify leadership grounded in integrity, clarity of vision, and intention in every endeavor.',
    body: [
      'This meaningful occasion marks not only a transition of leadership, but a reaffirmation of your chapter\'s enduring commitment to service, growth, and positive community impact. Seventeen years is a remarkable milestone.',
      'True leadership is not defined by title, but by the purpose behind each action and the difference created through service. May JCI Boholana Kisses continue to develop leaders, strengthen camaraderie, and pursue initiatives that uplift communities and create sustainable change.',
      'To 2026 President Ma. Christine O. Torralba, may your year be guided by wisdom, strength of character, and the courage to inspire purposeful and lasting impact.',
    ],
  },
  {
    category: 'Regional Message',
    author: 'Paul Timothy R. Yap',
    role: '2026 Regional Vice President, Central Visayas',
    chapter: 'JCI Philippines',
    image: '/images/otg/messages/paul-timothy-yap.jpg',
    excerpt:
      'May this year cultivate unity, empower emerging leaders, and turn the chapter\'s vision into projects that create lasting positive change.',
    body: [
      'Warmest congratulations to President Ma. Christine Torralba and the 2026 Board of Directors, together with the Senators, Past Presidents, Associates, and Members of JCI Boholana Kisses, at your 17th Induction and Turnover Ceremony on March 21, 2026, at Reyna\'s The Haven and Gardens.',
      'May your vision ignite passion and purpose in every member. May your leadership cultivate unity, empower emerging leaders, and spark innovative initiatives that uplift your community.',
      'May this year be marked by strengthened partnerships, impactful projects, and a renewed commitment to excellence, service, and lasting positive change.',
    ],
  },
  {
    category: 'Area Message',
    author: 'Vincent Von A. Nogra',
    role: '2026 Area Vice President, Area 4',
    chapter: 'JCI Area 4',
    image: '/images/otg/messages/vincent-von-nogra.jpg',
    excerpt:
      'Now is the time to embrace the spirit of Pristine and lead with a clarity of vision that is unblemished and a dedication that is pure in its intent.',
    body: [
      'The 2025 Board of Directors has set a standard of grace and resilience that resonates throughout the community. Their work fortified the foundations of the chapter and left an indelible mark on the lives they touched.',
      'Let the "Pristine" approach be the lens through which every project and partnership is viewed, ensuring that your efforts are as impactful as they are genuine.',
      'In alignment with brothers and sisters across the region, the call is to Innovate 4 Impact and let every innovation create a ripple effect of positive transformation that defines 2026.',
    ],
  },
  {
    category: 'Father Chapter',
    author: 'Audie Vinci Batausa',
    role: 'JCI Bohol Sandugo',
    chapter: 'Father Chapter',
    image: '/images/otg/messages/audie-vinci-batausa.jpg',
    excerpt:
      'Seeing our daughter chapter flourish is a testament to the strength of our shared values, and your growth continues to inspire us to lead with heart and excellence.',
    body: [
      'JCI Bohol Sandugo commends 2025 Interim President Zoila Jean Cenabre for dedicated stewardship and congratulates President Christine Torralba, the 2026 Board of Directors, and the general membership on the induction and turnover ceremonies.',
      'As Pres. Tine leads toward a vision that is truly "PresTine," the father chapter says its brothers are cheering the chapter on and are eager to see the clarity of vision and polished excellence it will bring to the community.',
      'In the same spirit of service, JCI Bohol Sandugo says it is committed to going "Above and Beyond" this year, bridging efforts to create even more significant ripples of positive change together.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Allen Jeil Gerona',
    role: 'JCI Angeles City Culiat',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/allen-jeil-gerona.jpg',
    excerpt:
      'JCI Angeles City Culiat is one with you in all of your endeavors this year and for the years to come.',
    body: [
      'This year marks a new milestone as the chapter renews its commitment to bring positive change to the community and to its stakeholders.',
      'Allen Jeil Gerona says the relationship between the two chapters has grown since 2024 and is now in a position to maximize the impact that sisterhood brings to people.',
      'JCI Angeles City Culiat pledges support for all of JCI Boholana Kisses\' endeavors this 2026 and looks forward to strengthening the bond further at the Clark World Congress.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Julice Panoy',
    role: 'JCI Metro Cebu Uptown',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/julice-panoy.jpg',
    excerpt:
      'Leadership is not just about titles. It is about inspiring others, building meaningful partnerships, and leaving a legacy that empowers the next generation of Jaycees.',
    body: [
      'Today marks not just a transition of leadership, but a renewed commitment to service, growth, and impactful community action.',
      'To President Christine, may your presidency be filled with purpose, wisdom, and the strength to lead with both heart and excellence.',
      'As a sister chapter, JCI Metro Cebu Uptown says it stands beside Boholana Kisses in solidarity and support for a 17th year of breakthrough milestones, stronger camaraderie, and greater impact.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Jair E. Balberan',
    role: '2026 Local Organization President, JCI Surigao Nickel',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/surigao-nickel.jpg',
    excerpt:
      'Your success is not only a victory for your chapter, but also a proud moment for all of us who have witnessed your growth, your sacrifices, and the quiet strength that brought you to this remarkable milestone.',
    body: [
      'Today is more than the assumption of a position. It is the continuation of a story already being written through passion, humility, and unwavering dedication to serve.',
      'As sister chapters, the bond between Kisses and Nickel is rooted in friendship, trust, and genuine support. Leadership will bring challenges and long nights, but it will also bring beautiful victories, lives touched, and memories that stay forever.',
      'Jair E. Balberan points back to the chapter call to action, "PRISTINE: Purity in Purpose, Excellence in Action," and hopes it guides the term with integrity, compassion, and excellence in every endeavor.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Daryl Nino T. Jabil',
    role: 'JCI Cebu',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/daryl-jabil.jpeg',
    excerpt:
      'Under the banner of PresTine, may your year be defined by clarity, excellence, and meaningful impact.',
    body: [
      'As one of the pioneering all-inclusive sisterhoods in beautiful Bohol, JCI Boholana Kisses continues to embody courageous, purpose-driven leadership.',
      'Under the banner of "PrisTine," JCI Cebu says the year should be defined by clarity, excellence, and meaningful impact as its brothers stand proudly with the chapter.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Marc Leo Emmanuel M. Esponilla',
    role: '2026 LO President, JCI Davao',
    chapter: 'Sister Chapter',
    image: null,
    excerpt:
      'May your vision keep shaping leaders and building better communities as you carry the chapter into another year of service.',
    body: [
      'On behalf of JCI Davao, Marc Leo Emmanuel M. Esponilla extends heartfelt congratulations to the chapter on its 17th Induction and Turnover Ceremonies and wishes President Christine Torralba and the 2026 Board a successful year as they embrace their One Year to Lead.',
      'He also congratulates Pres. Zoila Jean Cenabre on a wonderful year of milestones and says JCI Davao looks forward to the incredible future the two chapters will shape together.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Jerico "Jek" Tadoy',
    role: '2026 LO President, JCI Makati',
    chapter: 'Sister Chapter',
    image: null,
    excerpt:
      'As Boholana Kisses calls for PresTine 2026, JCI Makati stands ready to strengthen partnership and help turn shared opportunities into sustainable impact.',
    body: [
      'For almost two decades, JCI Makati notes that the local organization has delivered positive change to communities in Bohol and beyond.',
      'The letter says the shared passion for the JCI movement has produced leaders and projects that have been a combined force for nation building.',
      'As Boholana Kisses calls for "PrisTine 2026," JCI Makati says it will continue to partner with the chapter and is ready to "Make It Happen."',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Jess Anthony Dela Cruz',
    role: '2026 Local President, JCI Mandaue',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/jess-anthony-dela-cruz.png',
    excerpt:
      'One year moves quickly, so lead decisively, serve purposefully, and finish proudly with a board built on clarity, discipline, and heart.',
    body: [
      'This milestone is more than a formal transition of leadership. It is a renewed commitment to service, impact, and excellence in the JCI movement.',
      'Leadership in JCI is not measured by the length of time, but by the depth of influence. Maximize every month, every project, and every conversation.',
      'JCI Mandaue reaffirms its commitment to a strong and meaningful collaboration between the two chapters.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Kristoffer Von Pierre Peralta',
    role: 'JCI Cebu-Mactan Channel',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/kristoffer-peralta.jpg',
    excerpt:
      'You do not have to carry everything alone. You have a whole circle of fellow presidents and friends cheering you on.',
    body: [
      'I know we have a big year ahead of us, but I also know it will be filled with meaningful moments, laughter, and impactful milestones.',
      'Always remember that you do not have to carry everything alone. You have a whole circle of fellow presidents and friends cheering you on.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Jessa E. Estrellado',
    role: 'JCI San Pablo 7 Lakes',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/jessa-estrellado.jpg',
    excerpt:
      'Your leadership, passion, and dedication to empowering women and creating positive change set the tone for a meaningful and impactful year ahead.',
    body: [
      'To the 2026 Board of Directors, may you lead with unity, vision, and excellence as you work hand in hand to elevate your chapter to greater heights.',
      'She also thanks the 2025 Board of Directors for laying a strong foundation for continued growth and success and calls for a seamless transition and stronger collaboration.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Jemima Plaza',
    role: 'JCI Surigao North',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/jemima-plaza.jpg',
    excerpt:
      'Please do not give up, no matter how heavy it gets. In every step of the journey, your batch and your roomies will be here.',
    body: [
      'From sharing notes and chika to sharing leadership battles, I have seen the real you behind the title: the tired days, the overthinking, and the silent pressure, but you still rise and lead with heart.',
      'If it gets too heavy, the message says, do not give up and remember that your batch and roomies will always be there through the highs, the lows, the wins, and the breakdowns.',
    ],
  },
  {
    category: 'Sister Chapter',
    author: 'Benjamin Co',
    role: 'JCI Bataan',
    chapter: 'Sister Chapter',
    image: '/images/otg/messages/benjamin-co.jpeg',
    excerpt:
      'It has been an honor being one of your groupmates at Pres Acads and it was fun working with you!',
    body: [
      'Hi Batch!!! It has been an honor being one of your groupmates at Pres Acads and it was fun working with you!',
      'Congratulations on your One Year to Lead and I look forward to our continued partnership!',
    ],
  },
]);

export const projects = prefixImagePaths([
  {
    slug: 'bags-to-school',
    category: 'Education',
    title: 'Bags to School',
    image: '/images/otg/projects/bags-to-school.jpg',
    summary:
      'Implemented in June and July 2025, the national program equipped young learners in Inabanga and Calape with school bags, supplies, slippers, and feeding support.',
    body: [
      'Wave 1 was conducted in Inabanga, benefiting 116 students who received school bags filled with school supplies and slippers alongside a feeding activity.',
      'Wave 2 followed in Calape, where 77 students received school bags, school supplies, and slippers, with another feeding program that made the day fun and meaningful.',
      'The OTG write-up frames the project as a way of helping young learners start the school year with confidence, enthusiasm, and hope.',
    ],
    highlights: ['116 students in Inabanga', '77 students in Calape', 'Supplies, slippers, and feeding activities'],
  },
  {
    slug: 'brgy-community-relations',
    category: 'Community Relations',
    title: 'BRGY',
    image: '/images/otg/projects/brgy-antequera.jpg',
    summary:
      'The fourth year of BRGY brought the chapter and AFP partners to the outskirts of Antequera to serve children and strengthen trust between youth and government.',
    body: [
      'Held in partnership with the Armed Forces of the Philippines - Riverine Company Special Forces, the outreach reached communities affected by armed conflict and extended genuine care and support.',
      'The project served 130 children with school supplies, slippers, and small gifts, then rounded out the day with games, magic shows, and fun activities led by JCI Boholana Kisses and uniformed partners.',
      'More than material assistance, the page frames BRGY as a way to help children see men in uniform not as figures to fear, but as symbols of peace, protection, and relief.',
    ],
    highlights: ['130 children served', 'AFP Riverine Company partnership', 'Games, gifts, and school essentials'],
  },
  {
    slug: 'maayung-panglawas',
    category: 'Public Health',
    title: 'Maayung Panglawas',
    image: '/images/otg/projects/maayung-panglawas.png',
    summary:
      'Throughout 2025, MaaYUng Panglawas delivered medical missions and community health services to underserved communities across Bohol.',
    body: [
      'The first two missions were held in Barangay La Union, Candijay on February 15, 2025 and in Barangay Sta. Cruz, Calape on March 23, 2025, offering consultations, prescribed medicines, dental care, ECG testing, blood screenings, eye checks, hygiene support, legal consultations, and feeding activities.',
      'The largest outreach followed on August 25, 2025 in Pangangan Island, Calape, where the program served more than 500 beneficiaries from eight barangays.',
      'That large-scale mission was made possible through Appalachian Angels 304 volunteers from West Virginia, USA, alongside the Local Government of Calape, JCI Metro Cebu Uptown, the AFP 21st Special Forces Riverine Company, and other partners.',
    ],
    highlights: ['500+ beneficiaries in Pangangan Island', 'Candijay and Calape medical missions', 'Appalachian Angels 304 partnership'],
  },
  {
    slug: 'jci-week-2025',
    category: 'National Hosting',
    title: 'JCI Week 2025',
    image: null,
    placeholderLabel: 'Bohol takes the national stage',
    summary:
      'The "Land of the Chocolate Hills" took center stage in April 2025 as JCI Boholana Kisses hosted the National Launching of JCI Week for the first time in the chapter\'s history under the banner "Bohol Nasad Ta Bai!"',
    body: [
      'The milestone was made possible through the collaboration of JCI Boholana Kisses, JCI Bohol Sandugo, JCI Bohol Limestone, and JCI Chocolate Hills, with Sean Hene serving as National Launching Project Chairperson and helping coordinate between the national leadership and the local organizing teams.',
      'The day began with a 7:30 AM Holy Mass at St. Joseph Cathedral, followed by a 9:00 AM motorcade along J.A. Clarin Street to Tagbilaran City Hall. The 10:00 AM official program carried the National Anthem, the JCI Creed, welcoming remarks from Mayor Jane C. Yap, a ceremonial ribbon cutting, and a nationwide livestream on the official JCI Philippines Facebook page.',
      'National President Thirdie Chua delivered the message, followed by a Couch Talk on Autism Awareness for World Autism Month, the ONCD segment, and Regional Vice President Deb Jomarleh Ucang\'s closing message. The morning concluded with fellowship and lunch at Dao Diamond Hotel and Restaurant, showing how local chapters can work together to deliver an initiative with national reach.',
    ],
    highlights: ['First national JCI Week launch hosted by the chapter', 'Four Bohol JCI chapters mounted the kickoff', 'City Hall program, livestream, and Dao Diamond fellowship'],
  },
  {
    slug: 'shoebox-of-love',
    category: 'Compassion',
    title: 'Shoebox of Love',
    image: '/images/otg/projects/shoebox-of-love.jpg',
    summary:
      'On December 21, 2025, the chapter carried out its annual Christmas gift-giving outreach for 24 female persons deprived of liberty at the Bohol District Jail - Female Dormitory.',
    body: [
      'Each shoebox was thoughtfully prepared with basic necessities and hygiene items meant to bring comfort and smiles during the holiday season.',
      'More than the gifts, the chapter spent time offering heartfelt messages of hope, encouragement, and inspiration to remind each beneficiary that better days are still possible.',
      'The page closes by framing Shoebox of Love as an outreach about restoring hope, nurturing forgiveness, and reminding people they are still worthy of compassion and a second chance.',
    ],
    highlights: ['24 female PDL beneficiaries', 'Basic necessities and hygiene items', 'Messages of hope and encouragement'],
  },
  {
    slug: 'tabula-rasa',
    category: 'Education and Literacy',
    title: 'Tabula Rasa',
    image: '/images/otg/projects/tabula-rasa.png',
    placeholderLabel: 'From empty slate to literate',
    summary:
      'Project Tabula Rasa is the chapter\'s education initiative for inclusive and accessible education through the creation of libraries in rural communities in Bohol.',
    body: [
      'The title comes from the Latin phrase for "empty slate" and the program carries the tagline "From Empty Slate to Literate" as it pushes toward SDG Target 4.6 on literacy and numeracy.',
      'The project responds to education gaps sharpened by the COVID-19 pandemic and the aftermath of Typhoon Odette by turning empty classrooms into dedicated library spaces for students who lack books, gadgets, and internet connectivity.',
      'Fatima Elementary School in Cortes, Bohol became the first beneficiary through support from nine sister JCI chapters, four private businesses, and the Philippine National Police - Special Action Force 62 SAC Gunther.',
    ],
    highlights: ['Fatima Elementary School in Cortes', 'Library built with 9 sister chapters', 'Supports SDG 4.6 literacy goals'],
  },
  {
    slug: 'museeyou',
    category: 'Culture and Learning',
    title: 'MuseeYou',
    image: '/images/otg/projects/museeyou.jpg',
    summary:
      'On February 20, 2025, Delapaz Elementary School in Cortes, Bohol was transformed into a mobile museum experience through JCI Boholana Kisses and the National Museum of the Philippines-Bohol.',
    body: [
      'Recognizing that distance and limited resources prevent many students from visiting a museum, the team brought the museum directly into the classroom.',
      'Book reading, puzzle building, coloring, sketching, and storytelling let students engage Philippine heritage through active participation, creativity, and teamwork.',
      'The write-up frames MuseeYou as a step toward inclusive education, proving that meaningful cultural learning can happen inside underserved classrooms as much as inside formal institutions.',
    ],
    highlights: ['February 20, 2025 in Cortes, Bohol', 'National Museum of the Philippines-Bohol partnership', 'Book reading, puzzles, coloring, and sketching'],
  },
]);

export const networkContent = {
  eyebrow: 'Partners and Network',
  title: 'Chapter relationships represented in the issue.',
  intro:
    'The issue pages collect messages from the father chapter, sister chapters, and peer chapters across Bohol, Cebu, Davao, Makati, Mandaue, San Pablo, and Surigao.',
};

export const networkHighlights = [
  {
    title: 'Father chapter support',
    description:
      'JCI Bohol Sandugo appears as the father chapter and sends its own message of support to the 2026 board.',
  },
  {
    title: 'Pages 13 to 15 voices',
    description:
      'The sister chapter pages carry messages from Angeles City Culiat, Metro Cebu Uptown, Surigao Nickel, Cebu, Davao, Makati, Mandaue, Cebu-Mactan Channel, San Pablo 7 Lakes, and Surigao North.',
  },
  {
    title: 'Wider JCI links',
    description:
      'Together, these messages show how the chapter stays connected to the wider JCI movement beyond Bohol.',
  },
];

export const partnerChapters = [
  'JCI Bohol Sandugo',
  'JCI Angeles City Culiat',
  'JCI Metro Cebu Uptown',
  'JCI Surigao Nickel',
  'JCI Cebu',
  'JCI Davao',
  'JCI Makati',
  'JCI Mandaue',
  'JCI Cebu-Mactan Channel',
  'JCI San Pablo 7 Lakes',
  'JCI Surigao North',
  'JCI Bataan',
];

