async function getAmazonProductForTracking(searchCategory, searchString,currentPage, maxNumberOfProducts){
    let response = {};
    if(isMockData){
        response = await getAmazonProductsFromMock(searchCategory, searchString,currentPage, maxNumberOfProducts);
    }else {
        response = await getAmazonProductsFromApi("", searchString, currentPage,  maxNumberOfProducts);
    }
    return response;
}

async function getEbayProductForTracking(searchCategory, searchString, currentPage , maxNumberOfProducts){
    let response = {};
    if(isMockData){
        response = await getEbayProductsFromMock(searchCategory, searchString,currentPage, maxNumberOfProducts);
    }else {
        response = await getEbayProductsFromAPI(searchCategory, searchString,currentPage, maxNumberOfProducts);
    }
    return response;
}

async function getWalmartProductForTracking(searchCategory, searchString, currentPage, maxNumberOfProducts){
    let response = {};
    if(isMockData){
        response = await getWalmartProductsFromMock(searchCategory, searchString,currentPage, maxNumberOfProducts);
    }else {
        response = await getWalmartFromApi(searchCategory, searchString,currentPage, maxNumberOfProducts);
    }
    return response;
}