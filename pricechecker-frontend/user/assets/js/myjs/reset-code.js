function checkResetOtp(){
    if(window.localStorage.getItem('pricechecker-user-name') == null){
        window.location.href = '../../../authentications/login-user.html';
    }else {
        let opt = document.getElementById('opt').value;
        let alterError = document.getElementById('alert-error');
        let ajaxRequest = $.ajax({
            async: false,
            method: 'POST',
            url: baseServerPathNameForUser + '/authentications/reset-code.php',
            data:{
                opt
            }
            // headers:{
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // }
        });
        ajaxRequest.success(function (response){
            let resp = JSON.parse(response);
            if(resp['status'] === 'ok'){
                window.console.log(resp['info']);
                window.location.href = '../../../authentications/new-password.html';
            }else{
                alterError.innerText = resp['error'];
                window.location.href = '../../../authentications/login-user.html';
            }
        });
        ajaxRequest.fail(function (response){
            alterError.innerText = response;
        });
    }
}