document.getElementById('logo').addEventListener('click', () => {
    const logo = document.getElementById('logo');
    logo.style.animation = 'none'; // 暫停動畫
    setTimeout(() => {
        logo.style.animation = ''; // 恢復動畫
    }, 100); // 讓 LOGO 短暫停止以吸引注意
});
