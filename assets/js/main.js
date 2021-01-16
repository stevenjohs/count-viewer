window.addEventListener('DOMContentLoaded', init);

function init() {
    updateJlhViewer();

    const nameEl = document.querySelector('.name');
    const jlhViewer = document.querySelector('.jlh-viewer');
    const name = prompt('Masukkan nama anda :');
    nameEl.textContent = name;

    const time = document.querySelector('.time');
    const jam = new Date().getHours();
    const menit = new Date().getMinutes();
    time.textContent = `${jam} : ${menit}`;

    function updateJlhViewer() {
        fetch('https://api.countapi.xyz/update/stevenjohs/viewcountbystevenjohs/?amount=1').then(res => res.json()).then(res => {
            jlhViewer.innerHTML = res.value;
        })
    }
}