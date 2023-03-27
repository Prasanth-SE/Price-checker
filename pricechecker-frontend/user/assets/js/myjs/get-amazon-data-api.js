async function getAmazonProductsFromApi(searchCategory, searchString, currentPage, maxNumberOfProducts) {
    let retArray = [];
    let retData = {};
    let url = '';
    if (searchString) {
        url = "https://amazon23.p.rapidapi.com/product-search?query=" + searchString + "&country=AU"
    } else {
        url = "https://amazon23.p.rapidapi.com/product-search?query=laptop&country=AU"
    }

    return new Promise((resolve, reject) => {
        // console.log(url);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "264d6a643bmshe4d1dae958ff50fp1b9242jsnf46f9c07e405",
                "X-RapidAPI-Host": "amazon23.p.rapidapi.com"
            },
            success: function (response) {
                var myJsonString = JSON.stringify(response);

                let respBuff = JSON.parse(myJsonString);

                retArray = convertAmazonResponseForUI(respBuff, 'Amazon', currentPage, maxNumberOfProducts);
                retData['error'] = "ok";

                retData['data'] = retArray;
                return resolve(retData);
            },
            fail: function (response, textStatus) {
                retData['error'] = 'Status is ' + textStatus + '\n Response is ' + response.toString();
                window.console.log("amazon response:" + response.toString());
                return reject(retData);
            }
        });
    });
}
function convertAmazonResponseForUI(response, eshop, currentPage, numberInPage) {
    let retArray = [];
    let resp = response['result'];
    if (resp){
        let respLen = resp.length;
        let startIndex = 0;
        if (currentPage > 0 && (currentPage * numberInPage) < respLen) {
            startIndex = currentPage * numberInPage - 1;
        }
        let endIndex = numberInPage * (currentPage + 1);
        if (startIndex > respLen - 1) {
            startIndex = respLen - 11;
            if(startIndex < 0) startIndex = 0;
            endIndex = respLen;
        }
        if (endIndex > respLen - 1) {
            endIndex = respLen;
        }
        if (respLen > 0) {
            let startPriceStr = window.localStorage.getItem('price-filter-start');
            let endPriceStr = window.localStorage.getItem('price-filter-end');
            let startPrice = -1;
            let endPrice = 0;
            if (startPriceStr){
                startPrice = parseInt(startPriceStr);
            }
            if(endPriceStr){
                endPrice = parseInt(endPriceStr);
            }
            for (let i = 0; i < respLen; i++) {
                let row = resp[i];
                let buff = {};
                buff['title'] = removeSpecialChars(row['title']);
                buff['description'] = removeSpecialChars(row['title']);
                buff['product_url'] = row['url'];
                buff['image_url'] = row['thumbnail'];
                buff['price'] = row['price']['currency'] + row['price']['current_price'];
                buff['eshop'] = eshop;
                let price_buff = parseFloat(row['price']['current_price']);
                if(startPrice === -1){
                    retArray.push(buff);
                }else if(startPrice === -1000){
                    if(price_buff > 1000){
                        retArray.push(buff);
                    }
                }else {
                    if ((startPrice <= price_buff) && (price_buff <= endPrice)) {
                        retArray.push(buff);
                    }
                }
            }
            if((0 < retArray.length) && (retArray.length < 4)){
                let index = 0;
                for(let i = retArray.length; i < 4; i ++){
                    retArray.push(retArray[index]);
                    index ++;
                }
            }
        }
    }
    else {
        console.log(response + "response['result'] is not defined.");
    }

    return retArray;
}