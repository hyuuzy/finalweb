function showContent() {
  // 顯示隱藏的內容區塊
  const hiddenContent = document.getElementById('hiddenContent');
  hiddenContent.style.display = 'flex';
  // 平滑滾動到顯示的內容區塊
  hiddenContent.scrollIntoView({ behavior: 'smooth' });
}



// 取得元素
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');
const commentsDisplay = document.getElementById('comments-display');

// 送出留言的函式
function submitComment() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  // 確保名稱和留言都有輸入
  if (username === '' || message === '') {
    alert('請輸入名稱和留言！');
    return;
  }

  // 創建留言元素
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `<p><strong>${username}：</strong> ${message}</p>`;

  // 加到留言列表中
  commentsDisplay.appendChild(commentElement);

  // 清空輸入框
  usernameInput.value = '';
  messageInput.value = '';
}

// 點擊送出按鈕時送出留言
submitBtn.addEventListener('click', submitComment);

// 按下 Enter 鍵時送出留言
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // 防止換行
    submitComment();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", function () {
      navbar.classList.toggle("active");
  });
});

