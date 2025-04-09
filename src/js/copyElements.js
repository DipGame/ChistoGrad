document.addEventListener("DOMContentLoaded", function () {    

    if (document.querySelector('header')) {
        const header = document.querySelector('header');
        const adres_cont = header.querySelector('.adres_cont');
        const contact_cont = header.querySelector('.contact_cont');
        const svg_links = header.querySelector('.svg_links');
        const button = header.querySelector('.button');
        const button_v2 = header.querySelector('.button_v2');
        const help_cont = header.querySelector('.help_cont');

        let adresCopy = adres_cont.cloneNode(true);
        let contact_contCopy = contact_cont.cloneNode(true);
        let buttonCopy = button.cloneNode(true);
        let button_v2Copy = button_v2.cloneNode(true);

        help_cont.appendChild(contact_contCopy);
        help_cont.appendChild(adresCopy);
        help_cont.appendChild(svg_links);
        help_cont.appendChild(buttonCopy);
        help_cont.appendChild(button_v2Copy);
    }

    console.log('copyElements.js finish work');
})