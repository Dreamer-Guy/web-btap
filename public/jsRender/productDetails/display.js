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

function getLargeProductImages(products) {
    const largeImgs = products.reduce((acc, product) => {
        const newImgDisplay = `
        <div class="lg-image">
            <a
            class="popup-img venobox vbox-item"
            href="${product.image}"
            data-gall="myGallery"
            >
                <img
                    src="${product.image}"
                    alt="product image"
                />
            </a>
        </div>`;
        acc += newImgDisplay;
        return acc;
    }, "");
    return largeImgs;
}


const getLeftContent = (products) => {
    const productListImages = getLargeProductImages(products);
    const LeftContent = `
    <div class="product-details-left">
        <div class="product-details-images slider-navigation-1">
        ${productListImages}
        </div>
    </div>
    `;
    return LeftContent;
};

function showDetails(productDetails) {
    const listedDetails = "";
    for (const detail of productDetails) {
        listedDetails += `
        <div>
            <h3>${detail}</h3>
            <span>${productDetails[detail]}</span>
        </div>
        `;
    }
    return showDetails;
}

function getRightContent(product,productDetails) {
    const rightContent = `
    <div class="col-lg-7 col-md-6">
            <div class="product-details-view-content pt-60">
              <div class="product-info">
                <h2>${product.name}</h2>
                <div class="rating-box pt-20">
                  <ul class="rating rating-with-review-item">
                    ${generateStars(product.rating)}
                    <li class="review-item"><a href="#">Read Review</a></li>
                    <li class="review-item"><a href="#">Write Review</a></li>
                  </ul>
                </div>
                <div class="price-box pt-20">
                  <span class="new-price new-price-2">$57.98</span>
                </div>
                <div class="product-desc">
                  <p>
                    ${showDetails(productDetails)}
                  </p>
                </div>
                <div class="single-add-to-cart">
                  <form action="#" class="cart-quantity">
                    <div class="quantity">
                      <label>Quantity</label>
                      <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" value="1" type="text" />
                        <div class="dec qtybutton">
                          <i class="fa fa-angle-down"></i>
                        </div>
                        <div class="inc qtybutton">
                          <i class="fa fa-angle-up"></i>
                        </div>
                      </div>
                    </div>
                    <button class="add-to-cart" type="submit">
                      Add to cart
                    </button>
                  </form>
                </div>
                <div class="product-additional-info pt-25">
                  <a class="wishlist-btn" href="wishlist.html"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                  <div class="product-social-sharing pt-25">
                    <ul>
                      <li class="facebook">
                        <a href="#"><i class="fa fa-facebook"></i>Facebook</a>
                      </li>
                      <li class="twitter">
                        <a href="#"><i class="fa fa-twitter"></i>Twitter</a>
                      </li>
                      <li class="google-plus">
                        <a href="#"><i class="fa fa-google-plus"></i>Google +</a>
                      </li>
                      <li class="instagram">
                        <a href="#"><i class="fa fa-instagram"></i>Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="block-reassurance">
                  <ul>
                    <li>
                      <div class="reassurance-item">
                        <div class="reassurance-icon">
                          <i class="fa fa-check-square-o"></i>
                        </div>
                        <p>
                          Security policy (edit with Customer reassurance
                          module)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="reassurance-item">
                        <div class="reassurance-icon">
                          <i class="fa fa-truck"></i>
                        </div>
                        <p>
                          Delivery policy (edit with Customer reassurance
                          module)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="reassurance-item">
                        <div class="reassurance-icon">
                          <i class="fa fa-exchange"></i>
                        </div>
                        <p>
                          Return policy (edit with Customer reassurance
                          module)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`;
    return rightContent;
}
$(document).ready(function () {
    $.get(`/api/products/get`, function (dataProducts) {
        const id="P01";//tech-debt: how to get id
        $.get(`/api/productDetails/get/${id}`, function (productDetails) {
            const products = dataProducts.products;
            const leftContent = getLeftContent(products);
            const rightContent = getRightContent(productDetails);
            // $('#display-product-details').replaceWith(productDisplayHtml);
        });
    });
});


