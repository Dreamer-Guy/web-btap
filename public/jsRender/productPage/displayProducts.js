
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<li><i class="fa fa-star"></i></li>'; // Full star
        } else {
            stars += '<li class="no-star"><i class="fa fa-star-o"></i></li>'; // Empty star
        }
    }
    return stars;
}


function getProductsElement(products) {
    const productsElement = products.reduce((acc, product) => {
        const productElement = `
        <div class="col-lg-4 col-md-4 col-sm-6 mt-40">
    <div class="single-product-wrap">
        <div class="product-image">
            <a href="product-detail.html">
                <img src="${product.image}" alt="Li's Product Image" />
            </a>
        </div>
        <div class="product_desc">
            <div class="product_desc_info">
                <div class="product-review">
                    <h5 class="manufacturer">
                        {/* tech debt-s */}
                        <a href="product-details.html">Graphic Corner</a>
                    </h5>
                    <div class="rating-box">
                        <ul class="rating">
                            ${generateStars(product.rating)}
                        </ul>
                    </div>
                </div>
                <h4>
                    <a class="product_name" href="product-detail.html">${product.name}</a>
                </h4>
                <div class="price-box">
                    <span class="new-price">${product.price}</span>
                </div>
            </div>
            <div class="add-actions">
                <ul class="add-actions-link">
                    <li class="add-cart active">
                        <a href="shopping-cart.html">Add to cart</a>
                    </li>
                    <li>
                        <a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter">
                            <i class="fa fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
        acc += productElement;
        return acc;
    }, "");
    return productsElement;
}

$(document).ready(function () {
    $.get(`/api/products/get`, function (dataProducts) {
        const products=dataProducts.data;
        const productsElement = getProductsElement(products);
        const newEle=document.createElement("div");
        newEle.innerText=productsElement;
        document.getElementById("products-list").innerHTML = productsElement;
    });
});