// Country config: one correct flag URL per country and a set of true facts.
const countries = [
  {
    name: 'Israël',
    code: 'il',
    flag: 'https://flagcdn.com/w320/il.png',
    facts: [
      'Je blijft drijven in het superzoute water van de Dode Zee.',
      'Hebreeuws werd nieuw leven ingeblazen en weer een dagelijkse taal.',
      'Tel Aviv zit vol startups en wordt “Startup City” genoemd.',
    ],
  },
  {
    name: 'Italië',
    code: 'it',
    flag: 'https://flagcdn.com/w320/it.png',
    facts: [
      'Nergens vind je meer UNESCO-werelderfgoed dan in dit land.',
      'Pizza Margherita gebruikt de kleuren van de vlag van dit land.',
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
      'Red Bull begon als een energiedrank uit dit land: Krating Daeng.',
    ],
  },
  {
    name: 'Finland',
    code: 'fi',
    flag: 'https://flagcdn.com/w320/fi.png',
    facts: [
      'Er zijn hier meer sauna’s dan auto’s.',
      'In de zomer blijft in het noorden de zon na middernacht nog op.',
      'De mensen die hier wonen drinken het meeste koffie per persoon ter wereld.',
    ],
  },
  {
    name: 'Canada',
    code: 'ca',
    flag: 'https://flagcdn.com/w320/ca.png',
    facts: [
      'Dit land heeft de langste kustlijn ter wereld.',
      'Ongeveer 70% van alle ahornsiroop komt uit dit land.',
      'In dit land ligt het stadje Churchill, de “ijsberenhoofdstad” van de wereld.',
    ],
  },
  {
    name: 'Suriname',
    code: 'sr',
    flag: 'https://flagcdn.com/w320/sr.png',
    facts: [
      'Meer dan 90% van dit land is regenwoud.',
      'Nergens anders op het continent waar dit land ligt is Nederlands de voertaal.',
      'De hoofdstad van dit land heeft een van de hoogste houten kathedralen van de wereld.',
    ],
  },
  {
    name: 'België',
    code: 'be',
    flag: 'https://flagcdn.com/w320/be.png',
    facts: [
      'De praline bonbon werd hier uitgevonden begin 1900.',
      'De Smurfen en Kuifje komen hier vandaan.',
      'Er bestaan hier honderden soorten frieten en sausjes.',
    ],
  },
  {
    name: 'Armenië',
    code: 'am',
    flag: 'https://flagcdn.com/w320/am.png',
    facts: [
      'Dit land was een van de eerste landen die christelijk werd, meer dan 1600 jaar geleden.',
      'De oudste bekende wijnmakerij ter wereld (6000 jaar oud) werd hier gevonden.',
      'De mythische berg Ararat ligt in dit land.',
    ],
  },
  {
    name: 'Chili',
    code: 'cl',
    flag: 'https://flagcdn.com/w320/cl.png',
    facts: [
      'De woestijn in dit land is zo droog dat NASA er Marsrovers test.',
      'De reusachtige beelden op Paaseiland horen bij dit land.',
      'Dit land is meer dan 4000 km lang, langer dan de VS breed is.',
    ],
  },
  {
    name: 'Panama',
    code: 'pa',
    flag: 'https://flagcdn.com/w320/pa.png',
    facts: [
      'In dit land kun je dezelfde dag de zon zien opkomen bij de Stille Oceaan en ondergaan bij de Atlantische.',
      'Een kanaal in dit land laat schepen in minder dan 10 uur van oceaan wisselen.',
      'Er ligt een stuk regenwoud midden in de hoofdstad van dit land.',
    ],
  },
  {
    name: 'China',
    code: 'cn',
    flag: 'https://flagcdn.com/w320/cn.png',
    facts: [
      'Papier, drukkunst, buskruit en het kompas zijn uit dit land afkomstig.',
      'Dit land heeft het grootste hogesnelheids-treinnetwerk ter wereld.',
      'Reuzenpanda’s leven in het wild alleen in dit land.',
    ],
  },
  {
    name: 'Colombia',
    code: 'co',
    flag: 'https://flagcdn.com/w320/co.png',
    facts: [
      'Er leven hier meer vogelsoorten dan in elk ander land.',
      'Door dit land stroomt de “rivier van vijf kleuren.”',
      'De meeste smaragden ter wereld komen uit dit land.',
    ],
  },
  {
    name: 'Bahrein',
    code: 'bh',
    flag: 'https://flagcdn.com/w320/bh.png',
    facts: [
      'De “Tree of Life” groeit hier midden in de woestijn, op plekken waar geen water te zien is.',
      'Hier werd de eerste Formule 1-nachtrace gereden.',
      'Vroeger waren parels hier een grote handel, voordat er olie gevonden werd.',
    ],
  },
  {
    name: 'Turkije',
    code: 'tr',
    flag: 'https://flagcdn.com/w320/tr.png',
    facts: [
      'De hoofdstad ligt tegelijk in Europa en Azië.',
      'Tulpen werden hier als eerste gekweekt, lang voor ze beroemd werden in Nederland.',
      'In Cappadocië zweven luchtballonnen over sprookjesachtige rotsen.',
    ],
  },
  {
    name: 'Nepal',
    code: 'np',
    flag: 'https://flagcdn.com/w320/np.png',
    facts: [
      'De nationale vlag is de enige ter wereld die niet rechthoekig is.',
      'De Mount Everest, hoogste punt op aarde, staat op de grens van dit land.',
      'Acht van de veertien hoogste bergen ter wereld staan in dit land.',
    ],
  },
  {
    name: 'Noorwegen',
    code: 'no',
    flag: 'https://flagcdn.com/w320/no.png',
    facts: [
      'In de zomer blijft de zon in het noorden van dit land de hele nacht boven de horizon.',
      'De fjorden hier zijn diepe zeearmen die door gletsjers zijn uitgesleten.',
      'De Nobelprijs voor de Vrede wordt elk jaar in de hoofdstad van dit land uitgereikt.',
    ],
  },
  {
    name: 'Bangladesh',
    code: 'bd',
    flag: 'https://flagcdn.com/w320/bd.png',
    facts: [
      'De Sundarbans is het grootste mangrovebos ter wereld. Er wonen met Bengaalse tijgers.',
      'Fietsriksja’s hier zijn versierd met felgekleurde handgeschilderde kunst.',
      'Veel mensen spreken hier over zes seizoenen in plaats van vier.',
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
    name: 'Marokko',
    code: 'ma',
    flag: 'https://flagcdn.com/w320/ma.png',
    facts: [
      'De oude stad Chefchaouen is bijna helemaal blauw geverfd.',
      'Geiten klimmen hier echt in arganbomen om de vruchten te eten.',
      'Je kunt op een kameel de grote Sahara-duinen bij Merzouga in.',
    ],
  },
  {
    name: 'Bahama’s',
    code: 'bs',
    flag: 'https://flagcdn.com/w320/bs.png',
    facts: [
      'Zwemvarkens op Big Major Cay zijn een beroemde attractie.',
      'Dean’s Blue Hole is meer dan 200 meter diep en bijna recht naar beneden.',
      'Piraten zoals Blackbeard verstopten zich vroeger tussen deze eilanden.',
    ],
  },
  {
    name: 'Verenigde Staten',
    code: 'us',
    flag: 'https://flagcdn.com/w320/us.png',
    facts: [
      'Alaska heeft meer kustlijn dan alle andere Amerikaanse staten samen.',
      'Dit land had het allereerste nationale park ter wereld.',
      'Route 66 is een beroemde roadtrip van bijna 4000 kilometer.',
    ],
  },
  {
    name: 'Botswana',
    code: 'bw',
    flag: 'https://flagcdn.com/w320/bw.png',
    facts: [
      'De Okavango-delta is een enorme binnenlandse oase vol dieren.',
      'Dit land heeft een van de grootste olifantenpopulaties van de wereld.',
      'De munt van dit land heet pula, wat “regen” betekent.',
    ],
  },
  {
    name: 'Griekenland',
    code: 'gr',
    flag: 'https://flagcdn.com/w320/gr.png',
    facts: [
      'De eerste Olympische Spelen werden in dit land gehouden.',
      'De marathon komt van een legendarische loop van Marathon naar de hoofdstad van dit land.',
      'Dit land heeft duizenden eilanden met witte en blauwe huizen.',
    ],
  },
  {
    name: 'Mauritius',
    code: 'mu',
    flag: 'https://flagcdn.com/w320/mu.png',
    facts: [
      'De uitgestorven dodo leefde alleen hier.',
      'Dit land heeft zandduinen met regenboogkleuren.',
      'Dit land heeft geen leger, alleen politie en speciale eenheden.',
    ],
  },
  {
    name: 'Madagaskar',
    code: 'mg',
    flag: 'https://flagcdn.com/w320/mg.png',
    facts: [
      'Lemuren leven in het wild alleen in dit land.',
      'In dit land groeien Baobabs, reusachtige “op-de-kop”-bomen overal langs de weg.',
      'Ongeveer 90% van de dieren die hier leven vind je nergens anders op aarde.',
    ],
  },
  {
    name: 'Verenigde Arabische Emiraten',
    code: 'ae',
    flag: 'https://flagcdn.com/w320/ae.png',
    facts: [
      'In dit land staat het hoogste gebouw op aarde.',
      'Je kan in dit land skieen in een winkelcentrum, midden in een woestijn.',
      'De politie rijdt in dit land in Lamborghinis.',
    ],
  },
  {
    name: 'Nederland',
    code: 'nl',
    flag: 'https://flagcdn.com/w320/nl.png',
    facts: [
      'Er zijn in dit land meer fietsen dan mensen.',
      'Ongeveer een kwart van dit land ligt op of onder zeeniveau.',
      'In de lente kleuren de bollenvelden hier fel met tulpen.',
    ],
  },
  {
    name: 'Rusland',
    code: 'ru',
    flag: 'https://flagcdn.com/w320/ru.png',
    facts: [
      'In dit land ligt de langste treinroute ter wereld.',
      'Een meer in dit land bevat meer zoet water dan elk ander meer ter wereld.',
      'In het Hermitage-museum in dit land wonen katten als officiële muizenvangers.',
    ],
  },
  {
    name: 'Duitsland',
    code: 'de',
    flag: 'https://flagcdn.com/w320/de.png',
    facts: [
      'Op delen van de snelweg geldt in dit land geen snelheidslimiet.',
      'Oktoberfest begon als een koninklijk trouwfeest in 1810.',
      'Gummibeertjes werden in de jaren 20 in dit land bedacht.',
    ],
  },
  {
    name: 'Zwitserland',
    code: 'ch',
    flag: 'https://flagcdn.com/w320/ch.png',
    facts: [
      'Het Rode Kruis werd hier opgericht in 1863.',
      'Er zijn meer dan 7000 meren in dit land, ondanks de kleine grootte.',
      'Dit land staat bekend om horloges, gatenkaas, en chocola.',
    ],
  },
  {
    name: 'Tsjechië',
    code: 'cz',
    flag: 'https://flagcdn.com/w320/cz.png',
    facts: [
      'De astronomische klok in de hoofstdat van dit land is gemaakt in 1410 en tikt nog steeds.',
      'Hier wordt per persoon meer bier gedronken dan waar ook.',
      'In de hoofstad van dit land staan veel kubistische gebouwen met scherpe hoeken.',
    ],
  },
  {
    name: 'Indonesië',
    code: 'id',
    flag: 'https://flagcdn.com/w320/id.png',
    facts: [
      'Deze republiek strekt zich uit over meer dan 17.000 eilanden.',
      'Komodovaranen, de grootste hagedissen, leven op sommige eilanden.',
      'In dit land staat de grootste boeddhistische tempel ter wereld.',
    ],
  },
  {
    name: 'Nigeria',
    code: 'ng',
    flag: 'https://flagcdn.com/w320/ng.png',
    facts: [
      'Nollywood maakt elk jaar duizenden films.',
      'In dit land ligt Igbo-Ora, de “tweelinghoofdstad” van de wereld, zo genoemd door de vele tweelingen die hier wonen.',
      'De Afrobeats-artiesten uit dit land scoren wereldwijd hits.',
    ],
  },
  {
    name: 'Japan',
    code: 'jp',
    flag: 'https://flagcdn.com/w320/jp.png',
    facts: [
      'In dit land staat ongeveer één automaat per 30 mensen.',
      'De treinen on dit land zijn zo netjes op tijd dat ze vertragingen hier in seconden tellen.',
      'KitKats bestaan hier in honderden smaken, van matcha tot wasabi.',
    ],
  },
  {
    name: 'Frankrijk',
    code: 'fr',
    flag: 'https://flagcdn.com/w320/fr.png',
    facts: [
      'Dit is het meest bezochte land ter wereld.',
      'De beroemde hoge toren in de hoofdstad was bedoeld als tijdelijk bouwwerk in 1889.',
      'De eerste heteluchtballon met mensen steeg hier op in 1783.',
    ],
  },
  {
    name: 'Mali',
    code: 'ml',
    flag: 'https://flagcdn.com/w320/ml.png',
    facts: [
      'Timbuktu was ooit een legendarische stad van goud en boeken.',
      'In dit land staat de Grote Moskee van Djenné, het grootste lemen gebouw ter wereld.',
      'Duizenden oude handgeschreven boeken liggen in dit land opgeslagen in woestijnbibliotheken.',
    ],
  },
]

export default countries
