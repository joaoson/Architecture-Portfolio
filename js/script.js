document.getElementById("nav-toggle").addEventListener("click", function toggleNav() {
    document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
    console.log(document.body.dataset.nav)
})

