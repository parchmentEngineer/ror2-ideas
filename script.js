items.sort(function(a,b) {
	rarities = ["Common", "Uncommon", "Legendary"]
	rarityA = 100;
	rarityB = 100;
	for(var i=0; i<rarities.length; i++) {
		if(a.rarity == rarities[i]) {rarityA = i}
		if(b.rarity == rarities[i]) {rarityB = i}
	}
	if(rarityA > rarityB) {return 1}
	else if(rarityA < rarityB) {return -1}
	else {return a.name > b.name}
})


for(var i=0; i<items.length; i++) {
	item = items[i];
	if(item.name != "Name") {
		document.getElementById("items").innerHTML +=`
			<div class="itemImageSmall itemImageBorder">
				<img src="images/Bg`+item.rarity+`.png" class="itemImageSmall">
				<img src="images/`+item.name+`.png" class="itemImageSmall" >
				<div class="itemImageHover" id="itemImageHover`+i+`" onClick="displayItem('`+item.name+`')"></div>
			</div>
		`;
	}
}

active = -1;
displayItem(items[0].name);

function displayItem(itemName) {
	for(var i=0; i<items.length; i++) {
		var item = items[i]
		if(item.name == itemName && i!=active) {
			if(active>-1) {document.getElementById("itemImageHover"+active).classList.remove("itemImageHoverActive")}
			document.getElementById("itemImageHover"+i).classList.add("itemImageHoverActive")
			active = i;
			
			var els = document.getElementsByClassName("trans");
			Array.prototype.forEach.call(els, function(el) {
				el.classList.remove("see");
				el.classList.add("nosee");
			});
			
			setTimeout(() => {
				var item = items[active]
				document.getElementById("itemName").innerHTML = item.name;
				document.getElementById("itemRarity").innerHTML = item.rarity;
				
				tempDesc = item.description;
				tempDesc = tempDesc.replaceAll('{s|', '<span style="font-style: italic; color: #b7b7b7">')
				tempDesc = tempDesc.replaceAll('{d|', '<span style="color: #e5c962">')
				tempDesc = tempDesc.replaceAll('{h|', '<span style="color: #9ce562">')
				tempDesc = tempDesc.replaceAll('{u|', '<span style="color: #95cde5">')
				tempDesc = tempDesc.replaceAll('{hp|', '<span style="color: #e58262">')
				tempDesc = tempDesc.replaceAll('{v|', '<span style="color: #c62cf3">')
				
				tempDesc = tempDesc.replaceAll('{common|', '<span style="font-style: bold; color: #ffffff">')
				tempDesc = tempDesc.replaceAll('{uncommon|', '<span style="font-style: bold; color: #00ff66">')
				tempDesc = tempDesc.replaceAll('{legendary|', '<span style="font-style: bold; color: #ff0033">')
				tempDesc = tempDesc.replaceAll('{lunar|', '<span style="font-style: bold; color: #0066ff">')
				tempDesc = tempDesc.replaceAll('{boss|', '<span style="font-style: bold; color: #ffff00">')
				tempDesc = tempDesc.replaceAll('{void|', '<span style="font-style: bold; color: #c62cf3">')
				
				tempDesc = tempDesc.replaceAll('}', '</span>')
				
				document.getElementById("itemDescription").innerHTML = tempDesc;
				document.getElementById("itemInfo").innerHTML = item.info;
				document.getElementById("itemLore").innerHTML = item.lore;
				document.getElementById("itemImage").src = "images/" + item.name + ".png";
				
				var els = document.getElementsByClassName("trans");
				Array.prototype.forEach.call(els, function(el) {
					el.classList.remove("nosee");
					el.classList.add("see");
				});
				
				
				return;
			}, 250)
			
			break
		}
	}
}

function next(dir) {
	if(-1<active+dir && active+dir<items.length-1) {
		displayItem(items[active+dir].name)
	}
}