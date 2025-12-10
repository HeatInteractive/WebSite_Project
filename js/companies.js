// Fetch companies from local data
async function fetchCompanies() {
    console.log('🔍 Fetching companies from local data...');

    if (window.COMPANY_DATA) {
        console.log('✅ Successfully loaded companies from window.COMPANY_DATA');
        return window.COMPANY_DATA;
    } else {
        console.error('❌ window.COMPANY_DATA is undefined. Make sure js/company-data.js is loaded.');
        return [];
    }
}

// Load and display companies
async function loadCompanies() {
    const container = document.getElementById('companies-container');

    if (!container) {
        console.error('Companies container not found');
        return;
    }

    // Show loading state
    container.innerHTML = '<div class="text-gray-400 text-sm">Yükleniyor...</div>';

    // Fetch companies
    const companies = await fetchCompanies();

    // Clear container
    container.innerHTML = '';

    if (companies.length === 0) {
        container.innerHTML = '<div class="text-gray-400 text-sm">Henüz iş ortağı eklenmemiş.</div>';
        return;
    }

    // Create company elements
    companies.forEach(company => {
        const companyDiv = document.createElement('div');
        companyDiv.className = 'flex flex-col items-center gap-4 text-center group'; // Vertical stack, centered

        if (company.Logo) {
            // If logo URL exists, use it
            const img = document.createElement('img');
            img.src = company.Logo;
            img.alt = company.Name;
            img.className = 'w-32 h-32 object-contain transition-all duration-500'; // Increased size, no grayscale
            companyDiv.appendChild(img);
        }

        const nameSpan = document.createElement('span');
        nameSpan.textContent = company.Name;
        nameSpan.className = 'text-2xl font-bold text-white'; // Larger text
        companyDiv.appendChild(nameSpan);

        container.appendChild(companyDiv);
    });
}

// Load companies when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCompanies);
} else {
    loadCompanies();
}
