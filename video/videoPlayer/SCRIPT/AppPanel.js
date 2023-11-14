var AppPanel = document.getElementsByClassName('AppPanel')[0];

for( i=0; i<AppPanelData.length; i++ ) {
    AppPanel.innerHTML += `<div class="cell cell-video" style="background-image: url(APP/${AppPanelData[i]}/favicon.svg)"></div>`
}