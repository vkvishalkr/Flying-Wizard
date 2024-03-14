document.addEventListener("DOMContentLoaded", function() {
    const wizard = document.getElementById("wizard");

    document.addEventListener("click", function(event) {
        const x = event.clientX;
        const y = event.clientY;

        moveWizardTo(x, y);
        // wizard.style.transform = "scaleX(-1)"; // to flip later debug
    });

    function moveWizardTo(targetX, targetY) {
        const duration = 3000;
        const startX = parseFloat(window.getComputedStyle(wizard).left);
        const startY = parseFloat(window.getComputedStyle(wizard).top);
        const dx = targetX - startX;
        const dy = targetY - startY;
        const startTime = performance.now();

        function moveWizard(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newX = startX + dx * progress;
            const newY = startY + dy * progress;
            wizard.style.left = newX + "px";
            wizard.style.top = newY + "px";
            if (progress < 1) {
                requestAnimationFrame(moveWizard);
            }
        }
        requestAnimationFrame(moveWizard);
    }
});