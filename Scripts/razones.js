/**
 * RAZONES-GALACTICO.JS
 * Funcionalidad galáctica para la página de razones
 */

// Configuración global
const config = {
    heartCount: 0,
    reasonsDiscovered: 0,
    progressValue: 0,
    musicEnabled: false,
    starsEnabled: true,
    effectsEnabled: true,
    discoveredReasons: new Set()
};

// Datos de las razones
const razonesData = [
    {
        id: 1,
        number: "01",
        title: "Sonrisa Universal",
        icon: "fas fa-smile-beam",
        color: "primary",
        content: "Tu sonrisa no solo ilumina mi día, sino que tiene el poder de iluminar todo el <span class='texto-magico-galactic'>universo</span>. Cada vez que la veo, siento que todo a mi alrededor cobra sentido y belleza.",
        stats: [
            { icon: "fas fa-sun", label: "+100% Luz" },
            { icon: "fas fa-heart", label: "∞ Felicidad" }
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Efecto Corazón",
        icon: "fas fa-heartbeat",
        color: "secondary",
        content: "Tu presencia acelera mi corazón de formas que ni la ciencia puede explicar. Es como si cada pensamiento tuyo activara un <span class='texto-magico-galactic'>ritmo especial</span> que solo existe cuando pienso en ti.",
        stats: [
            { icon: "fas fa-bolt", label: "Energía ∞" },
            { icon: "fas fa-music", label: "Ritmo único" }
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Transformación Mágica",
        icon: "fas fa-magic",
        color: "accent",
        content: "Tienes el poder único de convertir días ordinarios en <span class='texto-magico-galactic'>momentos extraordinarios</span>. Con solo estar a tu lado, lo mundano se vuelve especial y cada instante se convierte en un recuerdo valioso.",
        stats: [
            { icon: "fas fa-wand-magic-sparkles", label: "+90% Magia" },
            { icon: "fas fa-clock", label: "Tiempo dilatado" }
        ]
    },
    {
        id: 4,
        number: "04",
        title: "Compañía Perfecta",
        icon: "fas fa-users",
        color: "space",
        content: "Eres mi <span class='texto-magico-galactic'>persona favorita</span> para compartir cualquier momento, desde las pequeñas victorias hasta los grandes sueños. Cada experiencia es mejor cuando estás a mi lado.",
        stats: [
            { icon: "fas fa-handshake", label: "Compatibilidad" },
            { icon: "fas fa-chart-line", label: "99%" }
        ]
    },
    {
        id: 5,
        number: "05",
        title: "San Valentín Exclusivo",
        icon: "fas fa-crown",
        color: "magic",
        special: true,
        content: "No puedo imaginar celebrar este <span class='texto-magico-galactic'>San Valentín</span> con nadie más. Eres la única persona con quien quiero escribir esta historia y todos los capítulos que vendrán después.",
        stats: [
            { icon: "fas fa-gem", label: "EXCLUSIVO" },
            { icon: "fas fa-calendar-heart", label: "14 Febrero" }
        ]
    }
];

// Datos de las señales
const senalesData = [
    {
        title: "Destino Confirmado",
        icon: "fas fa-dna",
        content: "Si estás leyendo esto, nuestro <span class='texto-magico-galactic'>ADN emocional</span> ya está sincronizado. El universo conspiró para que nuestros caminos se cruzaran en este momento exacto.",
        value: "99.99%"
    },
    {
        title: "Sonrisa Inevitable",
        icon: "fas fa-laugh-beam",
        content: "Si has sonreído al menos una vez mientras leías esto, tu <span class='texto-magico-galactic'>subconsciente</span> ya tomó la decisión. Esa sonrisa es la confirmación biológica de lo que tu corazón ya sabe.",
        value: "Sonrisas: ∞"
    },
    {
        title: "Match Perfecto",
        icon: "fas fa-heart-circle-bolt",
        content: "Si te gusta el romance, somos el <span class='texto-magico-galactic'>algoritmo perfecto</span>. La química entre nosotros está matemáticamente comprobada y emocionalmente garantizada.",
        value: "100%"
    }
];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initGalacticPage();
    initInteractivity();
    initAnimations();
    startBackgroundEffects();
    initNavigationButtons();
});

