/* ═══════════════════════════════════════════
   EIRKIZED FINANCE — APPLICATION LOGIC
   Bilingual (ID / EN) + Rupiah Currency
   Professional Dark Dashboard
   ═══════════════════════════════════════════ */

(function () {
    'use strict';

    // ──── I18N DICTIONARY ────
    const LANG = {
        id: {
            auth_subtitle: '~ Lacak keuanganmu dengan mudah ~',
            login_title: 'Masuk',
            register_title: 'Daftar',
            username: 'Nama Pengguna',
            password: 'Kata Sandi',
            login_btn: '» Masuk «',
            register_btn: '» Daftar «',
            no_account: 'Belum punya akun?',
            register_here: 'Daftar di sini!',
            has_account: 'Sudah punya akun?',
            login_here: 'Masuk di sini!',
            lang_switch: '🌐 English',
            username_placeholder: 'masukkanNama',
            pick_name: 'pilihNama',
            // Nav (text-only, no emoji prefix)
            nav_dashboard_text: 'Dasbor',
            nav_add_text: 'Tambah Transaksi',
            nav_history_text: 'Riwayat',
            nav_categories_text: 'Kategori',
            nav_charts_text: 'Grafik',
            nav_help_text: 'Bantuan',
            nav_feedback_text: 'Masukan',
            themes_btn: '🎨 Tema',
            logout_btn: '🚪 Keluar',
            // Dashboard
            total_income: 'Total Pemasukan',
            total_expenses: 'Total Pengeluaran',
            balance: 'Saldo',
            expenses_by_cat: 'Pengeluaran per Kategori',
            monthly_overview: 'Ringkasan Bulanan',
            recent_txn: 'Transaksi Terbaru',
            no_txn_yet: 'Belum ada transaksi',
            // Table headers
            th_date: 'Tanggal',
            th_category: 'Kategori',
            th_note: 'Catatan',
            th_amount: 'Jumlah',
            th_type: 'Tipe',
            th_actions: 'Aksi',
            // Add transaction
            add_txn_title: 'Tambah Transaksi',
            type: 'Tipe',
            date: 'Tanggal',
            category: 'Kategori',
            amount_label: 'Jumlah (Rp)',
            notes: 'Catatan',
            add_note: 'Tambahkan catatan...',
            add_txn_btn: 'Tambah Transaksi',
            income_opt: '💰 Pemasukan',
            expense_opt: '💸 Pengeluaran',
            // History
            history_title: 'Riwayat Transaksi',
            from: 'Dari',
            to: 'Sampai',
            all: 'Semua',
            filter_btn: '🔍 Filter',
            clear_btn: '✕ Hapus',
            no_txn: 'Belum ada transaksi',
            // Categories
            cat_mgmt_title: 'Kelola Kategori',
            name: 'Nama',
            icon: 'Ikon',
            color: 'Warna',
            add_btn: '➕ Tambah',
            cancel_btn: '✕ Batal',
            update_btn: '✏️ Perbarui',
            new_category: 'Kategori baru',
            // Charts
            charts_title: 'Grafik & Diagram',
            pie_title: 'Rincian Pengeluaran',
            bar_title: 'Pemasukan vs Pengeluaran',
            chart_income: 'Pemasukan',
            chart_expenses: 'Pengeluaran',
            // Help
            help_title: 'Bantuan & Dukungan',
            faq1_q: '❓ Bagaimana cara menambah transaksi?',
            faq1_a: 'Klik <strong>"Tambah Transaksi"</strong> di sidebar, isi tipe, tanggal, kategori, jumlah, dan catatan opsional, lalu klik tombol kirim.',
            faq2_q: '❓ Bagaimana cara membuat kategori kustom?',
            faq2_a: 'Buka <strong>"Kategori"</strong> di sidebar. Gunakan form untuk memasukkan nama, pilih ikon dan warna, lalu klik "Tambah".',
            faq3_q: '❓ Di mana data saya disimpan?',
            faq3_a: 'Semua data disimpan di localStorage browser. Data bertahan antar sesi tetapi tidak sinkron antar perangkat.',
            faq4_q: '❓ Bagaimana cara memfilter riwayat?',
            faq4_a: 'Buka <strong>"Riwayat"</strong>, gunakan bar filter untuk memilih rentang tanggal, kategori, atau tipe.',
            faq5_q: '❓ Bisakah saya mengganti tema?',
            faq5_a: 'Bisa! Klik <strong>"🎨 Tema"</strong> di sidebar untuk memilih dari 3 tema berbeda.',
            faq6_q: '❓ Bagaimana cara menghubungi dukungan?',
            faq6_a: 'Gunakan bagian <strong>"Masukan"</strong> untuk mengirimkan pendapatmu atau melaporkan masalah.',
            // Feedback
            feedback_title: 'Masukan',
            how_rad: 'Seberapa keren aplikasi ini? ⭐',
            your_thoughts: 'Pendapatmu',
            tell_us: 'Ceritakan pendapatmu...',
            send_feedback: 'Kirim Masukan',
            thanks_feedback: '🌟 Terima kasih atas masukanmu! 🌟',
            past_feedback: 'Masukan Sebelumnya',
            // Theme modal
            theme_customizer: '🎨 Kustomisasi Tema',
            close: 'Tutup',
            // Toasts
            toast_fill_fields: 'Harap isi semua kolom yang diperlukan!',
            toast_added: (type, amount) => `${type === 'income' ? 'Pemasukan' : 'Pengeluaran'} sebesar ${amount} ditambahkan!`,
            toast_cat_updated: 'Kategori diperbarui!',
            toast_cat_added: 'Kategori ditambahkan!',
            toast_cat_deleted: 'Kategori dihapus',
            toast_txn_deleted: 'Transaksi dihapus',
            toast_theme_changed: (t) => `Tema diubah ke ${t}!`,
            marquee: (name) => `★ Selamat datang, ${name}! ★ Uangmu, gayamu ★ Eirkized Finance ★`,
            // Auth errors
            err_invalid: 'Nama pengguna atau kata sandi salah!',
            err_username_short: 'Nama pengguna minimal 3 karakter!',
            err_password_short: 'Kata sandi minimal 4 karakter!',
            err_username_taken: 'Nama pengguna sudah dipakai!',
            // History type labels
            type_income: 'Pemasukan',
            type_expense: 'Pengeluaran',
        },
        en: {
            auth_subtitle: '~ Track your finances easily ~',
            login_title: 'Login',
            register_title: 'Register',
            username: 'Username',
            password: 'Password',
            login_btn: '» Login «',
            register_btn: '» Register «',
            no_account: 'No account?',
            register_here: 'Register here!',
            has_account: 'Already have an account?',
            login_here: 'Login here!',
            lang_switch: '🌐 Bahasa Indonesia',
            username_placeholder: 'enterUrName',
            pick_name: 'pickAname',
            nav_dashboard_text: 'Dashboard',
            nav_add_text: 'Add Transaction',
            nav_history_text: 'History',
            nav_categories_text: 'Categories',
            nav_charts_text: 'Charts',
            nav_help_text: 'Help',
            nav_feedback_text: 'Feedback',
            themes_btn: '🎨 Themes',
            logout_btn: '🚪 Logout',
            total_income: 'Total Income',
            total_expenses: 'Total Expenses',
            balance: 'Balance',
            expenses_by_cat: 'Expenses by Category',
            monthly_overview: 'Monthly Overview',
            recent_txn: 'Recent Transactions',
            no_txn_yet: 'No transactions yet',
            th_date: 'Date',
            th_category: 'Category',
            th_note: 'Note',
            th_amount: 'Amount',
            th_type: 'Type',
            th_actions: 'Actions',
            add_txn_title: 'Add Transaction',
            type: 'Type',
            date: 'Date',
            category: 'Category',
            amount_label: 'Amount (Rp)',
            notes: 'Notes',
            add_note: 'Add a note...',
            add_txn_btn: 'Add Transaction',
            income_opt: '💰 Income',
            expense_opt: '💸 Expense',
            history_title: 'Transaction History',
            from: 'From',
            to: 'To',
            all: 'All',
            filter_btn: '🔍 Filter',
            clear_btn: '✕ Clear',
            no_txn: 'No transactions found',
            cat_mgmt_title: 'Category Management',
            name: 'Name',
            icon: 'Icon',
            color: 'Color',
            add_btn: '➕ Add',
            cancel_btn: '✕ Cancel',
            update_btn: '✏️ Update',
            new_category: 'New category',
            charts_title: 'Charts & Graphs',
            pie_title: 'Expense Breakdown',
            bar_title: 'Income vs Expenses',
            chart_income: 'Income',
            chart_expenses: 'Expenses',
            help_title: 'Help & Support',
            faq1_q: '❓ How do I add a transaction?',
            faq1_a: 'Click <strong>"Add Transaction"</strong> in the sidebar, fill in the details, then click the submit button.',
            faq2_q: '❓ How do I create custom categories?',
            faq2_a: 'Navigate to <strong>"Categories"</strong> in the sidebar. Use the form to enter a name, pick an icon and color, then click "Add".',
            faq3_q: '❓ Where is my data stored?',
            faq3_a: 'All data is stored in your browser\'s localStorage. It persists between sessions but is not synced across devices.',
            faq4_q: '❓ How do I filter my history?',
            faq4_a: 'Go to <strong>"History"</strong>, then use the filter bar to select a date range, category, or type.',
            faq5_q: '❓ Can I change the theme?',
            faq5_a: 'Yes! Click <strong>"🎨 Themes"</strong> at the bottom of the sidebar to choose from 3 different themes.',
            faq6_q: '❓ How do I contact support?',
            faq6_a: 'Use the <strong>"Feedback"</strong> section to send us your thoughts or report issues.',
            feedback_title: 'Feedback',
            how_rad: 'How do you like this app? ⭐',
            your_thoughts: 'Your thoughts',
            tell_us: 'Tell us what you think...',
            send_feedback: 'Send Feedback',
            thanks_feedback: '🌟 Thanks for your feedback! 🌟',
            past_feedback: 'Your Past Feedback',
            theme_customizer: '🎨 Theme Customizer',
            close: 'Close',
            toast_fill_fields: 'Please fill all required fields!',
            toast_added: (type, amount) => `${type === 'income' ? 'Income' : 'Expense'} of ${amount} added!`,
            toast_cat_updated: 'Category updated!',
            toast_cat_added: 'Category added!',
            toast_cat_deleted: 'Category deleted',
            toast_txn_deleted: 'Transaction deleted',
            toast_theme_changed: (t) => `Theme changed to ${t}!`,
            marquee: (name) => `★ Welcome, ${name}! ★ Your money, your style ★ Eirkized Finance ★`,
            err_invalid: 'Invalid username or password!',
            err_username_short: 'Username must be at least 3 characters!',
            err_password_short: 'Password must be at least 4 characters!',
            err_username_taken: 'Username already taken!',
            type_income: 'Income',
            type_expense: 'Expense',
        },
    };

    let currentLang = 'id';

    function t(key) {
        return LANG[currentLang][key] || LANG['id'][key] || key;
    }

    function applyI18n() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const val = LANG[currentLang][key];
            if (val && typeof val === 'string') {
                if (val.includes('<strong>') || val.includes('<')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = LANG[currentLang][key];
            if (val) el.placeholder = val;
        });
        const langBtnText = currentLang === 'id' ? '🌐 English' : '🌐 Bahasa Indonesia';
        const authLangBtn = document.getElementById('auth-lang-btn');
        const sidebarLangBtn = document.getElementById('lang-toggle-btn');
        if (authLangBtn) authLangBtn.textContent = langBtnText;
        if (sidebarLangBtn) sidebarLangBtn.textContent = langBtnText;
        document.documentElement.lang = currentLang === 'id' ? 'id' : 'en';
    }

    function toggleLanguage() {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        store(KEYS.LANG, currentLang);
        applyI18n();
        if (currentUser) {
            const activeView = document.querySelector('.view.active');
            if (activeView) {
                const viewId = activeView.id.replace('view-', '');
                navigateTo(viewId);
            }
        }
    }

    // ──── CURRENCY FORMATTING (RUPIAH) ────
    function formatRupiah(amount) {
        return 'Rp' + Math.round(amount).toLocaleString('id-ID');
    }

    // ──── STORAGE HELPERS ────
    const KEYS = {
        USERS: 'ef_users',
        SESSION: 'ef_session',
        TRANSACTIONS: 'ef_transactions',
        CATEGORIES: 'ef_categories',
        THEME: 'ef_theme',
        FEEDBACK: 'ef_feedback',
        LANG: 'ef_lang',
        AVATAR: 'ef_avatar',
    };

    function store(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function load(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch {
            return fallback;
        }
    }

    // ──── DEFAULT CATEGORIES ────
    const DEFAULT_CATEGORIES = [
        { id: 'cat-food', name: 'Makanan', icon: '🍔', color: '#F472B6', custom: false },
        { id: 'cat-entertainment', name: 'Hiburan', icon: '🎬', color: '#A78BFA', custom: false },
        { id: 'cat-housing', name: 'Rumah', icon: '🏠', color: '#7C3AED', custom: false },
        { id: 'cat-transport', name: 'Transportasi', icon: '🚗', color: '#3898EC', custom: false },
        { id: 'cat-health', name: 'Kesehatan', icon: '💊', color: '#06D6A0', custom: false },
        { id: 'cat-education', name: 'Pendidikan', icon: '📚', color: '#FBBF24', custom: false },
        { id: 'cat-shopping', name: 'Belanja', icon: '🛍️', color: '#F472B6', custom: false },
        { id: 'cat-utilities', name: 'Utilitas', icon: '⚡', color: '#FB923C', custom: false },
        { id: 'cat-salary', name: 'Gaji', icon: '💰', color: '#06D6A0', custom: false },
        { id: 'cat-investment', name: 'Investasi', icon: '📈', color: '#3898EC', custom: false },
        { id: 'cat-gifts', name: 'Hadiah', icon: '🎁', color: '#F472B6', custom: false },
        { id: 'cat-other', name: 'Lainnya', icon: '🌟', color: '#6B7280', custom: false },
    ];

    // ──── STATE ────
    let currentUser = null;
    let transactions = [];
    let categories = [];
    let feedback = [];
    let pieChartInstance = null;
    let barChartInstance = null;
    let dashPieInstance = null;
    let dashBarInstance = null;

    // ──── DOM REFERENCES ────
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const authScreen = $('#auth-screen');
    const app = $('#app');
    const loginForm = $('#login-form');
    const registerForm = $('#register-form');
    const authError = $('#auth-error');

    // ──── INIT ────
    function init() {
        currentLang = load(KEYS.LANG, 'id');
        applyTheme(load(KEYS.THEME, 'classic'));
        applyI18n();
        checkSession();
        bindAuthEvents();
        bindNavEvents();
        bindQuickAccessEvents();
        bindSidebarEvents();
        bindTransactionForm();
        bindCategoryForm();
        bindFilterEvents();
        bindFaqEvents();
        bindFeedbackForm();
        bindThemeModal();
        bindLangToggle();
        bindAvatarUpload();
        setDefaultDate();
    }

    // ──── LANGUAGE TOGGLE ────
    function bindLangToggle() {
        const authBtn = $('#auth-lang-btn');
        const sidebarBtn = $('#lang-toggle-btn');
        if (authBtn) authBtn.addEventListener('click', toggleLanguage);
        if (sidebarBtn) sidebarBtn.addEventListener('click', toggleLanguage);
    }

    // ──── AUTH ────
    function checkSession() {
        const session = load(KEYS.SESSION, null);
        if (session) {
            currentUser = session;
            showApp();
        }
    }

    function bindAuthEvents() {
        $('#show-register').addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            authError.classList.add('hidden');
        });

        $('#show-login').addEventListener('click', (e) => {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            authError.classList.add('hidden');
        });

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = $('#login-username').value.trim();
            const password = $('#login-password').value;
            const users = load(KEYS.USERS, []);
            const user = users.find((u) => u.username === username && u.password === password);
            if (!user) {
                showAuthError(t('err_invalid'));
                return;
            }
            currentUser = { username: user.username, email: user.email };
            store(KEYS.SESSION, currentUser);
            showApp();
        });

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = $('#reg-username').value.trim();
            const email = $('#reg-email').value.trim();
            const password = $('#reg-password').value;
            if (username.length < 3) {
                showAuthError(t('err_username_short'));
                return;
            }
            if (password.length < 4) {
                showAuthError(t('err_password_short'));
                return;
            }
            const users = load(KEYS.USERS, []);
            if (users.find((u) => u.username === username)) {
                showAuthError(t('err_username_taken'));
                return;
            }
            users.push({ username, email, password });
            store(KEYS.USERS, users);
            currentUser = { username, email };
            store(KEYS.SESSION, currentUser);
            showApp();
        });

        $('#logout-btn').addEventListener('click', () => {
            localStorage.removeItem(KEYS.SESSION);
            currentUser = null;
            location.reload();
        });
    }

    function showAuthError(msg) {
        authError.textContent = msg;
        authError.classList.remove('hidden');
    }

    function showApp() {
        authScreen.classList.add('hidden');
        app.classList.remove('hidden');
        $('#user-badge').textContent = currentUser.username;
        const marqueeFunc = LANG[currentLang].marquee;
        $('#marquee-text').textContent = marqueeFunc(currentUser.username);
        loadUserData();
        loadAvatar();
        navigateTo('dashboard');
    }

    function loadUserData() {
        const userKey = currentUser.username;
        transactions = load(KEYS.TRANSACTIONS + '_' + userKey, []);
        categories = load(KEYS.CATEGORIES + '_' + userKey, null);
        if (!categories) {
            categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
            saveCategories();
        }
        feedback = load(KEYS.FEEDBACK + '_' + userKey, []);
        populateCategorySelects();
    }

    function saveTransactions() {
        store(KEYS.TRANSACTIONS + '_' + currentUser.username, transactions);
    }

    function saveCategories() {
        store(KEYS.CATEGORIES + '_' + currentUser.username, categories);
    }

    function saveFeedback() {
        store(KEYS.FEEDBACK + '_' + currentUser.username, feedback);
    }

    // ──── NAVIGATION ────
    function bindNavEvents() {
        $$('.nav-link').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.dataset.view;
                navigateTo(view);
                closeSidebar();
            });
        });
    }

    function bindQuickAccessEvents() {
        $$('.quick-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                if (view) navigateTo(view);
            });
        });
    }

    function navigateTo(viewName) {
        $$('.view').forEach((v) => {
            v.classList.add('hidden');
            v.classList.remove('active');
        });
        const target = $(`#view-${viewName}`);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }

        $$('.nav-link').forEach((l) => l.classList.remove('active'));
        const activeLink = $(`.nav-link[data-view="${viewName}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Update page title
        const pageTitle = $('#page-title');
        if (pageTitle) {
            const titleMap = {
                dashboard: 'nav_dashboard_text',
                'add-transaction': 'nav_add_text',
                history: 'nav_history_text',
                categories: 'nav_categories_text',
                charts: 'nav_charts_text',
                help: 'nav_help_text',
                feedback: 'nav_feedback_text',
            };
            pageTitle.textContent = t(titleMap[viewName] || 'nav_dashboard_text');
        }

        if (viewName === 'dashboard') renderDashboard();
        if (viewName === 'history') renderHistory();
        if (viewName === 'categories') renderCategories();
        if (viewName === 'charts') renderCharts();
        if (viewName === 'add-transaction') populateCategorySelects();
        if (viewName === 'feedback') renderPastFeedback();
    }

    // ──── SIDEBAR (MOBILE) ────
    function bindSidebarEvents() {
        $('#hamburger').addEventListener('click', openSidebar);
        $('#sidebar-close').addEventListener('click', closeSidebar);
        $('#sidebar-overlay').addEventListener('click', closeSidebar);
    }

    function openSidebar() {
        $('#sidebar').classList.add('open');
        $('#sidebar-overlay').classList.remove('hidden');
    }

    function closeSidebar() {
        $('#sidebar').classList.remove('open');
        $('#sidebar-overlay').classList.add('hidden');
    }

    // ──── AVATAR UPLOAD ────
    function bindAvatarUpload() {
        const avatarWrapper = $('.avatar-wrapper');
        const fileInput = $('#avatar-upload');
        if (!avatarWrapper || !fileInput) return;

        avatarWrapper.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) return;
            // Limit size to 500KB for localStorage
            if (file.size > 512000) {
                showToast('Foto terlalu besar! Maks 500KB.');
                return;
            }
            const reader = new FileReader();
            reader.onload = (ev) => {
                const dataUrl = ev.target.result;
                if (currentUser) {
                    store(KEYS.AVATAR + '_' + currentUser.username, dataUrl);
                }
                displayAvatar(dataUrl);
            };
            reader.readAsDataURL(file);
        });
    }

    function loadAvatar() {
        if (!currentUser) return;
        const saved = load(KEYS.AVATAR + '_' + currentUser.username, null);
        if (saved) {
            displayAvatar(saved);
        }
    }

    function displayAvatar(dataUrl) {
        const avatarDiv = $('#user-avatar');
        if (!avatarDiv) return;
        avatarDiv.innerHTML = `<img src="${dataUrl}" alt="Profile" />`;
    }

    // ──── SET DEFAULT DATE ────
    function setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        const dateInput = $('#txn-date');
        if (dateInput) dateInput.value = today;
    }

    // ──── TRANSACTION FORM ────
    function bindTransactionForm() {
        $('#transaction-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const type = $('#txn-type').value;
            const date = $('#txn-date').value;
            const categoryId = $('#txn-category').value;
            const amount = parseFloat($('#txn-amount').value);
            const note = $('#txn-note').value.trim();

            if (!date || !categoryId || isNaN(amount) || amount <= 0) {
                showToast(t('toast_fill_fields'));
                return;
            }

            const txn = {
                id: 'txn-' + Date.now(),
                type,
                date,
                categoryId,
                amount,
                note,
                createdAt: new Date().toISOString(),
            };

            transactions.push(txn);
            saveTransactions();
            const toastFunc = LANG[currentLang].toast_added;
            showToast(toastFunc(type, formatRupiah(amount)));
            e.target.reset();
            setDefaultDate();
        });
    }

    // ──── POPULATE CATEGORY SELECTS ────
    function populateCategorySelects() {
        const selects = ['#txn-category', '#filter-category'];
        selects.forEach((sel) => {
            const el = $(sel);
            if (!el) return;
            const isFilter = sel === '#filter-category';
            el.innerHTML = isFilter ? `<option value="">${t('all')}</option>` : '';
            categories.forEach((cat) => {
                const opt = document.createElement('option');
                opt.value = cat.id;
                opt.textContent = `${cat.icon} ${cat.name}`;
                el.appendChild(opt);
            });
        });
    }

    // ──── CATEGORY MANAGEMENT ────
    function bindCategoryForm() {
        $('#category-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = $('#cat-name').value.trim();
            const icon = $('#cat-icon').value;
            const color = $('#cat-color').value;
            const editId = $('#cat-edit-id').value;

            if (!name) return;

            if (editId) {
                const cat = categories.find((c) => c.id === editId);
                if (cat) {
                    cat.name = name;
                    cat.icon = icon;
                    cat.color = color;
                }
                $('#cat-edit-id').value = '';
                $('#cat-submit-btn').textContent = t('add_btn');
                $('#cat-cancel-btn').classList.add('hidden');
                showToast(t('toast_cat_updated'));
            } else {
                const newCat = {
                    id: 'cat-' + Date.now(),
                    name,
                    icon,
                    color,
                    custom: true,
                };
                categories.push(newCat);
                showToast(t('toast_cat_added'));
            }

            saveCategories();
            populateCategorySelects();
            renderCategories();
            e.target.reset();
            $('#cat-color').value = '#7C3AED';
        });

        $('#cat-cancel-btn').addEventListener('click', () => {
            $('#cat-edit-id').value = '';
            $('#cat-submit-btn').textContent = t('add_btn');
            $('#cat-cancel-btn').classList.add('hidden');
            $('#category-form').reset();
            $('#cat-color').value = '#7C3AED';
        });
    }

    function editCategory(id) {
        const cat = categories.find((c) => c.id === id);
        if (!cat) return;
        $('#cat-name').value = cat.name;
        $('#cat-icon').value = cat.icon;
        $('#cat-color').value = cat.color;
        $('#cat-edit-id').value = id;
        $('#cat-submit-btn').textContent = t('update_btn');
        $('#cat-cancel-btn').classList.remove('hidden');
    }

    function deleteCategory(id) {
        categories = categories.filter((c) => c.id !== id);
        saveCategories();
        populateCategorySelects();
        renderCategories();
        showToast(t('toast_cat_deleted'));
    }

    function renderCategories() {
        const grid = $('#category-grid');
        grid.innerHTML = '';
        categories.forEach((cat) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.borderColor = cat.color + '33';
            card.innerHTML = `
        <span class="category-icon">${cat.icon}</span>
        <span class="category-name">${cat.name}</span>
        <div class="category-actions">
          <button class="btn-icon" onclick="window._editCategory('${cat.id}')" title="Edit">✏️</button>
          ${cat.custom ? `<button class="btn-icon" onclick="window._deleteCategory('${cat.id}')" title="Hapus">🗑️</button>` : ''}
        </div>
      `;
            grid.appendChild(card);
        });
    }

    window._editCategory = editCategory;
    window._deleteCategory = deleteCategory;

    // ──── DASHBOARD ────
    function renderDashboard() {
        const income = transactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
        const expenses = transactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
        const balance = income - expenses;

        $('#total-income').textContent = formatRupiah(income);
        $('#total-expenses').textContent = formatRupiah(expenses);
        $('#total-balance').textContent = formatRupiah(balance);

        // Recent transactions (last 5)
        const recent = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        const tbody = $('#recent-tbody');
        tbody.innerHTML = '';
        if (recent.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted)">${t('no_txn_yet')}</td></tr>`;
        } else {
            recent.forEach((txn) => {
                const cat = categories.find((c) => c.id === txn.categoryId) || { icon: '🌟', name: 'Unknown' };
                const tr = document.createElement('tr');
                tr.innerHTML = `
          <td>${txn.date}</td>
          <td>${cat.icon} ${cat.name}</td>
          <td>${txn.note || '—'}</td>
          <td class="${txn.type === 'income' ? 'amount-income' : 'amount-expense'}">
            ${txn.type === 'income' ? '+' : '-'}${formatRupiah(txn.amount)}
          </td>
        `;
                tbody.appendChild(tr);
            });
        }

        renderDashboardCharts();
    }

    // ──── CHART STYLING ────
    function getChartColors() {
        const style = getComputedStyle(document.documentElement);
        return {
            textColor: style.getPropertyValue('--text-muted').trim() || '#6B6280',
            gridColor: 'rgba(255, 255, 255, 0.04)',
            incomeColor: style.getPropertyValue('--income-color').trim() || '#06D6A0',
            expenseColor: style.getPropertyValue('--expense-color').trim() || '#F472B6',
        };
    }

    function renderDashboardCharts() {
        const colors = getChartColors();
        const expByCat = {};
        transactions.filter((t) => t.type === 'expense').forEach((tx) => {
            const cat = categories.find((c) => c.id === tx.categoryId);
            const name = cat ? cat.name : 'Other';
            expByCat[name] = (expByCat[name] || 0) + tx.amount;
        });

        const pieLabels = Object.keys(expByCat);
        const pieData = Object.values(expByCat);
        const pieColors = pieLabels.map((label) => {
            const cat = categories.find((c) => c.name === label);
            return cat ? cat.color : '#6B7280';
        });

        if (dashPieInstance) dashPieInstance.destroy();
        const pieCtx = $('#dashboard-pie');
        if (pieLabels.length > 0) {
            dashPieInstance = new Chart(pieCtx, {
                type: 'doughnut',
                data: {
                    labels: pieLabels,
                    datasets: [{
                        data: pieData,
                        backgroundColor: pieColors,
                        borderColor: 'rgba(0,0,0,0.3)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'right', labels: { color: colors.textColor, font: { family: 'Inter', size: 11 }, padding: 10, boxWidth: 12 } },
                        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${formatRupiah(ctx.parsed)}` } },
                    },
                },
            });
        }

        const monthlyData = getMonthlyData();
        if (dashBarInstance) dashBarInstance.destroy();
        const barCtx = $('#dashboard-bar');
        dashBarInstance = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: monthlyData.labels,
                datasets: [
                    {
                        label: t('chart_income'),
                        data: monthlyData.income,
                        backgroundColor: colors.incomeColor + 'AA',
                        borderColor: colors.incomeColor,
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                    {
                        label: t('chart_expenses'),
                        data: monthlyData.expenses,
                        backgroundColor: colors.expenseColor + 'AA',
                        borderColor: colors.expenseColor,
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: colors.textColor, font: { family: 'Inter', size: 11 }, padding: 10, boxWidth: 12 } },
                    tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatRupiah(ctx.parsed.y)}` } },
                },
                scales: {
                    x: { ticks: { color: colors.textColor, font: { family: 'Inter', size: 11 } }, grid: { color: colors.gridColor } },
                    y: {
                        ticks: { color: colors.textColor, font: { family: 'Inter', size: 11 }, callback: (v) => formatRupiah(v) },
                        grid: { color: colors.gridColor },
                    },
                },
            },
        });
    }

    // ──── FULL CHARTS VIEW ────
    function renderCharts() {
        const colors = getChartColors();
        const expByCat = {};
        transactions.filter((tx) => tx.type === 'expense').forEach((tx) => {
            const cat = categories.find((c) => c.id === tx.categoryId);
            const name = cat ? cat.name : 'Other';
            expByCat[name] = (expByCat[name] || 0) + tx.amount;
        });

        const pieLabels = Object.keys(expByCat);
        const pieData = Object.values(expByCat);
        const pieColors = pieLabels.map((l) => {
            const cat = categories.find((c) => c.name === l);
            return cat ? cat.color : '#6B7280';
        });

        if (pieChartInstance) pieChartInstance.destroy();
        if (pieLabels.length > 0) {
            pieChartInstance = new Chart($('#chart-pie'), {
                type: 'pie',
                data: {
                    labels: pieLabels,
                    datasets: [{
                        data: pieData,
                        backgroundColor: pieColors,
                        borderColor: 'rgba(0,0,0,0.3)',
                        borderWidth: 1,
                        hoverOffset: 8,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { color: colors.textColor, font: { family: 'Inter', size: 12 }, padding: 14, boxWidth: 12 } },
                        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${formatRupiah(ctx.parsed)}` } },
                    },
                },
            });
        }

        const monthlyData = getMonthlyData();
        if (barChartInstance) barChartInstance.destroy();
        barChartInstance = new Chart($('#chart-bar'), {
            type: 'bar',
            data: {
                labels: monthlyData.labels,
                datasets: [
                    {
                        label: t('chart_income'),
                        data: monthlyData.income,
                        backgroundColor: colors.incomeColor + 'AA',
                        borderColor: colors.incomeColor,
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                    {
                        label: t('chart_expenses'),
                        data: monthlyData.expenses,
                        backgroundColor: colors.expenseColor + 'AA',
                        borderColor: colors.expenseColor,
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: colors.textColor, font: { family: 'Inter', size: 12 }, padding: 14, boxWidth: 12 } },
                    tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatRupiah(ctx.parsed.y)}` } },
                },
                scales: {
                    x: { ticks: { color: colors.textColor, font: { family: 'Inter', size: 12 } }, grid: { color: colors.gridColor } },
                    y: {
                        ticks: { color: colors.textColor, font: { family: 'Inter', size: 12 }, callback: (v) => formatRupiah(v) },
                        grid: { color: colors.gridColor },
                    },
                },
            },
        });
    }

    function getMonthlyData() {
        const months = {};
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
            const label = d.toLocaleString(currentLang === 'id' ? 'id-ID' : 'en-US', { month: 'short', year: '2-digit' });
            months[key] = { label, income: 0, expenses: 0 };
        }

        transactions.forEach((tx) => {
            const key = tx.date.substring(0, 7);
            if (months[key]) {
                if (tx.type === 'income') months[key].income += tx.amount;
                else months[key].expenses += tx.amount;
            }
        });

        return {
            labels: Object.values(months).map((m) => m.label),
            income: Object.values(months).map((m) => m.income),
            expenses: Object.values(months).map((m) => m.expenses),
        };
    }

    // ──── HISTORY ────
    function bindFilterEvents() {
        $('#apply-filters-btn').addEventListener('click', renderHistory);
        $('#clear-filters-btn').addEventListener('click', () => {
            $('#filter-start').value = '';
            $('#filter-end').value = '';
            $('#filter-category').value = '';
            $('#filter-type').value = '';
            renderHistory();
        });
    }

    function renderHistory() {
        const startDate = $('#filter-start').value;
        const endDate = $('#filter-end').value;
        const filterCat = $('#filter-category').value;
        const filterType = $('#filter-type').value;

        let filtered = [...transactions];
        if (startDate) filtered = filtered.filter((tx) => tx.date >= startDate);
        if (endDate) filtered = filtered.filter((tx) => tx.date <= endDate);
        if (filterCat) filtered = filtered.filter((tx) => tx.categoryId === filterCat);
        if (filterType) filtered = filtered.filter((tx) => tx.type === filterType);
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        const tbody = $('#history-tbody');
        const emptyMsg = $('#history-empty');
        tbody.innerHTML = '';

        if (filtered.length === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            emptyMsg.classList.add('hidden');
            filtered.forEach((txn) => {
                const cat = categories.find((c) => c.id === txn.categoryId) || { icon: '🌟', name: 'Unknown' };
                const tr = document.createElement('tr');
                const typeBadge = txn.type === 'income'
                    ? `<span class="type-badge type-badge-income">${t('type_income')}</span>`
                    : `<span class="type-badge type-badge-expense">${t('type_expense')}</span>`;
                tr.innerHTML = `
          <td>${txn.date}</td>
          <td>${typeBadge}</td>
          <td>${cat.icon} ${cat.name}</td>
          <td>${txn.note || '—'}</td>
          <td class="${txn.type === 'income' ? 'amount-income' : 'amount-expense'}">
            ${txn.type === 'income' ? '+' : '-'}${formatRupiah(txn.amount)}
          </td>
          <td>
            <button class="btn-icon" onclick="window._deleteTxn('${txn.id}')" title="Hapus">🗑️</button>
          </td>
        `;
                tbody.appendChild(tr);
            });
        }
    }

    function deleteTransaction(id) {
        transactions = transactions.filter((tx) => tx.id !== id);
        saveTransactions();
        renderHistory();
        showToast(t('toast_txn_deleted'));
    }
    window._deleteTxn = deleteTransaction;

    // ──── FAQ ────
    function bindFaqEvents() {
        $$('.faq-question').forEach((btn) => {
            btn.addEventListener('click', () => {
                const answer = btn.nextElementSibling;
                answer.classList.toggle('hidden');
            });
        });
    }

    // ──── FEEDBACK ────
    function bindFeedbackForm() {
        $$('#star-rating .star').forEach((star) => {
            star.addEventListener('click', () => {
                const val = parseInt(star.dataset.value);
                $('#feedback-rating').value = val;
                $$('#star-rating .star').forEach((s) => {
                    s.classList.toggle('active', parseInt(s.dataset.value) <= val);
                });
            });

            star.addEventListener('mouseenter', () => {
                const val = parseInt(star.dataset.value);
                $$('#star-rating .star').forEach((s) => {
                    s.style.color = parseInt(s.dataset.value) <= val ? 'var(--accent-5)' : '';
                });
            });

            star.addEventListener('mouseleave', () => {
                const currentVal = parseInt($('#feedback-rating').value);
                $$('#star-rating .star').forEach((s) => {
                    s.style.color = parseInt(s.dataset.value) <= currentVal ? 'var(--accent-5)' : '';
                });
            });
        });

        $('#feedback-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const rating = parseInt($('#feedback-rating').value);
            const text = $('#feedback-text').value.trim();
            if (!text) return;
            feedback.push({ rating, text, date: new Date().toISOString() });
            saveFeedback();
            $('#feedback-form').classList.add('hidden');
            $('#feedback-success').classList.remove('hidden');
            setTimeout(() => {
                $('#feedback-form').classList.remove('hidden');
                $('#feedback-success').classList.add('hidden');
                $('#feedback-form').reset();
                $('#feedback-rating').value = 0;
                $$('#star-rating .star').forEach((s) => s.classList.remove('active'));
                renderPastFeedback();
            }, 3000);
        });
    }

    function renderPastFeedback() {
        const section = $('#past-feedback-section');
        const list = $('#past-feedback-list');
        if (feedback.length === 0) {
            section.classList.add('hidden');
            return;
        }
        section.classList.remove('hidden');
        list.innerHTML = '';
        [...feedback].reverse().forEach((fb) => {
            const div = document.createElement('div');
            div.className = 'feedback-item';
            const stars = '★'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating);
            div.innerHTML = `<span class="feedback-stars">${stars}</span> ${fb.text}`;
            list.appendChild(div);
        });
    }

    // ──── THEME ────
    function bindThemeModal() {
        $('#theme-toggle-btn').addEventListener('click', () => {
            $('#theme-modal').classList.remove('hidden');
        });

        $('#close-theme-modal').addEventListener('click', () => {
            $('#theme-modal').classList.add('hidden');
        });

        $('.modal-backdrop').addEventListener('click', () => {
            $('#theme-modal').classList.add('hidden');
        });

        $$('.theme-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                applyTheme(theme);
                store(KEYS.THEME, theme);
                const toastFunc = LANG[currentLang].toast_theme_changed;
                showToast(toastFunc(theme));
                $('#theme-modal').classList.add('hidden');
            });
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // ──── TOAST ────
    function showToast(message) {
        const toast = $('#toast');
        toast.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    }

    // ──── BOOT ────
    document.addEventListener('DOMContentLoaded', init);
})();
