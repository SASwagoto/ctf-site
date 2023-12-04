function updateFlipDigit(digitElement, value) {
    const currentTransform = digitElement.style.transform;
    const newTransform = `translateY(-${value * 1.6}em)`;
    if (currentTransform !== newTransform) {
      digitElement.style.transform = newTransform;
    }
  }

  function updateFlipClock(time) {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    updateFlipDigit(document.getElementById('daysDigit1'), Math.floor(days / 10));
    updateFlipDigit(document.getElementById('daysDigit2'), days % 10);

    updateFlipDigit(document.getElementById('hoursDigit1'), Math.floor(hours / 10));
    updateFlipDigit(document.getElementById('hoursDigit2'), hours % 10);

    updateFlipDigit(document.getElementById('minutesDigit1'), Math.floor(minutes / 10));
    updateFlipDigit(document.getElementById('minutesDigit2'), minutes % 10);

    updateFlipDigit(document.getElementById('secondsDigit1'), Math.floor(seconds / 10));
    updateFlipDigit(document.getElementById('secondsDigit2'), seconds % 10);
  }

  function startCountdown(targetTime) {
    const intervalId = setInterval(function() {
      const currentTime = Math.floor((new Date(targetTime) - new Date()) / 1000);

      if (currentTime <= 0) {
        clearInterval(intervalId);
        updateFlipClock(0); // You can customize this behavior when the countdown reaches zero
      } else {
        updateFlipClock(currentTime);
      }
    }, 1000);
  }

  // Set your target date and time here (Year, Month - 1, Day, Hour, Minute, Second)
  const targetDate = new Date(2023, 0, 1, 0, 0, 0);

  // Start the countdown
  startCountdown(targetDate);