let selectedIndex = sessionStorage.getItem('selectedIndex');
let albumlist = JSON.parse(sessionStorage.getItem('albumlist'));

//显示数据
initInfo();

function initInfo() {
    let album = albumlist[selectedIndex];

    document.querySelector('#albumTitle').innerHTML = album.albumName;
    document.querySelector('#albumName').innerHTML = album.albumName;
    document.querySelector('#albumSinger').innerHTML = album.albumSinger;
    if (album.albumType == 0) {
        document.querySelector('#albumType').innerHTML = 'POP';
    } else if (album.albumType == 1) {
        document.querySelector('#albumType').innerHTML = 'R&B';
    } else if (album.albumType == 2) {
        document.querySelector('#albumType').innerHTML = 'RAP';
    } else if (album.albumType == 3) {
        document.querySelector('#albumType').innerHTML = 'SOUNDTRACK';
    } else if (album.albumType == 4) {
        document.querySelector('#albumType').innerHTML = 'ELECTRONIC';
    } else if (album.albumType == 5) {
        document.querySelector('#albumType').innerHTML = 'CLASSICAL';
    }


    if (album.language == 0) {
        document.querySelector('#language').innerHTML = '中文';
    } else if (album.language == 1) {
        document.querySelector('#language').innerHTML = '韩语';
    } else if (album.language == 2) {
        document.querySelector('#language').innerHTML = '日语';
    } else if (album.language == 3) {
        document.querySelector('#language').innerHTML = '英语';
    } else if (album.language == 4) {
        document.querySelector('#language').innerHTML = '纯音乐';
    }

    document.querySelector('#albumPublish').innerHTML = album.albumPublish;
    document.querySelector('#albumEntertainment').innerHTML = album.albumEntertainment;
    document.querySelector('#albumInfo').innerHTML = album.albumInfo;
}