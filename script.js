let cart = []
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    drawCart()
}

$.ajax({
    url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products`,
    dataType: 'json',
    success: (results) => {
        results.forEach(element => {
            $('#container').append(`
                <div class="product">
                    <img src="${element.photo_url}">
                    <p>${element.name}</p>
                    <p>Description: ${element.description}</p>
                    <p>Price: ${element.price}<p>
                    <a href="profile.html?id=${element.author_id}">Seller profile</a>
                    <br>
                    <button onclick="addProduct(${element.id})">Buy</button>
                </div>
            `);
            console.log(element)
        })
    },
    error: (err) => {
        console.error(err)
    }
})

$('#cart-button').click(() => {
    $('#cart-products').toggle()
})

function addProduct(id) {
    $.ajax({
        url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products/${id}`,
        dataType: 'json',
        success: (result) => {
            cart.push(result)
            drawCart()
            localStorage.setItem('cart', JSON.stringify(cart))
        },
        error: (error) => {
            console.error(error)
        }
    })
}

function drawCart() {
    $('#cart-products').empty()
    cart.forEach(element => {
        $('#cart-products').append(`
            <div class="cart-product">
                <img src="${element.photo_url}">
                <p>${element.name}</p>
                <p>Price: ${element.price}<p>
            </div>
        `)
    })
    $('#cart-products').append(`
        <button onclick="buyAll()">Buy all</button>
    `)
}

function buyAll() {
    cart = []
    $('#cart-products').empty()
    $('#cart-products').append(`Cart is empty`)
    localStorage.setItem('cart', '[]')
}