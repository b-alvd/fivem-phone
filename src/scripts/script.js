function addApp(appName, appIcon) {
    const appContainer = document.getElementById('app-container');
    const appElement = document.createElement('div');
    appElement.className = 'app ' + appName;
    appElement.onclick = function() {
        openApp(appName);
    };
    appElement.innerHTML = `<img src="${appIcon}" alt="${appName} icon"><p>${appName}</p>`;
    appContainer.appendChild(appElement);
}

function openApp(appName) {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById(appName + '-screen').style.display = 'flex';
}

function goBack() {
    const currentScreen = document.querySelector('.screen:not([style*="display: none"])');
    currentScreen.style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
}

function removeApp(appName) {
    const appContainer = document.getElementById('app-container');
    const apps = appContainer.getElementsByClassName('app');
    for (let i = 0; i < apps.length; i++) {
        if (apps[i].innerText.includes(appName)) {
            appContainer.removeChild(apps[i]);
            break;
        }
    }
}

function updateApp(oldAppName, newAppName, newAppIcon) {
    const appContainer = document.getElementById('app-container');
    const apps = appContainer.getElementsByClassName('app');
    for (let i = 0; i < apps.length; i++) {
        if (apps[i].innerText.includes(oldAppName)) {
            apps[i].innerHTML = `<img src="${newAppIcon}" alt="${newAppName} icon"><p>${newAppName}</p>`;
            break;
        }
    }
}

addApp('Contacts', './src/images/icons/contacts.png');
addApp('Messages', './src/images/icons/messages.png');
addApp('Téléphone', './src/images/icons/telephone.png');
addApp('Services', './src/images/icons/services.png');
