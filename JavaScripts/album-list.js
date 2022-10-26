initTable();

function initTable() {
    //TODO:模拟从数据库获得数据,填充表格
    //从sessionStorage获得专辑列表,转成json数组

    let albumlist = sessionStorage.getItem('albumlist');
    //程序第一次运行，判断albumlist是否存在sessionStorage
    if (!albumlist) {
        //不存在，先构造一个，放进sessionStorage
        albumlist = [
            {
                albumName: 'CHECKMATE',
                albumSinger: 'ITZY',
                albumType: '0',
                language: '1',
                albumEntertainment: 'JYP Entertainment',
                albumPublish: 'EP',
                albumInfo: '以全新造型亮相的ITZY，在"懂得真实表达自我的堂堂自信"中显现了"将享受自己的路"的坚定决心。MV中描绘了以"SNEAKERS"(运动鞋)为媒介唤醒自由价值的模样, "向着更好的未来大步迈进"的成员们的存在感令人瞩目。以压倒性的表演实力为武器开启4代偶像时代的她们，标志性的群舞场面也让人倍感期待。'
            }
        ]
        sessionStorage.setItem('albumlist', JSON.stringify(albumlist))
    } else {
        //如果sessionStorage已经有albumlist，取出
        albumlist = JSON.parse(sessionStorage.getItem('albumlist'));
    }

    //往表格添加行数据
    //1 获得表格容器
    let mytbody = document.querySelector('#mytbody');
    //循环
    albumlist.forEach(album => {
        //2.1 得到当前表格tbody的行数,
        let rowNums = mytbody.rows.length;
        //2.2 插入新行,以rowNums为新行的索引index
        let newRow = mytbody.insertRow(rowNums);
        //3.1 插入新单元格
        let col0 = newRow.insertCell(0);
        //3.2 单元格赋值
        //注意：这里albuminfo用到了this，这时this代表当前a标签对象
        col0.innerHTML = '<a onclick="albuminfo(this)" href="Album-Info.html">' + album.albumName + '</a>'

        let col1 = newRow.insertCell(1);
        col1.innerHTML = album.albumSinger

        let col2 = newRow.insertCell(2);
        if (album.albumType == 0) {
            col2.innerHTML = 'POP';
        } else if (album.albumType == 1) {
            col2.innerHTML = 'R&B';
        } else if (album.albumType == 2) {
            col2.innerHTML = 'RAP';
        } else if (album.albumType == 3) {
            col2.innerHTML = 'SOUNDTRACK';
        } else if (album.albumType == 4) {
            col2.innerHTML = 'ELECTRONIC';
        } else if (album.albumType == 5) {
            col2.innerHTML = 'CLASSICAL';
        } else if (album.albumType == 6) {
            col2.innerHTML = 'OTHERS';
        }

        let col3 = newRow.insertCell(3);
        if (album.language == 0) {
            col3.innerHTML = '中文';
        } else if (album.language == 1) {
            col3.innerHTML = '韩语';
        } else if (album.language == 2) {
            col3.innerHTML = '日语';
        } else if (album.language== 3) {
            col3.innerHTML = '英语';
        } else if (album.language == 4) {
            col3.innerHTML = '纯音乐';
        }


        let col4 = newRow.insertCell(4);
        col4.innerHTML = album.albumEntertainment

        let col5 = newRow.insertCell(5);
        col5.innerHTML = album.albumPublish

        //构造操作按钮
        let col6 = newRow.insertCell(6);
        //注意：这里albumedit用到了this，这时this代表当前按钮对象
        col6.innerHTML =
            '<button type="button" onclick="albumedit(this)">修改</button>&nbsp;' +
            '<button type="button" onclick="albumdel(this)">删除</button>'
    })

}

function albumadd() {
    location.href = 'Album-Add.html';
}

function albumedit(obj) {
    //传进来的是一个按钮对象，通过按钮得到当前行
    let currentRow = (obj.parentElement).parentElement
    //得到当前行索引
    let index = currentRow.sectionRowIndex
    //把选中的行索引放进sessionStorage,供修改页面使用
    sessionStorage.setItem('selectedIndex', index);
    location.href = 'Album-Edit.html';
}

//删除
function albumdel(obj) {
    //1.1传进来的是一个按钮对象，通过按钮得到当前行
    let currentRow = (obj.parentElement).parentElement
    //1.2得到当前行索引
    let index = currentRow.sectionRowIndex

    //2 从sessionStorage获得数据
    let albumlist = JSON.parse(sessionStorage.getItem('albumlist'));
    //3 从albumlist删除指定位置的元素
    albumlist.splice(index, 1);
    //4 把表格存回sessionStorage
    sessionStorage.setItem("albumlist", JSON.stringify(albumlist));
    //5 删除表格选中的行
    let mytbody = document.querySelector('#mytbody');
    mytbody.deleteRow(index);
}

function albuminfo(obj) {
    //传进来的是一个a标签对象，通过按钮得到当前行
    let currentRow = (obj.parentElement).parentElement
    //得到当前行索引
    let index = currentRow.sectionRowIndex
    //把选中的行索引放进sessionStorage,供详情页面使用
    sessionStorage.setItem('selectedIndex', index);
}