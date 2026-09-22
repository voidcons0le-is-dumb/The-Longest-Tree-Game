addLayer("t", {
    name: "Trees", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#46c926",
    infoboxes: {
        levelUpInfo: {
            title: "Levels Tutorial",
            body: "This is the tutorial for this layer. you will see it on every layer in this game. You can level up using XP when you have enough. Press the button when the button is not red anymore to get a level."
        }
    },
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "levels", // Name of prestige currency
    tabFormat: {
        "Levelups": {
            content: [
                ["infobox", "levelUpInfo"]
            ]
        },
    },
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true}
})
