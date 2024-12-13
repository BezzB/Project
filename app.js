document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.coalition.tech/patient";
    const patientInfoSection = document.getElementById("patient-info");
    const bpChartCtx = document.getElementById("bpChart").getContext("2d");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Populate patient info
            const patientInfo = `
                <h2>${data.name}</h2>
                <p>Age: ${data.age}</p>
                <p>Gender: ${data.gender}</p>
            `;
            patientInfoSection.innerHTML = patientInfo;

            // Create the blood pressure chart
            const bpData = data.bloodPressure;
            const years = bpData.map(entry => entry.year);
            const systolic = bpData.map(entry => entry.systolic);
            const diastolic = bpData.map(entry => entry.diastolic);

            new Chart(bpChartCtx, {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [
                        {
                            label: 'Systolic',
                            data: systolic,
                            borderColor: 'rgb(255, 99, 132)',
                            fill: false
                        },
                        {
                            label: 'Diastolic',
                            data: diastolic,
                            borderColor: 'rgb(54, 162, 235)',
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Year'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Blood Pressure (mmHg)'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
