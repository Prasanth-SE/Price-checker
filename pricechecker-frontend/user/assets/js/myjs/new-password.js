function newPassword(){
    if(window.localStorage.getItem('pricechecker-user-name') == null){
        window.location.href = '../../../authentications/login-user.html';
    }else {
        let password = document.getElementById('password').value;
        let cpassword = document.getElementById('cpassword').value;
        let email = window.localStorage.getItem('pricechecker-user-name');
        let alterError = document.getElementById('alert-error');
        if(password === cpassword){
            let ajaxRequest = $.ajax({
                async: false,
                method: 'POST',
                url: baseServerPathNameForUser + '/authentications/new-password.php',
                // headers:{
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                // }
                data: {
                    email,
                    password
                }
            });
            ajaxRequest.success(function (response){
                let resp = JSON.parse(response);
                if(resp['status'] === 'ok'){

                    window.console.log(resp['info']);
                    window.location.href = '../../../authentications/password-changed.html';
                }else{
                    window.console.log(resp['error']);
                    window.location.href = '../../../authentications/login-user.html';
                }
            });
            ajaxRequest.fail(function (response){
                window.console.log(response);
                window.location.href = '../../../authentications/login-user.html';
            });
        }else {
            alterError.innerText = 'Please check again password and confirm password.';
        }

    }
}