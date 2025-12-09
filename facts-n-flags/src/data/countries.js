// Country config: one correct flag URL per country and a set of true facts.
const countries = [
  {
    name: 'Israel',
    code: 'il',
    flag: 'https://flagcdn.com/w320/il.png',
    facts: [
      'Jerusalem is designated as its capital by the state.',
      'The flag features a blue Star of David between two blue stripes.',
      'The Dead Sea, shared with neighbors, is the lowest land elevation on Earth.',
    ],
  },
  {
    name: 'Italy',
    code: 'it',
    flag: 'https://flagcdn.com/w320/it.png',
    facts: [
      'Rome is the capital city.',
      'It has two independent enclaves inside its borders: Vatican City and San Marino.',
      'The Alps form much of its northern border.',
    ],
  },
  {
    name: 'Thailand',
    code: 'th',
    flag: 'https://flagcdn.com/w320/th.png',
    facts: [
      'Bangkok is the capital city.',
      'The country was historically known as Siam.',
      'The national flag features five horizontal stripes in red, white, and blue.',
    ],
  },
  {
    name: 'Finland',
    code: 'fi',
    flag: 'https://flagcdn.com/w320/fi.png',
    facts: [
      'Helsinki is the capital city.',
      'It has thousands of lakes, earning the nickname “Land of a Thousand Lakes.”',
      'The flag features a blue Nordic cross on a white field.',
    ],
  },
  {
    name: 'Canada',
    code: 'ca',
    flag: 'https://flagcdn.com/w320/ca.png',
    facts: [
      'The national flag features a red maple leaf.',
      'The capital city is Ottawa.',
      'It borders the Atlantic, Pacific, and Arctic Oceans.',
    ],
  },
  {
    name: 'Suriname',
    code: 'sr',
    flag: 'https://flagcdn.com/w320/sr.png',
    facts: [
      'Paramaribo is the capital city.',
      'It is the smallest country in South America by area.',
      'Dutch is the official language.',
    ],
  },
  {
    name: 'Belgium',
    code: 'be',
    flag: 'https://flagcdn.com/w320/be.png',
    facts: [
      'Brussels is both the capital city and host to EU institutions.',
      'Dutch, French, and German are official languages.',
      'The flag uses vertical black, yellow, and red stripes.',
    ],
  },
  {
    name: 'Armenia',
    code: 'am',
    flag: 'https://flagcdn.com/w320/am.png',
    facts: [
      'Yerevan is the capital city.',
      'It is home to Mount Ararat in its national symbolism.',
      'The flag features horizontal red, blue, and orange stripes.',
    ],
  },
  {
    name: 'Chile',
    code: 'cl',
    flag: 'https://flagcdn.com/w320/cl.png',
    facts: [
      'Santiago is the capital city.',
      'The Atacama Desert in the north is one of the driest places on Earth.',
      'The flag has a white star on a blue square with red and white bands.',
    ],
  },
  {
    name: 'Panama',
    code: 'pa',
    flag: 'https://flagcdn.com/w320/pa.png',
    facts: [
      'Panama City is the capital.',
      'The Panama Canal connects the Atlantic and Pacific Oceans.',
      'The flag has four quarters with two stars, one blue and one red.',
    ],
  },
  {
    name: 'China',
    code: 'cn',
    flag: 'https://flagcdn.com/w320/cn.png',
    facts: [
      'Beijing is the capital city.',
      'The Great Wall stretches across northern China.',
      'The flag features one large star and four small stars on a red field.',
    ],
  },
  {
    name: 'Colombia',
    code: 'co',
    flag: 'https://flagcdn.com/w320/co.png',
    facts: [
      'Bogotá is the capital city.',
      'It has coasts on both the Pacific Ocean and Caribbean Sea.',
      'The flag uses horizontal yellow, blue, and red stripes.',
    ],
  },
  {
    name: 'Bahrain',
    code: 'bh',
    flag: 'https://flagcdn.com/w320/bh.png',
    facts: [
      'Manama is the capital city.',
      'The flag has a serrated white band next to a red field.',
      'It is an island nation in the Persian Gulf.',
    ],
  },
  {
    name: 'Turkey',
    code: 'tr',
    flag: 'https://flagcdn.com/w320/tr.png',
    facts: [
      'Ankara is the capital city.',
      'Istanbul spans both Europe and Asia.',
      'The flag features a white star and crescent on a red background.',
    ],
  },
  {
    name: 'Nepal',
    code: 'np',
    flag: 'https://flagcdn.com/w320/np.png',
    facts: [
      'Kathmandu is the capital city.',
      'Mount Everest lies on its border with China.',
      'The national flag has a unique non-rectangular double-pennon shape.',
    ],
  },
  {
    name: 'Norway',
    code: 'no',
    flag: 'https://flagcdn.com/w320/no.png',
    facts: [
      'Oslo is the capital city.',
      'It is famous for deep fjords carved by glaciers.',
      'The flag features a blue cross outlined in white on a red field.',
    ],
  },
  {
    name: 'Bangladesh',
    code: 'bd',
    flag: 'https://flagcdn.com/w320/bd.png',
    facts: [
      'Dhaka is the capital city.',
      'The flag shows a red circle on a green field.',
      'The Sundarbans mangrove forest is shared with India.',
    ],
  },
  {
    name: 'Benin',
    code: 'bj',
    flag: 'https://flagcdn.com/w320/bj.png',
    facts: [
      'Porto-Novo is the official capital; Cotonou hosts government offices.',
      'The flag uses green, yellow, and red Pan-African colors.',
      'It borders Nigeria to the east and Togo to the west.',
    ],
  },
  {
    name: 'Morocco',
    code: 'ma',
    flag: 'https://flagcdn.com/w320/ma.png',
    facts: [
      'Rabat is the capital city.',
      'The flag features a green five-pointed star on red.',
      'The Atlas Mountains run through the country.',
    ],
  },
  {
    name: 'Bahamas',
    code: 'bs',
    flag: 'https://flagcdn.com/w320/bs.png',
    facts: [
      'Nassau is the capital city.',
      'The flag includes a black triangle and aquamarine and gold bands.',
      'It is an Atlantic archipelago of hundreds of islands and cays.',
    ],
  },
  {
    name: 'United States',
    code: 'us',
    flag: 'https://flagcdn.com/w320/us.png',
    facts: [
      'Washington, D.C., is the capital city.',
      'The flag has 50 stars representing the states.',
      'It spans from the Atlantic to the Pacific Ocean.',
    ],
  },
  {
    name: 'Botswana',
    code: 'bw',
    flag: 'https://flagcdn.com/w320/bw.png',
    facts: [
      'Gaborone is the capital city.',
      'The flag features light blue with a black and white horizontal stripe.',
      'The Okavango Delta is a major inland delta in the north.',
    ],
  },
  {
    name: 'Greece',
    code: 'gr',
    flag: 'https://flagcdn.com/w320/gr.png',
    facts: [
      'Athens is the capital city.',
      'The flag features blue and white stripes with a white cross on blue.',
      'It has thousands of islands in the Aegean and Ionian Seas.',
    ],
  },
  {
    name: 'Mauritius',
    code: 'mu',
    flag: 'https://flagcdn.com/w320/mu.png',
    facts: [
      'Port Louis is the capital city.',
      'The flag has four horizontal stripes: red, blue, yellow, and green.',
      'It is an island nation in the Indian Ocean east of Madagascar.',
    ],
  },
  {
    name: 'Madagascar',
    code: 'mg',
    flag: 'https://flagcdn.com/w320/mg.png',
    facts: [
      'Antananarivo is the capital city.',
      'It is the fourth-largest island in the world.',
      'The flag combines white, red, and green blocks.',
    ],
  },
  {
    name: 'United Arab Emirates',
    code: 'ae',
    flag: 'https://flagcdn.com/w320/ae.png',
    facts: [
      'Abu Dhabi is the capital city.',
      'The federation consists of seven emirates.',
      'The flag uses the Pan-Arab colors: red, green, white, and black.',
    ],
  },
  {
    name: 'Netherlands',
    code: 'nl',
    flag: 'https://flagcdn.com/w320/nl.png',
    facts: [
      'Amsterdam is the capital; The Hague hosts government offices.',
      'The flag uses horizontal red, white, and blue stripes.',
      'Much of the country lies at or below sea level with extensive dikes.',
    ],
  },
  {
    name: 'Russia',
    code: 'ru',
    flag: 'https://flagcdn.com/w320/ru.png',
    facts: [
      'Moscow is the capital city.',
      'It spans Eastern Europe and Northern Asia.',
      'The flag features white, blue, and red horizontal stripes.',
    ],
  },
  {
    name: 'Germany',
    code: 'de',
    flag: 'https://flagcdn.com/w320/de.png',
    facts: [
      'Berlin is the capital city.',
      'The flag uses black, red, and gold horizontal stripes.',
      'It is a member of the European Union and Schengen Area.',
    ],
  },
  {
    name: 'Switzerland',
    code: 'ch',
    flag: 'https://flagcdn.com/w320/ch.png',
    facts: [
      'Bern is the federal city (de facto capital).',
      'The flag is square with a white cross on red.',
      'It is known for its Alps and many lakes.',
    ],
  },
  {
    name: 'Czech Republic',
    code: 'cz',
    flag: 'https://flagcdn.com/w320/cz.png',
    facts: [
      'Prague is the capital city.',
      'The flag has white and red horizontal bands with a blue triangle at the hoist.',
      'It is a landlocked country in Central Europe.',
    ],
  },
  {
    name: 'Indonesia',
    code: 'id',
    flag: 'https://flagcdn.com/w320/id.png',
    facts: [
      'Jakarta is the capital city.',
      'It is the world’s largest archipelagic country.',
      'The flag has two horizontal bands: red over white.',
    ],
  },
  {
    name: 'Nigeria',
    code: 'ng',
    flag: 'https://flagcdn.com/w320/ng.png',
    facts: [
      'Abuja is the capital city.',
      'Lagos is its largest city and major economic hub.',
      'The flag features green-white-green vertical stripes.',
    ],
  },
  {
    name: 'Japan',
    code: 'jp',
    flag: 'https://flagcdn.com/w320/jp.png',
    facts: [
      'Tokyo is the capital city.',
      'Mount Fuji is the highest peak in the country.',
      'The flag shows a red circle on a white background.',
    ],
  },
  {
    name: 'France',
    code: 'fr',
    flag: 'https://flagcdn.com/w320/fr.png',
    facts: [
      'Paris is the capital city.',
      'The flag uses vertical blue, white, and red stripes.',
      'It has coastlines on the Atlantic, the Mediterranean, and the English Channel.',
    ],
  },
  {
    name: 'Mali',
    code: 'ml',
    flag: 'https://flagcdn.com/w320/ml.png',
    facts: [
      'Bamako is the capital city.',
      'The flag uses vertical green, yellow, and red stripes.',
      'The Niger River flows through the country.',
    ],
  },
]

export default countries
