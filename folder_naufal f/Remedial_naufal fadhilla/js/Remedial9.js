window.onload = 
function() {
    var btn = document.getElementById('demo')
    btn.addEventListener('click', myfunction, false)
    function myfunction () {
        alert(jumlah)
        btn.removeEventListener('click', myfunction, false)
    }
}