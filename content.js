const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const skipButton = document.querySelector('.ytp-skip-ad-button');
      if (skipButton) {
        skipButton.click();
      }
    });
  });
  
  observer.observe(document, { childList: true, subtree: true });
  