items = [
	{
		name: "Farseeker’s Compass",
		rarity: "Common",
		description: "Each stage, has a {u|40%} {s|(+25% per stack)} chance to replace the teleporter item with a {u|Farseeker Potential}. The Potential has one {uncommon|Uncommon} or {boss|Boss} item that would normally be dropped, one {lunar|Lunar} Item, and one {void|Void} item.",
		info: "- This item stacks hyperbolically.<br>-The roll for this item is done once per stage, as soon as the boss is defeated. If multiple items drop, either they will all be Farseeker Potentials or none of them will be.",
		lore: "To Be Added..."
	},
	{
		name: "Stratosphere",
		rarity: "Common",
		description: "When this item is charged, jumping will launch you in the air with an {u|increased velocity}, increasing your max height by {u|+200%} {s|(+100% per stack)} and giving you {u|immunity to fall damage} for {u|5 seconds}. Recharges every {u|20 seconds}.",
		info: "- Displays recharge time using a buff, like the Bands, and can be recharged with Blast Shower.",
		lore: "To Be Added..."
	},
	{
		name: "Challenger’s Crown",
		rarity: "Common",
		description: "At the start of each stage, you have a {u|35%} {s|(+20% per stack)} chance to spawn {u|directly adjacent to the teleporter}. When you activate the teleporter, gain {d|+10%} {s|(+10% per stack)} {d|damage} and {u|+25%} {s|(+25% per stack)} {u|increased gold gain} until the end of the stage.",
		info: "- The chance to spawn at the portal stacks hyperbolically, while the other two stack linearly.",
		lore: "To Be Added..."
	},
	{
		name: "Sharpened Toolkit",
		rarity: "Common",
		description: "Using an interactable gives you {d|+3%} {s|(+3% per stack)} {d|critical strike chance} for the rest of the stage.",
		info: "- Displays increased crit chance using a buff.",
		lore: "To Be Added..."
	},
	{
		name: "Rubber Mallet",
		rarity: "Uncommon",
		description: "{d|+5% Critical Strike Chance}. Your {d|critical strikes} deal extra damage equal to {d|4x} {s|(+4x per stack)} your {d|critical strike chance}.",
		info: "- For example, if you had one Rubber Mallet and two Lens-Maker's Glasses, your critical strike chance would be 25%, giving you a total critical damage of 200% + (4 x 25%), or 300%.",
		lore: "Order: 24oz Rubber Mallet (Modified)<br>Tracking Number: 34******<br>Estimated Delivery: 02/25/2057<br>Shipping Method: High Priority<br>Shipping Address: **********, Mars<br>Shipping Details: I've taken a look at some of the \"modifications\" you've made to this thing and... whatever you're using this for, it ain't woodworking, I can tell that much. You're lucky you've paid me not to tell anyone about this."
	},
	{
		name: "The Lord’s Gaze",
		rarity: "Uncommon",
		description: "Every {u|20 seconds}, gives the {hp|Lord’s Gaze} debuff to a random enemy for {u|10 seconds}. If the enemy is killed while the debuff is active, it explodes for {d|750%} {s|(+750% per stack)} {d|damage} in a {u|20m} {s|(+5m per stack)} radius.",
		info: "- Enemies inflicted with the debuff are clearly marked with a floating eye over their heads.",
		lore: "\"All right, I'm here. Where's that relic you found?\"<br><br>\"Well... you see... I just had it right here a moment ago. I didn't want to lose it or anything, you know, and to be honest I kinda felt uncomfortable with it staring at me like that...\"<br><br>\"Don't tell me. You put it in one of the open security chests.\"<br><br>\"How was I supposed to know they lock automatically?\"<br><br>\"And you couldn't have mentioned you did this before I walked all the way out here? Come on, let's get back to base. There's gotta be at least someone there who's authorized to open these blasted things.\""
	},
	{
		name: "Li-Ion Battery",
		rarity: "Uncommon",
		description: "Boosts your {d|attack speed}, {h|health regen}, and {u|move speed} by {u|25%} {s|(+25% per stack)} for the first {u|3 minutes} of each stage.",
		info: "- When you pick this item up for the first time, immediately trigger its effect.<br>- Displays time left using a buff. Unlike other buff-based effects, the effect will go away completely as soon as the last stack wears off, but won't get weaker until then.<br>- Effect inspired by Harmless Orange#3999's suggestion.",
		lore: "Order: Lithium Ion Battery<br>Tracking Number: 76******<br>Estimated Delivery: 01/07/2057<br>Shipping Method: Standard<br>Shipping Address: Ithaca Labs, New York, Earth<br>Shipping Details: Something one of my students made while doing a lab about rechargable batteries. From the looks of it, she somehow created a battery that is able to be recharged without any input charge: just leaving it on the counter for a bit is enough to bring it back to full charge. I'm hoping one of your lab techies can figure out what's in this."
	},
	{
		name: "Lost Sprout",
		rarity: "Uncommon",
		description: "At the start of each stage, spawns a {h|Lost Sprout} next to your starting location. Return to the sprout after {u|150 seconds} have passed and interact with it to open the bloom, which will spawn {u|3} {s|(+2 per stack)} {u|common items}.",
		info: "- When you pick this item up for the first time, immediately plants a sprout near your position.<br>- Floating above the sprout, where the cost would be for a chest, is a timer showing low long until the sprout blooms.",
		lore: "Order: Carum Viorma (Sprout)<br>Tracking Number: 002*****<br>Estimated Delivery: 08/22/2057<br>Shipping Method: Standard (Biological)<br>Shipping Address: Homeworld Simulations Labs, Titan<br>Shipping Details: Looks like this little guy managed to sneak on board my ship as I left you last time! I've been enjoying tending to him for a bit, but I think it's time to send him back your way. I've put him in stasis for the duration of the trip, but when he gets there, make sure to get him in some soil quickly. I think he's almost ready to bloom!"
	},
	{
		name: "Twentyfold Cell",
		rarity: "Legendary",
		description: "You can use your equipment {u|even if it is on cooldown}. If you do, you will {d|double the effect of your equipment}, but will also {hp|reset your equipment cooldown}. After activating your equipment this way twenty total times, this item will {hp|break}.",
		info: "- For most items, the doubled effect will be acheived by activating the equipment again after 0.5 seconds. Some items, such as the Jade Elephant or Super Massive Leech will be hardcoded to instead activate again when the regular buff would expire.<br>- Every time this item is used, gain a stack of an invisible tracking item. This item will delete one stack of the Twentyfold Cell every time it reaches 20, and will also update a status effect that displays to the player how many times they've used this item.",
		lore: "To Be Added..."
	},
	{
		name: "Jar of Fireflies",
		rarity: "Common",
		description: "While sprinting, generate {u|1 firefly} every second, up to a maximum of {u|5 fireflies} {s|(+5 per stack)}. Generation rate increases with move speed. Whenever you take damage, release all gathered {u|fireflies} as homing projectiles that deal {d|250% damage}.",
		info: "- The amount of fireflies accumulated will be displayed with a buff.",
		lore: "To Be Added..."
	},
	{
		name: "Blood and Bone",
		rarity: "Legendary",
		description: "At the start of each stage, spawns three {hp|Bone Altars} at random positions. Each can be interacted with once to spend {hp|50% HP} in order to summon {d|3 Bone Shards} for the rest of the stage. {d|Bone Shards} orbit around you and automatically seek out enemies, dealing {d|500%} {s|(+500% per stack)} {d|damage} and inflicting {d|3 Bleed}.",
		info: "- Bone Shards attack enemies like a Resonance Disk, except they're always active and don't explode at the end.",
		lore: "To Be Added..."
	},
	{
		name: "Scarlet Shotgun",
		rarity: "Common",
		description: "Standing still for {u|2 seconds} will set the number of charges on this item to {d|1} {s|(+1 per stack)}. When you use your Special, consume a charge from this item to fire a cone of flame that deals {d|250% damage} and ignites enemies for {d|100% damage}.",
		info: "- The amount of charges this item has will be displayed with a buff.<br>- Standing still for 0.5 seconds while this item has fewer than maximum charges will play a click noise to indicate recharging has begun. A louder noise will play 1.5 seconds after the first sound, when the recharge completes.",
		lore: "To Be Added..."
	},
	{
		name: "How to Juggle",
		rarity: "Common",
		description: "On hit, {d|10% chance} to launch a juggling ball at the target. When it hits, it deals {d|150%} {s|(+150% per stack)} {d|damage} and ricochets back at a spot near your position. Catch it before it lands to {d|immediately launch it again} at another random target.",
		info: "- The ball will highlight the ground where it will land, so you know where to stand.",
		lore: "To Be Added..."
	},
	{
		name: "Party Supplies",
		rarity: "Common",
		description: "At the start of each stage, spawn {u|16 balloons} randomly around the stage. When you hit one, it pops to {d|create a damaging field} around itself that lasts for {u|15 seconds} and deals {d|30%} {s|(+30% per stack)} {d|damage per second}.",
		info: "- Also spawns balloons when picked up for the first time.<br>- Balloons float at around the same height wisps float at, making them unlikely to be hit by accident in the early game.<br>- The effect from balloons is a cylinder, not a sphere, meaning it can easily hit enemies on the ground.",
		lore: "To Be Added..."
	},
	{
		name: "Panic Button",
		rarity: "Uncommon",
		description: "For each non-primary skill you have on cooldown, your primary skill gains {d|+8%} {s|(+8% per stack)} {d|attack speed}.",
		info: "- None",
		lore: "To Be Added..."
	},
	{
		name: "Name",
		rarity: "Rarity",
		description: "Description",
		info: "- None",
		lore: "To Be Added..."
	}
]