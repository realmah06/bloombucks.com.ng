document.getElementById("loginForm").addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = [
        {username: 'Mahadi', password: '4787', role: 'admin'},
        {username: 'Sani', password: '4787', role: 'subadmin'}
    ]

    if(username === ""){
        Swal.fire({
            icon: 'error',
            toast: 'true',
            position: 'left',
            title: 'Username must required!',
            confirmButtonColor: 'darkred',
            allowOutsideClick: 'true'
        })
    } else if(password === ''){
        Swal.fire({
            icon: 'error',
            toast: 'true',
            position: 'left',
            title: 'Password must required!',
            confirmButtonColor: 'darkred',
            allowOutsideClick: 'true'
        })
    }
})