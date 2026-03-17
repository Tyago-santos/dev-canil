(function () {
    var modal = document.querySelector('[data-modal]');
    if (!modal) {
        return;
    }

    var image = modal.querySelector('.modal__image');
    var title = modal.querySelector('.modal__title');
    var color = modal.querySelector('[data-modal-color]');
    var sex = modal.querySelector('[data-modal-sex]');
    var story = modal.querySelector('[data-modal-story]');
    var adoptButton = modal.querySelector('[data-adopt]');
    var currentPet = {
        name: '',
        color: '',
        sex: '',
        image: '',
        story: '',
    };

    function openModal(card) {
        var name = card.getAttribute('data-pet-name') || '';
        var petColor = card.getAttribute('data-pet-color') || '';
        var petSex = card.getAttribute('data-pet-sex') || '';
        var img = card.getAttribute('data-pet-image') || '';
        var petStory = card.getAttribute('data-pet-story') || '';
        currentPet = {
            name: name,
            color: petColor,
            sex: petSex,
            image: img,
            story: petStory,
        };

        image.src = img;
        image.alt = 'Foto de ' + name;
        title.textContent = name;
        color.textContent = 'Cor: ' + petColor;
        sex.textContent = 'Gênero: ' + petSex;
        if (story) {
            story.textContent = petStory;
        }

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.item').forEach(function (card) {
        card.addEventListener('click', function () {
            openModal(card);
        });
        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openModal(card);
            }
        });
    });

    modal.querySelectorAll('[data-modal-close]').forEach(function (closeEl) {
        closeEl.addEventListener('click', closeModal);
    });

    if (adoptButton) {
        adoptButton.addEventListener('click', function () {
            var params = new URLSearchParams({
                name: currentPet.name,
                breed: currentPet.name,
                sex: currentPet.sex,
                color: currentPet.color,
            });
            window.location.href = '/adopt?' + params.toString();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
})();
