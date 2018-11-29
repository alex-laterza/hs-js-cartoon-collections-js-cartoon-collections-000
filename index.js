function dwarfRollCall(dwarves) {
  var newStr = "";
  dwarves.forEach(function(name, idx) {
  	newStr += (idx+1 + ". " + name + " ");
  });
  return newStr;
}



function summonCaptainPlanet(planeteerCalls){
	return planeteerCalls.map(function(name) {
		return name.toUpperCase() + "!";
	});
}


function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}


function findTheCheese (foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}
