// Variables globales del sistema romántico
let musicEnabled = true;
let effectsEnabled = true;
let loveBeats = 0;
let secretLooks = 0;
let connectionSeconds = 0;
let surpriseActivated = false;
let anticipationTimer = 5;

// Inicializar AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  inicializarUniversoRomantico();
  inicializarInteractividad();
  iniciarSistemas();
  crearEfectosIniciales();
  
  // Revelar mensaje gradualmente
  setTimeout(() => {
    revelarMensaje();
  }, 500);
});

function inicializarUniversoRomantico() {
  // Crear galaxia de fondo
  const galaxyBg = document.getElementById('galaxyBackground');
  if (galaxyBg) {
    for (let i = 0; i < 200; i++) {
      crearEstrellaRomantica(galaxyBg);
    }
  }
  
  // Inicializar portal dimensional
  const portal = document.getElementById('dimensionalPortal');
  if (portal) {
    portal.style.animation = 'romanticPulse 6s infinite ease-in-out';
  }
  
  // Configurar constelación de Luciana
  const stars = document.querySelectorAll('.luciana-constellation .constellation-star');
  stars.forEach((star, index) => {
    const letters = ['L', 'U', 'C', 'I', 'A', 'N', 'A'];
    if (index < letters.length) {
      star.setAttribute('data-star', letters[index]);
      star.style.animationDelay = `${index * 0.5}s`;
    }
  });
  
  // Agregar animaciones CSS personalizadas
  const style = document.createElement('style');
  style.textContent = `
    @keyframes romanticPulse {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1) rotate(0deg); 
        opacity: 0.2; 
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.2) rotate(180deg); 
        opacity: 0.4; 
      }
    }
    
    @keyframes floatLove {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
      50% { transform: translateY(-30px) rotate(10deg); opacity: 1; }
    }
    
    @keyframes heartbeatStrong {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.3); }
    }
    
    @keyframes orbitHeart {
      0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    
    @keyframes revealWord {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes sparkleTwinkle {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);
  
  // Iniciar animación de palabras
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
    word.style.animationDelay = `${index * 0.3}s`;
  });
}

function crearEstrellaRomantica(container) {
  const star = document.createElement('div');
  star.className = 'estrella-romantica';
  
  const size = Math.random() * 4 + 1;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const duration = Math.random() * 7 + 3;
  const delay = Math.random() * 5;
  const colors = ['#ff6b6b', '#ffd93d', '#4d96ff', '#9d4edd', '#ffffff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  star.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: 50%;
    left: ${posX}%;
    top: ${posY}%;
    opacity: ${Math.random() * 0.8 + 0.2};
    animation: twinkle ${duration}s infinite ${delay}s;
    box-shadow: 0 0 ${size * 3}px ${color};
  `;
  
  container.appendChild(star);
}

function crearEfectosIniciales() {
  // Crear lluvia de estrellas especial
  setTimeout(() => {
    crearLluviaDeEstrellasRomantica();
  }, 1000);
  
  // Reproducir música de ambiente
  if (musicEnabled) {
    const ambientMusic = document.getElementById('ambientMusic');
    if (ambientMusic) {
      ambientMusic.volume = 0.2;
      ambientMusic.play().catch(e => console.log("Audio requiere interacción del usuario"));
    }
  }
  
  // Iniciar latidos del corazón
  iniciarLatidos();
  
  // Iniciar temporizador de anticipación
  iniciarTemporizadorAnticipacion();
}

