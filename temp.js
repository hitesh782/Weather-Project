const getWeatherInfo = async() => {

    let search=document.getElementById("search").value;
    

    try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=af89fa728eaa857fb3654ecec705ba70`;

        const res= await fetch(url);
        const data=await res.json();
        

        const {temp, humidity, pressure}=data.main;
        const {main:weathermood} =data.weather[0];
        const {name} =data;
        const {speed} = data.wind;
        const {country} = data.sys;

        document.getElementById("temp").innerHTML=`${temp}&deg`;
        document.getElementById("date").innerHTML=new Date().toLocaleString();
        document.getElementById("place").innerHTML=name + " " +country;
        document.getElementById("weathermood").innerHTML=weathermood;
        document.getElementById("humidity").innerHTML=humidity;
        document.getElementById("pressure").innerHTML=pressure;
        document.getElementById("speed").innerHTML=speed;
        
    }
    catch(error){
        // console.log(error);
        alert("please enter a valid name");
    }
}