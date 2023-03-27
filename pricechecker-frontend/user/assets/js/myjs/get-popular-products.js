function getAmazonProducts(maxNumberOfProducts) {
  let resultHtml = "";
  let url =
    "https://amazon23.p.rapidapi.com/product-search?query=laptop&country=AU";
  $.ajax({
    async: false,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "264d6a643bmshe4d1dae958ff50fp1b9242jsnf46f9c07e405",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
    success: function (response) {
      resultHtml = convertResponse2HtmlForPopularAmazon(
        JSON.stringify(response),
        "Amazon"
      );
    },
    fail: function (response, textStatus) {
      resultHtml +=
        "Status is " + textStatus + "\n Response is " + response.toString();
    },
  });
  return resultHtml;
}

function getEbayProducts(maxNumberOfProducts) {
  let resultHtml = "";
  let url =
    "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=iphone&country=canada";
  $.ajax({
    async: false,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d481c8a88fmsh66a39700101964fp15b1f5jsnb524d8ed956c",
      "X-RapidAPI-Host": "ebay-data-scraper.p.rapidapi.com",
    },
    success: function (response) {
      resultHtml = convertResponse2HtmlForPopularEbay(
        JSON.stringify(response),
        "Ebay"
      );
    },
  });
  return resultHtml;
}
function convertResponse2HtmlForPopularEbay(response, shopName, numberOfShow) {
  console.log(response);
  let resultHtml = "";
  let res = JSON.parse(response);
  let respLen = res.length;
  window.console.log(res);
  if (respLen > 0) {
    let i = 0;
    resultHtml =
      '<div class="position-relative">\n' +
      '                        <div class="border-bottom border-color-1 mb-2">\n' +
      '                            <h3 class="section-title mb-0 pb-2 font-size-22">Products From ' +
      shopName +
      "</h3>\n" +
      "                        </div>\n" +
      '                        <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"\n' +
      '                             data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"\n' +
      '                             data-slides-show="5"\n' +
      '                             data-slides-scroll="1"\n' +
      '                             data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"\n' +
      '                             data-arrow-left-classes="fa fa-angle-left right-1"\n' +
      '                             data-arrow-right-classes="fa fa-angle-right right-0"\n' +
      "                             data-responsive='[{\n" +
      '                                  "breakpoint": 1400,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 4\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                    "breakpoint": 1200,\n' +
      '                                    "settings": {\n' +
      '                                      "slidesToShow": 3\n' +
      "                                    }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 992,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 3\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 768,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 2\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 554,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 2\n' +
      "                                  }\n" +
      "                                }]'>";
    for (i = 0; i < respLen; i++) {
      let title = res[i]["name"];
      let description = res[i]["description"];
      let product_url = res[i]["link"];
      let image_url = res[i]["thumbnail"];
      let price = res[i]["price"];
      resultHtml +=
        '<div class="js-slide products-group">\n' +
        '                                <div class="product-item">\n' +
        '                                    <div class="product-item__outer h-100">\n' +
        '                                        <div class="product-item__inner px-wd-4 p-2 p-md-3">\n' +
        '                                            <div class="product-item__body pb-xl-2">\n' +
        '                                                <h5 class="mb-1 product-item__title"><a href="' +
        product_url +
        '" class="text-blue font-weight-bold">' +
        title +
        "</a></h5>\n" +
        '                                                <div class="mb-2">\n' +
        "                                                    <a onclick=\"onClickedCart('" +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')"  class="d-block text-center">' +
        '                                                           <img class="popular-image" src="' +
        image_url +
        '" alt="Image Description"></a>\n' +
        "                                                </div>\n" +
        '                                                <div class="flex-center-between mb-1">\n' +
        '                                                    <div class="prodcut-price">\n' +
        '                                                        <div class="text-gray-100">' +
        price +
        "</div>\n" +
        "                                                    </div>\n" +
        '                                                    <div class="d-none d-xl-block prodcut-add-cart">\n' +
        "                                                        <a  onclick=\"onClickedCart('" +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')"  class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>\n' +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        '                                            <div class="product-item__footer">\n' +
        '                                                <div class="border-top pt-2 flex-center-between flex-wrap">\n' +
        '                                                    <a data-tip="Go to Compare" onclick="goComparePage(\'' +
        title +
        '\')" class="text-gray-6 font-size-13"><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>\n' +
        '                                                    <a  data-tip="Add to Wishlist" onclick=" goFavouritePage(\'' +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')" class="text-gray-6 font-size-13"><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>\n' +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>";
      if (i === numberOfShow) {
        break;
      }
    }
    resultHtml += "</div></div>";
  }
  return resultHtml;
}
function convertResponse2HtmlForPopularAmazon(
  response,
  shopName,
  numberOfShow
) {
  let resultHtml = "";
  let resp = JSON.parse(response);
  let res = resp["result"];
  let resLen = res.length;
  if (resLen > 0) {
    let i = 0;
    resultHtml =
      '<div class="position-relative">\n' +
      '                        <div class="border-bottom border-color-1 mb-2">\n' +
      '                            <h3 class="section-title mb-0 pb-2 font-size-22">Products From ' +
      shopName +
      "</h3>\n" +
      "                        </div>\n" +
      '                        <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"\n' +
      '                             data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"\n' +
      '                             data-slides-show="5"\n' +
      '                             data-slides-scroll="1"\n' +
      '                             data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"\n' +
      '                             data-arrow-left-classes="fa fa-angle-left right-1"\n' +
      '                             data-arrow-right-classes="fa fa-angle-right right-0"\n' +
      "                             data-responsive='[{\n" +
      '                                  "breakpoint": 1400,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 4\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                    "breakpoint": 1200,\n' +
      '                                    "settings": {\n' +
      '                                      "slidesToShow": 3\n' +
      "                                    }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 992,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 3\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 768,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 2\n' +
      "                                  }\n" +
      "                                }, {\n" +
      '                                  "breakpoint": 554,\n' +
      '                                  "settings": {\n' +
      '                                    "slidesToShow": 2\n' +
      "                                  }\n" +
      "                                }]'>";
    for (i = 0; i < res.length; i++) {
      let title = res[i]["title"];
      let description = res[i]["title"];
      let product_url = res[i]["url"];
      let image_url = res[i]["thumbnail"];
      let price =
        res[i]["price"]["current_price"] + res[i]["price"]["currency"];
      resultHtml +=
        '<div class="js-slide products-group">\n' +
        '                                <div class="product-item">\n' +
        '                                    <div class="product-item__outer h-100">\n' +
        '                                        <div class="product-item__inner px-wd-4 p-2 p-md-3">\n' +
        '                                            <div class="product-item__body pb-xl-2">\n' +
        '                                                <h5 class="mb-1 product-item__title"><a href="' +
        product_url +
        '" class="text-blue font-weight-bold">' +
        title +
        "</a></h5>\n" +
        '                                                <div class="mb-2">\n' +
        "                                                    <a onclick=\"onClickedCart('" +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')"  class="d-block text-center">' +
        '                                                           <img class="popular-image" src="' +
        image_url +
        '" alt="Image Description"></a>\n' +
        "                                                </div>\n" +
        '                                                <div class="flex-center-between mb-1">\n' +
        '                                                    <div class="prodcut-price">\n' +
        '                                                        <div class="text-gray-100">' +
        price +
        "</div>\n" +
        "                                                    </div>\n" +
        '                                                    <div class="d-none d-xl-block prodcut-add-cart">\n' +
        "                                                        <a  onclick=\"onClickedCart('" +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')"  class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>\n' +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        '                                            <div class="product-item__footer">\n' +
        '                                                <div class="border-top pt-2 flex-center-between flex-wrap">\n' +
        '                                                    <a data-tip="Go to Compare" onclick="goComparePage(\'' +
        title +
        '\')" class="text-gray-6 font-size-13"><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>\n' +
        '                                                    <a  data-tip="Add to Wishlist" onclick=" goFavouritePage(\'' +
        title +
        "','" +
        description +
        "','" +
        product_url +
        "','" +
        image_url +
        "','" +
        price +
        '\')" class="text-gray-6 font-size-13"><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>\n' +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>";
      if (i === numberOfShow) {
        break;
      }
    }
    resultHtml += "</div></div>";
  }
  return resultHtml;
}
function getAllPopularProducts() {
  let amazonProducts = getAmazonProducts(numOfShowProducts);
  let ebayProducts = getEbayProducts(numOfShowProducts);
  let container = document.getElementById("popular-products-container");
  container.innerHTML = amazonProducts + ebayProducts;
  // container.innerHTML = ebayProducts;
}
getAllPopularProducts();