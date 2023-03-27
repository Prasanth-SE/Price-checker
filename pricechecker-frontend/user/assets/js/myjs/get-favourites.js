function getFavs(){
    let resultHtml = '';
    let ajaxRequest = $.ajax({
        async: false,
        method: 'GET',
        url: baseServerPathNameForUser + '/authorized/get-favourites.php?email=' + userEmail,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            let resJson = JSON.parse(response);
            if(resJson['status'] === 'ok' && resJson['data']){
                for (let i = 0; i < resJson['data'].length; i++){
                    let title = resJson['data'][i]['title'];
                    let description = resJson['data'][i]['description'];
                    let product_url = resJson['data'][i]['product_url'];
                    let image_url = resJson['data'][i]['image_url'];
                    let price = resJson['data'][i]['price'];
                    let eshop = resJson['data'][i]['eshop'];
                    let id = resJson['data'][i]['id'];
                    resultHtml += '<tr>\n' +
                        '                    <td><img src="' + image_url + '" width="100"/></td>\n' +
                        '                    <td>' + title + '</td>' +
                        '                    <td>' + description + '</td>' +
                        '                    <td>' + price + '</td>' +
                        '                    <td>' + eshop + '</td>' +
                        '                    <td><a onclick="onClickedCart(\'' + title + '\',\'' + description + '\',\'' + product_url + '\',\''+ image_url + '\',\'' +  price + '\')" target="_blank" class="btn btn-light">Order</a>\n' +
                        '                    </td>\n' +
                        '                    <td><div class="row"> <a onclick="function onclicked(id){deleteFav(id);} onclicked(' + id + ')"' +
                        '                           class="btn btn-light col-6">Delete</a>' +
                        '                        <a onclick="onClickedTrack(\'' + title + '\',\'' +  description + '\',\'' + product_url + '\',\'' + image_url + '\',\'' + price + '\',\'' + eshop + '\')"' +
                        '                           class="btn btn-light col-6">Track</a></div></td>\n' +
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
function deleteFav(id){
    $.ajax({
        async: false,
        method: 'GET',
        url: baseServerPathNameForUser + '/authorized/delete-favourite.php?id=' + id,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            let resJson = JSON.parse(response);
            if(resJson['status'] === 'ok'){
                showFavourites();
            }else{
                window.console.log(resJson['error']);
            }
        },
        fail: function (response){
            window.console.log(response.toString());
        }
    });
}
function showFavourites(){
    if(userEmail){
        let favHtml = getFavs();
        let table = document.getElementById('favs-tbody');
        table.innerHTML = favHtml;
    }else {
        window.console.log('You should login to visit "favourites" page')
    }
}