/**
 * SORPRESA-GALACTICO.JS
 * Funcionalidad galáctica para la página de sorpresa
 * VERSIÓN CORREGIDA - ESTRUCTURA PROFESIONAL
 * ============================================
 * Sección: Configuración y datos
 * ============================================
 */

// Configuración global
const configSorpresa = {
    loveBeats: 0,
    secretLooks: 0,
    connectionSeconds: 0,
    momentsCount: 0,
    secretUnlocked: false,
    missionAccepted: false,
    musicEnabled: true,
    starsEnabled: true,
    effectsEnabled: true
};

// Datos de los contenidos
const contenidosData = [
    {
        id: 1,
        title: "Nuestra Historia Cósmica",
        icon: "fas fa-comet",
        special: false,
        content: "Después de que el universo hiciera su magia y las galaxias alinearan nuestros destinos, quedó claro algo: quiero vivir este 14 de febrero contigo. Mi corazón —la única fuente confiable en estos temas intergalácticos— lo tiene claro desde el Big Bang.",
        stats: [
            { value: "99.9%", label: "Compatibilidad" },
            { value: "∞", label: "Duración" }
        ],
        action: "Explorar más"
    },
    {
        id: 2,
        title: "Nuestra Misión Espacial",
        icon: "fas fa-rocket",
        special: true,
        content: "Cada día a tu lado es una nueva galaxia por explorar, y no puedo esperar para seguir cartografiando nuestro universo juntos. Este San Valentín quiero que sea especial porque tú eres la estrella más brillante en mi firmamento.",
        stats: [
            { value: "85%", label: "Preparación" },
            { value: "14/02", label: "Fecha" }
        ],
        action: "Ver misión"
    }
];

// Datos de los cupones
const cuponesData = [
    {
        id: 1,
        title: "Experiencia Cinematográfica",
        icon: "fas fa-film",
        rarity: "common",
        description: "Viaje a través de realidades alternativas mediante el séptimo arte",
        stats: [
            { icon: "fas fa-clock", label: "3h" },
            { icon: "fas fa-users", label: "2 personas" }
        ],
        action: "Canjear cupón"
    },
    {
        id: 2,
        title: "Deseo Real",
        icon: "fas fa-crown",
        rarity: "epic",
        description: "Realización de cualquier deseo dentro de los límites de esta galaxia",
        stats: [
            { icon: "fas fa-infinity", label: "Tu imaginación" },
            { icon: "fas fa-gem", label: "Rareza alta" }
        ],
        action: "Canjear deseo"
    },
    {
        id: 3,
        title: "Expansión Cósmica",
        icon: "fas fa-umbrella-beach",
        rarity: "rare",
        description: "Conexión con la naturaleza en un entorno controlado espaciotemporal",
        stats: [
            { icon: "fas fa-sun", label: "Clima óptimo" },
            { icon: "fas fa-heart", label: "Romance máximo" }
        ],
        action: "Canjear picnic"
    }
];

// ============================================
// Sección: Inicialización principal
// ============================================

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando Sorpresa Galáctica...');
    
    // Orden de inicialización
    initAOS();
    initGalaxyBackground();
    initContent();
    initControls();
    initInteractivity();
    initAnimations();
    initNewElements();
    startGalacticEffects();
    startCounters();
    
    // Efecto de carga suave
    initSmoothLoad();
});

// ============================================
// Sección: Funciones de inicialización
// ============================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
            offset: 100,
            easing: 'ease-out-cubic'
        });
        console.log('✅ AOS inicializado');
    }
}

function initGalaxyBackground() {
    createGalaxyStars();
    console.log('✅ Galaxia de estrellas creada');
}

function initContent() {
    loadContenidos();
    loadCupones();
    console.log('✅ Contenidos y cupones cargados');
}

function initControls() {
    const controls = ['musicControl', 'starsControl', 'backControl'];
    
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
                        toggleMusicSorpresa(isActive);
                        showFloatingMessageSorpresa(isActive ? '🎵 Música activada' : '🔇 Música desactivada');
                        break;
                    case 'starsControl':
                        toggleStarsSorpresa(isActive);
                        showFloatingMessageSorpresa(isActive ? '⭐ Efectos activados' : '🌑 Efectos desactivados');
                        break;
                    case 'backControl':
                        showFloatingMessageSorpresa('🏠 Regresando al inicio...');
                        setTimeout(() => {
                            window.location.href = '../index.html';
                        }, 1500);
                        break;
                }
            });
        }
    });
    console.log('✅ Controles inicializados');
}

