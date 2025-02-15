document.addEventListener("DOMContentLoaded", () => {
    loadClaims();
    loadAnalytics();
});

const claims = [
    { id: "A23456", payer: "BlueCross", amount: "$1,200", status: "pending", urgency: "High" },
    { id: "B56789", payer: "Medicare", amount: "$800", status: "denied", urgency: "Medium" },
    { id: "C98765", payer: "UnitedHealth", amount: "$2,500", status: "approved", urgency: "Low" }
];

function loadClaims() {
    const claimsContainer = document.getElementById("claimsContainer");
    claimsContainer.innerHTML = "";

    claims.forEach(claim => {
        const claimCard = document.createElement("div");
        claimCard.classList.add("claim-card");
        claimCard.innerHTML = `
            <p><strong>Claim ID:</strong> ${claim.id}</p>
            <p><strong>Payer:</strong> ${claim.payer}</p>
            <p><strong>Amount:</strong> ${claim.amount}</p>
            <p><strong>Status:</strong> <span class="${claim.status}">${claim.status}</span></p>
            <button onclick="openClaimDetails('${claim.id}', '${claim.payer}', '${claim.status}')">Review & Respond</button>
        `;
        claimsContainer.appendChild(claimCard);
    });
}

function openClaimDetails(id, payer, status) {
    document.getElementById("claimId").innerText = id;
    document.getElementById("payerName").innerText = payer;
    document.getElementById("claimStatus").innerText = status;
    document.getElementById("claim-details").style.display = "block";
}

function closeModal() {
    document.getElementById("claim-details").style.display = "none";
}

function showSection(section) {
    document.getElementById("dashboard").style.display = section === "dashboard" ? "block" : "none";
    document.getElementById("analytics").style.display = section === "analytics" ? "block" : "none";
}

function loadAnalytics() {
    const ctx = document.getElementById('claimsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pending', 'Denied', 'Approved'],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: ['orange', 'red', 'green']
            }]
        }
    });
}
