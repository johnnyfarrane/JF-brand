document.addEventListener('DOMContentLoaded', () => {
    
    // Find all buy buttons
    const buyButtons = document.querySelectorAll('.buy-btn');

    // Add a click event to each button
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart! This is a simple demo.');
        });
    });

    console.log('JF Brand website loaded!');
});
