const params = new URLSearchParams(window.location.search);
    const dataList = document.getElementById('dataList');

    for (const [key, value] of params.entries()) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        dataList.appendChild(li);
    }