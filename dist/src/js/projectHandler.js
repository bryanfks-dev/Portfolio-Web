const swiperWrapper = document.querySelectorAll('.swiper-wrapper');

class Project {
    #imgBasePath = '../assets/img/projects/';

    constructor({name, description, imgName, link}) {
        this.name = name;
        this.description = description;
        this.imgName = imgName;
        this.link = link;
    }

    card() {
        return `
            <div class="card swiper-slide">
                <img src="${this.#imgBasePath + this.imgName}" alt="${this.name}">
                <div class="content">
                    <a target="_blank" rel="noopener noreferrer"
                        href="${this.link}">
                        <span class="title">${this.name}</span>
                    </a>
                    <p>${this.description}</p>
                </div>
            </div>
        `.trim();
    }
}

const appendCards = ({projects, swiperWrapperIdx}) => {
    for (const project of projects) {
        swiperWrapper[swiperWrapperIdx].innerHTML += project.card();
    }
}

const initProjectCards = () => {
    const webProjects = [
        new Project({
            name: 'File Sharing Web',
            description: 'File sharing across LAN web based',
            imgName: 'file_sharing.png',
            link: 'https://github.com/bryanfks-dev/Sharing-File-Web'
        }),
        new Project({
            name: 'Custom Browser Homepage',
            description: 'A terminal based custom browser homepage',
            imgName: 'browser_homepage.png',
            link: 'https://github.com/bryanfks-dev/Browser-Homepage'
        }),
        new Project({
            name: 'Joelbid Furtinure',
            description: 'Furniture e-commerce website application, for my Bina Nusantara Computer Club Final Project',
            imgName: 'joelbid_furniture.png',
            link: 'https://github.com/bryanfks-dev/FinProject-BackendDevelopment-2023'
        }),
        new Project({
            name: 'To do',
            description: 'A simple to-do list website that let you list all your tasks, for my Bina Nusantara Computer Club Mid Project',
            imgName: 'todo.png',
            link: 'https://github.com/bryanfks-dev/MidProject-BackendDevelopment-2022'
        })
    ];

    const mobileAppProjects = [
        new Project({
            name: 'MyHome',
            description: 'View and explore your dream home using Augmented Reality technology, for Multimedia Systems Course',
            imgName: 'myhome.jpg',
            link: 'https://github.com/bryanfks-dev/MyHome-AR'
        }),
        new Project({
            name: 'Notify',
            description: 'An app that always moderates your dormitory or apartement fees and eat cost',
            imgName: 'notify.jpg',
            link: 'https://github.com/bryanfks-dev/Notify'
        }),
        new Project({
            name: 'Spectrum Quiz',
            description: 'Quiz based app for Autism Spectrum Disorder rehabilitation, for Human Computer Interaction Course',
            imgName: 'spectrum_quiz.jpg',
            link: 'https://github.com/bryanfks-dev/Spectrum-QUIZ'
        })
    ];

    // Append project cards
    // Website
    appendCards({ projects: webProjects, swiperWrapperIdx: 0 });

    // Mobile App
    appendCards({ projects: mobileAppProjects, swiperWrapperIdx: 1 });

    initImgViewer();
}

const initImgViewer = () => {
    const imgs = document.querySelectorAll('.section-content .card img');
    const projectTitles = document.querySelectorAll('.section-content .card .content span');

    // Image viewer components
    const imgViewer = document.querySelector('#img-viewer');
    const imgViewerTitle = document.querySelector('#img-viewer .modal .header span');
    const imgViewerImg = document.querySelector('#img-viewer .modal img');
    const imgViewerCloseBtn = document.querySelector('#img-viewer .modal .header svg');

    // Iterate through all available projects
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        const title = projectTitles[i].innerText;

        // Project on click handler
        img.addEventListener('click', () => {
            imgViewerTitle.innerText = title;
            imgViewerImg.src = img.src;
            imgViewerImg.alt = img.alt;

            imgViewer.classList.add('open');
            document.body.style.overflow = 'hidden';
        })
    }
    
    // Image viewer close button handler
    imgViewerCloseBtn.addEventListener('click', () => {
        imgViewer.classList.remove('open');

        imgViewerTitle.innerText = '';
        imgViewerImg.src = '';
        imgViewerImg.alt = '';

        document.body.style.overflow = 'auto';
    });
}