// Function to apply the theme
const applyTheme = (theme) => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Save the theme in localStorage
};

// Function to toggle the theme
const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    applyTheme(newTheme);
};

// Ripple effect function
const createRipple = (event) => {
    const ripple = document.getElementById('ripple-effect');
    
    // Prevent scrollbars during animation
    document.body.style.overflow = 'hidden';

    // Get button click position
    const size = Math.max(window.innerWidth, window.innerHeight); // Large enough to cover the screen
    const x = event.clientX - size / 2;
    const y = event.clientY - size / 2;
    
    // Set the size and position of the ripple div
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'scale(0)'; // Reset scale

    // Trigger ripple animation
    setTimeout(() => {
        ripple.style.transform = 'scale(1)';
    }, 0); // Start expanding the ripple

    // Slightly reduce the delay before changing the theme
    setTimeout(() => {
        toggleTheme(); // Theme switches earlier
    }, 600); // Slightly less delay

    // Reset the ripple and allow scrolling again
    setTimeout(() => {
        ripple.style.transform = 'scale(0)'; // Reset ripple size for future clicks
        document.body.style.overflow = ''; // Restore scrolling
    }, 1000); // Match the transition duration
};

// Initialize the theme based on saved preference or default to light-theme
const savedTheme = localStorage.getItem('theme') || 'light-theme';
applyTheme(savedTheme);

// Add event listener to the button
document.getElementById('theme-toggle').addEventListener('click', createRipple);