// Inicializar página galáctica
function initGalacticPage() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
    
    // Crear estrellas de fondo
    createStars();
    
    // Cargar contenido
    loadRazonesContent();
    loadSenalesContent();
    
    // Inicializar progreso
    initProgress();
    
    // Inicializar controles
    initControls();
}

// Crear estrellas galácticas
function createStars() {
    const galaxyBackground = document.getElementById('galaxyBackground');
    if (!galaxyBackground) return;
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'galaxy-star';
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 4;
        
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            background: ${Math.random() > 0.8 ? 'var(--romantic-primary)' : 
                         Math.random() > 0.6 ? 'var(--romantic-accent)' : 
                         Math.random() > 0.4 ? 'var(--romantic-space)' : 
                         'white'};
        `;
        
        galaxyBackground.appendChild(star);
    }
}

// Cargar contenido de razones
function loadRazonesContent() {
    const razonesContainer = document.getElementById('razonesContent');
    if (!razonesContainer) return;
    
    let razonesHTML = '<div class="razones-container">';
    
    razonesData.forEach((razon, index) => {
        const delay = 100 + (index * 100);
        
        razonesHTML += `
            <div class="razon-card-galactic ${razon.special ? 'special' : ''}" 
                 data-aos="flip-left" 
                 data-aos-delay="${delay}"
                 data-razon-id="${razon.id}">
                <div class="razon-header-galactic">
                    <div class="razon-number-galactic">${razon.number}</div>
                    <div class="razon-icon-galactic">
                        <i class="${razon.icon}"></i>
                    </div>
                    <div class="razon-title-galactic">${razon.title}</div>
                </div>
                <div class="razon-content-galactic">
                    <p class="razon-text-galactic">${razon.content}</p>
                    <div class="razon-stats-galactic">
                        ${razon.stats.map(stat => `
                            <span><i class="${stat.icon}"></i> ${stat.label}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    razonesHTML += '</div>';
    razonesContainer.innerHTML = razonesHTML;
}

// Cargar contenido de señales
function loadSenalesContent() {
    const signalsGrid = document.querySelector('.signals-grid');
    if (!signalsGrid) return;
    
    let signalsHTML = '';
    
    senalesData.forEach((senal, index) => {
        const delay = 100 + (index * 200);
        
        signalsHTML += `
            <div class="signal-card-galactic" data-aos="zoom-in" data-aos-delay="${delay}">
                <div class="signal-icon-galactic">
                    <i class="${senal.icon}"></i>
                </div>
                <div class="signal-content-galactic">
                    <h4>${senal.title}</h4>
                    <p>${senal.content}</p>
                    <div class="signal-value">
                        <i class="fas fa-chart-bar"></i>
                        <span>${senal.value}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    signalsGrid.innerHTML = signalsHTML;
}

// Inicializar interactividad
function initInteractivity() {
    // Click en tarjetas de razones
    document.addEventListener('click', function(e) {
        const razonCard = e.target.closest('.razon-card-galactic');
        if (razonCard) {
            const razonId = razonCard.getAttribute('data-razon-id');
            showRazonDetails(razonId);
            incrementHeartCount();
            discoverReason(razonId);
        }
        
        // Click en corazón interactivo
        if (e.target.closest('#razonHeart')) {
            createHeartExplosion();
            incrementHeartCount();
            showFloatingMessage('💖 Latido galáctico detectado!');
        }
    });
    
    // Scroll para progreso
    window.addEventListener('scroll', updateProgress);
    
    // Click en controles
    document.querySelectorAll('.control-item').forEach(control => {
        control.addEventListener('click', function() {
            const controlId = this.id;
            toggleControl(controlId);
        });
    });
    
    // Cerrar modal
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('modalGalactic')?.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

// Inicializar botones de navegación (actualizado)
function initNavigationButtons() {
    // Botón VOLVER AL INICIO
    const backButton = document.getElementById('backToHome');
    if (backButton) {
        backButton.addEventListener('click', function() {
            // Efecto visual al hacer click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Crear efecto de partículas
            createGalacticExplosion();
            
            // Mostrar mensaje
            showFloatingMessage('🔄 Regresando al inicio...');
            
            // Redirección (cambia 'index.html' por la URL real)
            setTimeout(() => {
                window.location.href = 'sorpresa.html';
            }, 800);
        });
    }

    // Botón SIGUIENTE SISTEMA
    const nextButton = document.getElementById('nextSystem');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Efecto visual al hacer click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Crear efecto de partículas
            createGalacticExplosion();
            
            // Mostrar mensaje
            showFloatingMessage('🚀 Viajando al siguiente sistema...');
            
            // Redirección (cambia 'siguiente.html' por la URL real)
            setTimeout(() => {
                window.location.href = 'dibujo.html';
            }, 800);
        });
    }
}

