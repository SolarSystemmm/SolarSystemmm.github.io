function timedLink(elem, callback, d){
setTimeout(function () {
    callback(elem);
}, d)
return false;
}

function locationFunc(elem) {
    window.location = elem.href;
}

const links = document.getElementsByClassName('links')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        return timedLink(this, locationFunc, 5555)
    })
}