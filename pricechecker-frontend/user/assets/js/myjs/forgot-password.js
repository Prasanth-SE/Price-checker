function checkEmail(){
    let email = document.getElementById('email').value;
    let alertDiv = document.getElementById('alert-error');
    $.ajax({
        async: false,
        method: 'POST',
        url: baseServerPathNameForUser + '/authentications/email-check.php',
       data:{
            email
       },
        success: function (response) {
            let resp = JSON.parse(response);
            if(resp['status'] === 'ok'){
                window.console.log(resp['info']);
                window.localStorage.setItem('pricechecker-password-code', resp['info']);
                window.localStorage.setItem('pricechecker-temp-email', email);
                window.location.href = baseUserPathName + '/authentications/reset-code.html';
            }else{
                alertDiv.innerText = resp['error'];
            }
        },
        fail: function (response){
            alertDiv.innerText = response.toString();
        }
    });
}