function setColor(color) {
    var iPhone_img = document.getElementById('iphone-family');
    //取得後才能操作,類次css選取器

    if (color == 'white') {
        iPhone_img.src = 'image/iphone11-white-select-2019.png'
    }
    if (color == 'black') {
        iPhone_img.src = 'image/iphone11-black-select-2019.png'
    }
    if (color == 'green') {
        iPhone_img.src = 'image/iphone11-green-select-2019.png'
    }
    if (color == 'yellow') {
        iPhone_img.src = 'image/iphone11-yellow-select-2019.png'
    }
    if (color == 'purple') {
        iPhone_img.src = 'image/iphone11-purple-select-2019.png'
    }
    if (color == 'red') {
        iPhone_img.src = 'image/iphone11-red-select-2019.png'
    }


}

function setPrice(price) {
    // var finally_price = document.getElementsByClassName('finally-price')[0];
    // finally_price.innerText = `NT$${price}`;

    document.getElementsByClassName('finally-price')[0].innerText = `NT$${price}`;
}