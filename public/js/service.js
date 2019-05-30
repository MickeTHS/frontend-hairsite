var _api_url = '/api';

/*
example:

api_call('/user?user_id=abcd-asd1', 'PUT', { firstname: 'Larry' }, function(status, data){
    if (status != 'ok') {
        // error
        return;
    }

    // success
    console.log(data.user);
});

*/

function api_call(url, method, data, callback) {
    
    var request = $.ajax({
        url: _api_url + url,
        method: method,
        headers: {
            'x-access-token': localStorage.getItem('jwt_token'),
        },
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (dd) {
            callback('ok', dd);
        }
    });

    request.done(function (msg) {
    
    });

    request.fail(function (jqXHR, textStatus) {
        if (jqXHR.status == 409) {
            location.href='login.html';
        }
        
        callback('fail', { msg: textStatus, status: jqXHR.status });
    });
}

function api_get(url, callback) {

    var request = $.ajax({
        url: _api_url + url,
        dataType: "json",
        headers: { 'x-access-token': localStorage.getItem('jwt_token') },
        success: function (data) {
            callback('ok', data);
        }
    });
    request.done(function () {
    
    });
    request.fail(function (jqXHR, textStatus) {
        if (jqXHR.status == 409) {
            location.href='login.html';
        }
        
        callback('fail', { msg: textStatus, status: jqXHR.status });
    });
}