function crearLluviaDeEstrellasRomantica() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.className = 'estrella-fugaz-romantica';
      
      const startX = Math.random() * 100;
      const duration = Math.random() * 2 + 1;
      const colors = ['#ff6b6b', '#ffd93d', '#4d96ff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      star.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: ${color};
        border-radius: 50%;
        left: ${startX}%;
        top: -10px;
        z-index: 9997;
        pointer-events: none;
        box-shadow: 0 0 15px ${color};
        animation: shootingStarRomantic ${duration}s linear forwards;
      `;
      
      document.body.appendChild(star);
      
      setTimeout(() => {
        if (star.parentNode) star.remove();
      }, duration * 1000);
    }, i * 500);
  }
  
  // Agregar animación CSS si no existe
  if (!document.getElementById('shootingStarRomanticStyle')) {
    const style = document.createElement('style');
    style.id = 'shootingStarRomanticStyle';
    style.textContent = `
      @keyframes shootingStarRomantic {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { transform: translateY(20px) translateX(20px); opacity: 1; }
        100% { transform: translateY(100vh) translateX(100px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

function revelarMensaje() {
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
    setTimeout(() => {
      word.style.animation = 'revealWord 0.8s ease-out forwards';
      
      // Efecto de sonido para cada palabra
      if (index % 2 === 0 && effectsEnabled) {
        const magicSound = document.getElementById('magicSound');
        if (magicSound) {
          magicSound.currentTime = 0;
          magicSound.volume = 0.1;
          magicSound.play().catch(e => console.log("Audio no se pudo reproducir"));
        }
      }
    }, index * 300);
  });
  
  // Mostrar instrucción flotante después del mensaje
  setTimeout(() => {
    const instruction = document.querySelector('.floating-instruction');
    instruction.style.animation = 'floatLove 2s ease-in-out forwards';
  }, words.length * 300 + 500);
}

function iniciarSistemas() {
  // Temporizador de conexión
  setInterval(() => {
    connectionSeconds++;
    const minutes = Math.floor(connectionSeconds / 60);
    const seconds = connectionSeconds % 60;
    document.getElementById('connectionTime').textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Efecto especial cada minuto
    if (connectionSeconds % 60 === 0) {
      crearMinutoEspecial();
    }
  }, 1000);
  
  // Sistema de partículas
  setInterval(() => {
    if (effectsEnabled) {
      crearParticulaAmor();
    }
  }, 2000);
}

function crearMinutoEspecial() {
  const timerElement = document.querySelector('.connection-timer');
  timerElement.classList.add('special-minute');
  
  // Crear explosión de corazones
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      crearCorazonFlotante();
    }, i * 100);
  }
  
  setTimeout(() => {
    timerElement.classList.remove('special-minute');
  }, 2000);
}

