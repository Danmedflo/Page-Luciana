// ============================================
// DIBUJO ROMÁNTICO ANIMADO PARA LUCIANA
// ============================================

class RomanticDrawing {
    constructor() {
        this.canvas = document.getElementById('romanticCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.progressBar = document.getElementById('progressBar');
        this.statusText = document.getElementById('drawingStatus');
        this.specialMessage = document.getElementById('specialMessage');
        
        // Variables para el panel de control
        this.musicEnabled = true;
        this.effectsEnabled = true;
        this.loveBeats = 0;
        this.connectionSeconds = 0;
        this.drawingTraces = 0;
        
        // Dimensiones del canvas
        this.width = 800;
        this.height = 500;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Estado del dibujo
        this.drawingProgress = 0;
        this.isDrawing = false;
        this.currentStep = 0;
        
        // Colores románticos
        this.colors = {
            heart: '#ff4d6d',
            heartLight: '#ff8da1',
            rose: '#c9184a',
            roseLight: '#ff4d6d',
            text: '#ffd166',
            stars: '#ffffff',
            outline: 'rgba(255, 255, 255, 0.5)'
        };
        
        // Configuración de animación
        this.animationSpeed = 20; // ms por paso
        this.particles = [];
        
        this.init();
    }
    
    init() {
        // Limpiar canvas y dibujar fondo
        this.drawBackground();
        
        // Iniciar animación después de un pequeño delay
        setTimeout(() => {
            this.startDrawing();
        }, 500);
        
        // Inicializar panel de control
        this.initControlPanel();
        
        // Iniciar sistemas
        this.startSystems();
        
        // Event listeners
        document.getElementById('replayBtn').addEventListener('click', () => this.replay());
        document.getElementById('surpriseBtn').addEventListener('click', () => this.showSurprise());
        document.getElementById('closeSurpriseModal').addEventListener('click', () => this.closeModal('surpriseModal'));
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal('secretModal'));
        document.getElementById('extraLoveBtn').addEventListener('click', () => this.extraLove());
        
        // Cerrar modales al hacer clic fuera
        document.getElementById('surpriseModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('surpriseModal')) {
                this.closeModal('surpriseModal');
            }
        });
        
        document.getElementById('secretModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('secretModal')) {
                this.closeModal('secretModal');
            }
        });
        
        // Crear corazones de fondo
        this.createBackgroundHearts();
    }
    
    initControlPanel() {
        // Controles de música
        document.getElementById('musicControl').addEventListener('click', () => this.toggleMusic());
        
        // Controles de efectos
        document.getElementById('effectsControl').addEventListener('click', () => this.toggleEffects());
        
        // Control secreto
        document.getElementById('secretControl').addEventListener('click', () => this.showSecret());
    }
    
    startSystems() {
        // Temporizador de conexión
        setInterval(() => {
            this.connectionSeconds++;
            const minutes = Math.floor(this.connectionSeconds / 60);
            const seconds = this.connectionSeconds % 60;
            document.getElementById('connectionTime').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Efecto especial cada minuto
            if (this.connectionSeconds % 60 === 0) {
                this.specialMinute();
            }
        }, 1000);
        
        // Latidos del corazón
        setInterval(() => {
            if (this.effectsEnabled) {
                this.loveBeats++;
                document.getElementById('loveBeats').textContent = this.loveBeats;
            }
        }, 2000);
    }
    
    toggleMusic() {
        this.musicEnabled = !this.musicEnabled;
        const musicControl = document.getElementById('musicControl');
        const ambientMusic = document.getElementById('ambientMusic');
        
        if (this.musicEnabled) {
            musicControl.classList.add('active');
            musicControl.innerHTML = '<i class="fas fa-music"></i><span class="control-label">Música ON</span>';
            if (ambientMusic) {
                ambientMusic.volume = 0.2;
                ambientMusic.play().catch(e => console.log("Audio requiere interacción del usuario"));
            }
            this.showFloatingMessage('🎵 Música del amor activada');
        } else {
            musicControl.classList.remove('active');
            musicControl.innerHTML = '<i class="fas fa-volume-mute"></i><span class="control-label">Música OFF</span>';
            if (ambientMusic) {
                ambientMusic.pause();
            }
            this.showFloatingMessage('🔇 Silencio romántico');
        }
    }
    
    toggleEffects() {
        this.effectsEnabled = !this.effectsEnabled;
        const effectsControl = document.getElementById('effectsControl');
        
        if (this.effectsEnabled) {
            effectsControl.classList.add('active');
            effectsControl.innerHTML = '<i class="fas fa-magic"></i><span class="control-label">Efectos ON</span>';
            document.body.classList.add('effects-max');
            this.showFloatingMessage('✨ Magia del amor activada');
        } else {
            effectsControl.classList.remove('active');
            effectsControl.innerHTML = '<i class="fas fa-ban"></i><span class="control-label">Efectos OFF</span>';
            document.body.classList.remove('effects-max');
            this.showFloatingMessage('🌌 Efectos desactivados');
        }
    }
    
    showSecret() {
        document.getElementById('dedicatedBeats').textContent = this.loveBeats;
        document.getElementById('drawingTraces').textContent = this.drawingTraces;
        document.getElementById('secretModal').style.display = 'flex';
    }
    
    specialMinute() {
        const timerElement = document.querySelector('.connection-timer-dibujo');
        timerElement.classList.add('special-minute');
        
        // Crear corazones flotantes
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createFloatingHeart();
            }, i * 200);
        }
        
        setTimeout(() => {
            timerElement.classList.remove('special-minute');
        }, 2000);
    }
    
    createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        heart.style.color = '#ff4d6d';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
        
        // Agregar animación si no existe
        if (!document.getElementById('floatUpStyle')) {
            const style = document.createElement('style');
            style.id = 'floatUpStyle';
            style.textContent = `
                @keyframes floatUp {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, 5000);
    }
    
    showFloatingMessage(message) {
        const msg = document.createElement('div');
        msg.className = 'floating-notification-romantic';
        msg.textContent = message;
        document.body.appendChild(msg);
        
        setTimeout(() => {
            if (msg.parentNode) msg.remove();
        }, 3000);
    }
    
    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
    
    extraLove() {
        this.closeModal('secretModal');
        this.showFloatingMessage('💖 ¡Amor extra recibido!');
        
        // Crear lluvia de corazones
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createFloatingHeart();
            }, i * 100);
        }
    }
    
    drawBackground() {
        // Fondo degradado
        const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
        gradient.addColorStop(0, '#1a0a2a');
        gradient.addColorStop(0.5, '#2a0a3a');
        gradient.addColorStop(1, '#1a0a2a');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Estrellas de fondo
        for (let i = 0; i < 50; i++) {
            this.drawStar(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 2 + 1,
                '#ffffff',
                Math.random() * 0.3 + 0.1
            );
        }
    }
    
    drawStar(x, y, size, color, opacity = 1) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.fillStyle = color;
        this.ctx.globalAlpha = opacity;
        
        // Dibujar estrella de 4 puntas
        for (let i = 0; i < 4; i++) {
            this.ctx.rotate((Math.PI / 2) * i);
            this.ctx.beginPath();
            this.ctx.rect(-size / 2, -size * 2, size, size * 2);
            this.ctx.fill();
        }
        
        // Centro
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    startDrawing() {
        this.isDrawing = true;
        this.currentStep = 0;
        this.drawingProgress = 0;
        this.progressBar.style.width = '0%';
        this.statusText.textContent = 'Dibujando con amor...';
        this.specialMessage.classList.remove('show');
        
        // Limpiar y dibujar fondo
        this.drawBackground();
        
        // Iniciar secuencia de dibujo
        this.drawingSteps = [
            () => this.drawHeartOutline(0.2),
            () => this.drawHeartOutline(0.4),
            () => this.drawHeartOutline(0.6),
            () => this.drawHeartOutline(0.8),
            () => this.drawHeartOutline(1.0),
            () => this.fillHeart(),
            () => this.drawRoseOutline(),
            () => this.fillRose(),
            () => this.drawMessage(),
            () => this.drawSurroundingHearts(),
            () => this.drawFinalSparkles()
        ];
        
        this.animateDrawing();
    }
    
    animateDrawing() {
        if (this.currentStep < this.drawingSteps.length) {
            this.drawingSteps[this.currentStep]();
            this.currentStep++;
            this.drawingProgress = (this.currentStep / this.drawingSteps.length) * 100;
            this.progressBar.style.width = this.drawingProgress + '%';
            this.drawingTraces = this.currentStep * 10;
            
            // Crear partículas de magia
            if (this.effectsEnabled) {
                this.createMagicParticles();
            }
            
            // Sonido mágico en cada paso
            if (this.currentStep % 3 === 0 && this.musicEnabled) {
                this.playMagicSound();
            }
            
            setTimeout(() => this.animateDrawing(), this.animationSpeed);
        } else {
            this.finishDrawing();
        }
    }
    
    drawHeartOutline(progress) {
        this.ctx.save();
        this.ctx.strokeStyle = this.colors.heart;
        this.ctx.lineWidth = 3;
        this.ctx.shadowColor = this.colors.heart;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        
        // Dibujar corazón en el centro
        const centerX = this.width / 2;
        const centerY = this.height / 2 - 30;
        const size = 150;
        
        this.ctx.beginPath();
        
        // Ecuación del corazón
        for (let t = 0; t <= Math.PI * 2 * progress; t += 0.05) {
            const x = centerX + 16 * Math.pow(Math.sin(t), 3) * (size / 20);
            const y = centerY - (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * (size / 20);
            
            if (t === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        
        this.ctx.stroke();
        this.ctx.restore();
    }
    
    fillHeart() {
        this.ctx.save();
        
        // Rellenar corazón con degradado
        const gradient = this.ctx.createRadialGradient(
            this.width / 2, this.height / 2 - 30, 0,
            this.width / 2, this.height / 2 - 30, 100
        );
        gradient.addColorStop(0, this.colors.heartLight);
        gradient.addColorStop(1, this.colors.heart);
        
        this.ctx.fillStyle = gradient;
        this.ctx.shadowColor = this.colors.heart;
        this.ctx.shadowBlur = 30;
        
        this.ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2; t += 0.05) {
            const x = this.width / 2 + 16 * Math.pow(Math.sin(t), 3) * (150 / 20);
            const y = this.height / 2 - 30 - (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * (150 / 20);
            
            if (t === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        
        this.ctx.fill();
        this.ctx.restore();
    }
    
    drawRoseOutline() {
        this.ctx.save();
        this.ctx.strokeStyle = this.colors.rose;
        this.ctx.lineWidth = 2;
        this.ctx.shadowColor = this.colors.rose;
        this.ctx.shadowBlur = 10;
        
        // Dibujar rosa al lado del corazón
        const x = this.width / 2 + 100;
        const y = this.height / 2;
        const size = 40;
        
        // Pétalos
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const petalX = x + Math.cos(angle) * size * 0.5;
            const petalY = y + Math.sin(angle) * size * 0.3;
            
            this.ctx.beginPath();
            this.ctx.ellipse(petalX, petalY, size * 0.3, size * 0.2, angle, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        
        // Tallo
        this.ctx.beginPath();
        this.ctx.moveTo(x - 5, y + 20);
        this.ctx.lineTo(x - 10, y + 60);
        this.ctx.stroke();
        
        // Hoja
        this.ctx.beginPath();
        this.ctx.ellipse(x - 20, y + 40, 15, 8, -0.3, 0, Math.PI * 2);
        this.ctx.stroke();
        
        this.ctx.restore();
    }
    
    fillRose() {
        this.ctx.save();
        this.ctx.fillStyle = this.colors.roseLight;
        this.ctx.shadowColor = this.colors.rose;
        this.ctx.shadowBlur = 15;
        
        // Rellenar pétalos
        const x = this.width / 2 + 100;
        const y = this.height / 2;
        const size = 40;
        
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const petalX = x + Math.cos(angle) * size * 0.5;
            const petalY = y + Math.sin(angle) * size * 0.3;
            
            this.ctx.beginPath();
            this.ctx.ellipse(petalX, petalY, size * 0.3, size * 0.2, angle, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        this.ctx.restore();
    }
    
    drawMessage() {
        this.ctx.save();
        this.ctx.font = 'bold 40px "Great Vibes", cursive';
        this.ctx.fillStyle = this.colors.text;
        this.ctx.shadowColor = this.colors.gold;
        this.ctx.shadowBlur = 20;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        // Texto "Te Amo"
        this.ctx.fillText('Te Amo', this.width / 2, this.height / 2 + 80);
        
        // Texto "Luciana"
        this.ctx.font = '30px "Dancing Script", cursive';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText('Luciana', this.width / 2, this.height / 2 + 130);
        
        this.ctx.restore();
    }
    
    drawSurroundingHearts() {
        // Dibujar corazones pequeños alrededor
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 200;
            const x = this.width / 2 + Math.cos(angle) * radius;
            const y = this.height / 2 + Math.sin(angle) * radius;
            
            this.ctx.save();
            this.ctx.fillStyle = `hsl(${angle * 180 / Math.PI}, 80%, 70%)`;
            this.ctx.shadowColor = this.ctx.fillStyle;
            this.ctx.shadowBlur = 15;
            
            // Dibujar corazón pequeño
            this.ctx.beginPath();
            for (let t = 0; t <= Math.PI * 2; t += 0.1) {
                const hx = x + 8 * Math.pow(Math.sin(t), 3);
                const hy = y - (6.5 * Math.cos(t) - 2.5 * Math.cos(2*t) - Math.cos(3*t) - 0.5 * Math.cos(4*t));
                
                if (t === 0) {
                    this.ctx.moveTo(hx, hy);
                } else {
                    this.ctx.lineTo(hx, hy);
                }
            }
            this.ctx.fill();
            this.ctx.restore();
        }
    }
    
    drawFinalSparkles() {
        // Crear destellos finales
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * this.width;
                const y = Math.random() * this.height;
                const size = Math.random() * 8 + 4;
                
                this.ctx.save();
                this.ctx.fillStyle = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
                this.ctx.shadowColor = this.ctx.fillStyle;
                this.ctx.shadowBlur = 20;
                
                // Dibujar estrella
                this.ctx.beginPath();
                for (let j = 0; j < 5; j++) {
                    const angle = (j / 5) * Math.PI * 2 - Math.PI / 2;
                    const spikeX = x + Math.cos(angle) * size;
                    const spikeY = y + Math.sin(angle) * size;
                    
                    if (j === 0) {
                        this.ctx.moveTo(spikeX, spikeY);
                    } else {
                        this.ctx.lineTo(spikeX, spikeY);
                    }
                    
                    const innerAngle = angle + (Math.PI / 5);
                    const innerX = x + Math.cos(innerAngle) * (size / 2);
                    const innerY = y + Math.sin(innerAngle) * (size / 2);
                    this.ctx.lineTo(innerX, innerY);
                }
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.restore();
            }, i * 100);
        }
    }
    
    createMagicParticles() {
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = {
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 4 + 2,
                color: `hsl(${Math.random() * 60 + 320}, 100%, 70%)`,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1
            };
            
            this.particles.push(particle);
        }
    }
    
    finishDrawing() {
        this.isDrawing = false;
        this.statusText.textContent = '¡Dibujo completado! 💖';
        
        // Mostrar mensaje especial
        setTimeout(() => {
            this.specialMessage.classList.add('show');
            this.createConfetti();
        }, 500);
        
        // Sonido mágico
        if (this.musicEnabled) {
            this.playMagicSound();
        }
    }
    
    createConfetti() {
        const colors = ['#ff4d6d', '#ff8da1', '#ffd166', '#9d4edd', '#6c5ce7'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.zIndex = '10000';
                confetti.style.pointerEvents = 'none';
                confetti.style.animation = `floatDown ${Math.random() * 3 + 2}s linear forwards`;
                
                // Agregar animación si no existe
                if (!document.getElementById('confettiStyle')) {
                    const style = document.createElement('style');
                    style.id = 'confettiStyle';
                    style.textContent = `
                        @keyframes floatDown {
                            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) confetti.remove();
                }, 5000);
            }, i * 50);
        }
    }
    
    playMagicSound() {
        const magicSound = document.getElementById('magicSound');
        if (magicSound) {
            magicSound.currentTime = 0;
            magicSound.volume = 0.2;
            magicSound.play().catch(e => console.log('Audio no disponible'));
        }
    }
    
    replay() {
        this.startDrawing();
        this.showFloatingMessage('🎨 Dibujando de nuevo...');
    }
    
    showSurprise() {
        document.getElementById('surpriseModal').style.display = 'flex';
        
        // Crear confeti en el modal
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'absolute';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = Math.random() * 8 + 3 + 'px';
                confetti.style.height = Math.random() * 8 + 3 + 'px';
                confetti.style.background = ['#ff4d6d', '#ff8da1', '#ffd166'][Math.floor(Math.random() * 3)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.animation = `floatDown ${Math.random() * 2 + 1}s linear forwards`;
                
                document.getElementById('confettiContainer').appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) confetti.remove();
                }, 3000);
            }, i * 100);
        }
    }
    
    createBackgroundHearts() {
        const bg = document.getElementById('romanticBg');
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
            heart.style.color = `rgba(255, ${Math.floor(Math.random() * 100 + 55)}, ${Math.floor(Math.random() * 100 + 55)}, 0.1)`;
            heart.style.animation = `floatHeart ${Math.random() * 15 + 10}s linear infinite`;
            heart.style.animationDelay = Math.random() * 10 + 's';
            bg.appendChild(heart);
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.romanticDrawing = new RomanticDrawing();
});