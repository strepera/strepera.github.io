const API_URL = 'https://modules.snailify.workers.dev';

async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data?.modules;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return null;
    }
}

async function renderProjects(Markdown) {
    const container = document.querySelector('.projects-grid');
    
    // Clear existing projects
    container.innerHTML = '';
    
    const projectsData = await fetchProjects();
    
    if (!projectsData) {
        container.innerHTML = '<p class="error-message">Failed to load projects</p>';
        return;
    }
    
    // Create project cards dynamically
    projectsData.forEach(project => {
        const card = createProjectCard(project, Markdown);
        container.appendChild(card);
    });
}

function createProjectCard(project, Markdown) {
  const card = document.createElement('article');
  card.className = 'project-card';
  
  card.addEventListener('click', () => {
    window.location.href = `https://chattriggers.com/modules/v/${project.name}`;
  });

  const descriptionHtml = project.description ? 
    Markdown.toHTML(project.description.substring(0, 600)) : 
    'No description available';

  card.innerHTML = `
    <img src="${project.image || 'https://via.placeholder.com/400x200'}"
         class="project-image">
    <div class="project-content">
      <h2 class="project-name">${project.name}</h2>
      <div class="project-description">
        ${descriptionHtml}
      </div>
      <div class="project-stats">
        <div class="stat-item">
          <span class="stat-icon">📥</span>
          <span class="downloads">${project.downloads || 0}</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🔢</span>
          <span class="version">${project.releases[0]?.releaseVersion || 'N/A'}</span>
        </div>
      </div>
    </div>
  `;
  return card;
}

