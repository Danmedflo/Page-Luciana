/**
 * BACKGROUND.JS
 * Controla todos los efectos del fondo con corazones parpadeantes
 */

// ============================================
// VARIABLES GLOBALES
// ============================================
let backgroundInitialized = false;
const backgroundConfig = {
  // Configuración para corazones estáticos
  staticHearts: {
    min: 40,
    max: 80,
    sizes: [16, 20, 24, 28, 32, 36, 40],
    colors: [
      '#ff9ac8', '#ff6b9d', '#ff4081', '#e91e63',
      '#d63384', '#e83e8c', '#ffccd5', '#ffb6c1',
      '#ff1493', '#db7093'
    ],
    types: [
      'fas fa-heart',
      'far fa-heart',
      'fas fa-heart-circle-plus',
      'fas fa-heart-pulse',
      'fas fa-heart-crack',
      'fas fa-heart-circle-check'
    ]
  },
  
  // Configuración para corazones móviles
  movingHearts: {
    min: 8,
    max: 15,
    sizeRange: [28, 52],
    color: '#ff4081'
  },
  
  // Configuración para efectos
  effects: {
    explosionHearts: { min: 12, max: 20 },
    rainHearts: { min: 5, max: 10 }
  }
};

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Inicializa todo el fondo con corazones
 */
function initBackground() {
  if (backgroundInitialized) return;
  
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) {
    console.warn('No se encontró el contenedor del fondo');
    return;
  }
  
  // Crear corazones estáticos
  createStaticHearts();
  
  // Crear corazones móviles
  createMovingHearts();
  
  // Iniciar efectos especiales
  initSpecialEffects();
  
  // Configurar event listeners
  setupBackgroundEvents();
  
  backgroundInitialized = true;
  console.log('Fondo con corazones inicializado');
}

/**
 * Crea los corazones estáticos parpadeantes
 */
function createStaticHearts() {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  const config = backgroundConfig.staticHearts;
  const numHearts = window.innerWidth < 768 ? config.min : config.max;
  
  for (let i = 0; i < numHearts; i++) {
    createStaticHeart(i);
  }
}

/**
 * Crea un corazón estático individual
 */
function createStaticHeart(index) {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  const config = backgroundConfig.staticHearts;
  
  // Crear elemento
  const heart = document.createElement('i');
  
  // Configurar propiedades
  const heartType = config.types[Math.floor(Math.random() * config.types.length)];
  const size = config.sizes[Math.floor(Math.random() * config.sizes.length)];
  const color = config.colors[Math.floor(Math.random() * config.colors.length)];
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = 2 + Math.random() * 4;
  const delay = Math.random() * 6;
  const opacity = 0.2 + Math.random() * 0.5;
  const scale = 1 + Math.random() * 0.3;
  const rotate = Math.random() * 10 - 5;
  
  // Aplicar estilos
  heart.className = `${heartType} heart-bg-static`;
  heart.style.left = `${left}%`;
  heart.style.top = `${top}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.color = color;
  heart.style.opacity = '0';
  
  // Variables CSS para la animación
  heart.style.setProperty('--heart-opacity', opacity);
  heart.style.setProperty('--heart-scale', scale);
  heart.style.setProperty('--heart-rotate', `${rotate}deg`);
  
  // Animación
  heart.style.animation = `heartBlink ${duration}s infinite ${delay}s ease-in-out`;
  
  heartBackground.appendChild(heart);
}

/**
 * Crea los corazones móviles
 */
function createMovingHearts() {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  const config = backgroundConfig.movingHearts;
  const numHearts = window.innerWidth < 768 ? config.min : config.max;
  
  for (let i = 0; i < numHearts; i++) {
    createMovingHeart(i);
  }
}

/**
 * Crea un corazón móvil individual
 */
function createMovingHeart(index) {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  const config = backgroundConfig.movingHearts;
  
  // Crear elemento
  const heart = document.createElement('i');
  
  // Configurar propiedades
  const size = config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]);
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const angle = Math.random() * Math.PI * 2;
  const distance = 8 + Math.random() * 12;
  const moveDuration = 20 + Math.random() * 20;
  
  // Calcular puntos de movimiento
  const moveX1 = `${Math.cos(angle) * distance}vw`;
  const moveY1 = `${Math.sin(angle) * distance}vh`;
  const moveX2 = `${Math.cos(angle + Math.PI/2) * distance}vw`;
  const moveY2 = `${Math.sin(angle + Math.PI/2) * distance}vh`;
  const moveX3 = `${Math.cos(angle + Math.PI) * distance/2}vw`;
  const moveY3 = `${Math.sin(angle + Math.PI) * distance/2}vh`;
  
  // Aplicar estilos
  heart.className = 'fas fa-heart heart-bg-moving';
  heart.style.left = `${startX}%`;
  heart.style.top = `${startY}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.color = config.color;
  heart.style.opacity = '0.6';
  
  // Variables CSS para la animación
  heart.style.setProperty('--move-x-1', moveX1);
  heart.style.setProperty('--move-y-1', moveY1);
  heart.style.setProperty('--move-x-2', moveX2);
  heart.style.setProperty('--move-y-2', moveY2);
  heart.style.setProperty('--move-x-3', moveX3);
  heart.style.setProperty('--move-y-3', moveY3);
  
  // Animaciones combinadas
  heart.style.animation = `
    movingHeartBlink 3s infinite,
    movingHeartFloat ${moveDuration}s infinite ease-in-out
  `;
  
  heartBackground.appendChild(heart);
}

