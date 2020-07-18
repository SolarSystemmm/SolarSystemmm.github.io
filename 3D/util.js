class Shop {
    constructor(data, place) {
        this.data = data
        this.place = place
        this.cart = {}
        this.render()
    }
    render() {
        let out = ''
        for (let item in this.data) {
            out += `<div class="item">`
            out += `<img src="${this.data[item]['img']}" alt="${this.data[item]['name']}">`
            out += `<p>${this.data[item]['name']}</p>`
            out += `<div class="buttons">`
            out += `<div class="button-plus" data-id="${this.data[item]['id']}">+</div>`
            out += `</div>`
            out += `</div>`
        }
        this.place.innerHTML = out
        this.activateButtons()
    }
    activateButtons() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('button-plus')) {
                this.addToCart(e.target.dataset['id'])
            }
            if (e.target.classList.contains('button-minus')) {
                this.removeFromCart(e.target.dataset['id'])
            }
        })
    }
    addToCart(dataAttr) {
        const filtered = this.data.filter(item => item.id === dataAttr)
        this.cart[dataAttr] = filtered[0]
        if (this.cart[dataAttr]['count'] === 0) {
            this.cart[dataAttr]['count'] += 1
        } else if (this.cart[dataAttr]['count'] >= 1) {
            this.cart[dataAttr]['count'] += 1
        }
          console.log(this.cart)
        new Cart(this.cart)
    }
    removeFromCart(dataAttr) {
        if (this.cart[dataAttr]['count'] === 1) {
            delete this.cart[dataAttr]
        } else if (this.cart[dataAttr]['count'] > 1) {
            this.cart[dataAttr]['count'] -= 1
        }
        console.log(this.cart)
        new Cart(this.cart)
    }
}



class Cart {
    constructor(data, id) {
        this.cart = data
        this.place = document.getElementsByClassName('container')[1]
        this.render()
    }
    render() {
        let out = ''
        for (let item in this.cart) {
            out += `<div class="item">`
            out += `<img src="${this.cart[item]['img']}" alt="${this.cart[item]['name']}">`
            out += `<p>${this.cart[item]['count']}</p>`
            out += `<div class="buttons">`
            out += `<div class="button-plus" data-id="${this.cart[item]['id']}">+</div>`
            out += `<div class="button-minus" data-id="${this.cart[item]['id']}">-</div>`
            out += `</div>`
            out += `</div>`
        }
        this.place.innerHTML = out
    }

}
