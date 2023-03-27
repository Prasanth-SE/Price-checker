function checkResetOtp(){
    // if(window.localStorage.getItem('pricechecker-user-name') == null){
    //     window.location.href = '../../../authentications/login-user.html';
    // }else {
        let otp = document.getElementById('opt').value;
        let alterError = document.getElementById('alert-error');
        $.ajax({
            async: false,
            method: 'POST',
            url: baseServerPathNameForUser + '/authentications/reset-code.php',
            data:{
                otp
            },
            success: function (response) {
                let resp = JSON.parse(response);
                if(resp['status'] === 'ok'){
                    window.console.log(resp['info']);
                    window.location.href = baseUserPathName +  '/authentications/new-password.html';
                }else{
                    alterError.innerText = resp['error'];
                    window.location.href = baseUserPathName +  '/authentications/login-user.html';
                }
            },
            fail: function (response){
                alterError.innerText = response;
            }
        });
    // }
}
document.getElementById("opt").value = window.localStorage.getItem("pricechecker-password-code");