// Inicializar animaciones
function initAnimations() {
    // Animación de partículas
    startParticles();
    
    // Animación de constelación
    animateConstellation();
    
    // Efecto de título
    animateTitle();
}

// Iniciar efectos de fondo
function startBackgroundEffects() {
    // Crear partículas galácticas
    createGalacticParticles();
    
    // Efectos iniciales
    setTimeout(() => {
        createGalacticExplosion();
        showFloatingMessage('✨ Bienvenido a las Razones Galácticas ✨');
    }, 1000);
}

// Inicializar controles
function initControls() {
    const controls = ['musicControl', 'starsControl', 'effectsControl'];
    
    controls.forEach(controlId => {
        const control = document.getElementById(controlId);
        if (control) {
            // Estado inicial
            control.classList.add('active');
            
            // Click handler
            control.addEventListener('click', function() {
                this.classList.toggle('active');
                const isActive = this.classList.contains('active');
                
                switch(controlId) {
                    case 'musicControl':
                        toggleMusic(isActive);
                        break;
                    case 'starsControl':
                        toggleStars(isActive);
                        break;
                    case 'effectsControl':
                        toggleEffects(isActive);
                        break;
                }
            });
        }
    });
}

// Incrementar contador de corazones
function incrementHeartCount() {
    config.heartCount++;
    document.getElementById('heartCount').textContent = config.heartCount;
    
    // Efecto visual
    const counter = document.querySelector('.love-counter-razones');
    counter.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 300);
    
    // Sonido
    playHeartSound();
    
    // Crear corazón flotante
    createFloatingHeart();
}

// Descubrir razón
function discoverReason(razonId) {
    if (!config.discoveredReasons.has(razonId)) {
        config.discoveredReasons.add(razonId);
        config.reasonsDiscovered++;
        document.getElementById('reasonsDiscovered').textContent = config.reasonsDiscovered;
        
        // Efecto especial
        if (config.reasonsDiscovered === 5) {
            showFloatingMessage('🎉 ¡Todas las razones descubiertas!');
            createGalacticCelebration();
        }
    }
}