function initInteractivity() {
    // Click en contenido
    document.addEventListener('click', function(e) {
        const contentCard = e.target.closest('.content-card-sorpresa');
        if (contentCard) {
            const contenidoId = contentCard.getAttribute('data-contenido-id');
            showContenidoDetails(contenidoId);
            incrementLoveBeats();
            incrementMomentsCount();
        }
        
        // Click en botones de acción
        const btnAction = e.target.closest('.btn-card-action-sorpresa');
        if (btnAction) {
            const actionId = btnAction.getAttribute('data-action');
            handleAction(actionId);
        }
        
        // Click en cupones
        const cuponCard = e.target.closest('.coupon-card-sorpresa');
        if (cuponCard) {
            const cuponId = cuponCard.getAttribute('data-cupon-id');
            handleCuponClick(cuponId);
        }
        
        // Click en corazón interactivo
        if (e.target.closest('#mainHeartSorpresa')) {
            createHeartExplosionSorpresa();
            incrementLoveBeats();
            showFloatingMessageSorpresa('💖 Latido galáctico detectado!');
        }
    });
    
    // Navegación
    document.getElementById('btnPrevSorpresa')?.addEventListener('click', () => {
        showFloatingMessageSorpresa('⏪ Navegando a página anterior...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
    
    document.getElementById('btnNextSorpresa')?.addEventListener('click', () => {
        showFloatingMessageSorpresa('⏩ Navegando a página siguiente...');
        setTimeout(() => {
            window.location.href = 'razones.html';
        }, 1000);
    });
    
    // Cerrar modal
    document.getElementById('modalCloseSorpresa')?.addEventListener('click', closeModalSorpresa);
    document.getElementById('modalSorpresa')?.addEventListener('click', function(e) {
        if (e.target === this) closeModalSorpresa();
    });
    
    // Seguimiento de miradas (simulado)
    document.addEventListener('mousemove', function() {
        if (Math.random() > 0.995) {
            incrementSecretLooks();
        }
    });
    
    console.log('✅ Interactividad inicializada');
}

function initAnimations() {
    createShootingStars();
    animatePlanets();
    animateTitleSorpresa();
    console.log('✅ Animaciones inicializadas');
}

function initNewElements() {
    // Botón aceptar misión
    document.getElementById('btnAcceptMission')?.addEventListener('click', function() {
        configSorpresa.missionAccepted = true;
        showFloatingMessageSorpresa('🎉 ¡Misión aceptada! ¡Viaje interestelar confirmado!');
        createGalacticCelebrationSorpresa();
        createMissionLaunch();
    });
    
    // Botón detalles misión
    document.getElementById('btnMissionDetails')?.addEventListener('click', function() {
        showMissionDetailsModal();
    });
    
    // Hacer imágenes clickeables
    document.querySelectorAll('.window-image-sorpresa').forEach(img => {
        img.addEventListener('click', function() {
            showImageModal(this.src, this.alt);
        });
    });
    
    console.log('✅ Nuevos elementos inicializados');
}

function initSmoothLoad() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        showFloatingMessageSorpresa('✨ Bienvenido a la Sorpresa Galáctica ✨');
    }, 300);
}

// ============================================
// Sección: Funciones de contenido
// ============================================

