var map = L.map('map').setView([41.5, 74.582748], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([42.832415, 74.55336]).addTo(map)

fetch("https://api.jsonbin.io/b/6290ec3f449a1f3821f1cb80")
    .then(res => res.json())
        .then(data => renderCarMarkers(data.devices));

const renderCarMarkers = (cars) => {
    cars.map(car => {
        console.log(car.position.x)
        console.log(car.position.y)
        L.marker([car.position.y, car.position.x], {
            title : car.alias,
            alr : car.alias
        }).addTo(map)
    })
}

