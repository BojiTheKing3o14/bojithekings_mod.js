runAfterLoad(function() {
    console.log("Thanks for using bojithekings_mod.js! This is 1.0v")
})

elements.ultronium = {
    color: ["#3a293a", "#77337c"],
    behavior: [
        "XX|CR:radiation%20 AND CR:neutron%10|XX",
        "CR:radiation%20 AND CR:neutron%10|XX|CR:radiation%20 AND CR:neutron%10",
        "XX|CR:radiation%20 AND CR:neutron%10|XX"
    ],
    state: "solid",
    reactions: {
        "neutron": {elem1: "n_explosion", elem2: null, chance: 0.01, tempMin: 600 }
    },
    temp: 500,
    tempHigh: 10000,
    stateHigh: "ultronium_gas",
    renderer: renderPresets.HEATGLOW,
    tick: function(pixel) {
        if (Math.random()<0.01 && pixel.temp < 500) {
            changePixel(pixel, "stable_ultronium")
        }
    },
    category: "solids",
    density: 25000, //in kg/m³
    hardness: 0.80

}

elements.ultronium_gas = {
    color: ["#b45bb4", "#722478"],
    behavior: [
        "M2|CR:radiation%20 AND CR:neutron%10 AND M1|M2",
        "CR:radiation%20 AND CR:neutron%10 AND M1|XX|CR:radiation%20 AND CR:neutron%10 AND M1",
        "M2|CR:radiation%20 AND CR:neutron%10 AND M1|M2"
    ],
    state: "gas",
    reactions: {
        "neutron": {elem1: "n_explosion", elem2: null, chance: 0.05}
    },
    temp: 12500,
    tempLow: 9000,
    stateLow: "ultronium",
    category: "gases",
    density: 12000

}

elements.stable_ultronium = {
    color: ["#362236", "#492a4c"],
    behavior: [
        "XX|CR:radiation%10|XX",
        "CR:radiation%10|XX|CR:radiation%10",
        "XX|CR:radiation%10|XX"
    ],
    state: "solid",
    tempHigh: 1200,
    stateHigh: "ultronium",
    reactions: {
        "neutron": {elem1: "depleted_ultronium", elem2: null, chance: 0.05, tempMin: 400}
    },
    category: "solids",
    density: 22550, //in kg/m³,
    hardness: 0.80

}

