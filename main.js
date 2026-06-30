// --- Sidebar Navigation ---
// body.overflow를 hidden으로 잠가 모바일에서 사이드바 열림 시 배경 스크롤 방지
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openSidebar() {
  sidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (openMenuBtn) {
  openMenuBtn.addEventListener('click', openSidebar);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebar);
}

// --- Clipboard Copy (Wi-Fi Password) ---
// Clipboard API 미지원 환경(구형 브라우저)을 위해 execCommand 폴백 포함
const copyPasswordBtn = document.getElementById('copyPasswordBtn');
const wifiPasswordSpan = document.getElementById('wifiPassword');

if (copyPasswordBtn && wifiPasswordSpan) {
  copyPasswordBtn.addEventListener('click', async () => {
    const passwordText = wifiPasswordSpan.innerText;

    try {
      await navigator.clipboard.writeText(passwordText);

      copyPasswordBtn.innerText = 'COPIED!';
      copyPasswordBtn.style.backgroundColor = 'var(--blue-500)';
      copyPasswordBtn.style.color = 'var(--neutral-0)';
      copyPasswordBtn.style.borderColor = 'var(--blue-500)';

      setTimeout(() => {
        copyPasswordBtn.innerText = 'COPY';
        copyPasswordBtn.style.backgroundColor = '';
        copyPasswordBtn.style.color = '';
        copyPasswordBtn.style.borderColor = '';
      }, 2000);

    } catch (err) {
      console.error('Failed to copy password: ', err);

      // execCommand 폴백: 임시 textarea를 DOM에 삽입 후 선택 → 복사 → 제거
      const textArea = document.createElement('textarea');
      textArea.value = passwordText;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        copyPasswordBtn.innerText = 'COPIED!';
        setTimeout(() => {
          copyPasswordBtn.innerText = 'COPY';
        }, 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  });
}
