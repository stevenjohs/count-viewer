window.addEventListener('DOMContentLoaded', init);

function init() {
    updateJlhViewer();
    setInterval(() => {
        getJlhViewer();
    }, 1000)

    const nameEl = document.querySelector('.name');
    const jlhViewer = document.querySelector('.jlh-viewer');
    const name = prompt('Masukkan nama anda :');
    nameEl.textContent = name;

    const time = document.querySelector('.time');
    const jam = new Date().getHours();
    const menit = new Date().getMinutes();
    time.textContent = `${jam} : ${menit}`;

    function updateJlhViewer() {
        fetch('https://api.countapi.xyz/update/stevennn/2021/?amount=1').then(res => res.json()).then(res => {
            jlhViewer.innerHTML = res.value;
        })
    }

    function getJlhViewer() {
        fetch('https://api.countapi.xyz/get/stevennn/2021').then(res => res.json()).then(res => {
            jlhViewer.innerHTML = res.value;
        })
    }
}