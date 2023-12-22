function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    fetch('http://localhost/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            // 处理登录成功或失败的响应
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;


    fetch('http://localhost/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            // 处理注册成功或失败的响应
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}