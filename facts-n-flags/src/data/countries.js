// Country config: one correct flag URL per country and a set of true facts.
const countries = [
  {
    name: 'Israel',
    code: 'il',
    flag: 'https://flagcdn.com/w320/il.png',
    facts: [
      'Je blijft drijven in het superzoute water van de Dode Zee.',
      'Hebreeuws werd nieuw leven ingeblazen en weer een dagelijkse taal.',
      'Tel Aviv zit vol startups en wordt “Startup City” genoemd.',
    ],
  },
  {
    name: 'Italy',
    code: 'it',
    flag: 'https://flagcdn.com/w320/it.png',
    facts: [
      'Nergens vind je meer UNESCO-werelderfgoed dan in Italië.',
      'Pizza Margherita gebruikt de kleuren van de Italiaanse vlag.',
      'Venetië is gebouwd op meer dan 100 eilandjes en heeft geen auto’s.',
    ],
  },
  {
    name: 'Thailand',
    code: 'th',
    flag: 'https://flagcdn.com/w320/th.png',
    facts: [
      'Geen enkel ander Zuidoost-Aziatisch land is ooit gekoloniseerd.',
      'Tijdens Songkran houden mensen enorme watergevechten op straat.',
      'Red Bull begon als een Thaise energiedrank: Krating Daeng.',
    ],
  },
  {
    name: 'Finland',
    code: 'fi',
    flag: 'https://flagcdn.com/w320/fi.png',
    facts: [
      'Er zijn meer sauna’s dan auto’s.',
      'In de zomer blijft in het noorden de zon na middernacht nog op.',
      'Finnen drinken het meeste koffie per persoon ter wereld.',
    ],
  },
  {
    name: 'Canada',
    code: 'ca',
    flag: 'https://flagcdn.com/w320/ca.png',
    facts: [
      'Canada heeft de langste kustlijn ter wereld.',
      'Ongeveer 70% van alle ahornsiroop komt uit Canada.',
      'Churchill wordt de “ijsberenkapital” van de wereld genoemd.',
    ],
  },
  {
    name: 'Suriname',
    code: 'sr',
    flag: 'https://flagcdn.com/w320/sr.png',
    facts: [
      'Meer dan 90% van Suriname is regenwoud.',
      'Nergens anders in Zuid-Amerika is Nederlands de voertaal.',
      'Paramaribo heeft een van de hoogste houten kathedralen van de Amerika’s.',
    ],
  },
  {
    name: 'Belgium',
    code: 'be',
    flag: 'https://flagcdn.com/w320/be.png',
    facts: [
      'De praline werd hier uitgevonden begin 1900.',
      'De Smurfen en Kuifje komen hier vandaan.',
      'Er bestaan honderden soorten frieten en sausjes.',
    ],
  },
  {
    name: 'Armenia',
    code: 'am',
    flag: 'https://flagcdn.com/w320/am.png',
    facts: [
      'Armenië was een van de eerste landen die christelijk werden, meer dan 1600 jaar geleden.',
      'De oudste bekende wijnmakerij ter wereld (6000 jaar oud) werd in Armenië gevonden.',
      'De mythische berg Ararat duikt in veel Armeense verhalen op.',
    ],
  },
  {
    name: 'Chile',
    code: 'cl',
    flag: 'https://flagcdn.com/w320/cl.png',
    facts: [
      'De Atacama-woestijn is zo droog dat NASA er Marsrovers test.',
      'De reusachtige beelden op Paaseiland horen bij Chili.',
      'Chili is meer dan 4000 km lang, langer dan de VS breed is.',
    ],
  },
  {
    name: 'Panama',
    code: 'pa',
    flag: 'https://flagcdn.com/w320/pa.png',
    facts: [
      'In Panama kun je dezelfde dag de zon zien opkomen bij de Stille Oceaan en ondergaan bij de Atlantische.',
      'Het Panamakanaal laat schepen in minder dan 10 uur van oceaan wisselen.',
      'Panama-Stad heeft een stuk regenwoud midden in de stad.',
    ],
  },
  {
    name: 'China',
    code: 'cn',
    flag: 'https://flagcdn.com/w320/cn.png',
    facts: [
      'Papier, drukkunst, buskruit en het kompas zijn uit China afkomstig.',
      'China heeft het grootste hogesnelheids-treinnetwerk ter wereld.',
      'Reuzenpanda’s leven in het wild alleen in China.',
    ],
  },
  {
    name: 'Colombia',
    code: 'co',
    flag: 'https://flagcdn.com/w320/co.png',
    facts: [
      'Er leven meer vogelsoorten dan in elk ander land.',
      'De rivier Caño Cristales heet de “rivier van vijf kleuren.”',
      'De meeste smaragden ter wereld komen uit Colombia.',
    ],
  },
  {
    name: 'Bahrain',
    code: 'bh',
    flag: 'https://flagcdn.com/w320/bh.png',
    facts: [
      'De “Tree of Life” groeit alleen in de woestijn zonder zichtbaar water.',
      'Hier werd de eerste Formule 1-nachtrace in het Midden-Oosten gereden.',
      'Vroeger was parel duiken een grote handel voordat er olie was.',
    ],
  },
  {
    name: 'Turkey',
    code: 'tr',
    flag: 'https://flagcdn.com/w320/tr.png',
    facts: [
      'Istanbul ligt tegelijk in Europa en Azië.',
      'Tulpen werden al gekweekt lang voor ze beroemd werden in Nederland.',
      'In Cappadocië zweven luchtballonnen over sprookjesachtige rotsen.',
    ],
  },
  {
    name: 'Nepal',
    code: 'np',
    flag: 'https://flagcdn.com/w320/np.png',
    facts: [
      'De nationale vlag is de enige ter wereld die niet rechthoekig is.',
      'De Mount Everest, hoogste punt op aarde, staat op de grens met Nepal.',
      'Acht van de veertien hoogste bergen staan in Nepal.',
    ],
  },
  {
    name: 'Norway',
    code: 'no',
    flag: 'https://flagcdn.com/w320/no.png',
    facts: [
      'In de zomer blijft de zon in het noorden de hele nacht boven de horizon.',
      'De fjorden zijn diepe zeearmen die door gletsjers zijn uitgesleten.',
      'De Nobelprijs voor de Vrede wordt elk jaar in Oslo uitgereikt.',
    ],
  },
  {
    name: 'Bangladesh',
    code: 'bd',
    flag: 'https://flagcdn.com/w320/bd.png',
    facts: [
      'De Sundarbans is het grootste mangrovebos ter wereld met Bengaalse tijgers.',
      'Fietsriksja’s zijn versierd met felgekleurde handgeschilderde kunst.',
      'Veel mensen spreken over zes seizoenen in plaats van vier.',
    ],
  },
  {
    name: 'Benin',
    code: 'bj',
    flag: 'https://flagcdn.com/w320/bj.png',
    facts: [
      'Het wordt de bakermat van Voodoo genoemd.',
      'Ganvie is een paaldorp op het water en heet de “Venetië van Afrika.”',
      'De vrouwelijke strijders van Dahomey inspireerden de Dora Milaje uit Black Panther.',
    ],
  },
  {
    name: 'Morocco',
    code: 'ma',
    flag: 'https://flagcdn.com/w320/ma.png',
    facts: [
      'De oude stad Chefchaouen is bijna helemaal blauw geverfd.',
      'Geiten klimmen echt in arganbomen om de vruchten te eten.',
      'Je kunt op een kameel de grote Sahara-duinen bij Merzouga in.',
    ],
  },
  {
    name: 'Bahamas',
    code: 'bs',
    flag: 'https://flagcdn.com/w320/bs.png',
    facts: [
      'Zwemvarkens op Big Major Cay zijn een beroemde attractie.',
      'Dean’s Blue Hole is meer dan 200 meter diep en bijna recht naar beneden.',
      'Piraten zoals Blackbeard verstopten zich vroeger tussen deze eilanden.',
    ],
  },
  {
    name: 'United States',
    code: 'us',
    flag: 'https://flagcdn.com/w320/us.png',
    facts: [
      'Alaska heeft meer kustlijn dan alle andere Amerikaanse staten samen.',
      'Yellowstone was het allereerste nationale park ter wereld.',
      'Route 66 is een beroemde roadtrip van bijna 4000 kilometer.',
    ],
  },
  {
    name: 'Botswana',
    code: 'bw',
    flag: 'https://flagcdn.com/w320/bw.png',
    facts: [
      'De Okavango-delta is een enorme binnenlandse oase vol dieren.',
      'Botswana heeft een van de grootste olifantenpopulaties van Afrika.',
      'De munt heet pula, wat “regen” betekent.',
    ],
  },
  {
    name: 'Greece',
    code: 'gr',
    flag: 'https://flagcdn.com/w320/gr.png',
    facts: [
      'De eerste Olympische Spelen werden in het oude Griekenland gehouden.',
      'De marathon komt van een legendarische loop van Marathon naar Athene.',
      'Griekenland heeft duizenden eilanden met witte en blauwe huizen.',
    ],
  },
  {
    name: 'Mauritius',
    code: 'mu',
    flag: 'https://flagcdn.com/w320/mu.png',
    facts: [
      'De uitgestorven dodo leefde alleen op dit eiland.',
      'De Seven Coloured Earths zijn zandduinen met regenboogkleuren.',
      'Mauritius heeft geen leger, alleen politie en speciale eenheden.',
    ],
  },
  {
    name: 'Madagascar',
    code: 'mg',
    flag: 'https://flagcdn.com/w320/mg.png',
    facts: [
      'Lemuren leven in het wild alleen op dit eiland.',
      'De Avenue of the Baobabs heeft reusachtige “op-de-kop”-bomen langs de weg.',
      'Ongeveer 90% van de dieren vind je nergens anders op aarde.',
    ],
  },
  {
    name: 'United Arab Emirates',
    code: 'ae',
    flag: 'https://flagcdn.com/w320/ae.png',
    facts: [
      'Dubai’s Burj Khalifa is the tallest building on Earth.',
      'You can ski indoors inside a shopping mall in Dubai.',
      'Police cars have included Lamborghinis and other supercars.',
    ],
  },
  {
    name: 'Netherlands',
    code: 'nl',
    flag: 'https://flagcdn.com/w320/nl.png',
    facts: [
      'Er zijn meer fietsen dan mensen.',
      'Ongeveer een kwart van het land ligt op of onder zeeniveau.',
      'In de lente kleuren de bollenvelden fel met tulpen.',
    ],
  },
  {
    name: 'Russia',
    code: 'ru',
    flag: 'https://flagcdn.com/w320/ru.png',
    facts: [
      'De Trans-Siberische spoorlijn is de langste treinroute ter wereld.',
      'Het Baikalmeer bevat meer zoet water dan elk ander meer.',
      'In het Hermitage-museum wonen katten als officiële muizenvangers.',
    ],
  },
  {
    name: 'Germany',
    code: 'de',
    flag: 'https://flagcdn.com/w320/de.png',
    facts: [
      'Op delen van de Autobahn geldt geen snelheidslimiet.',
      'Oktoberfest begon als een koninklijk trouwfeest in 1810.',
      'Gummibeertjes werden in de jaren 20 in Duitsland bedacht.',
    ],
  },
  {
    name: 'Switzerland',
    code: 'ch',
    flag: 'https://flagcdn.com/w320/ch.png',
    facts: [
      'Het Rode Kruis werd hier opgericht in 1863.',
      'Er zijn meer dan 7000 meren ondanks de kleine grootte.',
      'Zwitserse treinen staan bekend om hun stiptheid.',
    ],
  },
  {
    name: 'Czech Republic',
    code: 'cz',
    flag: 'https://flagcdn.com/w320/cz.png',
    facts: [
      'De astronomische klok van Praag uit 1410 tikt nog steeds.',
      'Hier wordt per persoon meer bier gedronken dan waar ook.',
      'In Praag staan kubistische gebouwen met scherpe hoeken.',
    ],
  },
  {
    name: 'Indonesia',
    code: 'id',
    flag: 'https://flagcdn.com/w320/id.png',
    facts: [
      'De republiek strekt zich uit over meer dan 17.000 eilanden.',
      'Komodovaranen, de grootste hagedissen, leven op sommige eilanden.',
      'Borobudur is de grootste boeddhistische tempel ter wereld.',
    ],
  },
  {
    name: 'Nigeria',
    code: 'ng',
    flag: 'https://flagcdn.com/w320/ng.png',
    facts: [
      'Nollywood maakt elk jaar duizenden films.',
      'Igbo-Ora heet de “tweelinghoofdstad” door de vele tweelingen.',
      'Nigeriaanse Afrobeats-artiesten scoren wereldwijd hits.',
    ],
  },
  {
    name: 'Japan',
    code: 'jp',
    flag: 'https://flagcdn.com/w320/jp.png',
    facts: [
      'Er is ongeveer één automaat per 30 mensen.',
      'Shinkansen-treinen zijn zo op tijd dat vertragingen in seconden tellen.',
      'KitKats bestaan hier in honderden smaken, van matcha tot wasabi.',
    ],
  },
  {
    name: 'France',
    code: 'fr',
    flag: 'https://flagcdn.com/w320/fr.png',
    facts: [
      'Het is het meest bezochte land ter wereld.',
      'De Eiffeltoren was bedoeld als tijdelijk bouwwerk in 1889.',
      'De eerste heteluchtballon met mensen steeg hier op in 1783.',
    ],
  },
  {
    name: 'Mali',
    code: 'ml',
    flag: 'https://flagcdn.com/w320/ml.png',
    facts: [
      'Timbuktu was ooit een legendarische stad van goud en boeken.',
      'De Grote Moskee van Djenné is het grootste lemen gebouw ter wereld.',
      'Duizenden oude handgeschreven boeken liggen opgeslagen in woestijnbibliotheken.',
    ],
  },
]

export default countries
