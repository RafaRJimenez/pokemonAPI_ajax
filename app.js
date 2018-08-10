$(document).ready(function(){

	// THE MAGIC GOES HERE
var main = $("#main");
var pokemon;
var btn= $("#btn");
btn.on("click", muestraPokemon);
var typeChoosed = $(".kind");
$("#type").on('change', muestraTipos);

/*

$.ajax({
	url: "http://pokeapi.co/api/v2/pokemon",
	type: "GET",
	dataType: "JSON",
	success: handleResponse
})
function handleResponse(response){
	var troll = response;
	//console.log(troll);
	pokemon = response.results;
	showPokemon(pokemon);
}

function showPokemon(pokemon){
	//alert (pokemon);
	//console.log(pokemon);
}

*/

function muestraPokemon(){
	var tipoPokemon = $("#tipo").val();
	//main.append(pokemon[tipoPokemon].name);
	$.ajax({
	url: "http://pokeapi.co/api/v2/pokemon/"+ tipoPokemon + "/",
	type: "GET",
	dataType: "JSON",
	success: function(response){
		console.log(response);
		var nombre = response.forms[0].name;
		var tipo = response.types[0].type.name;
		var foto = "<div class= 'picture'><img src = '"+ response.sprites.front_default+ "'></div>";
		var stats = {
			speed:  response.stats[0].base_stat ,
			specialDefense:  response.stats[1].base_stat ,
			specialAttack:  response.stats[2].base_stat ,
			defense:  response.stats[3].base_stat ,
			attack:  response.stats[4].base_stat ,
			hitPoints:  response.stats[5].base_stat 
		}
		main.append("<div class='card'><h2>"+nombre+"</h2>"+ "<h2>Tipo: "+tipo+"</h2>"+
					"<h2>stats</h2><ul><li>Speed "+stats.speed+"</li><li>Special Defense "+stats.specialDefense+"</li><li>Special Attack "+stats.specialAttack+"</li><li>Defense " +stats.defense+"</li><li>Attack "+stats.attack+"</li><li>Hit Points "+ stats.hitPoints +"</li></ul>"
						+foto+
			  		"</div>" 
			);
	}
})

}


function muestraTipos(){
	var tipoPokemon = $("#type").val();
	alert(tipoPokemon);
	//main.append(pokemon[tipoPokemon].name);
		for(i=0;i<1000;i++){
		$.ajax({
		url: "http://pokeapi.co/api/v2/pokemon/"+ i + "/",
		type: "GET",
		dataType: "JSON",
		success: function(response){
			if (tipoPokemon === response.types[0].type.name){

					alert("hola");

			main.append("<div class='card'><h2>"+nombre+"</h2>"+ "<h2>Tipo: "+tipo+"</h2>"+
					"<h2>stats</h2><ul><li>Speed "+stats.speed+"</li><li>Special Defense "+stats.specialDefense+"</li><li>Special Attack "+stats.specialAttack+"</li><li>Defense " +stats.defense+"</li><li>Attack "+stats.attack+"</li><li>Hit Points "+ stats.hitPoints +"</li></ul>"
						+foto+
			  		"</div>" 
			);
		}
		}
		})
	}
}



})