function createGalaxyStars() {
    const galaxyBackground = document.getElementById('galaxyBackground');
    if (!galaxyBackground) return;
    
    // Limpiar estrellas existentes
    galaxyBackground.innerHTML = '';
    
    // Crear 200 estrellas
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'galaxy-star-sorpresa';
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 4;
        const opacity = Math.random() * 0.8 + 0.2;
        
        // Variedad de colores
        const colors = [
            'white',
            'var(--romantic-text-secondary)',
            'var(--romantic-accent)',
            'var(--romantic-space)',
            'var(--romantic-primary)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            background: ${color};
            opacity: ${opacity};
        `;
        
        galaxyBackground.appendChild(star);
    }
}

function loadContenidos() {
    const contenidoContainer = document.getElementById('sorpresaContent');
    if (!contenidoContainer) return;
    
    let contenidoHTML = '';
    
    contenidosData.forEach((contenido, index) => {
        const delay = 100 + (index * 200);
        
        contenidoHTML += `
            <div class="content-card-sorpresa ${contenido.special ? 'special' : ''}" 
                 data-aos="fade-up" 
                 data-aos-delay="${delay}"
                 data-contenido-id="${contenido.id}">
                <div class="card-header-sorpresa">
                    <div class="card-icon-sorpresa">
                        <i class="${contenido.icon}"></i>
                    </div>
                    <div class="card-title-sorpresa">${contenido.title}</div>
                </div>
                <div class="card-content-sorpresa">
                    <p class="card-text-sorpresa">${contenido.content}</p>
                    <div class="card-stats-sorpresa">
                        ${contenido.stats.map(stat => `
                            <div class="card-stat-sorpresa">
                                <div class="stat-value-sorpresa">${stat.value}</div>
                                <div class="stat-label-sorpresa">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="card-action-sorpresa">
                    <button class="btn-card-action-sorpresa ${contenido.special ? 'special' : ''}" 
                            data-action="${contenido.id}">
                        <i class="${contenido.icon}"></i>
                        ${contenido.action}
                    </button>
                </div>
            </div>
        `;
    });
    
    contenidoContainer.innerHTML = contenidoHTML;
}

function loadCupones() {
    const cuponesGrid = document.querySelector('.coupons-grid-sorpresa');
    if (!cuponesGrid) return;
    
    let cuponesHTML = '';
    
    cuponesData.forEach((cupon, index) => {
        const delay = 100 + (index * 100);
        
        cuponesHTML += `
            <div class="coupon-card-sorpresa ${cupon.secret ? 'secret' : ''}" 
                 data-aos="flip-left" 
                 data-aos-delay="${delay}"
                 data-cupon-id="${cupon.id}">
                <div class="coupon-header-sorpresa">
                    <div class="coupon-icon-sorpresa">
                        <i class="${cupon.icon}"></i>
                    </div>
                    <div class="coupon-title-sorpresa">${cupon.title}</div>
                    <div class="coupon-rarity-sorpresa">
                        <span class="rarity-badge-sorpresa ${cupon.rarity}">${cupon.rarity.toUpperCase()}</span>
                    </div>
                </div>
                <div class="coupon-content-sorpresa">
                    <p class="coupon-description-sorpresa">${cupon.description}</p>
                    <div class="coupon-stats-sorpresa">
                        ${cupon.stats.map(stat => `
                            <span><i class="${stat.icon}"></i> ${stat.label}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="coupon-action-sorpresa">
                    <button class="btn-coupon-sorpresa ${cupon.secret ? 'secret' : ''}" 
                            data-cupon="${cupon.id}">
                        <i class="${cupon.secret ? 'fas fa-key' : 'fas fa-ticket-alt'}"></i>
                        ${cupon.action}
                    </button>
                </div>
            </div>
        `;
    });
    
    cuponesGrid.innerHTML = cuponesHTML;
}

// ============================================
// Sección: Funciones de animación
// ============================================

function createShootingStars() {
    setInterval(() => {
        if (configSorpresa.starsEnabled && configSorpresa.effectsEnabled && Math.random() > 0.7) {
            const star = document.createElement('div');
            star.className = 'shooting-star-sorpresa';
            
            const width = Math.random() * 100 + 50;
            const top = Math.random() * 30;
            const duration = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.8 + 0.2;
            
            star.style.cssText = `
                width: ${width}px;
                top: ${top}%;
                animation-duration: ${duration}s;
                opacity: ${opacity};
                filter: brightness(${Math.random() * 0.7 + 0.8});
            `;
            
            const container = document.getElementById('shootingStars');
            if (container) {
                container.appendChild(star);
                
                setTimeout(() => {
                    if (star.parentNode) star.remove();
                }, 3000);
            }
        }
    }, 3000);
}

function animatePlanets() {
    const planets = document.querySelectorAll('.planet-sorpresa');
    planets.forEach((planet, index) => {
        const duration = 20 + index * 5;
        const delay = index * 3;
        
        planet.style.animation = `floatPlanet ${duration}s infinite ease-in-out`;
        planet.style.animationDelay = `${delay}s`;
    });
}

function animateTitleSorpresa() {
    const title = document.querySelector('.galactic-title-main-sorpresa');
    if (title) {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-out';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// ============================================
// Sección: Funciones de efectos galácticos
// ============================================

function startGalacticEffects() {
    // Efectos iniciales
    setTimeout(() => {
        createGalacticExplosionSorpresa();
    }, 1500);
    
    // Reproducir música
    if (configSorpresa.musicEnabled) {
        const music = document.getElementById('ambientMusicSorpresa');
        if (music) {
            music.volume = 0.15;
            music.play().catch(e => {
                console.log("🎵 Audio en espera de interacción del usuario");
            });
        }
    }
}

// ============================================
// Sección: Funciones de contadores
// ============================================

function startCounters() {
    // Temporizador de conexión
    setInterval(() => {
        configSorpresa.connectionSeconds++;
        const connectionTimeElement = document.getElementById('connectionTime');
        if (connectionTimeElement) {
            const minutes = Math.floor(configSorpresa.connectionSeconds / 60);
            const seconds = configSorpresa.connectionSeconds % 60;
            connectionTimeElement.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // Efecto especial cada minuto
        if (configSorpresa.connectionSeconds % 60 === 0) {
            createMinuteCelebration();
        }
    }, 1000);
}

function incrementLoveBeats() {
    configSorpresa.loveBeats++;
    const beatsElement = document.getElementById('loveBeats');
    if (beatsElement) {
        beatsElement.textContent = configSorpresa.loveBeats;
    }
    
    // Efecto visual
    const counter = document.querySelector('.love-counter-sorpresa');
    if (counter) {
        counter.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Sonido
    playHeartbeatSound();
    
    // Efecto especial cada 10 latidos
    if (configSorpresa.loveBeats % 10 === 0) {
        createHeartRain();
    }
}

function incrementMomentsCount() {
    configSorpresa.momentsCount++;
    
    // Efecto visual
    createMomentSparkle();
    
    // Efectos especiales en hitos
    if (configSorpresa.momentsCount === 5) {
        showFloatingMessageSorpresa('✨ 5 momentos especiales registrados!');
        
        // Desbloquear cupón secreto
        if (!configSorpresa.secretUnlocked) {
            configSorpresa.secretUnlocked = true;
            unlockSecretCoupon();
        }
    }
}

function incrementSecretLooks() {
    configSorpresa.secretLooks++;
    const looksElement = document.getElementById('secretLooks');
    if (looksElement) {
        looksElement.textContent = configSorpresa.secretLooks;
    }
    
    // Efecto especial cada 10 miradas
    if (configSorpresa.secretLooks % 10 === 0 && configSorpresa.effectsEnabled) {
        const secretCounter = document.querySelector('.secret-counter-sorpresa');
        if (secretCounter) {
            secretCounter.style.animation = 'sparkleTwinkle 0.5s ease-out';
            
            setTimeout(() => {
                secretCounter.style.animation = '';
            }, 500);
        }
    }
    
    // Mensaje secreto cada 50 miradas
    if (configSorpresa.secretLooks % 50 === 0) {
        showFloatingMessageSorpresa('👁️ ¡Me has visto ' + configSorpresa.secretLooks + ' veces!');
    }
}

// ============================================
// Sección: Funciones de modales
// ============================================

function showContenidoDetails(contenidoId) {
    const contenido = contenidosData.find(c => c.id == contenidoId);
    if (!contenido) return;
    
    const modal = document.getElementById('modalSorpresa');
    const modalBody = document.getElementById('modalBodySorpresa');
    
    if (!modal || !modalBody) return;
    
    const modalHTML = `
        <div class="modal-header-sorpresa text-center">
            <h2 class="mb-3">${contenido.title}</h2>
            <div class="modal-icon-sorpresa mb-4">
                <i class="${contenido.icon} fa-3x"></i>
            </div>
        </div>
        <div class="modal-content-sorpresa">
            <p class="text-center mb-4">${contenido.content}</p>
            <div class="modal-stats-sorpresa d-flex justify-content-center gap-4">
                ${contenido.stats.map(stat => `
                    <div class="modal-stat-sorpresa text-center">
                        <div class="modal-stat-value display-6">${stat.value}</div>
                        <div class="modal-stat-label">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="modal-footer-sorpresa text-center mt-4">
            <button class="btn-modal-action-sorpresa" onclick="createGalacticCelebrationSorpresa()">
                <i class="fas fa-fire me-2"></i> Celebrar este momento
            </button>
        </div>
    `;
    
    modalBody.innerHTML = modalHTML;
    modal.style.display = 'flex';
    
    // Sonido mágico
    playMagicSoundSorpresa();
}

function closeModalSorpresa() {
    const modal = document.getElementById('modalSorpresa');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showMissionDetailsModal() {
    const modal = document.getElementById('modalSorpresa');
    const modalBody = document.getElementById('modalBodySorpresa');
    
    if (!modal || !modalBody) return;
    
    const missionDetails = `
        <div class="mission-details-sorpresa text-center">
            <h3 class="mb-4"><i class="fas fa-clipboard-list me-2"></i>Detalles de la Misión Especial</h3>
            
            <div class="mission-info-sorpresa d-flex flex-wrap justify-content-center gap-3 my-4">
                <div class="info-item-sorpresa">
                    <i class="fas fa-rocket"></i>
                    <strong>Misión:</strong> San Valentín Interestelar
                </div>
                <div class="info-item-sorpresa">
                    <i class="fas fa-calendar-alt"></i>
                    <strong>Fecha:</strong> 14 de Febrero 2024
                </div>
                <div class="info-item-sorpresa">
                    <i class="fas fa-users"></i>
                    <strong>Tripulación:</strong> 2 personas
                </div>
                <div class="info-item-sorpresa">
                    <i class="fas fa-star"></i>
                    <strong>Nivel:</strong> Especial
                </div>
            </div>
            
            <div class="mission-description-sorpresa text-start">
                <h4 class="text-center mb-3">Descripción de la Misión:</h4>
                <p class="text-center mb-3">Una jornada especial diseñada para crear recuerdos cósmicos que duren por toda la eternidad.</p>
                <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-film me-2"></i>Viaje a través de realidades cinematográficas</li>
                    <li class="mb-2"><i class="fas fa-utensils me-2"></i>Cena interestelar bajo las estrellas</li>
                    <li class="mb-2"><i class="fas fa-heart me-2"></i>Exploración de conexiones emocionales profundas</li>
                    <li><i class="fas fa-memory me-2"></i>Creación de recuerdos galácticos</li>
                </ul>
            </div>
            
            <div class="mission-requirements-sorpresa text-center mt-4">
                <h4 class="mb-3">Requisitos:</h4>
                <p class="mb-2"><i class="fas fa-heart text-danger me-2"></i> Corazón abierto al amor</p>
                <p class="mb-2"><i class="fas fa-smile text-warning me-2"></i> Disposición para sonreír</p>
                <p><i class="fas fa-magic text-primary me-2"></i> Espíritu aventurero</p>
            </div>
        </div>
    `;
    
    modalBody.innerHTML = missionDetails;
    modal.style.display = 'flex';
    playMagicSoundSorpresa();
}

function showImageModal(src, alt) {
    const modal = document.getElementById('modalSorpresa');
    const modalBody = document.getElementById('modalBodySorpresa');
    
    if (!modal || !modalBody) return;
    
    const imageModal = `
        <div class="image-modal-sorpresa text-center">
            <img src="${src}" alt="${alt}" class="modal-image-sorpresa w-100 rounded mb-3">
            <div class="image-caption-sorpresa">${alt}</div>
        </div>
    `;
    
    modalBody.innerHTML = imageModal;
    modal.style.display = 'flex';
}

// ============================================
// Sección: Funciones de interacción
// ============================================

function handleAction(actionId) {
    const acciones = {
        1: '📜 Explorando nuestra historia cósmica...',
        2: '🚀 ¡Misión espacial activada! Preparando viaje interestelar...'
    };
    
    const mensaje = acciones[actionId] || '✨ Acción ejecutada con éxito!';
    showFloatingMessageSorpresa(mensaje);
    
    if (actionId == 2) {
        configSorpresa.missionAccepted = true;
        createMissionLaunch();
    }
}

function handleCuponClick(cuponId) {
    const cupon = cuponesData.find(c => c.id == cuponId);
    if (!cupon) return;
    
    if (cupon.secret && !configSorpresa.secretUnlocked) {
        showFloatingMessageSorpresa('🔐 Necesitas descubrir 5 momentos para desbloquear este cupón secreto.');
        return;
    }
    
    const mensajes = {
        1: '🎬 Cupón canjeado: Experiencia cinematográfica interestelar confirmada!',
        2: '👑 Cupón canjeado: Tu deseo es mi comando galáctico!',
        3: '🧺 Cupón canjeado: Picnic estelar programado en órbita!',
        4: '🎉 ¡CUPÓN SECRETO REVELADO! Sorpresa especial: Cena bajo las estrellas reales!'
    };
    
    showFloatingMessageSorpresa(mensajes[cuponId]);
    createCouponExplosion(cuponId);
}

// ============================================
// Sección: Funciones de efectos visuales
// ============================================

function createCouponExplosion(cuponId) {
    if (!configSorpresa.effectsEnabled) return;
    
    const colors = {
        1: ['#ff6b6b', '#4d96ff'],
        2: ['#9d4edd', '#ffd93d'],
        3: ['#6bcf7f', '#ffd93d'],
        4: ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#9d4edd']
    };
    
    const explosionColors = colors[cuponId] || ['#ff6b6b', '#ffd93d'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            const color = explosionColors[Math.floor(Math.random() * explosionColors.length)];
            const size = Math.random() * 15 + 5;
            const posX = Math.random() * 100;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                left: ${posX}%;
                top: 50%;
                z-index: 9998;
                pointer-events: none;
                transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg);
                animation: couponExplosion ${Math.random() * 2 + 1}s ease-in forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) particle.remove();
            }, 2000);
        }, i * 50);
    }
    
    // Sonido de celebración
    playCelebrationSound();
}