elements.depleted_ultronium = {
    color: ["#464646", "#b1a4b5"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    state: "solid",
    tempHigh: 4000,
    renderer: renderPresets.HEATGLOW,
    stateHigh: "depleted_gas_ultronium",
    category: "solids",
    density: 22300, //in kg/m³
    hardness: 0.80
}

elements.depleted_gas_ultronium = {
    color: ["#3a293a", "#837c84"],
    behavior: behaviors.GAS,
    state: "gas",
    tempLow: 3990,
    stateLow: "depleted_ultronium",
    temp: 4250,
    category: "gases",
    density: 13000
}

elements.supernova.hidden = false
elements.supernova.category = "energy"
elements.n_explosion.hidden = false
elements.n_explosion.category = "energy"

elements.steam.reactions["oxygen"] = {elem1: "humid_air", elem2: null}

elements.humid_air = {
    color: "#9cb8c9",
    behavior: behaviors.GAS,
    state: "gas",
    temp: 40,
    tempLow: 20,
    stateLow: ["water", "oxygen"],
    category: "gases",
    density: 1.4
}


elements.heat_to_infinity = {
    color: "#000000",
    tool: function(pixel) {
        pixel.temp += 1e309
    },
    category: "tools"
}

elements.super_heat = {
    color: "#9c1717",
    tool: function(pixel) {
        pixel.temp += 100000
    },
    category: "tools"
}
elements.super_cool = {
    color: "#9c1717",
    tool: function(pixel) {
        pixel.temp -= 100000
    },
    category: "tools"
}

elements.diamond.tempHigh = 3550
elements.diamond.stateHigh = "carbon_dioxide"

elements.sulfur_gas.reactions["oxygen"] = {elem1: "sulfur_dioxide", elem2: null}

elements.sulfur_dioxide = {
    color: ["#cfd5d8","#d5dbde","#c9d0d3"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 2.6,
    stateLow: "liquid_sulfur_dioxide",
    tempLow: -10,
}

elements.liquid_sulfur_dioxide = {
    color: ["#bfc7cb","#b9c2c7"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1.4,
    stateHigh: "sulfur_dioxide",
    tempHigh: -10
}

elements.magma.tempHigh = 2500
elements.magma.stateHigh = ["sulfur_dioxide", "carbon_dioxide"]

elements.molten_glass.tempHigh = 2500
elements.molten_glass.stateHigh = ["silicon_gas", "oxygen"]

elements.molten_dirt.tempHigh = 2500
elements.molten_dirt.stateHigh = ["silicon_gas", "carbon_dioxide"]

elements.molten_salt.tempHigh = 2500
elements.molten_salt.stateHigh = ["sodium_gas", "chlorine"]

elements.silicon_gas = {
    color: "#c0c0c0",
    behavior: behaviors.GAS,
    state: "gas",
    category: "gases",
    density: 0.5,
    temp: 1500
}

elements.chromium = {
    color: ["#beebf0", "#87c0cc"],
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 7140,
    conduct: 0.6,
    hardness: 0.85,
    tempHigh: 1907,
    stateHigh: "molten_chromium"
}

elements.molten_chromium = {
    color: ["#ffd500", "#ffae00", "#ff0000"],
    behavior: behaviors.MOLTEN,
    hidden: true,
    state: "liquid",
    density: 6500,
    tempLow: 1907,
    stateLow: "chromium",
    viscosity: 100,
    reactions: {
        "molten_steel": {elem1: "molten_stainless_steel", elem2: null}
    }
}

elements.stainless_steel = {
    color: "#c0c0c0",
	colorKey: {
		"L":"#bababa",
		"B":"#6c6c6c"
	},
	colorPattern: [
		"BBLB",
		"BBBL",
		"BLBB",
		"LBBB"
	],
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 8000,
    conduct: 0.42,
    hardness: 0.85,
    tempHigh: 1450, 
    stateHigh: "molten_stainless_steel",
    breakInto: "stainless_steel_dust",
}

elements.molten_stainless_steel = {
    color: ["#fff942", "#f49e1d", "#ff4400"],
    behavior: behaviors.MOLTEN,
    hidden: true,
    state: "liquid",
    density: 8000,
    tempLow: 1450,
    stateLow: "stainless_steel",
    viscosity: 120,
    conduct: 1,
}

elements.infinite_burn = {
    color: "#a16868",
    behavior: behaviors.WALL,
    state: "solid",
    burn: 100,
    burnTime: 1e9, //more then one irl year
    fireColor: "#eaff00",
    category: "special"
}

elements.cluster_bomb = {
    color: "#9b9b9b",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:10>bomb|M2",
    ],
    category: "weapons"
}

elements.cluster_bomb_squared = {
    color: "#6f6f6f",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:25>cluster_bomb|M2",
    ],
    category: "weapons"
}

elements.cluster_bomb_cubed = {
    color: "#737373",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:50>cluster_bomb_squared|M2",
    ],
    category: "weapons"
}

elements.cluster_bomb_fourth = {
    color: "#525252",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:100>cluster_bomb_cubed|M2",
    ],
    category: "weapons"
}

elements.cluster_bomb_final = {
    color: "#525252",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:250>cluster_bomb_fourth|M2",
    ],
    category: "weapons"
}

elements.compress_to_a_star = {
    color: "#e5ff00",
    tool: function(pixel) {
        if (pixel.element=="hydrogen" && pixel.temp >= 10000) {
            changePixel(pixel, "sun")
        }
    },
    category: "tools"
}

elements.brown_dwarf = {
    color: "#502606",
    state: "gas",
    behavior: behaviors.WALL,   
    temp: 2226,
    tempHigh: 2726,
    stateHigh: "sun",
    tempLow: -23,
    stateLow: "hydrogen",
    category: "special"
}

elements.plasma.behavior = behaviors.GAS
elements.plasma.temp = 45000,
elements.plasma.tempLow = 40000
elements.fire.tempHigh = 42500,