// Mostrar detalles de la razón
function showRazonDetails(razonId) {
    const razon = razonesData.find(r => r.id == razonId);
    if (!razon) return;
    
    const modal = document.getElementById('modalGalactic');
    const modalBody = document.getElementById('modalBody');
    
    const modalHTML = `
        <div class="modal-header-galactic">
            <h2>${razon.title}</h2>
            <div class="modal-razon-number">Razón #${razon.number}</div>
        </div>
        <div class="modal-content-galactic">
            <div class="modal-icon">
                <i class="${razon.icon}"></i>
            </div>
            <div class="modal-text">
                <p>${razon.content.replace('class="texto-magico-galactic"', 'class="modal-magico"')}</p>
                <div class="modal-stats">
                    ${razon.stats.map(stat => `
                        <div class="modal-stat">
                            <i class="${stat.icon}"></i>
                            <span>${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="modal-footer-galactic">
            <button class="btn-modal-action" onclick="createGalacticCelebration()">
                <i class="fas fa-fire"></i> Celebrar en la galaxia
            </button>
        </div>
    `;
    
    modalBody.innerHTML = modalHTML;
    modal.style.display = 'flex';
    
    // Sonido mágico
    playMagicSound();
}

// Cerrar modal
function closeModal() {
    document.getElementById('modalGalactic').style.display = 'none';
}

// Inicializar progreso
function initProgress() {
    updateProgress();
}

// Actualizar progreso
function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollHeight > 0) {
        config.progressValue = Math.floor((scrollTop / scrollHeight) * 100);
        const progressBar = document.getElementById('progressBar');
        const progressPercentage = document.getElementById('progressPercentage');
        
        if (progressBar) {
            progressBar.style.width = `${config.progressValue}%`;
        }
        
        if (progressPercentage) {
            progressPercentage.textContent = `${config.progressValue}%`;
        }
        
        // Efectos en hitos
        if ([25, 50, 75, 100].includes(config.progressValue)) {
            showFloatingMessage(`🚀 ${config.progressValue}% explorado del universo`);
            
            if (config.progressValue === 100) {
                setTimeout(createGalacticCelebration, 500);
            }
        }
    }
}

// Crear partículas galácticas
function createGalacticParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'galactic-particle';
    
    const size = Math.random() * 8 + 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const colorType = Math.random();
    
    let color;
    if (colorType > 0.8) {
        color = 'rgba(255, 107, 107, 0.4)';
    } else if (colorType > 0.6) {
        color = 'rgba(255, 217, 61, 0.4)';
    } else if (colorType > 0.4) {
        color = 'rgba(77, 150, 255, 0.4)';
    } else if (colorType > 0.2) {
        color = 'rgba(157, 78, 221, 0.4)';
    } else {
        color = 'rgba(107, 207, 127, 0.4)';
    }
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        background: ${color};
        border-radius: 50%;
        position: absolute;
        animation: floatGalactic ${duration}s infinite ease-in-out;
        filter: blur(1px);
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
            createParticle(container);
        }
    }, duration * 1000);
}

// Crear corazón flotante
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.className = 'floating-heart-galactic';
    
    const size = Math.random() * 20 + 15;
    const posX = Math.random() * 100;
    const color = Math.random() > 0.7 ? 'var(--romantic-primary)' : 
                  Math.random() > 0.5 ? 'var(--romantic-accent)' : 
                  'var(--romantic-magic)';
    
    heart.style.cssText = `
        position: fixed;
        color: ${color};
        font-size: ${size}px;
        left: ${posX}%;
        top: 100%;
        z-index: 9998;
        pointer-events: none;
        opacity: ${Math.random() * 0.5 + 0.5};
        animation: heartFloatGalactic ${Math.random() * 2 + 2}s ease-in forwards;
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 3000);
}

