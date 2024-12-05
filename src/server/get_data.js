const fetch = require('node-fetch');

// Function to get articles data from the API
async function get_articles(url) {
    const response = await fetch(url);

    try {
        // Parse the JSON response
        const data = await response.json();
        // Call the function to process the data
        return processData(data);
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
}

// Function to process and format the API response
function processData(data) {
    // Destructure the values we need from the API response
    const { agreement, confidence, irony, score_tag, subjectivity } = data;
    
    // Return an object with the required data
    return {
        agreement,
        confidence,
        irony,
        score_tag,
        subjectivity
    };
}

// Export the function for use in other files
module.exports = get_articles;
