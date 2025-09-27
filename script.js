const ogw = document.getElementById("ogw_con");
    ogw.style.display = 'block';

const fa = document.getElementById("fa_con");
    fa.style.display = 'none';

function displayOGWorkDiv() {
    ogw.style.display = 'block';
    fa.style.display = 'none';
}

function displayFanArtDiv() {
    ogw.style.display = 'none';
    fa.style.display = 'block';
}