function unlockSecretCoupon() {
    showFloatingMessageSorpresa('🔓 ¡Cupón secreto desbloqueado!');
    
    // Actualizar botón del cupón secreto
    const cuponSecret = document.querySelector('.coupon-card-sorpresa.secret .btn-coupon-sorpresa');
    if (cuponSecret) {
        cuponSecret.innerHTML = '<i class="fas fa-gem"></i> Canjear cupón secreto';
        cuponSecret.classList.remove('secret');
    }
    
    // Efecto de desbloqueo
    createUnlockEffect();
}

function createUnlockEffect() {
    if (!configSorpresa.effectsEnabled) return;
    
    const cuponSecret = document.querySelector('.coupon-card-sorpresa.secret');
    if (!cuponSecret) return;
    
    const rect = cuponSecret.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.innerHTML = '<i class="fas fa-sparkles"></i>';
            
            spark.style.cssText = `
                position: fixed;
                color: #ffd93d;
                font-size: 1.5rem;
                left: ${centerX}px;
                top: ${centerY}px;
                z-index: 9999;
                pointer-events: none;
                transform: translate(-50%, -50%);
                animation: unlockSpark ${Math.random() * 0.8 + 0.3}s ease-out forwards;
            `;
            
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) spark.remove();
            }, 1000);
        }, i * 100);
    }
}

