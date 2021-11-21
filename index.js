// Plotting CoronaVirus Cases on World Map - Interactive Dashboard Using Javascript & Mapbox

// Cases wrt to latitude and longitude

function updateMap(){
    // getting data through data feed
    // fetch("/data.json") //it returns a promise
    // .then(response => response.json()) //=> is used when we have only one argument
    // .then(data =>{

    // })
    fetch("data.json") 
    .then(response => response.json()) 
    .then(rsp =>{
        // console.log(rsp.data)
        rsp.data.forEach(element=>{
            latitude = element.latitude
            longitude = element.longitude
            cases = element.infected

            if(cases>250){                
                color = "rgb(255, 0, 0)"
                
            }
            else{
                color = `rgb(${cases}, 0, 0)`
            }
            
            
            // Marking on the map
            new mapboxgl.Marker({
            draggable: false,
            color: color
            })
                .setLngLat([longitude, latitude]) // remember this longitude(x-axis) then latitude(y-axis)
                .addTo(map)

        })
    })
}

// updateMap(); //calling a function


let interval = 2000
setInterval(updateMap,interval)