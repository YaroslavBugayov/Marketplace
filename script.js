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
                    <a href="#">Seller profile</a>]
                    <br>
                    <button>Buy</button>
                </div>
            `);
            console.log(element)
        })
    },
    error: (err) => {
        console.error(err)
    }
})