var fullName = document.getElementById('user-name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var userId = 0;
function getUserByEmail(email){
    var user=[];
    var data = {
        email: email
    }
    $.ajax(
        {
            async : false,
            method : 'POST',
            url : baseServerPathNameForUser + '/authorized/get-user-by-email.php',
            data: data,
            success: function (response) {
                var resp = JSON.parse(response);
                if((resp['status'] === 'ok')){
                    user = resp['data'];
                }else {
                    window.console.log("update user error: " + resp['error']);
                }
            },
            fail: function (response) {
                window.console.log("update user error: " + response);
            }
        }
    );
    return user;
}
function updateUser(){
    if(confirmPassword.value === password.value){
        var sentData = {
            'id' : userId,
            'name': fullName.value,
            'email': email.value,
            'password' : password.value
        };
        $.ajax(
            {
                async : false,
                method : 'POST',
                url : baseServerPathNameForUser + '/authorized/update-user.php',
                data: sentData,
                success: function (response) {
                    var resp = JSON.parse(response);
                    if((resp['status'] === 'ok')){
                        window.location.href = baseUserPathName + '/authentications/login-user.html';
                        window.location.reload(true);
                    }else {
                        window.console.log("add product error: " + resp['error']);
                    }
                },
                fail: function (response) {
                    window.console.log("add product error: " + response);
                }
            }
        );
    }else {
        window.alert('Please insert correct password.');
    }
}
function showUser(){
    var current_email = window.localStorage.getItem('pricechecker-user-name');
    var user = getUserByEmail(current_email);
    if (user.length < 1){
        //window.location.href = baseUserPathName ;
    }else {
        userId = user[0]['id'];
        fullName.value = user[0]['name'];
        email.value = user[0]['email'];
        password.value = user[0]['password'];
        confirmPassword.value = user[0]['password'];
    }
}
showUser();