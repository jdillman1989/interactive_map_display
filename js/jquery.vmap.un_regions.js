var countryMap = {
	"bi": "Africa",
	"km": "Africa",
	"dj": "Africa",
	"er": "Africa",
	"et": "Africa",
	"ke": "Africa",
	"mg": "Africa",
	"mw": "Africa",
	"mu": "Africa",
	"mz": "Africa",
	"re": "Africa",
	"rw": "Africa",
	"sc": "Africa",
	"so": "Africa",
	"ug": "Africa",
	"tz": "Africa",
	"zm": "Africa",
	"zw": "Africa",
	"ao": "Africa",
	"cm": "Africa",
	"cf": "Africa",
	"td": "Africa",
	"cg": "Africa",
	"cd": "Africa",
	"gq": "Africa",
	"ga": "Africa",
	"st": "Africa",
	"dz": "Africa",
	"ly": "Africa",
	"ma": "Africa",
	"sd": "Africa",
	"tn": "Africa",
	"bw": "Africa",
	"ls": "Africa",
	"na": "Africa",
	"za": "Africa",
	"sz": "Africa",
	"bj": "Africa",
	"bf": "Africa",
	"cv": "Africa",
	"ci": "Africa",
	"gm": "Africa",
	"gh": "Africa",
	"gn": "Africa",
	"gw": "Africa",
	"lr": "Africa",
	"ml": "Africa",
	"mr": "Africa",
	"ne": "Africa",
	"ng": "Africa",
	"sn": "Africa",
	"sl": "Africa",
	"tg": "Africa",

	"pk": "MEast", //Pakistan
	"tj": "MEast", //Tajikistan
	"kg": "MEast", //Kyrgyzstan
	"kz": "MEast", //Kazakhstan
	"af": "MEast", //Afghanistan
	"tm": "MEast", //Turkmenistan
	"uz": "MEast", //Uzbekistan
	"ir": "MEast", //Iran
	"az": "MEast", //Azerbaijan
	"tr": "MEast", //Turkey
	"sy": "MEast", //Syrian Rep.
	"iq": "MEast", //Iraq
	"kw": "MEast", //Kuwait
	"jo": "MEast", //Jordan
	"il": "MEast", //Israel
	"lb": "MEast", //Lebanon
	"cy": "MEast", //Cyprus
	"om": "MEast", //Oman
	"ye": "MEast", //Yemen
	"sa": "MEast", //Saudi Arabia
	"ae": "MEast", //U. Arab Emirates
	"qa": "MEast", //Qatar
	"eg": "MEast",


	"cn": "Asia", //China
	"kp": "Asia", //Korea
	"jp": "Asia", //Japan
	"mn": "Asia", //Mongolia
	"kr": "Asia", //Korea
	"bd": "Asia", //Bangladesh
	"bt": "Asia", //Bhutan
	"in": "Asia", //India
	"mv": "Asia", //Maldives
	"np": "Asia", //Nepal
	"bn": "Asia", //Brunei Darussalam
	"kh": "Asia", //Cambodia
	"tl": "Asia", //
	"id": "Asia", //Indonesia
	"la": "Asia", //Laos
	"my": "Asia", //Malaysia
	"mm": "Asia", //myanmar
	"ph": "Asia", //Philippines
	"th": "Asia", //Thailand
	"vn": "Asia", //Vietnam
	"lk": "Asia", //Sri Lanka


	//"au": "Asia", //Australia
	//"nz": "Asia", //New Zealand
	"fj": "Asia", //Fiji
	"sb": "Asia",
	"pg": "Asia",
	"vu": "Asia",
	"nc": "Asia",
	"pf": "Asia",


	"by":"Europe",
	"bg":"Europe",
	"cz":"Europe",
	"hu":"Europe",
	"pl":"Europe",
	"md":"Europe",
	"ro":"Europe",
	"ru":"Europe",
	"sk":"Europe",
	"ua":"Europe",
	"dk":"Europe",
	"ee":"Europe",
	"fi":"Europe",
	"is":"Europe",
	"ie":"Europe",
	"lv":"Europe",
	"lt":"Europe",
	"no":"Europe",
	"se":"Europe",
	"gb":"Europe",
	"al":"Europe",
	"ba":"Europe",
	"hr":"Europe",
	"gr":"Europe",
	"it":"Europe",
	"mt":"Europe",
	"pt":"Europe",
	"si":"Europe",
	"es":"Europe",
	"mk":"Europe",
	"rs":"Europe",
	"at":"Europe",
	"be":"Europe",
	"fr":"Europe",
	"de":"Europe",
	"nl":"Europe",
	"ch":"Europe",
	"am":"Europe", //Armenia
	"ge":"Europe", //Georgia


	"ca":"SAmerica", //Canada
	"gl":"SAmerica", //Greenland
	"us":"SAmerica", //USA
	"bs":"SAmerica", //bahamas
	"dm":"SAmerica", //Dominica
	"ag":"SAmerica", //Antigua
	"bb":"SAmerica", //Barbados
	"cu":"SAmerica", //Cuba
	"gd":"SAmerica", //Grenada
	"jm":"SAmerica", //Jamaica
	"kn":"SAmerica", //Nevis
	"lc":"SAmerica", //St. Lucia
	"tt":"SAmerica", //Trinidad

	"do":"SAmerica", //Dominican R.
	"ht":"SAmerica", //Haiti
	"bz":"SAmerica", //Belize
	"cr":"SAmerica", //Costa Rica
	"sv":"SAmerica", //El Salvador
	"gt":"SAmerica", //Gautemala
	"hn":"SAmerica", //Honduras
	"mx":"SAmerica", //Mexico
	"ni":"SAmerica", //Nicaragua
	"pa":"SAmerica", //Panama

	"ar":"SAmerica", //Argentina
	"bo":"SAmerica", //Bolivia
	"br":"SAmerica", //Brazil
	"cl":"SAmerica", //Chile
	"co":"SAmerica", //Colombia
	"ec":"SAmerica", //Ecuador
	"fk":"SAmerica", //Falkland
	"gy":"SAmerica", //Guyana
	"gf":"SAmerica", //F. Guiana
	"pe":"SAmerica", //Peru
	"py":"SAmerica", //Paraguay
	"sr":"SAmerica", //Suriname
	"uy":"SAmerica", //Uruguay
	"ve":"SAmerica", //Venezuela
};


