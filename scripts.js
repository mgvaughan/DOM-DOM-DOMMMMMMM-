document.addEventListener('DOMContentLoaded', function () {
    let btntext = document.createTextNode('Add Square');
    let button = document.createElement('button');
    button.appendChild(btntext);
    button.className = 'button';
    document.body.appendChild(button);

    let boxesdiv = document.createElement('div')
    boxesdiv.className = "boxes"
    document.body.appendChild(boxesdiv)
    count = 1

    button.addEventListener('click', function () {
        let boxdiv = document.createElement('div');
        boxdiv.className = "boxdiv";
        boxdiv.id = count;
        boxesdiv.appendChild(boxdiv);
        let id = document.createTextNode(boxdiv.id);
        let iddiv = document.createElement('div');
        iddiv.className = "iddiv";
        iddiv.appendChild(id);
        boxdiv.appendChild(iddiv);
        count = count + 1;

        boxdiv.addEventListener('click', function () {
            boxdiv.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        })
        // boxamount = document.getElementsByClassName('boxdiv')

        outercount = 0;
        boxdiv.addEventListener('dblclick', function () {
            let boxamount = document.getElementsByClassName('boxdiv')
            // let array = Array.prototype.slice.call(boxamount);
            let currentid = boxdiv.getAttribute('id');
            // let index = array.indexOf(currentid);

            if (currentid % 2 != 0) {
                if (currentid == 1) {
                    alert("first square!");
                } else {
                    // let array = Array.prototype.slice.call(document.getElementsByClassName('boxdiv'));
                    // let index = array.indexOf(currentid);
                    // array[index - 2].remove();
                    // boxamount[index - 1].remove();
                    // venbox = document.getElementsById('currentid' - 1);
                    // evenbox.remove();
                    boxamount[currentid - 2].remove();
                }
            } else if (currentid % 2 == 0) {
                if (currentid >= boxamount.length) {
                    alert("last square!");
                } else {
                    boxamount[currentid].remove();
                }
            } else {
                return;
            }
        })
    })
})




