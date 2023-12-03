const waterTemperature = prompt("Введіть температуру")

const weather = {
    temperature: waterTemperature,
    humidity: "60%",
    windSpeed: "16 m/s",
    water (temperature2) {

        this.temperature = temperature2;

        if (temperature2 < 0) {

            return true;
        } else {

            return false;
        }
    },
    messege (water){

        this.water = water;

        if(water === true){
            alert("температура нижче 0 градусів Цельсія")
        } else{
            alert("температура вища 0 градусів Цельсія")
        }
    },
}

// weather.water();

// console.log(weather.water());

weather.messege();

console.log(weather.messege());