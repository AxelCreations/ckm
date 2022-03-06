const Navbar = document.getElementById('ckm-navbar');

Navbar.addEventListener('click', (event) => {
    const Items = Navbar.querySelectorAll('.nav-link');
    
    Items.forEach(item => item.classList.remove('active'));

    event.target.classList.add('active');
});