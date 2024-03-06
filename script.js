document.addEventListener('DOMContentLoaded', () => {
    const brandList = document.getElementById('brandList');
    const hashtagsOutput = document.getElementById('hashtagsOutput');
    const copyButton = document.getElementById('copyButton');

    const hashtagsByBrand = {
        "Aiconics": "#Aiconics #InfiniteElectronics #SameDayShipping",
        "Fairview Microwave": "#FairviewMicrowave #InfiniteElectronics #SameDayShipping",
        "INC Installs": "#INCInstalls #InfiniteElectronics",
        "Integra Optics": "#IntegraOptics #InfiniteElectronics #SameDayShipping",
        "KP Performance Antennas": "#KPPerformanceAntennas #InfiniteElectronics #SameDayShipping",
        "L-com": "#Lcom #InfiniteElectronics #SameDayShipping",
        "MilesTek": "#MilesTek #InfiniteElectronics #SameDayShipping",
        "NavePoint": "#NavePoint #InfiniteElectronics #SameDayShipping #FreeShipping #ServerRoom #ServerRack #ServerEnclosure #DataCenter #TechInstallers #ITNetworking #AVinstall",
        "Pasternack": "#Pasternack #InfiniteElectronics #SameDayShipping",
        "PolyPhaser": "#PolyPhaser #InfiniteElectronics #SameDayShipping",
        "RadioWaves": "#RadioWaves #InfiniteElectronics",
        "Show Me Cables": "#ShowMeCables #InfiniteElectronics #SameDayShipping",
        "Transtector": "#Transtector #InfiniteElectronics #SameDayShipping",
    };

    // Sort brands alphabetically
    const sortedBrands = Object.keys(hashtagsByBrand).sort();

    // Dynamically create buttons for each brand
    sortedBrands.forEach(brand => {
        const button = document.createElement('button');
        button.classList.add('brandButton');
        button.setAttribute('data-brand', brand);
        button.textContent = brand;
        brandList.appendChild(button);
    });

    const brandButtons = document.querySelectorAll('.brandButton');

    brandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedBrand = this.getAttribute('data-brand');
            const hashtags = hashtagsByBrand[selectedBrand];
            hashtagsOutput.textContent = hashtags;
            copyButton.style.display = 'inline-block'; // Show the copy button
        });
    });

    copyButton.addEventListener('click', () => {
        if (!hashtagsOutput.textContent.trim()) return;
        
        navigator.clipboard.writeText(hashtagsOutput.textContent).then(() => {
            // Optional: You can display a message or do something to indicate the text has been successfully copied
        }).catch(err => {
            console.error('Error in copying text: ', err);
        });
    });
});