function createGalacticExplosionSorpresa() {
    if (!configSorpresa.effectsEnabled) return;
    
    const colors = ['#ff6b6b', '#ffd93d', '#4d96ff', '#9d4edd', '#6bcf7f'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 15 + 5;
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 250 + 100;
            
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                left: ${centerX}px;
                top: ${centerY}px;
                z-index: 9999;
                pointer-events: none;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 20px ${color};
                filter: blur(1px);
            `;
            
            document.body.appendChild(particle);
            
            // Animación de explosión
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(0.1)', opacity: 1 },
                { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1)`, opacity: 0 }
            ], {
                duration: 1200,
                easing: 'ease-out'
            }).onfinish = () => {
                if (particle.parentNode) particle.remove();
            };
        }, i * 40);
    }
}

function createHeartExplosionSorpresa() {
    if (!configSorpresa.effectsEnabled) return;
    
    const heart = document.getElementById('mainHeartSorpresa');
    if (!heart) return;
    
    heart.classList.add('exploding');
    
    // Crear partículas de corazón
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '<i class="fas fa-heart"></i>';
        
        particle.style.cssText = `
            position: absolute;
            color: var(--romantic-primary);
            font-size: ${Math.random() * 10 + 8}px;
            left: 50%;
            top: 50%;
            opacity: 0;
            animation: heartParticleSorpresa ${Math.random() * 0.8 + 0.3}s ease-out forwards;
        `;
        
        heart.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) particle.remove();
        }, 1000);
    }
    
    setTimeout(() => {
        heart.classList.remove('exploding');
    }, 500);
}

