var planetList = document.getElementById("planet-list");
//buat aray planet list dari swapi
var planets = [
    { 
        name: "Alderaan", 
        diameter:12500,
        rotation_period: "24",
        orbital_period: "364",
        population: "2000000000",
        climate: "temperate", 
        gravity: "1 standard",
    },
    { 
        name: "Yavin IV", 
        diameter:10200,
        rotation_period: "24",
        orbital_period: "4818",
        population: "1000",
        climate: "temperate, tropical", 
        gravity: "1 standard",
    },
    { 
        name: "Hoth", 
        diameter:7200,
        rotation_period: "23",
        orbital_period: "549",
        population: "unknown",
        climate: "frozen", 
        gravity: "1.1  standard",
    },
    { 
        name: "Dagobah", 
        diameter:8900,
        rotation_period: "23",
        orbital_period: "341",
        population: "unknown",
        climate: "murky", 
        gravity: "N/A",
        terrain: "grasslands, mountains", 
    },
    { 
        name: "Bespin", 
        diameter:118000,
        rotation_period: "12",
        orbital_period: "5110",
        population: "6000000",
        climate: "temperate", 
        gravity: "1.5 (surface), 1 standard (Cloud City)",
        
    },
    { 
        name: "Endor", 
        diameter:4900,
        rotation_period: "18",
        orbital_period: "402",
        population: "30000000",
        climate: "temperate",
        gravity: "0.85 standard", 
    },
    { 
        name: "Naboo", 
        diameter:12120,
        rotation_period: "26",
        orbital_period: "312",
        population: "4500000000",
        climate: "temperate", 
        gravity: "1 standard",
    },
    { 
        name: "Coruscant", 
        diameter:12240,
        rotation_period: "24",
        orbital_period: "368",
        population: "1000000000000",
        climate: "temperate", 
        gravity: "1 standard",
    },
    { 
        name: "Kamino", 
        diameter:19720,
        rotation_period: "27",
        orbital_period: "463",
        population: "1000000000",
        climate: "temperate", 
        gravity: "1 standard",
    },
    { 
        name: "Geonosis", 
        diameter:11370,
        rotation_period: "30",
        orbital_period: "256",
        population: "100000000000",
        climate: "temperate, arid", 
        gravity: "0.9  standard",
    },

];

var allPlanets = "<tr><th>Nama Planet</th><th>Diameter</th><th>Rotation Period</th><th>Orbital Period</th><th>Population</th><th>Climate</th> <th>Gravity</th></tr>";

for(var i = 0; i < planets.length; i++){
    // console.log(planets[i].name);
    var namaPlanet = planets[i].name;
    var diameter = planets[i].diameter;
    var rotationPeriod = planets[i].rotation_period;
    var orbitalPeriod = planets[i].orbital_period;
    var population = planets[i].population;
    var climate = planets[i].climate;
    var gravity = planets[i].gravity;
    allPlanets += "<tr><td>" + namaPlanet + "</td><td>" + diameter + "</td><td>" + rotationPeriod + "</td><td>" + orbitalPeriod +"</td><td>" + population + "</td><td>" + climate +"</td><td>" + gravity + "</td><tr>" ;

}

function showSearchResult(keyword){
    keyword = keyword.toLowerCase();

    planetList.innerHTML = allPlanets;

    // var keyword = "a";
    var searchResults = document.getElementById("search-result");
  
    var allResults = "<tr><th>Nama Planet</th><th>Diameter</th><th>Rotation Period</th><th>Orbital Period</th><th>Population</th><th>Climate</th></tr>";
  
    for(var j = 0; j < planets.length; j++){
        var name = planets[j].name.toLowerCase();
        var diameter = planets[j].diameter;
        var rotationPeriod = planets[j].rotation_period.toLowerCase();
        var orbitalPeriod = planets[j].orbital_period.toLowerCase();
        var population = planets[j].population.toLowerCase();
        var climate = planets[j].climate.toLowerCase();
        if(name.includes(keyword)){
            allResults += "<tr><td>" +  name + "</td><td>" + diameter + "</td><td>" + rotationPeriod + "</td><td>" + orbitalPeriod +"</td><td>" + population + "</td><td>" + climate + "</td><tr>" ;

        }
    }

    searchResults.innerHTML = allResults;
}
function onClickSearchResult(){
    
    var keyword = document.getElementById("search-keyword").value;

    showSearchResult(keyword);
}