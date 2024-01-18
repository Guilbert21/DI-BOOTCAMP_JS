function myMove() {
    const container = document.getElementById("container");
    const animate = document.getElementById("animate");

    if (!container || !animate) {
        console.error('Required elements not found');
        return;
    }

    const containerWidth = container.offsetWidth;
    const animateWidth = animate.offsetWidth;
    let position = 0;

    // Move 1px to the right every millisecond
    const interval = setInterval(() => {
        if (position < containerWidth - animateWidth) {
            position++;
            animate.style.left = `${position}px`;
        } else {
            clearInterval(interval);
        }
    }, 1);
}