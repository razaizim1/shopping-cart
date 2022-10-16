function handleProductCount(product, isIncrease) {
    const productCount = document.getElementById(product + 'Count');
    const productCountNum = subtotalInput(product);
    let newProductCount = productCountNum;
    if (isIncrease == true) {
        newProductCount = productCountNum + 1;
    } if (isIncrease == false && productCountNum > 0) {
        newProductCount = productCountNum - 1;
    }

    productCount.value = newProductCount;
    let newProductPrice = newProductCount;
    if (product == 'firstHeadset') {
        newProductPrice = newProductCount * 259;
    } if (product == 'secondHeadset') {
        newProductPrice = newProductCount * 85;
    } if (product == 'thirdHeadset') {
        newProductPrice = newProductCount * 159;
    }
    document.getElementById(product + 'Price').innerText = "$" + newProductPrice;
    subtotalCount();
}

function subtotalCount() {
    const firstHeadsetCount = subtotalInput('firstHeadset');
    const secondHeadsetCount = subtotalInput('secondHeadset');
    const thirdHeadsetCount = subtotalInput('thirdHeadset');

    const subtotalAmount = firstHeadsetCount * 259 + secondHeadsetCount * 85 + thirdHeadsetCount * 159;
    document.getElementById('subtotalAmount').innerText = '$' + subtotalAmount;

    const taxCount = Math.round(subtotalAmount * 0.15);
    document.getElementById('taxAmount').innerText = '$' + taxCount;

    const totalAmount = taxCount + subtotalAmount;
    document.getElementById('total').innerText = '$' + totalAmount;
}


function subtotalInput(product) {
    const headsetCount = document.getElementById(product + 'Count');
    const headsetCountNum = parseInt(headsetCount.value);
    return headsetCountNum;
}

const proceedBtn = document.getElementById('proceedBtn').addEventListener('click', function () {
    const productDashboard = document.getElementById('productDashboard');
    productDashboard.style.display = 'none';
    document.getElementById('orderConfirm').style.display = 'block';
})