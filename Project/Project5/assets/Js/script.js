function setColor(color) {
    var iPhone_img = document.getElementsByClassName('iphone-family')[0];
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