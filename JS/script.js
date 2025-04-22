document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const hedefId = this.getAttribute('href');
        const hedef = document.querySelector(hedefId);
        hedef.scrollIntoView({ behavior: 'smooth' });
    });
});


const animasyonOgeleri = document.querySelectorAll('.gizli');

function kontrolEt() {
    animasyonOgeleri.forEach(el => {
        const konum = el.getBoundingClientRect().top;
        const ekranYuksekligi = window.innerHeight;
        if (konum < ekranYuksekligi - 100) {
            el.classList.add('gorundu');
        }
    });
}

window.addEventListener('scroll', kontrolEt);
window.addEventListener('load', kontrolEt);

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value.trim();
    const email = document.getElementById("email").value.trim();
    const mesaj = document.getElementById("mesaj").value.trim();

    if (!ad || !email || !mesaj) {
        alert("Lütfen tüm alanları doldurun!");
    } else {
        alert("Mesajınız başarıyla gönderildi! 🚀");
        this.reset(); // formu sıfırla
    }
});
