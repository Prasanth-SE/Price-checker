let resultHtml = '';
preloader = document.getElementById("user-preloading");
let preloader_html = "<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"></div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "                    <div class=\"preloader-single shadow-inner mt-b-30\">\n" +
    "                        <div class=\"ts_preloading_box\">\n" +
    "                            <div id=\"ts-preloader-absolute02\">\n" +
    "                                <div class=\"tsperloader2\" id=\"tsperloader2_four\"></div>\n" +
    "                                <div class=\"tsperloader2\" id=\"tsperloader2_three\"></div>\n" +
    "                                <div class=\"tsperloader2\" id=\"tsperloader2_two\"></div>\n" +
    "                                <div class=\"tsperloader2\" id=\"tsperloader2_one\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"></div>";
preloader.innerHTML = preloader_html;

async function getTrackedProducts(){
    return new Promise((resolve, reject) => {
        $.ajax({
        "async" : true,
        "crossDomain" : true,
        "method" : "GET",
        "url" : baseServerPathNameForUser + '/authorized/get-tracked-products.php?email=' + userEmail,
        "headers":{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        success: function (response) {
            // let resJson = JSON.parse(response);
            // if(resJson['status'] === 'ok' && resJson['data']){
            //     let id = resJson['data'][i]['id'];
            //     let image_url = resJson['data'][i]['image_url'];
            //     let title = resJson['data'][i]['title'];
            //     let desc = resJson['data'][i]['description'];
            //     let old_price = resJson['data'][i]['old_price'];
            //     let current_price = resJson['data'][i]['current_price'];
            //     let eshop = resJson['data'][i]['eshop'];
            //     let link = resJson['data'][i]['product_url'];
            //     let resBuff = [];
            //     if(eshop === 'Amazon'){
            //         resBuff = await getAmazonProductForTracking("", title, 1, 1);
            //     }
            //     if(eshop === 'Ebay'){
            //         resBuff = await getEbayProductForTracking("", title, 1, 1);
            //     }
            //     if(eshop === 'Walmart'){
            //         resBuff = await getWalmartProductForTracking("", title, 1, 1);
            //     }
            //     if(resBuff['error'] === 'ok'){
            //         let re = /C /gi;
            //         current_price = resBuff['data'][0]['price'].replace(re, "");
            //     }
            //
            //     resultHtml += '<tr>\n' +
            //         '                    <td><img src="' + image_url + '" width="100"/></td>\n' +
            //         '                    <td>' + title + '</td>' +
            //         '                    <td>' + desc + '</td>' +
            //         '                    <td>' + old_price + '</td>' +
            //         '                    <td>' + current_price + '</td>' +
            //         '                    <td>' + eshop + '</td>' +
            //         '                    <td><a href="' + link + '" target="_blank" class="btn btn-light">Order Now</a>\n' +
            //         '                    </td>\n' +
            //         '                    <td><a onclick="function onclicked(id){deleteTrackedProduct(id);} onclicked(' + id + ')"' +
            //         '                           class="btn btn-light">DEL</a></td>\n' +
            //         '                </tr>';
                return resolve(response);
            // }else{
            //     window.console.log(resJson['error']);
            // }
        },
        fail: function (response, textStatus) {
            retData['error'] = 'Status is ' + textStatus + '\n Response is ' + response.toString();
            return reject(retData);
        }
        });
    });
}
function deleteTrackedProduct(id){
    let ajaxRequest = $.ajax({
        async: false,
        method: 'GET',
        url: baseServerPathNameForUser + '/authorized/delete-track-product.php?id=' + id,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            let resJson = JSON.parse(response);
            if(resJson['status'] === 'ok'){
                window.location.href = baseUserPathName + '/authorized/track-products.html'
                // window.location.reload(true);
            }else{
                window.console.log(resJson['error']);
            }
        },
        fail: function (response){
            window.console.log(response.toString());
        }
    });
}
async function showTrackedProducts(){
    if(userEmail){
        let trackedResponse = await getTrackedProducts();
        let trackedHtml = await convertResponse2HtmlForTracking(trackedResponse);
        let table = document.getElementById('tracked-tbody');
        table.innerHTML = trackedHtml;
        console.log("tracked html:" + trackedHtml);
        if (preloader != null){
            preloader.innerHTML = "";
            preloader.setAttribute("class", "");
            console.log("preloader closed.");
        }else {
            console.log("preloader is null");
        }
    }else {
        window.console.log('You should login to visit "Tracked Products" page!');
    }
}
async function convertResponse2HtmlForTracking(response){
    let resJson = JSON.parse(response);
    if(resJson['status'] === 'ok' && resJson['data']){
        let data = resJson['data'];
        for (let i = 0; i < data.length; i ++){
            let id = data[i]['id'];
            let image_url = data[i]['image_url'];
            let title = data[i]['title'];
            let desc = data[i]['description'];
            let old_price = data[i]['old_price'];
            let current_price = data[i]['current_price'];
            let eshop = data[i]['eshop'];
            let link = data[i]['product_url'];
            let resBuff = {};
            if(eshop === 'Amazon'){
                resBuff = await getAmazonProductForTracking("", title, 1, 1);
            }
            if(eshop === 'Ebay'){
                resBuff = await getEbayProductForTracking("", title, 1, 1);
            }
            if(eshop === 'Walmart'){
                resBuff = await getWalmartProductForTracking("", title, 1, 1);
            }
            if(resBuff['error'] === 'ok' && resBuff['data'].length){
                let re = /C /gi;
                current_price = resBuff['data'][0]['price'].replace(re, "");
                await update_tracked_price(userEmail, old_price, current_price);
            }
            console.log("tracked-products:" + eshop + ":" + resBuff['data'][0]['price']);

            resultHtml += '<tr>\n' +
                '                    <td><img src="' + image_url + '" width="100"/></td>\n' +
                '                    <td>' + title + '</td>' +
                '                    <td>' + desc + '</td>' +
                '                    <td>' + old_price + '</td>' +
                '                    <td>' + current_price + '</td>' +
                '                    <td>' + eshop + '</td>' +
                '                    <td><a href="' + link + '" target="_blank" class="btn btn-light">Order</a>\n' +
                '                    </td>\n' +
                '                    <td><a onclick="function onclicked(id){deleteTrackedProduct(id);} onclicked(' + id + ')"' +
                '                           class="btn btn-light">DEL</a></td>\n' +
                '                </tr>';
        }
        return resultHtml;
    }
}
async function update_tracked_price(userEmail,oldPrice, currentPrice){
    return new Promise((resolve, reject) => {
        $.ajax({
        "async" : true,
        "crossDomain" : true,
        "method" : "GET",
        "url" : baseServerPathNameForUser + '/authorized/update_tracked_price.php?email=' + userEmail + '&oldPrice=' + oldPrice + '&currentPrice=' + currentPrice,
        "headers":{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        success: function (response) {
            return resolve(response);
        },
        fail: function (response, textStatus) {
            retData['error'] = 'Status is ' + textStatus + '\n Response is ' + response.toString();
            return reject(retData);
        }
    });
});
}
//get and show visited products
showTrackedProducts();