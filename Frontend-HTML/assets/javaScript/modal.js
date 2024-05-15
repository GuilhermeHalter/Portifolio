const modal = document.getElementById('skillModal');
const closeBtn = document.querySelector('.close');

function openModal(cardTitle, icons) {
    const modalTitle = document.querySelector('.modal-content .cardTitle');
    const modalIcons = document.querySelector('.modal-content .gridIcons');
    const modalName = document.querySelector('.modal-content .gridName');

    // Limpa o conteúdo anterior antes de adicionar os novos spans
    modalName.innerHTML = '';

    modalTitle.textContent = cardTitle;
    modalIcons.innerHTML = icons;

    // Adicionando os nomes dos ícones ao lado dos ícones correspondentes
    const iconElements = modalIcons.querySelectorAll('i');
    iconElements.forEach(icon => {
        const iconName = icon.dataset.name;
        const nameElement = document.createElement('span');
        nameElement.textContent = iconName;
        modalName.appendChild(nameElement);
    });

    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
        const cardTitle = card.querySelector('.cardTitle').textContent;
        const iconsHTML = card.querySelector('.gridIcons').innerHTML;
        openModal(cardTitle, iconsHTML);
    });
});

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