function createHeartRain() {
    if (!configSorpresa.effectsEnabled) return;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            
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
                top: -50px;
                z-index: 9996;
                pointer-events: none;
                opacity: ${Math.random() * 0.7 + 0.3};
                animation: heartRain ${Math.random() * 3 + 2}s ease-in forwards;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 4000);
        }, i * 150);
    }
}

function createMomentSparkle() {
    if (!configSorpresa.effectsEnabled) return;
    
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '<i class="fas fa-sparkles"></i>';
    
    sparkle.style.cssText = `
        position: fixed;
        color: var(--romantic-accent);
        font-size: 20px;
        left: ${Math.random() * 80 + 10}%;
        top: ${Math.random() * 80 + 10}%;
        z-index: 9997;
        pointer-events: none;
        animation: sparklePop 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) sparkle.remove();
    }, 1000);
}

function createMissionLaunch() {
    if (!configSorpresa.effectsEnabled) return;
    
    showFloatingMessageSorpresa('🚀 ¡Misión aceptada! Despegue en 3... 2... 1...');
    
    // Efecto visual
    const questionContainer = document.querySelector('.question-container-sorpresa');
    if (questionContainer) {
        questionContainer.classList.add('mission-launching');
        
        // Crear efecto de fuego
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const flame = document.createElement('div');
                
                flame.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 20 + 10}px;
                    height: ${Math.random() * 30 + 20}px;
                    background: linear-gradient(to top, #ff6b6b, #ffd93d);
                    border-radius: 50% 50% 20% 20%;
                    left: 50%;
                    bottom: -40px;
                    transform: translateX(-50%);
                    animation: rocketFlameSorpresa ${Math.random() * 0.5 + 0.3}s ease-out forwards;
                    z-index: 1;
                `;
                
                questionContainer.appendChild(flame);
                
                setTimeout(() => {
                    if (flame.parentNode) flame.remove();
                }, 500);
            }, i * 100);
        }
    }
}

function createMinuteCelebration() {
    if (!configSorpresa.effectsEnabled) return;
    
    const timerElement = document.querySelector('.moment-counter-sorpresa');
    if (timerElement) {
        timerElement.classList.add('celebrating');
        
        // Crear explosión de corazones
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                createHeartRain();
            }, i * 200);
        }
        
        setTimeout(() => {
            timerElement.classList.remove('celebrating');
        }, 2000);
    }
}

