// Supabase Configuration
const SUPABASE_URL = 'https://zbifnmzafevagllhzibk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaWZubXphZmV2YWdsbGh6aWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzgxODksImV4cCI6MjA4MDM1NDE4OX0.qfsnL7UoMXVEDuIswias-VpmKL2WwS0mpyERr8HSfj4';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch projects from Supabase
async function fetchProjects() {
    console.log('🔍 Fetching projects from Supabase...');

    try {
        const { data, error } = await supabase
            .from('Projects')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            console.error('❌ Error fetching projects:', error);
            return [];
        }

        console.log('✅ Successfully fetched projects:', data);
        return data || [];
    } catch (err) {
        console.error('❌ Unexpected error:', err);
        return [];
    }
}

// Load and display projects
async function loadProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.error('Projects container not found');
        return;
    }

    // Show loading state
    container.innerHTML = '<div class="text-gray-400 text-center w-full py-10">Projeler yükleniyor...</div>';

    // Fetch projects
    const projects = await fetchProjects();

    // Clear container
    container.innerHTML = '';

    if (projects.length === 0) {
        container.innerHTML = '<div class="text-gray-400 text-center w-full py-10">Henüz proje eklenmemiş.</div>';
        return;
    }

    // Create project elements
    projects.forEach(project => {
        // Create card structure matching the design
        const projectCard = document.createElement('a');
        projectCard.href = 'hallhunter_strawberry_project.html'; // Default link for now
        projectCard.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col h-full transition-transform duration-300 hover:-translate-y-2';

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'h-64 overflow-hidden relative shrink-0';

        const img = document.createElement('img');
        img.src = project.project_thumbnail || 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop'; // Fallback image
        img.alt = project.project_name;
        img.className = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110';

        imgContainer.appendChild(img);

        // Content Container
        const content = document.createElement('div');
        content.className = 'p-8 flex flex-col flex-grow';

        // Title
        const title = document.createElement('h3');
        title.className = 'text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors';
        title.textContent = project.project_name;

        // Description
        const desc = document.createElement('p');
        desc.className = 'text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed';
        desc.textContent = project.project_description;

        // Footer
        const footer = document.createElement('div');
        footer.className = 'mt-auto flex justify-between items-center pt-4 border-t border-white/5';

        // Icons (Static for now as they are not in DB)
        const iconsDiv = document.createElement('div');
        iconsDiv.className = 'flex gap-3 text-gray-500';
        iconsDiv.innerHTML = `
            <i class="fa-brands fa-unity hover:text-white transition-colors"></i>
            <i class="fa-solid fa-vr-cardboard hover:text-white transition-colors"></i>
        `;

        // Link Text
        const linkText = document.createElement('span');
        linkText.className = 'text-xs text-indigo-400 font-semibold uppercase tracking-wider group-hover:text-white transition-colors';
        linkText.textContent = 'İNCELE';

        footer.appendChild(iconsDiv);
        footer.appendChild(linkText);

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(footer);

        projectCard.appendChild(imgContainer);
        projectCard.appendChild(content);

        container.appendChild(projectCard);
    });
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}
