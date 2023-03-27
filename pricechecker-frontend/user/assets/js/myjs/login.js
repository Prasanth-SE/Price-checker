function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : 'POST',
            url : baseServerPathNameForUser + '/authentications/login.php',
            data: {
                email,
                password
            },
            success: function (response) {
                let resp = JSON.parse(response);
                if((resp['status'] === 'ok')){
                    window.localStorage.setItem('pricechecker-user-name', resp['email']);
                    window.localStorage.setItem('pricechecker-user-role', resp['role']);
                    window.location.href = '/pricechecker-frontend/user/authorized/home.html';
                }else {
                    let alert = document.getElementById('login-fail-alert');
                    alert.innerText = resp['error'];
                    alert.style.visibility = 'visible';
                }
            },
            fail: function (response) {
                let alert = document.getElementById('login-fail-alert');
                alert.innerText = response;
                alert.style.visibility = 'visible';
            }
        }
    );
}