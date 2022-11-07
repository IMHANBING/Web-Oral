let selectedIndex = sessionStorage.getItem('selectedIndex');
let albumlist = JSON.parse(sessionStorage.getItem('albumlist'));

//回填数据
initForm();

function initForm() {
    let album = albumlist[selectedIndex];

    document.querySelector('#albumName').value = album.albumName;
    document.querySelector('#albumSinger').value = album.albumSinger;
    //要修改的专辑类型,设置单选按钮选中状态
    let albumTypes = document.getElementsByName("albumType");
    albumTypes.forEach(item => {
        if (item.value == album.albumType) {
            item.checked = true;
        }
    })
    //要修改的专辑类型,设置下拉框选中状态
    let language = document.getElementById('language');
    let list = language.options;
    for (let i = 0; i < list.length; i++) {
        if (list[i].value == album.language) {
            list[i].selected = true;
        }
    }
    document.querySelector('#albumAddress').value = album.albumAddress;
    document.querySelector('#albumPublish').value = album.albumPublish;
    document.querySelector('#albumEntertainment').value = album.albumEntertainment;
    document.querySelector('#albumInfo').value = album.albumInfo;
}

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
        albumPublish:document.querySelector('#albumPublish').value,
        albumEntertainment: document.querySelector('#albumEntertainment').value,
        albumInfo: document.querySelector('#albumInfo').value
    }

    alert('修改成功');

    //修改数组中的专辑
    albumlist.splice(selectedIndex, 1, album);

    //保存进sessionStorage
    sessionStorage.setItem('albumlist', JSON.stringify(albumlist))

    location.href = 'Album-List.html';

}

function cancel() {
    let ok = confirm('放弃修改内容？');
    if(ok){
        location.href = 'Album-List.html';
    }
}