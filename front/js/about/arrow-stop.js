var arr = document.getElementById('arrow');
arr.onmouseover = function (ev) {
    this.src = 'img/down-arrow-hover.png';
    this.classList.remove('bounce');
};
arr.onmouseout = function (ev) {
    this.src = 'img/down-arrow.png';
    this.classList.add('bounce');
}