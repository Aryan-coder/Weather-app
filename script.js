$('.main').hide()
function getWeather(){
    const city = document.getElementById('text').value
    if(city.length<=0){
        return(0)
    }
    const key = '32b467af083e78ec77d12b5e62f4c41e'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&apikey='+key+''
   
    fetch(url).then(data=>{
        return(data.json())
    }).then(obj=>{
        setWeather(obj,city)
    })
}

function setWeather(obj,area){
    try{
        $('#weather').html(obj.weather[0].main)
        $('#temp').html(obj.main.temp)
        $('.area-name').html(area.charAt(0).toUpperCase()+area.slice(1))
        $('.country').html(obj.sys.country)
        $('.gif img').attr("src", "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png");
        $('.msg').hide()
        $('.main').show()
    }
    catch(err){
        $('.main').hide()
        $('.msg').html('Place not found!')
        $('.msg').show()
    }
}

// country = obj.sys.country obj.main.temp_min obj.weather[0].icon