elements.h_bomb.behavior = [
    "XX|XX|XX",
	"XX|XX|XX",
	"M2|M1 AND EX:90>plasma,plasma,plasma,plasma,fire,neutron,helium|M2",
]

elements.hydrogen.reactions["hydrogen"] = {
    elem1: ["h2", "positron"] , elem2: null, tempMin: 70000
}

elements.h_explosion = {
    color: "#aeff00",
    state: "gas",
    behavior: [
        "XX|XX|XX",
        "XX|EX:90>plasma,plasma,plasma,plasma,fire,neutron,helium|XX",
        "XX|XX|XX"
    ],
    alias: "thermonuclear explosion",
    category: "energy"
}

elements.short_super_heater = {
    color: "#c14a4a",
    behavior: [
        "XX|HT:5000|XX",
        "HT:5000|DL%10|HT:5000",
        "XX|HT:5000|XX"
    ],
    category: "machines"
}
elements.heavy_steam = {
	color: "#536c83",
	behavior: behaviors.GAS,
	tick: function(pixel) {
		if (pixel.temp > 3000 && Math.random() < 0.01) {
			changePixel(pixel,Math.random() < 0.5 ? "h2" : "oxygen");
		}
	},
	reactions: {
		"smoke": { elem1: "smog", elem2: null, chance:0.001 },
		"carbon_dioxide": { elem1: "smog", elem2: null, chance:0.001 },
		"plasma": { elem1:"ozone", tempMin:500, charged:true },
		"copper": { elem1:"oxygen", elem2:"oxidized_copper", chance:0.01 },
		"bronze": { elem1:"oxygen", elem2:"oxidized_copper", chance:0.005 },
		"iron": { elem1:"oxygen", elem2:"rust", chance:0.005 },
		"steel": { elem1:"oxygen", elem2:"rust", chance:0.004 },
		"tornado":{elem1:"cloud"},
		"melted_wax": { elem1:"explosion" }
	},
	temp: 150,
	tempLow: 95,
	stateLow: "heavy_water",
	category: "gases",
	state: "gas",
	density: 0.6,
	conduct: 0.002,
	stain: -0.05,
	alias: "heavy water vapor",
	extinguish: true
}

elements.seawater = {
    color: "#22d5de",
    behavior: behaviors.LIQUID,
    state: "liquid",
    tempHigh: 101,
    stateHigh: ["steam", "steam", "steam", "salt", "heavy_steam"],
    tempLow: -2,
    stateLow: "frozen_seawater",
    density: 1025,
    category: "liquids"
}

elements.frozen_seawater = {
    color: "#7fced2",
    behavior: behaviors.WALL,
    state: "solid",
    tempHigh: "-1",
    stateHigh: "seawater",
    density: 910,
    temp: -5,
    category: "liquids"
}

