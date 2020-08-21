// showiPhone();
document.querySelector('.iphone-btn').addEventListener('click', showiPhone);
document.querySelector('.ipad-btn').addEventListener('click', showiPad);

function setColor(color) {
    var iPhone_img = document.getElementById('iphone-family');
    //取得後才能操作,類次css選取器
    var iPad_img = document.getElementById('ipad-family');

    if (color == 'white') {
        iPhone_img.src = 'image/iphone11-white-select-2019.png';
    }
    if (color == 'black') {
        iPhone_img.src = 'image/iphone11-black-select-2019.png';
    }
    if (color == 'green') {
        iPhone_img.src = 'image/iphone11-green-select-2019.png';
    }
    if (color == 'yellow') {
        iPhone_img.src = 'image/iphone11-yellow-select-2019.png';
    }
    if (color == 'purple') {
        iPhone_img.src = 'image/iphone11-purple-select-2019.png';
    }
    if (color == 'red') {
        iPhone_img.src = 'image/iphone11-red-select-2019.png';
    }
    if (color == 'spacegray') {
        iPad_img.src = 'image/ipad_spacegray_set.jpg';
    }
     if (color == 'silver') {
        iPad_img.src = 'image/ipad_silver_set.jpg';
    }
     if (color == 'gold') {
        iPad_img.src = 'image/ipad_gold_set.jpg';
    }
}

function setPrice(price) {
    // var finally_price = document.getElementsByClassName('finally-price')[0];
    // finally_price.innerText = `NT$${price}`;

    document.getElementsByClassName('finally-price')[0].innerText = `NT$${price}`;
}

function showiPhone() {
    document.querySelector('.apple-products').innerText = '';
    //選到目標的template(for iphone)
    let iphone_template = document.querySelector('.iphone-template');
    //先透過content屬性取得template的內容，再透過cloneNode(true)複製此template節點及其所有子節點
    //寫法1
    //let iphone_template_clone = iphone_template.content.cloneNode(true);
    //寫法2
    var iphone_template_clone = document.importNode(iphone_template.content, true);
    iphone_template_clone.querySelector('.iphone-img-div').innerHTML =
        "<img id='iphone-family' src='image/iphone11-family.jpg' alt='hone11-family'>";
    let apple_products = document.querySelector('.apple-products');

    iphone_template_clone.querySelector('.top h2').innerText = '購買iPhone11';

    iphone_template_clone.querySelector('.top p').innerText = '選擇外觀。';

    var sel_white_img = document.createElement('img');
    sel_white_img.src = 'image/finish-white-201909.jpg';
    iphone_template_clone.querySelector('.select-color-white').appendChild(sel_white_img);

    var sel_white_text = document.createElement('p');
    sel_white_text.innerText = '白色';
    iphone_template_clone.querySelector('.select-color-white').appendChild(sel_white_text);

    //將複製回來的template加入為apple_products子元素(然後iphone_template_clone會變成null)
    apple_products.appendChild(iphone_template_clone);
}
function showiPad() {
    document.querySelector('.apple-products').innerText = '';
}
