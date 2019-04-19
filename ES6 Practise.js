class Element { 
constructor(name, buildYear) { 
  this.name = name; 
    this.buildYear = buildYear; 
}
}; 


class Park extends Element { 
   constructor(name, buildYear, area, numTrees) { 
   super(name, buildYear); 
       this.area = area; 
       this.numTrees = numTrees;
   }

    treeDensity() { 
    const density = this.numTrees/this.area; 
        console.log(`${this.name} has a tree density of ${density} trees per square km.`); 
    }
    
}

class Street extends Element { 
constructor(name, buildYear, length, size = 3){
    super(name, buildYear); 
    this.length = length; 
    this.size = size; 
}
    classifyStreet() { 
       var classification = new Map(); 
        classification.set(1, 'tiny'); 
        classification.set(2, 'small'); 
        classification.set(3, 'normal'); 
        classification.set(4, 'big'); 
        classification.set(5, 'huge'); 
        console.log(`${this.name} built in ${this.buildYear} is a ${classification.get(this.size)} street`)
    }
}

var allParks = [new Park('Green Park', 1987, 0.2, 215), 
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)]; 

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), 
                    new Street('Evergreen Street', 2008, 2.7, 2), 
                    new Street('4th Street', 2015, 0.8), 
                    new Street('Sunset Boulevard', 1982, 2.5, 5)]; 




function arrayCalculator(array) { 

    var sum = array.reduce((previous, current) => previous + current, 0) 
    
    return [sum, sum / array.length]; 

}



function reportParks(park) { 

    console.log(`-----PARKS REPORT-----`);

    //Density
    park.forEach(current => current.treeDensity()); 
    
    //Average age
    var now = new Date().getFullYear(); 
    var ages = park.map(current => now - current.buildYear); 
    var [totalAge, averageAge] = arrayCalculator(ages); 
    console.log(`Our ${park.length} parks have an average of ${averageAge.toFixed(2)} years.`)
    
    //Which park has more than 1000 trees
    var numTreeArray = park.map(current => current.numTrees)
    
    var index = numTreeArray.findIndex(current => current >= 1000);
    
    console.log(`${park[index].name} has more than 1000 trees`); 

}


function reportStreets(street) { 
     
     console.log(`-----STREETS REPORT-----`);
    
    //Total and average length of the town's streets. 
    
    var streetLengths = street.map(current => current.length)
    var [totalLength, averageLength] = arrayCalculator(streetLengths); 
    console.log(`Our ${street.length} streets have a total length of ${totalLength.toFixed(2)} km with an average of ${averageLength.toFixed(2)} km`); 
    
    //Classify each street 
    
    street.forEach(current => current.classifyStreet());

}




reportParks(allParks); 
reportStreets(allStreets); 
