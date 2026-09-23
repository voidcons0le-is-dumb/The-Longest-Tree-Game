addLayer("uni", {
    name: "Universes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Uni", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    tooltip() {return "Universe "+player.uni.points},
    color: "#0066ff",
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
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "[U] Reset for Universes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer('p', {
    name: "rawmetal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Pr", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    infoboxes: {
        info: {
            title: "Raw Metal",
            body: "This is the first real layer. You can use your <span id='points'>Time</span> to prestige for <span id='rawmetalc'>PPts</span>. <span id='rawmetalc'>PPts</span> is used on upgrades to your currencies. Complete this layer to unlock a new one!"
        }
    },
    color: "#cff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "PPts", // Name of prestige currency
    resetDescription: "Prestige for ",
    baseResource: "Time", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 13)) mult = mult.mul(3)
        if (hasUpgrade('p', 14)) mult = mult.mul(2.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "[R] Mine Raw Metal", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Multiplier",
            description: "Doubles your Time gain",
            effectDisplay: "x2",
            cost: new Decimal(1)
        },
        12: {
            title: "Tripliplier",
            description: "Triples your Time gain",
            effectDisplay: "x3",
            cost: new Decimal(3)
        },
        13: {
            title: "Prestigiplier",
            description: "Triples your PPts gain",
            effectDisplay: "x3",
            cost: new Decimal(10)
        },
        14: {
            title: "Multi-multiplier",
            description: "x2.5 to both Time and PPts",
            effectDisplay: "x2.5, x2.5",
            cost: new Decimal(45)
        },
    },
})