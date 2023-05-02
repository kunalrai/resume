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