var regionMap = {
	"Africa" : {
		"countries" : [
			"bi", 
			"km", 
			"dj", 
			"er", 
			"et", 
			"ke", 
			"mg", 
			"mw", 
			"mu", 
			"mz", 
			"re", 
			"rw", 
			"sc", 
			"so", 
			"ug", 
			"tz", 
			"zm", 
			"zw",
			"ao", 
			"cm", 
			"cf", 
			"td", 
			"cg", 
			"cd", 
			"gq", 
			"ga", 
			"st",
			"dz", 
			"ly", 
			"ma", 
			"sd", 
			"tn",
			"bw", 
			"ls", 
			"na", 
			"za", 
			"sz",
			"bj", 
			"bf", 
			"cv", 
			"ci", 
			"gm", 
			"gh", 
			"gn", 
			"gw", 
			"lr", 
			"ml", 
			"mr", 
			"ne", 
			"ng", 
			"sn", 
			"sl", 
			"tg"
		],

		"name" : " Africa"
	},

	"MEast" : {
		"countries" : [	
			"pk",
			"tj",
			"kg",
			"kz",
			"af",
			"tm",
			"uz",
			"ir",
			"az",
			"tr",
			"sy",
			"iq",
			"kw",
			"jo",
			"il",
			"lb",
			"cy",
			"om",
			"ye",
			"sa",
			"ae",
			"qa",
			"eg", 

		],

			"name" : " MEast"
	},


	"Asia" : {
		"countries" : [
			"cn", 
			"kp", 
			"jp", 
			"mn", 
			"kr",
			"bd", 
			"bt", 
			"in", 
			"mv", 
			"np", 
			"bn", 
			"kh", 
			"tl", 
			"id", 
			"la", 
			"my", 
			"mm", 
			"ph", 
			"th", 
			"vn",
			//"au", 
			//"nz", 
			"fj", 
			"sb", 
			"pg", 
			"vu", 
			"nc", 
			"pf",
			"lk",

		],

		"name" : " Asia"
	},

	"Europe" : {
		"countries" : [
			"by",
			"am",
			"ge", 
			"bg", 
			"cz", 
			"hu", 
			"pl", 
			"md", 
			"ro", 
			"ru", 
			"sk", 
			"ua", 
			"dk", 
			"ee", 
			"fi", 
			"is", 
			"ie", 
			"lv", 
			"lt", 
			"no", 
			"se", 
			"gb", 
			"al", 
			"ba", 
			"hr", 
			"gr", 
			"it", 
			"mt", 
			"pt", 
			"si", 
			"es", 
			"mk", 
			"rs", 
			"at", 
			"be", 
			"fr", 
			"de", 
			"nl", 
			"ch"
		],

		"name" : " Europe"
	},

	"SAmerica" : {
		"countries" : [	
			"ni",
			"pa",
		    "mx",
		    "hn",
		    "gt",
		    "sv",
		    "cr",
		    "bz",
		    "ht",
		    "do",
			"ar",
			"bo",
			"br",
			"cl",
			"co",
			"ec",
			"fk",
			"gy",
			"gf",
			"pe",
			"py",
			"sr",
			"uy",
			"ve",

			"bs",
			"dm",
			"ag",
			"bb",
			"cu",
			"gd",
			"jm",
			"kn",
			"lc",
			"tt",
			"ca",
			"gl",
			"us"
		],

			"name" : " SAmerica"
	},

};

function getCountriesInRegion(cc) {
	for (var regionKey in regionMap)
	{
		var countries = regionMap[regionKey].countries;
		for (var countryIndex in countries)
		{
			if (cc == countries[countryIndex])
			{
				return countries;
			}
		}
	}
}

function getRegion(cc) {
	var regionCode = countryMap[cc];
	return regionMap[regionCode];
}

function highlightRegionOfCountry (cc) {
      var countries = getRegion(cc).countries;
      for (countryIndex in countries)
      {
      	$('#vmap').vectorMap('highlight',countries[countryIndex]);
        
      }
      $('#vmap').vectorMap('highlight',cc);
      
    }

function unhighlightRegionOfCountry (cc) {
      var countries = getRegion(cc).countries;
      for (countryIndex in countries)
      {
      	$('#vmap').vectorMap('unhighlight',countries[countryIndex]);
        
      }
      $('#vmap').vectorMap('unhighlight',cc);
    }