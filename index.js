function fun(){
    var name = document.getElementById("search").value
    var request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/"+name)
    request.send()


    request.addEventListener("load",()=>{
        var rawdata = request.responseText
        var [data]  = JSON.parse(rawdata)
       document.getElementById("official").innerHTML=data.name.official
    //    document.getElementById("hin").innerHTML=data.hin.official
       document.getElementById("altSpellings").innerHTML=data.altSpellings
       document.getElementById("capital").innerHTML=data.capital[0]
       document.getElementById("flags").src=data.flags.svg
       document.getElementById("population").innerHTML=data.population
       document.getElementById("area").innerHTML=data.area
       document.getElementById("borders").innerHTML=data.borders
       document.getElementById("timezones").innerHTML=data.timezones
       document.getElementById("landlocked").innerHTML=data.landlocked
       document.getElementById("continents").innerHTML=data.continents
       document.getElementById("region").innerHTML=data.region
       document.getElementById("subregion").innerHTML=data.subregion
       document.getElementById("independent").innerHTML=data.independent
       document.getElementById("maps").href=data.maps.googleMaps
    })
}

function getData(){
    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/india")
    request.send()

    request.addEventListener("load",()=>{
        var rawdata = request.responseText
        var [data]  = JSON.parse(rawdata)
       document.getElementById("official").innerHTML=data.name.official
       document.getElementById("altSpellings").innerHTML=data.altSpellings
    //    document.getElementById("hin").innerHTML=data.hin.official
       document.getElementById("capital").innerHTML=data.capital[0]
       document.getElementById("flags").src=data.flags.svg
       document.getElementById("population").innerHTML=data.population
       document.getElementById("area").innerHTML=data.area
       document.getElementById("borders").innerHTML=data.borders
       document.getElementById("timezones").innerHTML=data.timezones
       document.getElementById("landlocked").innerHTML=data.landlocked
       document.getElementById("continents").innerHTML=data.continents
       document.getElementById("region").innerHTML=data.region
       document.getElementById("subregion").innerHTML=data.subregion
       document.getElementById("independent").innerHTML=data.independent
       document.getElementById("maps").href=data.maps.googleMaps
    })
}
getData()