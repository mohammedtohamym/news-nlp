// import the URL checker
import { checkForUrl } from './UrlChecker';

const urlForm = document.getElementById('urlForm');
const urlError = document.getElementById('urlError');

function handleSubmit(event) {
    event.preventDefault();

    // Hide error message initially
    urlError.style.display = 'none';

    // Get the URL input from the form
    let inputUrl = document.getElementById('urlInput').value;

    // Check if the URL is valid
    if (checkForUrl(inputUrl) === false) {
        urlError.style.display = 'block';
        urlError.innerText = 'Please enter a valid URL!';
        return;
    }

    // If URL is valid, send it to the server
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: inputUrl }),
    })
    .then(response => response.json())
    .then(data => {
        // Call updateUI to display the analysis
        updateUI(data.sentiment);
    })
    .catch(error => {
        console.log('Error:', error);
    });
}

function updateUI(sentimentData) {
    document.getElementById('analysisTitle').innerText = 'Sentiment Analysis Results';
    document.getElementById('agreementValue').innerText = 'Agreement: ' + sentimentData.agreement;
    document.getElementById('confidenceValue').innerText = 'Confidence: ' + sentimentData.confidence;
    document.getElementById('ironyValue').innerText = 'Irony: ' + sentimentData.irony;
    document.getElementById('scoreTagValue').innerText = 'Score Tag: ' + sentimentData.score_tag;
    document.getElementById('subjectivityValue').innerText = 'Subjectivity: ' + sentimentData.subjectivity;
}

if (urlForm) {
    urlForm.addEventListener('submit', handleSubmit);
}
