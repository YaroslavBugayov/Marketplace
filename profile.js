const params = new URLSearchParams(window.location.search)
const id = params.get('id')

$.ajax({
    url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/users/${id}`,
    dataType: 'json',
    success: (result) => {
        console.log(result)
        drawProfile(result)
    },
    error: (error) => {
        console.error(error)
    }
})

$.ajax({
    url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products?author_id=${id}`,
    dataType: 'json',
    success: (result) => {
        console.log(result)
        drawProducts(result)
    },
    error: (error) => {
        console.error(error)
    }
})

function drawProfile(profile) {
    $('#profile').append(`
        <img src="${profile.photo_url}">
        <h2>${profile.name} ${profile.surname}</h2>
        <p>Balance: ${profile.balance}</p>
    `)
}

function drawProducts(products) {
    products.forEach(element => {
            $('#products').append(`
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
}