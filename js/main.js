import { publicationsData, projectsData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // ---- Render Publications ----
    const pubContainer = document.getElementById('publications-container');
    if (pubContainer) {
        if (publicationsData && publicationsData.length > 0) {
            publicationsData.forEach(pub => {
                const el = document.createElement('div');
                el.className = 'w-full flex flex-col md:flex-row gap-6 items-center p-6 bg-base-100/70 backdrop-blur-xl border border-base-200/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-8';
                el.setAttribute('data-reveal', 'true');
                
                const imgHTML = pub.image ? `<div class="shrink-0 w-full md:w-64 h-40 overflow-hidden rounded-xl border border-base-200"><img src="${pub.image}" alt="${pub.title}" class="w-full h-full object-cover"></div>` : '';
                
                const linksHTML = pub.links ? pub.links.map(l => `<a href="${l.url}" class="text-sm font-medium text-primary hover:underline hover:text-primary-focus mr-4 relative z-10 before:content-['['] after:content-[']']">${l.text}</a>`).join('') : '';

                el.innerHTML = `
                    ${imgHTML}
                    <div class="flex-1 flex flex-col justify-center">
                        <h3 class="text-xl font-bold text-base-content mb-2">${pub.title}</h3>
                        <p class="text-base-content/80 text-sm mb-2">${pub.authors}</p>
                        <p class="text-base-content/60 text-sm font-medium mb-4 italic">${pub.venue}</p>
                        <div class="flex flex-wrap">${linksHTML}</div>
                    </div>
                `;
                pubContainer.appendChild(el);
            });
        } else {
            // Placeholder when no publications exist
            const placeholder = document.createElement('div');
            placeholder.className = 'p-6 bg-base-100/30 border border-dashed border-base-200/80 rounded-2xl text-center opacity-0 transform translate-y-8';
            placeholder.setAttribute('data-reveal', 'true');
            placeholder.innerHTML = `<p class="text-base-content/60 italic text-lg">Currently working on exciting research... Check back soon!</p>`;
            pubContainer.appendChild(placeholder);
        }
    }

    // ---- Render Projects ----
    const projContainer = document.getElementById('projects-container');
    if (projContainer) {
        projectsData.forEach(proj => {
            const el = document.createElement('div');
            el.className = 'p-6 bg-base-100/70 backdrop-blur-xl border border-base-200/50 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8';
            el.setAttribute('data-reveal', 'true');
            
            const techHTML = proj.techStack ? proj.techStack.map(t => `<span class="px-2 py-1 bg-base-200 text-xs rounded-md text-base-content/70 mr-2 mb-2 inline-block">${t}</span>`).join('') : '';

            el.innerHTML = `
                <h3 class="text-xl font-bold text-primary mb-3">${proj.title}</h3>
                <p class="text-base-content/70 text-sm mb-4 leading-relaxed">${proj.description}</p>
                <div class="mb-4">${techHTML}</div>
                <a href="${proj.link}" class="text-sm font-semibold text-base-content hover:text-primary transition-colors">View Details →</a>
            `;
            projContainer.appendChild(el);
        });
    }

    // ---- Scroll Animations ----
    const observeElements = () => {
        const revealElements = document.querySelectorAll('[data-reveal]');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        revealElements.forEach(el => revealObserver.observe(el));
    };

    // Delay observe slightly to ensure DOM insertion is completed
    setTimeout(observeElements, 100);
});