// Crear explosión galáctica
function createGalacticExplosion() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#9d4edd'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const explosion = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 12 + 6;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            explosion.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                left: ${posX}%;
                top: ${posY}%;
                z-index: 9999;
                pointer-events: none;
                box-shadow: 0 0 20px ${color};
            `;
            
            document.body.appendChild(explosion);
            
            explosion.animate([
                { transform: 'scale(0.1)', opacity: 1 },
                { transform: 'scale(1.5)', opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => explosion.remove();
            
        }, i * 100);
    }
}

// Crear celebración galáctica
function createGalacticCelebration() {
    // Explosión inicial
    createGalacticExplosion();
    
    // Lluvia de corazones
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 50);
    }
    
    // Sonido de celebración
    playCelebrationSound();
    
    // Mensaje
    showFloatingMessage('🎉 ¡Celebración galáctica activada!');
}

// Crear explosión de corazón
function createHeartExplosion() {
    const heart = document.getElementById('razonHeart');
    if (!heart) return;
    
    heart.classList.add('activating');
    setTimeout(() => {
        heart.classList.remove('activating');
    }, 500);
    
    // Crear partículas alrededor del corazón
    const particlesContainer = document.getElementById('razonParticles');
    if (particlesContainer) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '<i class="fas fa-heart"></i>';
            
            // Variables CSS personalizadas para la animación
            const randomX = Math.random();
            const randomY = Math.random();
            
            particle.style.cssText = `
                position: absolute;
                color: var(--romantic-primary);
                font-size: ${Math.random() * 10 + 8}px;
                left: 50%;
                top: 50%;
                opacity: 0;
                animation: heartParticle ${Math.random() * 1 + 0.5}s ease-out forwards;
                --random-x: ${randomX};
                --random-y: ${randomY};
            `;
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) particle.remove();
            }, 1000);
        }
    }
}

// Mostrar mensaje flotante
function showFloatingMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'floating-notification-galactic';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: var(--romantic-text);
        padding: 15px 25px;
        border-radius: 50px;
        z-index: 10000;
        font-weight: bold;
        animation: notificationGalactic 3s ease-out forwards;
        backdrop-filter: blur(10px);
        border: 1px solid var(--romantic-border);
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) notification.remove();
    }, 3000);
}

// Toggle controles
function toggleControl(controlId) {
    const control = document.getElementById(controlId);
    const isActive = control.classList.contains('active');
    
    switch(controlId) {
        case 'musicControl':
            toggleMusic(isActive);
            showFloatingMessage(isActive ? '🎵 Música galáctica activada' : '🔇 Música desactivada');
            break;
        case 'starsControl':
            toggleStars(isActive);
            showFloatingMessage(isActive ? '⭐ Estrellas activadas' : '🌑 Estrellas desactivadas');
            break;
        case 'effectsControl':
            toggleEffects(isActive);
            showFloatingMessage(isActive ? '✨ Efectos activados' : '⚫ Efectos desactivados');
            break;
    }
}

function toggleMusic(enabled) {
    config.musicEnabled = enabled;
    // Aquí iría la lógica para reproducir/detener música
}

function toggleStars(enabled) {
    config.starsEnabled = enabled;
    const stars = document.querySelectorAll('.galaxy-star');
    stars.forEach(star => {
        star.style.visibility = enabled ? 'visible' : 'hidden';
    });
}

function toggleEffects(enabled) {
    config.effectsEnabled = enabled;
    // Aquí iría la lógica para activar/desactivar efectos
}

// Funciones de sonido
function playHeartSound() {
    const heartSound = document.getElementById('heartSound');
    if (heartSound && config.effectsEnabled) {
        heartSound.currentTime = 0;
        heartSound.play().catch(e => console.log("Audio no disponible"));
    }
}

function playMagicSound() {
    const spaceSound = document.getElementById('spaceSound');
    if (spaceSound && config.effectsEnabled) {
        spaceSound.currentTime = 0;
        spaceSound.play().catch(e => console.log("Audio no disponible"));
    }
}

function playCelebrationSound() {
    // Podrías añadir otro audio para celebraciones
    playMagicSound();
}

// Animación de constelación
function animateConstellation() {
    const stars = document.querySelectorAll('.constellation-star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.5}s`;
    });
}

// Animación de título
function animateTitle() {
    const title = document.querySelector('.galactic-title-number');
    if (title) {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Iniciar partículas
function startParticles() {
    setInterval(() => {
        if (config.effectsEnabled) {
            createGalacticParticles();
        }
    }, 5000);
}

// Efecto de carga inicial
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        showFloatingMessage('🚀 Iniciando viaje galáctico...');
    }, 100);
});