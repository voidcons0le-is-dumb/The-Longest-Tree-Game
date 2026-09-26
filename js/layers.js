addLayer("uni", {
    name: "Universes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Uni", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    nodeStyle: {
        background: "linear-gradient( #e100ff, #000000)",
        backgroundOrigin: "border-box",
        borderColor: "rgba(0,0,0,0.5)",
        color: "#fcfc",
    },
    tooltip() {return "Universe "+player.uni.points},
    color: "#e100ff",
    requires: new Decimal("8.75e307"), // Can be a function that takes requirement increases into account
    resource: "Universes", // Name of prestige currency
    baseResource: "Time", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 10, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "[U] Reset for Universes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("p", {
    name: "points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#af9",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){}},
    ],
    tooltip() {return format(player.points)+" points"},
    tabFormat: {
        "Main": {
            content: [
                ["display-text", function() {return "You have <h2 style='color: #af9; text-shadow: #af9 0px 0px 10px;'>"+format(player.points)+"</h2> points"}],
                "blank",
                ["display-text", "This is the points layer. It's the default currency, you can use it to buy upgrades in the point tree."],
                "blank",
                "upgrades"
            ]
        },
    },
    layerShown(){return true},
    upgrades: {
        
    },
})