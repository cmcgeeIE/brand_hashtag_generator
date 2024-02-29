document.addEventListener('DOMContentLoaded', () => {
    const brandButtons = document.querySelectorAll('.brandButton');
    const hashtagsOutput = document.getElementById('hashtagsOutput');
    const copyButton = document.getElementById('copyButton');

    const hashtagsByBrand = {
        "L-com": "#Lcom #InfiniteElectronics #SameDayShipping",
        "Fairview Microwave": "#FairviewMicrowave #InfiniteElectronics #SameDayShipping",
        "Pasternack": "#Pasternack #InfiniteElectronics #SameDayShipping",
        "NavePoint": "#NavePoint #InfiniteElectronics #FreeShipping #SameDayShipping",
        "PolyPhaser": "#PolyPhaser #InfiniteElectronics #SameDayShipping",
        "Transtector": "#Transtector #InfiniteElectronics #SameDayShipping",
        "KP Performance Antennas": "#KPPerformanceAntennas #InfiniteElectronics #SameDayShipping",
        "Aiconics": "#Aiconics #InfiniteElectronics #SameDayShipping",
        "Integra Optics": "#IntegraOptics #InfiniteElectronics #SameDayShipping",
        "Show Me Cables": "#ShowMeCables #InfiniteElectronics #SameDayShipping",
        "MilesTek": "#MilesTek #InfiniteElectronics #SameDayShipping",
        "INC Installs": "#INCInstalls #InfiniteElectronics"
    };

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
            // Optional: Display a message or do something to indicate success
        }).catch(err => {
            console.error('Error in copying text: ', err);
        });
    });
});
