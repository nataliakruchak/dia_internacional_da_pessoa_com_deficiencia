// Seleciona todos os elementos que devem ter o efeito (cards e highlight-image)
const elementsToAnimate = document.querySelectorAll('.card, #highlight-image');

// Função callback do Intersection Observer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe "visible" quando o elemento estiver visível
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar após animar
        }
    });
};

// Opções do Intersection Observer
const observerOptions = {
    threshold: 0.5 // A animação é ativada quando 50% do elemento estiver visível
};

// Cria o Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observa todos os elementos que devem animar
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

