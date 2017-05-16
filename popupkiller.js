(function() {
    'use strict';
    console.log("I'm loaded, baby");
    let link;
    for( let i = 0; (link = document.getElementsByTagName("link")[i]); i++ ) {
        let linkType = link.getAttribute("type") === "text/css";
        let linkHref = link.getAttribute("href") === "https://translate.googleapis.com/translate_static/css/translateelement.css";
        if (linkType && linkHref) {
            link.disabled = true;
            console.log('Die motherfucker... die...');
        }
    }
})();