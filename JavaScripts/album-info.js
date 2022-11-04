let selectedIndex = sessionStorage.getItem('selectedIndex');
let albumlist = JSON.parse(sessionStorage.getItem('albumlist'));

//显示数据
initInfo();


function initInfo() {
    let album = albumlist[selectedIndex];

    document.querySelector('#albumTitle').innerHTML = album.albumName;
    document.querySelector('#albumName').innerHTML = album.albumName;
    document.querySelector('#albumSinger').innerHTML = '<a onclick="albumSinger()">' + album.albumSinger + '</a>';
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
    } else if (album.albumType == 6) {
        document.querySelector('#albumType').innerHTML = 'OTHERS';
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

    document.querySelector('#albumAddress').innerHTML = '<a onclick="albumAddress()">' + album.albumAddress + '</a>';
    document.querySelector('#albumPublish').innerHTML = album.albumPublish;
    document.querySelector('#albumEntertainment').innerHTML = '<a onclick="albumEntertainment()">' + album.albumEntertainment + '</a>';
    document.querySelector('#albumInfo').innerHTML = album.albumInfo;


}

function albumAddress(){
    let go = albumlist[selectedIndex];
    document.querySelector('#albumAddress').innerHTML = go.albumAddress;
    let address = document.querySelector('#albumAddress').innerHTML;
    location.replace(address)
}

function albumSinger(){
    let go1 = albumlist[selectedIndex];
    document.querySelector('#albumSinger').innerHTML = go1.albumSinger;
    let singer = document.querySelector('#albumSinger').innerHTML;
    location.replace('https://baike.baidu.com/item/' + singer)
}

function albumEntertainment(){
    let go2 = albumlist[selectedIndex];
    document.querySelector('#albumEntertainment').innerHTML = go2.albumEntertainment;
    let Entertainment = document.querySelector('#albumEntertainment').innerHTML;
    location.replace('https://www.baidu.com/s?ie=UTF-8&wd=' + Entertainment)
}