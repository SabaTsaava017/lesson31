function getSalePrice (product_price,sale_percentage){
    let sale = (product_price * sale_percentage) / 100;
    let salePrice = product_price - sale;
     const price = document.createElement("p");
     price.textContent = salePrice;
    document.body.appendChild(price);


}
getSalePrice(1000,20);

const info = [{ name: "Product 1", price: 200, created_at: "01-02-2022" }]

function productName (productInfo){
    productInfo.forEach(object => {
        const div = document.createElement("div");
        document.body.appendChild(div);

        let productName = document.createElement("div");
        productName.innerHTML = `სახელი : ${object.name}`
        div.appendChild(productName);
        productName.classList.add("name");



        let productPrice = document.createElement("div");
        productPrice.innerHTML = `ფასი : ${object.price}`
        div.appendChild(productPrice);
        productPrice.classList.add("price")



        let productData = document.createElement("div");
        productData.innerHTML = `გამოქვეყნების თარიღი : ${object.created_at}`
        div.appendChild(productData);
        productData.classList.add("data")

    });


}
productName(info);

const button = document.createElement("button")
document.body.appendChild(button);
button.textContent = "click me"
button.addEventListener("click", () => {
    window.open ( "https://youtube.com/")
})
button.classList.add("button")










