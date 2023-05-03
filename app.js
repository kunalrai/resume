class DurationCalculator {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = endDate ? new Date(endDate) : new Date();
    }

    calculateDuration() {
        const durationInMilliseconds = this.endDate - this.startDate;
        const durationInDays = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
        const durationInYears = Math.floor(durationInDays / 365);
        const durationInMonths = Math.floor((durationInDays % 365) / 30);

        return `${durationInYears} years, ${durationInMonths} months`;
    }
}

function updateDuration(elementId) {
    const durationElement = document.getElementById(elementId);
    const startDateString = durationElement.getAttribute("data-start-date");
    const endDateString = durationElement.getAttribute("data-end-date");
    const durationCalculator = new DurationCalculator(startDateString, endDateString);
    durationElement.innerHTML = `Duration: ${durationCalculator.calculateDuration()}`;
}

updateDuration("duration1");
updateDuration("duration2");
updateDuration("duration3");


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const requestData = {
        to: 'whatsapp:+1234567890', // Replace with the desired WhatsApp number
        message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Replace 'YOUR_AZURE_FUNCTION_URL' with the URL of your Azure Function
    fetch('https://mywhatsappfxapp.azurewebsites.net', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (response.ok) {
            alert('WhatsApp message sent successfully!');
        } else {
            throw new Error('Failed to send WhatsApp message');
        }
    })
    .catch(error => {
        alert('Failed to send WhatsApp message: ' + error.message);
    });
});