// ============================================
// Sección: Funciones de control
// ============================================

function toggleMusicSorpresa(enabled) {
    configSorpresa.musicEnabled = enabled;
    const music = document.getElementById('ambientMusicSorpresa');
    
    if (music) {
        if (enabled) {
            music.volume = 0.15;
            music.play().catch(e => {
                console.log("🎵 Audio en espera de interacción del usuario");
            });
        } else {
            music.pause();
        }
    }
}

function toggleStarsSorpresa(enabled) {
    configSorpresa.starsEnabled = enabled;
    
    // Controlar visibilidad de estrellas
    const stars = document.querySelectorAll('.galaxy-star-sorpresa, .shooting-star-sorpresa');
    stars.forEach(star => {
        star.style.visibility = enabled ? 'visible' : 'hidden';
    });
    
    // Controlar planetas
    const planets = document.querySelectorAll('.planet-sorpresa');
    planets.forEach(planet => {
        planet.style.visibility = enabled ? 'visible' : 'hidden';
    });
}

// ============================================
// Sección: Funciones de utilidad
// ============================================

function createGalacticCelebrationSorpresa() {
    // Explosión inicial
    createGalacticExplosionSorpresa();
    
    // Lluvia de corazones
    createHeartRain();
    
    // Sonido de celebración
    playCelebrationSound();
    
    // Mensaje
    showFloatingMessageSorpresa('🎉 ¡Celebración galáctica activada!');
}

// ============================================
// Sección: Funciones de audio
// ============================================

function playHeartbeatSound() {
    const sound = document.getElementById('heartbeatSoundSorpresa');
    if (sound && configSorpresa.effectsEnabled) {
        sound.currentTime = 0;
        sound.volume = 0.1;
        sound.play().catch(e => {
            // Silenciar error, es normal si el usuario no ha interactuado
        });
    }
}

function playMagicSoundSorpresa() {
    const sound = document.getElementById('magicSoundSorpresa');
    if (sound && configSorpresa.effectsEnabled) {
        sound.currentTime = 0;
        sound.volume = 0.3;
        sound.play().catch(e => {
            // Silenciar error
        });
    }
}

function playCelebrationSound() {
    playMagicSoundSorpresa();
}

// ============================================
// Sección: Sistema de notificaciones
// ============================================

function showFloatingMessageSorpresa(message) {
    if (!configSorpresa.effectsEnabled) return;
    
    const notification = document.createElement('div');
    notification.className = 'floating-notification-sorpresa';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
        color: var(--romantic-text);
        padding: 12px 24px;
        border-radius: 50px;
        z-index: 10001;
        font-weight: 600;
        animation: notificationSorpresa 3s ease-out forwards;
        backdrop-filter: blur(15px);
        border: 1px solid var(--romantic-border);
        text-align: center;
        max-width: 85%;
        box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        font-size: 0.95rem;
        letter-spacing: 0.5px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) notification.remove();
    }, 3000);
}

// ============================================
// Sección: Estilos dinámicos CSS
// ============================================

