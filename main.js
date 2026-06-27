// --- Sidebar Navigation ---
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openSidebar() {
  sidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // 스크롤 방지
}

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = ''; // 스크롤 복원
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

// --- Clipboard Copy ---
const copyPasswordBtn = document.getElementById('copyPasswordBtn');
const wifiPasswordSpan = document.getElementById('wifiPassword');

if (copyPasswordBtn && wifiPasswordSpan) {
  copyPasswordBtn.addEventListener('click', async () => {
    const passwordText = wifiPasswordSpan.innerText;
    
    try {
      await navigator.clipboard.writeText(passwordText);
      
      // 피드백 효과
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
      // Fallback
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
