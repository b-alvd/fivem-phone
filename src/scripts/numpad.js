let isLocked = true;

function showNumpad() {
    if (isLocked) {
        document.getElementById('lock-icon').style.display = 'block';
        document.getElementById('numpad-screen').style.display = 'flex';
        document.getElementById('home-screen').style.filter = 'blur(10px)';
        // document.getElementById('app-container').style.display = 'none';
        document.getElementById('app-container').classList.remove('show');
        document.getElementById('footer-apps').style.display = 'none';
    }
}

let pin = '';
function addNumber(number) {
    if (pin.length < 4) {
        pin += number;
        const circles = document.querySelectorAll('.pin-circle');
        circles[pin.length - 1].style.backgroundColor = 'white';

        if (pin.length === 4) {
            unlock();
        }
    }
}

function clearPin() {
    pin = '';
    const circles = document.querySelectorAll('.pin-circle');
    circles.forEach(circle => {
        circle.style.backgroundColor = 'inherit';
    });
}

function unlock() {
    if (pin === '1111') {
        isLocked = false;
        document.getElementById('lock-icon').style.display = 'none';
        const lockOpenIcon = document.getElementById('lock-open-icon');
        lockOpenIcon.style.display = 'block';

        setTimeout(() => {
            lockOpenIcon.style.display = 'none';
        }, 1000);

        const homeScreen = document.getElementById('home-screen');
        homeScreen.classList.add('hide');
        homeScreen.style.filter = 'blur(0px)';
        const numpadScreen = document.getElementById('numpad-screen');
        numpadScreen.style.display = 'none';
        
        setTimeout(() => {
            homeScreen.style.display = 'none';
            const appContainer = document.getElementById('app-container');
            appContainer.classList.add('show');
            appContainer.style.display = 'grid';
            const footerApps = document.getElementById('footer-apps');
            footerApps.style.display = 'flex';
        }, 500);
    } else {
        shakeCircles();
        clearPin();
    }
}

function lock() {
    isLocked = true;
    document.getElementById('lock-icon').style.display = 'block';
    document.getElementById('numpad-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
    document.getElementById('home-screen').style.filter = 'blur(0px)';
    document.getElementById('home-screen').classList.remove('hide');
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('footer-apps').style.display = 'none';
    clearPin();
}

function shakeCircles() {
    const circles = document.querySelectorAll('.pin-circle');
    circles.forEach(circle => {
        circle.classList.add('shake');
    });

    setTimeout(() => {
        circles.forEach(circle => {
            circle.classList.remove('shake');
        });
    }, 1000);
}

function cancel() {
    const numpadScreen = document.getElementById('numpad-screen');
    numpadScreen.classList.remove('show');

    setTimeout(() => {
        numpadScreen.style.display = 'none';
        const homeScreen = document.getElementById('home-screen');
        homeScreen.style.display = 'flex';
        homeScreen.style.filter = 'blur(0px)';
        homeScreen.classList.remove('hide');
    }, 100);

    clearPin();
}

window.onload = function() {
    document.getElementById('numpad-screen').style.display = 'none';
    // document.getElementById('app-container').style.display = 'none';
    document.getElementById('app-container').classList.remove('show');
    document.getElementById('home-screen').style.display = 'flex';
    document.getElementById('lock-icon').style.display = 'block';
};

function toggleActive(button) {
    button.classList.toggle('active');
}
