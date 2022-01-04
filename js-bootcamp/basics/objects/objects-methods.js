let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount:0,
    checkAvail: function (partySize) {
       let seatsLeft = this.guestCapacity - this.guestCount
       return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        // let check = this.checkAvail(partySize)
        // if(check){
            this.guestCount += partySize
        // }
    },
    removeParty: function (partySize) {
       this.guestCapacity +=  partySize
       this.guestCount -= partySize
    }
}

// seatPArty
// removeParty
restaurant.seatParty(72)
console.log(restaurant.checkAvail(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvail(4))