/**
 * Inicializa efectos especiales
 */
function initSpecialEffects() {
  // Iniciar lluvia de corazones después de un retraso
  setTimeout(() => {
    startHeartRain();
  }, 3000);
  
  // Programar lluvia periódica
  setInterval(() => {
    if (Math.random() > 0.8) {
      createHeartRain();
    }
  }, 8000);
}

/**
 * Inicia la lluvia de corazones
 */
function startHeartRain() {
  // Crear lluvia inicial
  createHeartRain();
}

/**
 * Crea una ráfaga de corazones cayendo
 */
function createHeartRain() {
  const config = backgroundConfig.effects.rainHearts;
  const rainHearts = config.min + Math.floor(Math.random() * (config.max - config.min));
  
  for (let i = 0; i < rainHearts; i++) {
    setTimeout(() => {
      createRainHeart();
    }, i * 300);
  }
}

/**
 * Crea un corazón individual de lluvia
 */
function createRainHeart() {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  // Crear elemento
  const heart = document.createElement('i');
  
  // Configurar propiedades
  const size = 20 + Math.random() * 20;
  const color = '#ff6b9d';
  const startX = Math.random() * 100;
  const fallDuration = 3 + Math.random() * 2;
  
  // Aplicar estilos
  heart.className = 'fas fa-heart heart-bg-rain';
  heart.style.left = `${startX}%`;
  heart.style.top = '-50px';
  heart.style.fontSize = `${size}px`;
  heart.style.color = color;
  heart.style.opacity = '0.7';
  
  // Animación CORREGIDA - usar vh correctamente
  heart.style.animation = `heartRain ${fallDuration}s linear forwards`;
  
  heartBackground.appendChild(heart);
  
  // Eliminar después de la animación
  setTimeout(() => {
    if (heart.parentNode) {
      heart.remove();
    }
  }, fallDuration * 1000);
}

/**
 * Crea explosión de corazones desde una posición específica
 * @param {number} x - Posición X en píxeles
 * @param {number} y - Posición Y en píxeles
 */
function createHeartExplosion(x, y) {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  const config = backgroundConfig.effects.explosionHearts;
  const explosionHearts = config.min + Math.floor(Math.random() * (config.max - config.min));
  
  for (let i = 0; i < explosionHearts; i++) {
    createExplosionHeart(x, y, i);
  }
}

/**
 * Crea un corazón individual de explosión
 */
function createExplosionHeart(x, y, index) {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  // Crear elemento
  const heart = document.createElement('i');
  
  // Configurar propiedades
  const size = 12 + Math.random() * 20;
  const color = '#ff4081';
  const angle = Math.random() * Math.PI * 2;
  const distance = 60 + Math.random() * 90;
  
  // Calcular posición final
  const explodeX = `${Math.cos(angle) * distance}px`;
  const explodeY = `${Math.sin(angle) * distance}px`;
  
  // Aplicar estilos
  heart.className = 'fas fa-heart heart-bg-explosion';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${size}px`;
  heart.style.color = color;
  heart.style.opacity = '0.9';
  
  // Variable CSS para la animación
  heart.style.setProperty('--explode-x', explodeX);
  heart.style.setProperty('--explode-y', explodeY);
  
  // Animación
  heart.style.animation = `heartExplosion 1.2s forwards`;
  
  heartBackground.appendChild(heart);
  
  // Eliminar después de la animación
  setTimeout(() => {
    if (heart.parentNode) {
      heart.remove();
    }
  }, 1200);
}

/**
 * Configura los event listeners para el fondo
 */
function setupBackgroundEvents() {
  // Recrear corazones si cambia el tamaño de la ventana
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      recreateBackground();
    }, 250);
  });
  
  // Escuchar eventos de explosión (se disparan desde index.js)
  document.addEventListener('heartExplosion', (event) => {
    if (event.detail && event.detail.x && event.detail.y) {
      createHeartExplosion(event.detail.x, event.detail.y);
    }
  });
}

/**
 * Recrea el fondo completo
 */
function recreateBackground() {
  const heartBackground = document.getElementById('heartBackground');
  if (!heartBackground) return;
  
  // Limpiar corazones existentes
  heartBackground.innerHTML = '';
  
  // Volver a crear
  createStaticHearts();
  createMovingHearts();
}

// ============================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initBackground);

// Exportar funciones públicas
window.backgroundEffects = {
  createExplosion: createHeartExplosion,
  createRain: createHeartRain,
  recreate: recreateBackground
};