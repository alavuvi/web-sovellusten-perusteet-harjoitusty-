const now    = new Date()
const date   = now.toISOString().slice(0,10)
const hour   = now.getHours()
const url    = `https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`
const proxy  = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
const current_price = document.querySelector('#current-price')

const spot = async() => {
    try {
        const response = await fetch(proxy)
        if (response.ok) {
            const json = await response.json()
            const price = json.price
            current_price.innerHTML = `${price} c/kWh`
        } else {
            alert("Error getting data")
        }
    } catch (error) {
        alert('Error getting data: ' + error)
    }
}

spot()