const dynamicStylesSorpresa = document.createElement('style');
dynamicStylesSorpresa.textContent = `
    @keyframes heartParticleSorpresa {
        0% { 
            transform: translate(-50%, -50%) scale(0) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translate(
                calc((var(--random-x, 0.5) - 0.5) * 200px), 
                calc((var(--random-y, 0.5) - 0.5) * 200px)
            ) scale(1) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    @keyframes heartRain {
        0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(100vh) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    @keyframes sparklePop {
        0% { 
            transform: scale(0) rotate(-180deg); 
            opacity: 0; 
        }
        50% { 
            transform: scale(1.2) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: scale(1) rotate(180deg); 
            opacity: 0; 
        }
    }
    
    @keyframes rocketFlameSorpresa {
        0% { 
            transform: translateX(-50%) scaleY(1); 
            opacity: 1; 
        }
        100% { 
            transform: translateX(-50%) translateY(50px) scaleY(0); 
            opacity: 0; 
        }
    }
    
    @keyframes couponExplosion {
        0% { 
            transform: translate(-50%, -50%) scale(0.1) rotate(0deg); 
            opacity: 1; 
        }
        50% { 
            transform: translate(
                calc((var(--random-x, 0.5) - 0.5) * 150px), 
                calc((var(--random-y, 0.5) - 0.5) * 150px)
            ) scale(1) rotate(180deg); 
            opacity: 0.8; 
        }
        100% { 
            transform: translate(
                calc((var(--random-x, 0.5) - 0.5) * 300px), 
                calc((var(--random-y, 0.5) - 0.5) * 300px)
            ) scale(0) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    @keyframes unlockSpark {
        0% { 
            transform: translate(-50%, -50%) scale(0); 
            opacity: 1; 
        }
        100% { 
            transform: translate(
                calc((var(--random-x, 0.5) - 0.5) * 150px), 
                calc((var(--random-y, 0.5) - 0.5) * 150px)
            ) scale(1); 
            opacity: 0; 
        }
    }
    
    @keyframes notificationSorpresa {
        0% { 
            transform: translateX(-50%) translateY(50px); 
            opacity: 0; 
        }
        15% { 
            transform: translateX(-50%) translateY(0); 
            opacity: 1; 
        }
        85% { 
            transform: translateX(-50%) translateY(0); 
            opacity: 1; 
        }
        100% { 
            transform: translateX(-50%) translateY(-50px); 
            opacity: 0; 
        }
    }
    
    @keyframes missionLaunch {
        0% { 
            transform: translateY(0); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(-100vh); 
            opacity: 0; 
        }
    }
    
    .mission-launching {
        animation: missionLaunch 0.8s ease-out forwards !important;
    }
    
    .celebrating {
        animation: pulseGlow 1s infinite !important;
    }
    
    .exploding {
        animation: heartbeatStrong 0.5s infinite !important;
    }
    
    @keyframes heartbeatStrong {
        0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
        }
        50% { 
            transform: translate(-50%, -50%) scale(1.15); 
        }
    }
    
    .floating-notification-sorpresa {
        pointer-events: none;
        user-select: none;
    }
    
    .modal-header-sorpresa h2 {
        color: var(--romantic-primary);
        text-shadow: 0 0 15px var(--romantic-glow);
    }
    
    .modal-icon-sorpresa i {
        color: var(--romantic-primary);
        animation: float 3s infinite ease-in-out;
    }
    
    .modal-stat-value {
        color: var(--romantic-primary);
        text-shadow: 0 0 10px var(--romantic-glow);
        font-weight: 900;
    }
    
    .modal-stat-label {
        color: var(--romantic-text-secondary);
        font-size: 0.9rem;
    }
    
    .btn-modal-action-sorpresa {
        background: linear-gradient(135deg, var(--romantic-primary), var(--romantic-magic));
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .btn-modal-action-sorpresa:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(255, 107, 107, 0.4);
    }
    
    .mission-info-sorpresa {
        background: rgba(255, 107, 107, 0.1);
        padding: 15px;
        border-radius: 15px;
        margin: 20px 0;
        border: 1px solid rgba(255, 107, 107, 0.2);
    }
    
    .info-item-sorpresa {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        min-width: 180px;
        transition: all 0.3s ease;
    }
    
    .info-item-sorpresa:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
    
    .info-item-sorpresa i {
        color: var(--romantic-primary);
        font-size: 1.2rem;
    }
    
    .info-item-sorpresa strong {
        color: var(--romantic-text);
    }
    
    .mission-description-sorpresa ul li {
        color: var(--romantic-text-secondary);
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .mission-description-sorpresa ul li:last-child {
        border-bottom: none;
    }
    
    .mission-description-sorpresa ul li i {
        color: var(--romantic-accent);
        width: 24px;
        text-align: center;
    }
    
    .mission-requirements-sorpresa p {
        color: var(--romantic-text-secondary);
        margin-bottom: 8px;
        font-size: 1.1rem;
    }
    
    .mission-requirements-sorpresa p i {
        margin-right: 10px;
    }
    
    .modal-image-sorpresa {
        max-width: 100%;
        height: auto;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        border: 3px solid var(--romantic-border);
    }
    
    .image-caption-sorpresa {
        color: var(--romantic-text-secondary);
        font-style: italic;
        margin-top: 15px;
        font-size: 1.1rem;
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        border-left: 4px solid var(--romantic-primary);
    }
`;
document.head.appendChild(dynamicStylesSorpresa);

// ============================================
// Sección: Event listeners globales
// ============================================

// Redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Recrear estrellas al redimensionar
    setTimeout(createGalaxyStars, 300);
});

// Prevenir recarga accidental con F5
window.addEventListener('keydown', function(e) {
    if (e.key === 'F5') {
        e.preventDefault();
        showFloatingMessageSorpresa('🔄 Recarga suave activada...');
        setTimeout(() => {
            location.reload();
        }, 500);
    }
});

// ============================================
// Sección: Exportación de funciones globales
// ============================================

// Exportar funciones necesarias para HTML
window.createGalacticCelebrationSorpresa = createGalacticCelebrationSorpresa;
window.closeModalSorpresa = closeModalSorpresa;

// ============================================
// Sección: Finalización
// ============================================

console.log('✅ Sorpresa Galáctica JS cargado correctamente');