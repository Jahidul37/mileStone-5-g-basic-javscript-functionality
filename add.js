document.getElementById('add-btn').addEventListener('click', function () {
    // console.log('clligkk');
    //input field id
    const inputField = document.getElementById('text-input').value;
    console.log(inputField);

    // parent container id k getElement kore ana hoyece. 
    const outputShow = document.getElementById('parent-container');
    // brower a data show er jono li k crate element kora hoyece . 
    // li k inner text kora hoyece jate li vitor data gula show kore
    const li = document.createElement("li");
    li.innerText = inputField;

    // ai khane li hocce append child , ai khane outputshow er vitor li k append child kora hoyece.
    outputShow.appendChild(li);


})