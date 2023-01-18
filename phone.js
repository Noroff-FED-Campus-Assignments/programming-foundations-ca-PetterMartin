const city = {
    name: "Oslo",
    population: {
      humans: 1071000,
      dogs: 200000,
    },
    capitalOfSweden: false,
    publicTransports: ["Train", "Tram", "Bus", "Subway"],
    arrival: function () {
      return "Welcome to " + this.name;
    }
  };

  console.log(city.arrival());