function crearParticulaAmor() {
  const particleSystem = document.getElementById('particleSystem');
  if (!particleSystem) return;
  
  const particle = document.createElement('div');
  particle.className = 'love-particle';
  
  const size = Math.random() * 8 + 4;
  const startX = Math.random() * 100;
  const duration = Math.random() * 4 + 2;
  const colors = ['#ff6b6b', '#ffd93d', '#ff8e8e', '#ffb6c1'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: 50%;
    left: ${startX}%;
    top: -20px;
    opacity: ${Math.random() * 0.7 + 0.3};
    box-shadow: 0 0 ${size * 2}px ${color};
    animation: floatLove ${duration}s ease-in forwards;
  `;
  
  particleSystem.appendChild(particle);
  
  setTimeout(() => {
    if (particle.parentNode) particle.remove();
  }, duration * 1000);
}

function crearCorazonFlotante() {
  const heart = document.createElement('div');
  heart.innerHTML = '<i class="fas fa-heart"></i>';
  
  const startX = Math.random() * 80 + 10;
  const size = Math.random() * 20 + 10;
  const duration = Math.random() * 3 + 2;
  const colors = ['#ff6b6b', '#ff8e8e', '#ffb6c1'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  heart.style.cssText = `
    position: fixed;
    color: ${color};
    font-size: ${size}px;
    left: ${startX}%;
    top: 100%;
    z-index: 9996;
    pointer-events: none;
    opacity: ${Math.random() * 0.7 + 0.3};
    animation: floatHeart ${duration}s ease-in forwards;
  `;
  
  document.body.appendChild(heart);
  
  // Agregar animación CSS si no existe
  if (!document.getElementById('floatHeartStyle')) {
    const style = document.createElement('style');
    style.id = 'floatHeartStyle';
    style.textContent = `
      @keyframes floatHeart {
        0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg) scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  setTimeout(() => {
    if (heart.parentNode) heart.remove();
  }, duration * 1000);
}

function iniciarLatidos() {
  setInterval(() => {
    if (effectsEnabled) {
      // Incrementar latidos
      loveBeats++;
      document.getElementById('loveBeats').textContent = loveBeats;
      
      // Efecto visual cada 10 latidos
      if (loveBeats % 10 === 0) {
        const heartCore = document.querySelector('.heart-core i');
        heartCore.style.animation = 'heartbeatStrong 0.5s ease-out';
        
        setTimeout(() => {
          heartCore.style.animation = '';
        }, 500);
      }
      
      // Sonido de latido cada 5 segundos
      if (loveBeats % 5 === 0 && musicEnabled) {
        const heartbeatSound = document.getElementById('heartbeatSound');
        if (heartbeatSound) {
          heartbeatSound.currentTime = 0;
          heartbeatSound.volume = 0.1;
          heartbeatSound.play().catch(e => console.log("Audio no se pudo reproducir"));
        }
      }
    }
  }, 1000);
}

function iniciarTemporizadorAnticipacion() {
  const timerElement = document.getElementById('timerDigit');
  const interval = setInterval(() => {
    anticipationTimer--;
    
    if (anticipationTimer <= 0) {
      clearInterval(interval);
      timerElement.textContent = '✨';
      document.querySelector('.timer-text').textContent = '¡Ahora es el momento!';
      
      // Efecto especial cuando el tiempo termina
      if (!surpriseActivated) {
        crearEfectoTiempoCumplido();
      }
    } else {
      timerElement.textContent = anticipationTimer;
      timerElement.style.animation = 'heartbeatStrong 0.5s ease-out';
      
      setTimeout(() => {
        timerElement.style.animation = '';
      }, 500);
    }
  }, 1000);
}

function crearEfectoTiempoCumplido() {
  const heartSystem = document.getElementById('heartSystem');
  heartSystem.classList.add('ready');
  
  // Animar el corazón - PERMANECE EN CENTRO
  const mainHeart = document.querySelector('.main-heart');
  mainHeart.style.animation = 'heartbeatStrong 1s infinite';
  
  // Mostrar mensaje
  mostrarMensajeFlotante('💖 ¡El momento perfecto ha llegado!');
}

function inicializarInteractividad() {
  // Panel de control
  document.getElementById('musicControl').addEventListener('click', toggleMusic);
  document.getElementById('effectsControl').addEventListener('click', toggleEffects);
  document.getElementById('secretControl').addEventListener('click', mostrarSecreto);
  
  // Corazón principal
  const mainHeart = document.getElementById('mainHeart');
  mainHeart.addEventListener('click', function(e) {
    e.stopPropagation();
    activarSorpresa();
  });
  
  // Efectos hover en el corazón
  mainHeart.addEventListener('mouseenter', function() {
    if (!surpriseActivated) {
      this.classList.add('hover');
      acelerarAnillosCorazon();
      incrementarMiradas();
    }
  });
  
  mainHeart.addEventListener('mouseleave', function() {
    this.classList.remove('hover');
    normalizarAnillosCorazon();
  });
  
  // Cerrar modal
  document.getElementById('modalClose').addEventListener('click', cerrarModal);
  document.getElementById('secretModal').addEventListener('click', function(e) {
    if (e.target === this) {
      cerrarModal();
    }
  });
  
  // Interacción con el mensaje
  const messageText = document.getElementById('messageText');
  messageText.addEventListener('click', function() {
    crearEfectoMensajeClick();
  });
  
  // Seguimiento de miradas (simulado con movimiento del mouse)
  document.addEventListener('mousemove', function() {
    if (Math.random() > 0.995) { // 0.5% de probabilidad por movimiento
      incrementarMiradas();
    }
  });
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  const musicControl = document.getElementById('musicControl');
  const ambientMusic = document.getElementById('ambientMusic');
  
  if (musicEnabled) {
    musicControl.classList.add('active');
    musicControl.innerHTML = '<i class="fas fa-music"></i><span class="control-label">Música ON</span>';
    if (ambientMusic) {
      ambientMusic.volume = 0.2;
      ambientMusic.play().catch(e => console.log("Audio requiere interacción del usuario"));
    }
    mostrarMensajeFlotante('🎵 Música del amor activada');
  } else {
    musicControl.classList.remove('active');
    musicControl.innerHTML = '<i class="fas fa-volume-mute"></i><span class="control-label">Música OFF</span>';
    if (ambientMusic) {
      ambientMusic.pause();
    }
    mostrarMensajeFlotante('🔇 Silencio romántico');
  }
}

function toggleEffects() {
  effectsEnabled = !effectsEnabled;
  const effectsControl = document.getElementById('effectsControl');
  
  if (effectsEnabled) {
    effectsControl.classList.add('active');
    effectsControl.innerHTML = '<i class="fas fa-magic"></i><span class="control-label">Efectos ON</span>';
    document.body.classList.add('effects-max');
    mostrarMensajeFlotante('✨ Magia del amor activada');
  } else {
    effectsControl.classList.remove('active');
    effectsControl.innerHTML = '<i class="fas fa-ban"></i><span class="control-label">Efectos OFF</span>';
    document.body.classList.remove('effects-max');
    mostrarMensajeFlotante('🌌 Efectos desactivados');
  }
}

function incrementarMiradas() {
  secretLooks++;
  document.getElementById('secretLooks').textContent = secretLooks;
  
  // Efecto especial cada 10 miradas
  if (secretLooks % 10 === 0 && effectsEnabled) {
    const secretControl = document.getElementById('secretControl');
    secretControl.style.animation = 'sparkleTwinkle 0.5s ease-out';
    
    setTimeout(() => {
      secretControl.style.animation = '';
    }, 500);
    
    // Mostrar mensaje secreto cada 50 miradas
    if (secretLooks % 50 === 0) {
      mostrarMensajeFlotante('👁️ ¡Me has visto ' + secretLooks + ' veces!');
    }
  }
}

function acelerarAnillosCorazon() {
  const rings = document.querySelectorAll('.heart-ring');
  rings.forEach(ring => {
    ring.style.animationDuration = '0.4s';
  });
  
  // Crear partículas de amor
  crearParticulasAmor();
}

function normalizarAnillosCorazon() {
  const rings = document.querySelectorAll('.heart-ring');
  rings.forEach((ring, index) => {
    ring.style.animationDuration = `${0.8 + index * 0.3}s`;
  });
}

function crearParticulasAmor() {
  const heartSystem = document.getElementById('heartSystem');
  const particlesContainer = heartSystem.querySelector('.love-particles');
  
  for (let i = 0; i < 3; i++) {
    const particle = document.createElement('div');
    particle.className = 'amor-particle';
    
    const size = Math.random() * 8 + 4;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40 + 20;
    const duration = Math.random() * 0.8 + 0.3;
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb6c1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: particleAmor ${duration}s ease-out forwards;
    `;
    
    particlesContainer.appendChild(particle);
    
    // Agregar animación CSS si no existe
    if (!document.getElementById('particleAmorStyle')) {
      const style = document.createElement('style');
      style.id = 'particleAmorStyle';
      style.textContent = `
        @keyframes particleAmor {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { 
            transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    setTimeout(() => {
      if (particle.parentNode) particle.remove();
    }, duration * 1000);
  }
}

function activarSorpresa() {
  if (surpriseActivated) return;
  surpriseActivated = true;
  
  // Sonido mágico
  const magicSound = document.getElementById('magicSound');
  if (magicSound && effectsEnabled) {
    magicSound.currentTime = 0;
    magicSound.volume = 0.3;
    magicSound.play().catch(e => console.log("Audio no se pudo reproducir"));
  }
  
  // Efecto visual del corazón - CORAZÓN SE MANTIENE EN CENTRO
  const mainHeart = document.getElementById('mainHeart');
  mainHeart.classList.add('activating');
  
  // Activar portal dimensional
  const portal = document.getElementById('dimensionalPortal');
  portal.classList.add('active');
  
  // Sonido de estrella
  const starSound = document.getElementById('starSound');
  if (starSound && musicEnabled) {
    starSound.currentTime = 0;
    starSound.volume = 0.4;
    starSound.play().catch(e => console.log("Audio no se pudo reproducir"));
  }
  
  // Crear explosión de amor
  crearExplosionAmor();
  
  // Mostrar mensaje
  mostrarMensajeFlotante('💝 ¡Sorpresa activada! Preparando magia...');
  
  // Navegar después de efecto
  setTimeout(() => {
    irASorpresa();
  }, 2500);
}

function crearExplosionAmor() {
  const heartSystem = document.getElementById('heartSystem');
  const rect = heartSystem.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Onda de amor
  const loveWave = document.createElement('div');
  loveWave.className = 'love-wave';
  
  loveWave.style.cssText = `
    position: fixed;
    width: 0;
    height: 0;
    border: 3px solid rgba(255, 107, 107, 0.6);
    border-radius: 50%;
    left: ${centerX}px;
    top: ${centerY}px;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%);
  `;
  
  document.body.appendChild(loveWave);
  
  // Animación de onda de amor
  loveWave.animate([
    { width: '0', height: '0', opacity: 1 },
    { width: '600px', height: '600px', opacity: 0 }
  ], {
    duration: 1200,
    easing: 'ease-out'
  }).onfinish = () => loveWave.remove();
  
  // Corazones explosivos
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '<i class="fas fa-heart"></i>';
      const color = ['#ff6b6b', '#ff8e8e', '#ffb6c1'][Math.floor(Math.random() * 3)];
      const size = Math.random() * 20 + 10;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 250 + 150;
      
      heart.style.cssText = `
        position: fixed;
        color: ${color};
        font-size: ${size}px;
        left: ${centerX}px;
        top: ${centerY}px;
        z-index: 9998;
        pointer-events: none;
        transform: translate(-50%, -50%);
        text-shadow: 0 0 20px ${color};
      `;
      
      document.body.appendChild(heart);
      
      // Animación explosiva
      heart.animate([
        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
        { 
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0) rotate(720deg)`,
          opacity: 0
        }
      ], {
        duration: 1500,
        easing: 'ease-out'
      }).onfinish = () => heart.remove();
    }, i * 50);
  }
}

function crearEfectoMensajeClick() {
  const messageText = document.getElementById('messageText');
  messageText.classList.add('clicked');
  
  // Efecto de brillo
  setTimeout(() => {
    messageText.style.textShadow = '0 0 20px rgba(255, 107, 107, 0.8)';
    messageText.style.transition = 'text-shadow 0.5s ease';
  }, 100);
  
  setTimeout(() => {
    messageText.style.textShadow = '';
    messageText.classList.remove('clicked');
  }, 1000);
  
  mostrarMensajeFlotante('💌 Mensaje especial recibido');
}

function mostrarSecreto() {
  document.getElementById('secretModal').style.display = 'flex';
  document.getElementById('dedicatedBeats').textContent = loveBeats;
}

function cerrarModal() {
  document.getElementById('secretModal').style.display = 'none';
}

function crearLluviaDeAmor() {
  cerrarModal();
  
  // Crear lluvia intensa de corazones
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      crearCorazonFlotante();
    }, i * 50);
  }
  
  mostrarMensajeFlotante('💖 ¡Lluvia de amor activada!');
}

function mostrarMensajeFlotante(mensaje) {
  if (!effectsEnabled) return;
  
  const msg = document.createElement('div');
  msg.className = 'floating-notification-romantic';
  msg.textContent = mensaje;
  
  msg.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 107, 107, 0.9);
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: bold;
    z-index: 10000;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: notificationRomantic 3s ease-out forwards;
    text-align: center;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
    font-size: 1.1rem;
  `;
  
  document.body.appendChild(msg);
  
  // Agregar animación CSS si no existe
  if (!document.getElementById('notificationRomanticStyle')) {
    const style = document.createElement('style');
    style.id = 'notificationRomanticStyle';
    style.textContent = `
      @keyframes notificationRomantic {
        0% { transform: translateX(-50%) translateY(50px); opacity: 0; }
        20% { transform: translateX(-50%) translateY(0); opacity: 1; }
        80% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-50px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  setTimeout(() => {
    if (msg.parentNode) msg.remove();
  }, 3000);
}

// MODIFICACIÓN IMPORTANTE: Ruta corregida
function irASorpresa() {
  if (surpriseActivated) {
    // Efecto de transición galáctica
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.8s';
    
    // Crear efecto de viaje estelar
    crearEfectoViajeEstelar();
    
    // RUTA CORREGIDA: Navegar a ../Carta/Sorpresa.html
    setTimeout(() => {
      window.location.href = 'sorpresa.html';
    }, 1000);
  } else {
    mostrarMensajeFlotante('💖 Primero activa la sorpresa con el corazón');
  }
}

function crearEfectoViajeEstelar() {
  // Crear efecto de estrellas que se alejan
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        z-index: 10001;
        pointer-events: none;
        animation: starTravel 1s ease-out forwards;
        box-shadow: 0 0 20px white;
      `;
      
      document.body.appendChild(star);
      
      setTimeout(() => {
        if (star.parentNode) star.remove();
      }, 1000);
    }, i * 30);
  }
  
  // Agregar animación CSS si no existe
  if (!document.getElementById('starTravelStyle')) {
    const style = document.createElement('style');
    style.id = 'starTravelStyle';
    style.textContent = `
      @keyframes starTravel {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}