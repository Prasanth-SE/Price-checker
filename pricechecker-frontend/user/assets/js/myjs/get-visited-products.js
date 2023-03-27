
let resultHtml = '';
function getVisitedProducts(){
    $.ajax({
        async: false,
        method: 'GET',
        url: baseServerPathNameForUser + '/authorized/get-visited-products.php?email=' + userEmail,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            let resJson = JSON.parse(response);
            if(resJson['status'] === 'ok' && resJson['data']){
                for (let i = 0; i < resJson['data'].length; i++){
                    resultHtml += '<tr>\n' +
                        '                    <td><img src="' + resJson['data'][i]['image_url'] + '" width="100"/></td>\n' +
                        '                    <td>' + resJson['data'][i]['title'] + '</td>' +
                        '                    <td>' + resJson['data'][i]['description'] + '</td>' +
                        '                    <td>' + resJson['data'][i]['price'] + '</td>' +
                        '                    <td><a href="' + resJson['data'][i]['product_url'] + '" target="_blank" class="btn btn-light">Order Now</a>\n' +
                        '                    </td>\n' +
                        '                    <td><a onclick="function onclicked(id){deleteVisitedProduct(id);} onclicked(' + resJson['data'][i]['id'] + ')"' +
                        '                           class="btn btn-light">DEL</a></td>\n' +
                        '                </tr>';
                }
            }else{
                window.console.log(resJson['error']);
            }
        },
        fail: function (response){
            window.console.log(response.toString());
        }
    });
    return resultHtml;
}
function deleteVisitedProduct(id){
    let ajaxRequest = $.ajax({
        async: false,
        method: 'GET',
        url: baseServerPathNameForUser + '/authorized/delete-visited-product.php?id=' + id,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            let resJson = JSON.parse(response);
            if(resJson['status'] === 'ok'){
                window.location.href = baseUserPathName + '/authorized/visited-trends.html'
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
function showVisitedProducts(){
    if(userEmail){
        let visitedHtml = getVisitedProducts();
        let table = document.getElementById('visited-tbody');
        table.innerHTML = visitedHtml;
    }else {
        window.console.log('You should login to visit "Recent Visited Product" page!');
    }
}
//get and show visited products
showVisitedProducts();