function viewPlace() {
    let tagArray = document.getElementsByClassName("place");
    for (let i = 0; i < tagArray.length; i++) {
        let tag = tagArray[i];

        // 현재 스타일을 확인
        let currentColor = window.getComputedStyle(tag).color;

        // 파란색인지 확인 (RGB 형식으로 확인)
        if (currentColor !== "rgb(0, 0, 255)") {  // 'rgb(0, 0, 255)'는 파란색
            tag.style.color = "blue";  // 파란색으로 변경
            tag.style.fontSize = "20px";  // 글자 크기 변경
        } else {
            tag.style.color = "black";  // 원래 색상으로 복귀
            tag.style.fontSize = "16px";  // 원래 글자 크기로 복귀
        }
    }
}
