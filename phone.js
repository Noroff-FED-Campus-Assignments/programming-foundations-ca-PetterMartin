const city = {
    name: "Oslo",
    population: 1071000,
    capitalOfSweden: false,
    publicTransports: ["Train", "Tram", "Bus", "Subway"],
    arrival: function () {
      return "Welcome to " + this.name;
    }
  };

  console.log(arrival());