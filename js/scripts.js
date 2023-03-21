document.querySelector('.switch').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add(event.target.value);
    }
});