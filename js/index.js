document.getElementById("loginForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = [
        {username: 'Mahadi', password: '4787', role: 'admin'},
        {username: 'Sani', password: '4787', role: 'subadmin'}
    ];

    if (username === "") {
        Swal.fire({
            icon: 'error',
            toast: true,
            position: 'bottom-end',
            title: 'Username is required!',
            confirmButtonColor: 'darkred',
            allowOutsideClick: true
        });
        return; // stop further execution
    }

    if (password === '') {
        Swal.fire({
            icon: 'error',
            toast: true,
            position: 'bottom-end',
            title: 'Password is required!',
            confirmButtonColor: 'darkred',
            allowOutsideClick: true
        });
        return; // stop further execution
    }

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
    Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'question',
        title: `Login to Application?`,
        showCancelButton: true,
        confirmButtonText: 'Login',
        confirmButtonColor: 'green',
        preConfirm: () => {
            // Show loader while "processing"
            Swal.showLoading();
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 5000); // simulate async process
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                toast: true,
                position: 'bottom-end',
                icon: 'success',
                title: 'Congratulations!',
                text: `Logged to ${user.role} dashboard!`,
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.href = user.role+'.html'
            })
        }
    });
}
 else {
        Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'question',
        title: `Login to Application?`,
        showCancelButton: true,
        confirmButtonText: 'Login',
        confirmButtonColor: 'green',
        preConfirm: () => {
            // Show loader while "processing"
            Swal.showLoading();
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 5000); // simulate async process
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                toast: true,
                position: 'bottom-end',
                icon: 'error',
                title: 'Login Failed!',
                text: `Invalid Username or Password`,
                confirmButtonColor: 'red'
            })
        }
    });
    }
});
