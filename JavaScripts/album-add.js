function save() {
    //获得专辑信息
    let albumTypeValue = 0;
    let albumTypes = document.getElementsByName("albumType");
    albumTypes.forEach(item => {
        if (item.checked) {
            albumTypeValue = item.value;
        }
    })
    let languageValue = 0;
    let language = document.getElementById('language');
    let list = language.options;
    for (let i = 0; i < list.length; i++) {
        if (list[i].selected) {
            languageValue = list[i].value;
        }
    }


    let album = {
        albumName: document.querySelector('#albumName').value,
        albumSinger: document.querySelector('#albumSinger').value,
        albumType: albumTypeValue,
        language: languageValue,
        albumAddress: document.querySelector('#albumAddress').value,
        albumEntertainment: document.querySelector('#albumEntertainment').value,
        albumPublish:document.querySelector('#albumPublish').value,
        albumInfo: document.querySelector('#albumInfo').value
    }


    let albumlist = JSON.parse(sessionStorage.getItem('albumlist'));

    albumlist.push(album);

    //保存进sessionStorage
    sessionStorage.setItem('albumlist', JSON.stringify(albumlist))

    location.href = 'Album-List.html';
}

function cancel() {
    location.href = 'Album-List.html';
}