window.onload = function () {
    
    // Age calculation function
    function calcAge() {
        // Get age from input
        var age = document.getElementById("age").value;
        
        // If age is empty or a negative number
        if (age == "" || age < 0) {
            age = 0;
        }
        
        // Display age in earth seconds & days
        var earthDays = age * 365.25;
        var earthSecs = age * 31557600;
        document.getElementById("earth-days").innerHTML = earthDays;
        document.getElementById("earth-seconds").innerHTML = earthSecs;
        
        // Planet Data
        var planets = [{Pname: "mercury", years: 0.2408467},
                       {Pname: "venus", years: 0.61519726},
                       {Pname: "mars", years: 1.8808158},
                       {Pname: "jupiter", years: 11.862615},
                       {Pname: "saturn", years: 29.447498},
                       {Pname: "uranus", years: 84.016846},
                       {Pname: "neptune", years: 164.79132},
                       {Pname: "pluto", years: 248.00}];
        
        // Iterate, calculate & output each planetary age
        for (i=0; i < planets.length; i++) {
            var planetaryAge = age / planets[i].years;
            document.getElementById(planets[i].Pname).innerHTML = planetaryAge;
        }
    
    } // End of calcAge()
        
        // Activate calculation function when button is clicked
    document.getElementById("submit-age").addEventListener("click", calcAge);
        
}; // End of window.onload