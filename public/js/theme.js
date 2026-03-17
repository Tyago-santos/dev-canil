(function () {
    var storageKey = 'theme';
    var root = document.documentElement;
    var toggle = null;

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
            toggle.setAttribute('aria-pressed', theme === 'dark');
        }
    }

    function getInitialTheme() {
        var saved = localStorage.getItem(storageKey);
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
        return 'light';
    }

    function init() {
        toggle = document.querySelector('[data-theme-toggle]');
        var initial = getInitialTheme();
        applyTheme(initial);

        if (toggle) {
            toggle.addEventListener('click', function () {
                var current = root.getAttribute('data-theme') || 'light';
                var next = current === 'dark' ? 'light' : 'dark';
                localStorage.setItem(storageKey, next);
                applyTheme(next);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
