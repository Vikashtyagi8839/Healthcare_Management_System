document.addEventListener("DOMContentLoaded", () => {
    const patientForm = document.getElementById("patientForm");
    const patientList = document.getElementById("patientList").getElementsByTagName("tbody")[0];

    // Array to store patients
    let patients = [];

    // Function to add a patient to the table
    function addPatientToTable(patient) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.contact}</td>
            <td>${patient.diagnosis}</td>
            <td><button class="action-btn" onclick="removePatient(${patient.id})">Delete</button></td>
        `;

        patientList.appendChild(row);
    }

    // Function to add a new patient
    function addPatient(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const contact = document.getElementById("contact").value;
        const diagnosis = document.getElementById("diagnosis").value;

        const newPatient = {
            id: Date.now(),
            name,
            age,
            contact,
            diagnosis
        };

        patients.push(newPatient);
        addPatientToTable(newPatient);
        patientForm.reset();
    }

    // Function to remove a patient
    window.removePatient = function(id) {
        patients = patients.filter(patient => patient.id !== id);
        renderPatients();
    };

    // Function to render all patients
    function renderPatients() {
        patientList.innerHTML = "";
        patients.forEach(addPatientToTable);
    }

    // Form submission event listener
    patientForm.addEventListener("submit", addPatient);
});
