// NÚT TÌM HIỂU THÊM

function showMessage() {

    alert(
        "Chào mừng bạn đến với Phòng Khám Mắt!"
    );

}


// CHỨC NĂNG TÌM KIẾM

function searchInformation() {

    let keyword =
        document.getElementById("search").value;

    let result =
        document.getElementById("searchResult");


    if (keyword == "") {

        result.innerHTML =
            "Vui lòng nhập nội dung cần tìm.";

    } else {

        result.innerHTML =
            "Bạn đang tìm kiếm: " + keyword;

    }

}
