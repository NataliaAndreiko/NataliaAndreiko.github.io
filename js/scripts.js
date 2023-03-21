document.querySelector('#theme-changer').addEventListener('change', (event) => {
    changeTheme(event.target.checked);
});


document.addEventListener("DOMContentLoaded", (event)  => {
    var isChecked = document.getElementById("theme-changer").checked;
    changeTheme(isChecked);
});

function changeTheme(isChecked){ 
    if (isChecked) {
        document.getElementsByTagName("html")[0].setAttribute('class', 'dark');
    }
    else {
        document.getElementsByTagName("html")[0].classList.remove('dark');
    }
}