elements.heavy_water = {
    color: "#1643a3",
	behavior: behaviors.LIQUID,
	tempHigh: 101.4,
	stateHigh: "heavy_steam",
	tempLow: 0,
	category: "liquids",
	heatCapacity: 4.184,
	reactions: {
		"dust": { elem1: "heavy_dirty_water", elem2: null },
		"ash": { elem1: "heavy_dirty_water", elem2: null },
		"cyanide": { elem1: "heavy_dirty_water", elem2: null },
		"cyanide_gas": { elem1: "heavy_dirty_water", elem2: null },
		"carbon_dioxide": { elem1: "seltzer", elem2: null, oneway:true },
		"sulfur": { elem1: "heavy_dirty_water", elem2: null },
		"rat": { elem1: "heavy_dirty_water", chance:0.005 },
		"infection": { elem1: "heavy_dirty_water", elem2: null },
		"plague": { elem1: "heavy_dirty_water", elem2: null },
		"rust": { elem1: "heavy_dirty_water", chance:0.005 },
		"lead": { elem1: "heavy_dirty_water", chance:0.005 },
		"solder": { elem1: "heavy_dirty_water", chance:0.005 },
		"fallout": { elem1: "heavy_dirty_water", chance:0.25 },
		"radiation": { elem1: "heavy_dirty_water", chance:0.25 },
		"uranium": { elem1: "heavy_dirty_water", chance:0.25 },
		"rad_steam": { elem1: "heavy_dirty_water", chance:0.02 },
		"rad_glass": { elem1: "heavy_dirty_water", chance:0.005 },
		"rad_shard": { elem1: "heavy_dirty_water", chance:0.01 },
		"rotten_meat": { elem1: "heavy_dirty_water", chance:0.25 },
		"rotten_cheese": { elem1: "heavy_dirty_water", chance:0.25 },
		"cancer": { elem1: "heavy_dirty_water", chance:0.25 },
		"oil": { elem1: "heavy_dirty_water", chance:0.005 },
		"dioxin": { elem1: "heavy_dirty_water", chance:0.1 },
		"neutron": { elem1: ["heavy_dirty_water","heavy_dirty_water","heavy_dirty_water","rad_steam"], elem2:null, chance:0.1 },
		"rock": { elem2: "wet_sand", chance: 0.00035 },
		"limestone": { elem2: "wet_sand", chance: 0.00035 },
		"tuff": { elem2: "wet_sand", color2:"#7a6b5c", chance: 0.00035 },
		"ruins": { elem2: "rock", chance: 0.00035 },
		"mudstone": { elem2: "mud", chance: 0.00035 },
		"methane": { elem1:"primordial_soup", elem2:"primordial_soup", tempMin:60, charged:true },
		"ammonia": { elem1:"primordial_soup", elem2:"primordial_soup", tempMin:60, charged:true },
		"fly": { elem2:"dead_bug", chance:0.1, oneway:true },
		"firefly": { elem2:"dead_bug", chance:0.1, oneway:true },
		"bee": { elem2:"dead_bug", chance:0.05, oneway:true },
		"stink_bug": { elem2:"dead_bug", chance:0.1, oneway:true },
		"cured_meat": { elem1:"salt_water", elem2:"meat" },
		"heavy_water": { elem2:"bubble", attr2:{"clone":"heavy_water"}, chance:0.001, tempMin:85 },
        "salt_water": {elem1: "seawater", elem2: null, chance: 0.05},
		// electrolysis:
		"aluminum": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0025 },
		"zinc": { elem1:["h2","h2","oxygen"], charged:true, chance:0.015 },
		"steel": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0125 },
		"iron": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0125 },
		"tin": { elem1:["h2","h2","oxygen"], charged:true, chance:0.01 },
		"brass": { elem1:["h2","h2","oxygen"], charged:true, chance:0.001 },
		"bronze": { elem1:["h2","h2","oxygen"], charged:true, chance:0.001 },
		"copper": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0075 },
		"silver": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0075 },
		"gold": { elem1:["h2","h2","oxygen"], charged:true, chance:0.0075 }
	},
	state: "liquid",
	density: 1105,
	conduct: 0.02,
	stain: -0.5,
	extinguish: true
}

elements.heavy_dirty_water = {
	color: ["#0b643c","#054636","#094d26"],
	behavior: behaviors.LIQUID,
	tempHigh: 105,
	stateHigh: ["heavy_steam","carbon_dioxide"],
	tempLow: -5,
	stateLowName: "dirty_heavy_ice",
	viscosity: 10,
	category: "liquids",
	reactions: {
		"rock": { elem2: "wet_sand", chance: 0.0004 },
		"limestone": { elem2: "wet_sand", chance: 0.0004 },
		"plant": { elem1:"heavy_water", chance:0.05 },
		"algae": { elem1:"heavy_water", chance:0.05 },
		"kelp": { elem1:"heavy_water", chance:0.05 },
		"coral": { elem1:"heavy_water", chance:0.05 },
		"charcoal": { elem1:"heavy_water", chance:0.02 },
		"gravel": { elem1:"heavy_water", chance:0.01 },
		"fly": { elem2:"dead_bug", chance:0.1, oneway:true },
		"firefly": { elem2:"dead_bug", chance:0.1, oneway:true },
		"bee": { elem2:"dead_bug", chance:0.05, oneway:true },
		"stink_bug": { elem2:"dead_bug", chance:0.1, oneway:true },
		"dirty_water": { elem2:"bubble", attr2:{"clone":"heavy_water"}, chance:0.001, tempMin:85 },
		"coral": { elem1:null, elem2:"dirty_water", chance:0.004 }
	},
	hidden: true,
	state: "liquid",
	density: 1005,
	conduct: 0.1,
	extinguish: true
}
// ISOTOPES category is gonna come next in 1.1v
//Calculated that the games "helium" is helium-4


