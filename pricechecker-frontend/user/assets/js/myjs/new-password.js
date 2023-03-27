function newPassword(){
    // if(window.localStorage.getItem('pricechecker-user-name') == null){
    //     window.location.href = '../../../authentications/login-user.html';
    // }else {
        let password = document.getElementById('password').value;
        let cpassword = document.getElementById('cpassword').value;
        let email = window.localStorage.getItem('pricechecker-temp-email');
        let alterError = document.getElementById('alert-error');
        if(password === cpassword){
            $.ajax({
                async: false,
                method: 'POST',
                url: baseServerPathNameForUser + '/authentications/new-password.php',
                data: {
                    email,
                    password
                },
                success: function (response){
                    let resp = JSON.parse(response);
                    if(resp['status'] === 'ok'){

                        window.console.log(resp['info']);
                        window.location.href = baseUserPathName + '/authentications/password-changed.html';
                    }else{
                        window.console.log(resp['error']);
                        window.location.href = baseUserPathName + '/authentications/login-user.html';
                    }
                },
                fail: function (response){
                    window.console.log(response);
                    window.location.href = baseUserPathName + '/authentications/login-user.html';
                }
            });
window.localStorage.removeItem("pricechecker-temp-email");
        }else {
            alterError.innerText = 'Please check again password and confirm password.';
        }

    // }
}