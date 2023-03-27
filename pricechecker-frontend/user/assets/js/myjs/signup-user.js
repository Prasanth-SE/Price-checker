function signup(){
    let name = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let alertDiv = document.getElementById('alert-error');
    if(confirmPassword === password){
        $.ajax(
            {
                async : false,
                method: 'POST',
                url: baseServerPathNameForUser + '/authentications/signup.php',
                // headers:{
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                // }
                data:{
                    name,
                    email,
                    password
                },
                success: function (response){
                    let resp = JSON.parse(response);
                    if(resp['status'] === 'ok'){
                        window.console.log(resp['error']);
                        window.location.href = '/pricechecker-frontend/user/authentications/login-user.html';
                    }else {
                        alertDiv.innerText = resp['error'];
                    }
                },
                fail: function (response){
                    alertDiv.innerText = response;
                }
            }
        );
    }else{
        alertDiv.innerText = 'Please check password again!';
    }
}