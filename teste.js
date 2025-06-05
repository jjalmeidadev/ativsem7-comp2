function checkLebronPosition() {
    const lebron = document.getElementByclass('lebron');
    const cesta = document.getElementByclass('cesta');
    const lebronRect = lebron.getBoundingClientRect();

    // Example: trigger when LeBron's left is less than 500px
    if (lebronRect.left < 430) {
        cesta.classList.add('ativo');
    } else {
        cesta.classList.remove('ativo');
    }
}

// Check position every 100ms
setInterval(checkLebronPosition, 100);