elements.h2 = {
    color: "#243852",
    behavior: behaviors.GAS,
    state: "gas",
    density: 0.180,
    category: "isotopes",
    tempLow: -254,
    stateLow: "h2_liquid",
    reactions: {
        "h3": {elem1: ["helium", "neutron"], elem2: null, tempMin: 10000},
        "h2": {elem1: ["he3", "neutron"], elem2: null, tempMin: 40000}
    },
    alias: "deuterium"
}

elements.h2_liquid = {
    color: "#4e627d",
    behavior: behaviors.LIQUID,
    state: "liquid",
    density: 70.8,
    hidden: true,
    tempHigh: -253,
    stateHigh: "h2"
}

elements.h3 = {
    color: "#1a212a",
    behavior: [
        "CR:radiation%0.1 AND M2|CR:radiation%0.1 AND M1|CR:radiation%0.1 AND M2",
        "CR:radiation%0.1 AND M1|XX|CR:radiation%0.1 AND M1",
        "CR:radiation%0.1 AND M2|CR:radiation%1 AND M1|CR:radiation%0.1 AND M2"
    ],
    state: "gas",
    density: 0.269,
    category: "isotopes",
    tempLow: -254.5,
    stateLow: "h3_liquid",
    reactions: {
        "h3": {elem1: ["helium", "neutron", "neutron"], elem2: null, tempMin: 40000}
    },
    alias: "tritium"
}

elements.h3_liquid = {
    color: "#3d4652",
    behavior: [
        "CR:radiation%0.1|CR:radiation%0.1|CR:radiation%0.1",
        "CR:radiation%0.1 AND M2%20|XX|CR:radiation%0.1 AND M2%20",
        "CR:radiation%0.1 AND  M2|CR:radiation%0.1 AND M1|CR:radiation%0.1 AND M2"
    ],
    state: "liquid",
    density: 125,
    hidden: true,
    tempHigh: -252.8,
    stateHigh: "h3",
}

elements.he3 = {
    color: "#5e5858",
    behavior: behaviors.GAS,
    state: "gas",
    density: 0.135,
    category: "isotopes",
    tempLow: -272.85,
    stateLow: "he3_liquid",
    reactions: {
        "hydrogen": {elem1: ["helium", "hydrogen"], elem2: null, tempMin: 10000}
    }
}

elements.he3_liquid = {
    color: "#656565",
    behavior: behaviors.LIQUID,
    state: "liquid",
    density: 81,
    hidden: true,
    tempHigh: -272.84,
    stateHigh: "he3"
}

elements.lithium = {
    color: "#acacac",
    behavior: behaviors.WALL,
    state: "solid",
    hardness: 0.06,
    density: 538,
    conduct: 0.48,
    category: "solids",
	darkText: true,
    renderer: renderPresets.HEATGLOW,
    alias: "li7",
	tempHigh: 180
}

elements.li6 = {
    color: "#929191",
    behavior: behaviors.WALL,
    state: "solid",
    hardness: 0.056,
    density: 534,
    conduct: 0.48,
    category: "isotopes",
    darkText: true,
    renderer: renderPresets.HEATGLOW,
    tempHigh: 180
}

elements.molten_li6 = {
    color: ["#ff4000", "#ff7300", "#ffd500"],
    behavior: behaviors.MOLTEN,
    state: "liquid",
    viscosity: 4.18,
    density: 512,
    conduct: 0.48,
    tempLow: 179,
    stateLow: "li6",
    hidden: true,
    reactions: {
        "neutron": {elem1: ["helium", "h3"], elem2: null, tempMin: 500}
}
}

elements.be9 = {
    color: "#a3c1ad",
    behavior: behaviors.WALL,
    state: "solid",
    hardness: 5.5 / 10,   
    density: 1850,      
    conduct: 0.29,  
    category: "isotopes",
    renderer: renderPresets.HEATGLOW,
    tempHigh: 1278,
    reactions: {
        "neutron": {elem2: null, /* absorbing neutron */ chance: 0.15}
    }
}
