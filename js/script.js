document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('#question');
    const icon = document.querySelector('.contents_right_voiceUse i');
    const voiceuse = document.querySelector('.contents_right_voiceUse');
    const chatPhrase = document.querySelector('.chat_phrase');
    

    const autoResize = (el) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    };


    function toggleIcon() {
        if (textarea.value.trim() !== '') {
            icon.classList.remove('fa-wave-square');
            icon.classList.add('fa-arrow-up');
        } else {
            icon.classList.remove('fa-arrow-up');
            icon.classList.add('fa-wave-square');
        }
    }

    textarea.addEventListener('input', () => {
        toggleIcon();
        autoResize(textarea);
    });

    voiceuse.addEventListener('click', function () {
        if (icon.classList.contains('fa-arrow-up')) {
            const message =textarea.value.trim();
            if (message !== '') {
                const wrapper = document.createElement('div');
                wrapper.classList.add('message_wrapper');

                const time = document.createElement('span');
                time.classList.add('message_time');
                const now = new Date();
                time.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' });

                const p = document.createElement('p');
                p.classList.add('user_message');
                p.innerHTML = message.replace(/\n/g, '<br>');

                wrapper.appendChild(time);
                wrapper.appendChild(p);
                chatPhrase.appendChild(wrapper);

                chatPhrase.scrollTo({
                    top: chatPhrase.scrollHeight,
                    behavior: 'smooth'
                });

                textarea.value = '';
                toggleIcon();
                autoResize(textarea);
            }
        }
    });

    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            voiceuse.click();
        }
    });
});