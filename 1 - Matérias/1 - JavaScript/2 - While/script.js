let velocity = 80

while (velocity > 0){
    alert(`the car is speed ${velocity} per hour.`)
    velocity -= 20
    alert(`Slowing 20 km/h`)

    if(velocity === 40){
        break
    }
}
alert("The car stopped.")