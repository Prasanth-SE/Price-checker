async function getAmazonProductsFromMock(searchCategory, searchString, currentPage, maxNumberOfProducts, returnData){
    let retArray = [];
    let retData = {};
    if(searchString === ''){
        searchString = 'all';
    }
    return new Promise((resolve, reject) => {
        $.ajax({
            "async" : true,
            "crossDomain" : true,
            "method" : "GET",
            "url" : baseServerPathNameForUser + '/products/amazon-compare-products.php?num=' + currentPage + '&searchval=' + searchString + '&category=' + searchCategory,
            "headers":{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                setTimeout(function() {
                    let respBuff = JSON.parse(response);

                    retArray = convertAmazonResponseForUI(respBuff['data'], 'Amazon', currentPage, maxNumberOfProducts);
                    retData['error'] = "ok";

                    retData['data'] = retArray;
                    return resolve(retData);
                }, 10);

            },
            fail: function (response, textStatus) {
                retData['error'] = 'Status is ' + textStatus + '\n Response is ' + response.toString();
                return reject(retData);
            }

        });
    })  ;
    // $.ajax(
    //     {
    //         async : false,
    //         method : "GET",
    //         url : baseServerPathNameForUser + '/products/amazon-compare-products.php?num=' + currentPage + '&searchval=' + searchString + '&category=' + searchCategory,
    //         headers:{
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //         },
    //         success: function (response, returnData) {
    //             setTimeout(function() {
    //                 let resp = JSON.parse(response);
    //                 retData['error'] = 'ok';
    //                 retArray = convertAmazonResponseForUI(resp['data'], 'Amazon',  currentPage, maxNumberOfProducts);
    //                 returnData(retArray);
    //             }, 4000);
    //         },
    //         fail: function (response, textStatus){
    //             retData['error'] = 'Status is ' + textStatus + '\n Response is '+ response.toString();
    //         }
    //     }
    // );
    // retData['data'] = retArray;
    // return retData;
}