/**
 * CC-Teleport Config Options
 * Teleport UI, Saving, Loading
 */

//Allow players to disable the Teleport UI
sc.OPTIONS_DEFINITION["show-teleport-ui"] = {
	type: "CHECKBOX",
	init: true,
	cat: sc.OPTION_CATEGORY.INTERFACE,
	hasDivider: true,
	header: "cc-teleport",
};

//Implement new keys for Saving and Loading in the Menu
sc.OPTIONS_DEFINITION["keys-save-pos"] = {
	type: "CONTROLS",
	init: {
		key1: ig.KEY.K,
		key2: undefined
	},
	cat: sc.OPTION_CATEGORY.CONTROLS,
	hasDivider: true,
	header: "cc-teleport",
};

sc.OPTIONS_DEFINITION["keys-load-pos"] = {
	type: "CONTROLS",
	init: {
		key1: ig.KEY.L,
		key2: undefined
	},
	cat: sc.OPTION_CATEGORY.CONTROLS,
	header: "cc-teleport",
};