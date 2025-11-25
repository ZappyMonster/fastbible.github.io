// State Management
const state = {
    bibleData: [],
    currentLanguage: 'english',
    searchIndex: null,
    isShowingResults: false,
    bookList: [
        {"book": "創世記", "english": "Genesis"},
        {"book": "出埃及記", "english": "Exodus"},
        {"book": "利未記", "english": "Leviticus"},
        {"book": "民數記", "english": "Numbers"},
        {"book": "申命記", "english": "Deuteronomy"},
        {"book": "約書亞記", "english": "Joshua"},
        {"book": "士師記", "english": "Judges"},
        {"book": "路得記", "english": "Ruth"},
        {"book": "撒母耳記上", "english": "1 Samuel"},
        {"book": "撒母耳記下", "english": "2 Samuel"},
        {"book": "列王紀上", "english": "1 Kings"},
        {"book": "列王紀下", "english": "2 Kings"},
        {"book": "歷代志上", "english": "1 Chronicles"},
        {"book": "歷代志下", "english": "2 Chronicles"},
        {"book": "以斯拉記", "english": "Ezra"},
        {"book": "尼希米記", "english": "Nehemiah"},
        {"book": "以斯帖記", "english": "Esther"},
        {"book": "約伯記", "english": "Job"},
        {"book": "詩篇", "english": "Psalms"},
        {"book": "箴言", "english": "Proverbs"},
        {"book": "傳道書", "english": "Ecclesiastes"},
        {"book": "雅歌", "english": "Song of Songs"},
        {"book": "以賽亞書", "english": "Isaiah"},
        {"book": "耶利米書", "english": "Jeremiah"},
        {"book": "耶利米哀歌", "english": "Lamentations"},
        {"book": "以西結書", "english": "Ezekiel"},
        {"book": "但以理書", "english": "Daniel"},
        {"book": "何西阿書", "english": "Hosea"},
        {"book": "約珥書", "english": "Joel"},
        {"book": "阿摩司書", "english": "Amos"},
        {"book": "俄巴底亞書", "english": "Obadiah"},
        {"book": "約拿書", "english": "Jonah"},
        {"book": "彌迦書", "english": "Micah"},
        {"book": "那鴻書", "english": "Nahum"},
        {"book": "哈巴谷書", "english": "Habakkuk"},
        {"book": "西番雅書", "english": "Zephaniah"},
        {"book": "哈該書", "english": "Haggai"},
        {"book": "撒迦利亞書", "english": "Zechariah"},
        {"book": "瑪拉基書", "english": "Malachi"},
        {"book": "馬太福音", "english": "Matthew"},
        {"book": "馬可福音", "english": "Mark"},
        {"book": "路加福音", "english": "Luke"},
        {"book": "約翰福音", "english": "John"},
        {"book": "使徒行傳", "english": "Acts"},
        {"book": "羅馬書", "english": "Romans"},
        {"book": "哥林多前書", "english": "1 Corinthians"},
        {"book": "哥林多後書", "english": "2 Corinthians"},
        {"book": "加拉太書", "english": "Galatians"},
        {"book": "以弗所書", "english": "Ephesians"},
        {"book": "腓立比書", "english": "Philippians"},
        {"book": "歌羅西書", "english": "Colossians"},
        {"book": "帖撒羅尼迦前書", "english": "1 Thessalonians"},
        {"book": "帖撒羅尼迦後書", "english": "2 Thessalonians"},
        {"book": "提摩太前書", "english": "1 Timothy"},
        {"book": "提摩太後書", "english": "2 Timothy"},
        {"book": "提多書", "english": "Titus"},
        {"book": "腓利門書", "english": "Philemon"},
        {"book": "希伯來書", "english": "Hebrews"},
        {"book": "雅各書", "english": "James"},
        {"book": "彼得前書", "english": "1 Peter"},
        {"book": "彼得後書", "english": "2 Peter"},
        {"book": "約翰一書", "english": "1 John"},
        {"book": "約翰二書", "english": "2 John"},
        {"book": "約翰三書", "english": "3 John"},
        {"book": "猶大書", "english": "Jude"},
        {"book": "啟示錄", "english": "Revelation"}
    ],
    bookCodeMap: {
        "Genesis": "Gen", "Exodus": "Exo", "Leviticus": "Lev", "Numbers": "Num", "Deuteronomy": "Deu",
        "Joshua": "Jos", "Judges": "Jug", "Ruth": "Rut", "1 Samuel": "1Sa", "2 Samuel": "2Sa",
        "1 Kings": "1Ki", "2 Kings": "2Ki", "1 Chronicles": "1Ch", "2 Chronicles": "2Ch", "Ezra": "Ezr",
        "Nehemiah": "Neh", "Esther": "Est", "Job": "Job", "Psalms": "Psm", "Proverbs": "Pro",
        "Ecclesiastes": "Ecc", "Song of Songs": "Son", "Isaiah": "Isa", "Jeremiah": "Jer",
        "Lamentations": "Lam", "Ezekiel": "Eze", "Daniel": "Dan", "Hosea": "Hos", "Joel": "Joe",
        "Amos": "Amo", "Obadiah": "Oba", "Jonah": "Jon", "Micah": "Mic", "Nahum": "Nah",
        "Habakkuk": "Hab", "Zephaniah": "Zep", "Haggai": "Hag", "Zechariah": "Zec", "Malachi": "Mal",
        "Matthew": "Mat", "Mark": "Mak", "Luke": "Luk", "John": "Jhn", "Acts": "Act", "Romans": "Rom",
        "1 Corinthians": "1Co", "2 Corinthians": "2Co", "Galatians": "Gal", "Ephesians": "Eph",
        "Philippians": "Phl", "Colossians": "Col", "1 Thessalonians": "1Ts", "2 Thessalonians": "2Ts",
        "1 Timothy": "1Ti", "2 Timothy": "2Ti", "Titus": "Tit", "Philemon": "Phm", "Hebrews": "Heb",
        "James": "Jas", "1 Peter": "1Pe", "2 Peter": "2Pe", "1 John": "1Jn", "2 John": "2Jn",
        "3 John": "3Jn", "Jude": "Jud", "Revelation": "Rev"
    }
};

const translations = {
    english: {
        searchButton: 'Search',
        searchPlaceholder: 'Search verses, chapters, or text...',
        searchEntire: 'Search entire Bible',
        close: 'Close',
        tipsTitle: 'Tips:',
        tipVerse: '"John 3:16" for specific verse',
        tipChapter: '"Genesis 1" for chapter',
        tipText: '"Love" for text search',
        loading: 'Loading Sacred Texts...',
        loadError: 'Failed to load. Please check your connection.',
        selectBook: 'Select Book',
        resultsFound: (count) => `${count} results found`,
        searchTitle: (query) => `Search: "${query}"`
    },
    chinese: {
        searchButton: '搜索',
        searchPlaceholder: '搜索经文、章节或内容...',
        searchEntire: '搜索整本圣经',
        close: '关闭',
        tipsTitle: '提示：',
        tipVerse: '如 “约翰福音 3:16” 查找经文',
        tipChapter: '如 “创世记 1” 查找章节',
        tipText: '如 “爱” 搜索全文',
        loading: '正在加载圣经...',
        loadError: '加载失败，请检查网络连接。',
        selectBook: '选择书卷',
        resultsFound: (count) => `共找到 ${count} 处结果`,
        searchTitle: (query) => `搜索：“${query}”`
    }
};

const t = (key, param) => {
    const value = translations[state.currentLanguage][key];
    return typeof value === 'function' ? value(param) : value;
};

// HTML escaping to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// DOM Elements
const elements = {
    content: document.getElementById('content'),
    bookSelect: document.getElementById('bookSelect'),
    languageSelect: document.getElementById('languageSelect'),
    searchInput: document.getElementById('searchInput'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchToggleBtn: document.getElementById('searchToggleBtn'),
    closeSearchBtn: document.getElementById('closeSearchBtn'),
    searchEntireCheckbox: document.getElementById('searchEntireBible'),
    searchToggleLabel: document.getElementById('searchToggleLabel'),
    searchEntireLabel: document.getElementById('searchEntireLabel'),
    searchTipsTitle: document.getElementById('searchTipsTitle'),
    tipVerse: document.getElementById('tipVerse'),
    tipChapter: document.getElementById('tipChapter'),
    tipText: document.getElementById('tipText'),
    brandLogo: document.getElementById('brandLogo')
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    updateUIText();
    loadBible();
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .catch(err => console.error('Service Worker registration failed', err));
    }
});

function initEventListeners() {
    elements.languageSelect.addEventListener('change', (e) => {
        state.currentLanguage = e.target.value;
        updateUIText();
        loadBible();
    });

    elements.bookSelect.addEventListener('change', (e) => {
        if (e.target.value !== "") {
            displayBook(parseInt(e.target.value));
        }
    });

    elements.searchToggleBtn.addEventListener('click', toggleSearch);
    elements.closeSearchBtn.addEventListener('click', toggleSearch);
    
    // Close search on overlay click
    elements.searchOverlay.addEventListener('click', (e) => {
        if (e.target === elements.searchOverlay) toggleSearch();
    });

    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Brand logo click - return to selected book
    elements.brandLogo.addEventListener('click', returnToSelectedBook);
    elements.brandLogo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            returnToSelectedBook();
        }
    });
}

function updateUIText() {
    elements.searchToggleLabel.textContent = t('searchButton');
    elements.searchInput.placeholder = t('searchPlaceholder');
    elements.searchEntireLabel.textContent = t('searchEntire');
    elements.closeSearchBtn.textContent = t('close');
    elements.searchTipsTitle.innerHTML = `<strong>${t('tipsTitle')}</strong>`;
    elements.tipVerse.textContent = t('tipVerse');
    elements.tipChapter.textContent = t('tipChapter');
    elements.tipText.textContent = t('tipText');

    const placeholderOption = elements.bookSelect.querySelector('option[value=""]');
    if (placeholderOption) {
        placeholderOption.textContent = t('selectBook');
    }
}

async function loadBible() {
    showLoading();
    try {
        const filename = state.currentLanguage === 'english' ? 'esv-bible-2001.json' : 'hgb-utf8.json';
        const response = await fetch(filename);
        state.bibleData = await response.json();
        
        buildSearchIndex();
        populateBooks();
        loadFirstBook();
    } catch (error) {
        console.error(error);
        showError();
    }
}

function showLoading() {
    elements.content.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>${t('loading')}</p>
        </div>`;
}

function showError() {
    elements.content.innerHTML = `<div class="loading-state"><p>${t('loadError')}</p></div>`;
}

function populateBooks() {
    elements.bookSelect.innerHTML = `<option value="">${t('selectBook')}</option>`;
    state.bookList.forEach((bookInfo, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = state.currentLanguage === 'english' ? bookInfo.english : bookInfo.book;
        elements.bookSelect.appendChild(option);
    });
}

function loadFirstBook() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookParam = urlParams.get('book');
    const verseParam = urlParams.get('verse');
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
        elements.searchInput.value = searchParam;
        toggleSearch(); // Open search modal
        performSearch();
        return;
    }
    
    if (bookParam) {
        const bookIndex = state.bookList.findIndex(book => 
            book.english.toLowerCase().replace(/\s+/g, '-') === bookParam
        );
        if (bookIndex !== -1) {
            elements.bookSelect.value = bookIndex;
            displayBook(bookIndex, false);
            if (verseParam) scrollToVerse(verseParam);
            return;
        }
    }
    
    // Default: Genesis
    if (state.bookList.length > 0) {
        elements.bookSelect.value = 0;
        displayBook(0, false);
    }
}

function scrollToVerse(verseRef) {
    // Use requestAnimationFrame to ensure DOM is ready, then add a small delay
    requestAnimationFrame(() => {
        setTimeout(() => {
            // Find the verse element by iterating through all verses and comparing data-verse attribute
            const allVerses = document.querySelectorAll('.verse[data-verse]');
            let verseElement = null;
            
            for (let elem of allVerses) {
                if (elem.dataset.verse === verseRef) {
                    verseElement = elem;
                    break;
                }
            }
            
            if (verseElement) {
                // Use getBoundingClientRect and window.scrollTo for more reliable scrolling
                const rect = verseElement.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetY = rect.top + scrollTop - (window.innerHeight / 2);
                window.scrollTo({ top: targetY, behavior: 'instant' });
                verseElement.classList.add('verse-highlight');
                setTimeout(() => verseElement.classList.remove('verse-highlight'), 2500);
            }
        }, 150);
    });
}

function displayBook(bookIndex, updateUrl = true, skipScrollToTop = false) {
    const bookInfo = state.bookList[bookIndex];
    const bookCode = state.bookCodeMap[bookInfo.english];
    const bookVerses = state.bibleData.filter(verse => verse.book === bookCode);
    
    const bookTitle = state.currentLanguage === 'english' ? bookInfo.english : bookInfo.book;
    const chapterLabel = state.currentLanguage === 'english' ? 'Chapter' : '第';
    const chapterSuffix = state.currentLanguage === 'english' ? '' : '章';
    
    if (updateUrl) {
        const url = new URL(window.location);
        url.searchParams.set('book', bookInfo.english.toLowerCase().replace(/\s+/g, '-'));
        url.searchParams.delete('search');
        url.searchParams.delete('verse');
        history.pushState(null, '', url);
    }
    
    let html = `<h1 class="book-title">${bookTitle}</h1>`;
    let currentChapter = null;
    
    bookVerses.forEach(verse => {
        // Extract chapter number from verse reference (e.g., "1:1" -> "1")
        const chapterNum = verse.verse.split(':')[0];
        
        // Add chapter heading when chapter changes
        if (chapterNum !== currentChapter) {
            currentChapter = chapterNum;
            html += `<h2 class="chapter-heading">${chapterLabel} ${chapterNum}${chapterSuffix}</h2>`;
        }
        
        // Extract just the verse number for display
        const verseNum = verse.verse.split(':')[1] || verse.verse;
        
        html += `<div class="verse" data-verse="${escapeHtml(verse.verse)}">
            <span class="verse-num" onclick="updateVerseUrl('${escapeHtml(verse.book)}', '${escapeHtml(verse.verse)}')">${escapeHtml(verseNum)}</span>
            ${escapeHtml(verse.text)}
        </div>`;
    });
    
    elements.content.innerHTML = html;
    if (!skipScrollToTop) {
        window.scrollTo(0, 0);
    }
}

// Return to selected book when clicking brand logo
function returnToSelectedBook() {
    const selectedBookIndex = elements.bookSelect.value;
    if (selectedBookIndex !== "") {
        displayBook(parseInt(selectedBookIndex));
    }
}

// Search Logic
function toggleSearch() {
    elements.searchOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll', elements.searchOverlay.classList.contains('active'));
    if (elements.searchOverlay.classList.contains('active')) {
        setTimeout(() => elements.searchInput.focus(), 100);
    } else {
        elements.searchInput.blur();
    }
}

function buildSearchIndex() {
    state.searchIndex = lunr(function () {
        this.ref('id');
        this.field('book');
        this.field('chapter');
        this.field('verse');
        this.field('text');
        
        state.bibleData.forEach((verse, index) => {
            this.add({
                id: index,
                book: getBookName(verse.book),
                chapter: verse.chapter,
                verse: verse.verse,
                text: verse.text
            });
        });
    });
}

function getBookName(bookCode) {
    const bookInfo = state.bookList.find(b => state.bookCodeMap[b.english] === bookCode);
    return bookInfo ? (state.currentLanguage === 'english' ? bookInfo.english : bookInfo.book) : bookCode;
}

function performSearch() {
    const query = elements.searchInput.value.trim();
    if (!query || query.length < 3) return;
    
    toggleSearch(); // Close modal
    showLoading();
    
    setTimeout(() => {
        // Simple regex routing for search types
        const verseRefMatch = query.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
        const chapterRefMatch = query.match(/^(.+?)\s+(\d+)$/);
        
        if (verseRefMatch) {
            searchByReference(verseRefMatch);
        } else if (chapterRefMatch) {
            searchByChapter(chapterRefMatch);
        } else {
            searchByText(query);
        }
    }, 100);
}

function searchByText(query) {
    const searchEntire = elements.searchEntireCheckbox.checked;
    const currentBookIndex = elements.bookSelect.value;
    
    let results = state.searchIndex.search(query).map(result => state.bibleData[result.ref]);
    
    // Fallback for non-English
    if (results.length === 0) {
        results = state.bibleData.filter(verse => verse.text.toLowerCase().includes(query.toLowerCase()));
    }
    
    if (!searchEntire && currentBookIndex !== "") {
        const bookCode = state.bookCodeMap[state.bookList[currentBookIndex].english];
        results = results.filter(verse => verse.book === bookCode);
    }
    
    displaySearchResults(results, query);
}

function searchByReference(match) {
    // match: [full, bookName, chapter, verseStart, verseEnd?]
    const bookName = match[1].trim();
    const chapter = match[2];
    const verseStart = parseInt(match[3], 10);
    const verseEnd = match[4] ? parseInt(match[4], 10) : verseStart;
    
    // Find book by name (supports both English and Chinese)
    const bookInfo = state.bookList.find(b => 
        b.english.toLowerCase() === bookName.toLowerCase() ||
        b.book === bookName ||
        b.english.toLowerCase().startsWith(bookName.toLowerCase()) ||
        b.book.startsWith(bookName)
    );
    
    if (!bookInfo) {
        // Fallback to text search if book not found
        searchByText(match[0]);
        return;
    }
    
    const bookCode = state.bookCodeMap[bookInfo.english];
    
    // Filter verses by book and chapter:verse range
    const results = state.bibleData.filter(verse => {
        if (verse.book !== bookCode) return false;
        const [vChapter, vVerse] = verse.verse.split(':');
        if (vChapter !== chapter) return false;
        const verseNum = parseInt(vVerse, 10);
        return verseNum >= verseStart && verseNum <= verseEnd;
    });
    
    displaySearchResults(results, match[0]);
}

function searchByChapter(match) {
    // match: [full, bookName, chapter]
    const bookName = match[1].trim();
    const chapter = match[2];
    
    // Find book by name (supports both English and Chinese)
    const bookInfo = state.bookList.find(b => 
        b.english.toLowerCase() === bookName.toLowerCase() ||
        b.book === bookName ||
        b.english.toLowerCase().startsWith(bookName.toLowerCase()) ||
        b.book.startsWith(bookName)
    );
    
    if (!bookInfo) {
        // Fallback to text search if book not found
        searchByText(match[0]);
        return;
    }
    
    const bookCode = state.bookCodeMap[bookInfo.english];
    
    // Filter all verses in the specified chapter
    const results = state.bibleData.filter(verse => {
        if (verse.book !== bookCode) return false;
        const vChapter = verse.verse.split(':')[0];
        return vChapter === chapter;
    });
    
    displaySearchResults(results, match[0]);
}

function highlightText(text, query) {
    // Escape HTML first to prevent XSS, then apply highlighting
    const safeText = escapeHtml(text);
    if (!query || query.length < 2) return safeText;
    const escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return safeText.replace(regex, '<span class="highlight">$1</span>');
}

function displaySearchResults(results, query) {
    const count = results.length;
    let html = `<h1 class="book-title">${t('searchTitle', query)}</h1>
                <p class="result-count">${t('resultsFound', count)}</p>`;
    
    if (count === 0) {
        html += `<p style="text-align: center; color: var(--text-light); padding: 2rem;">${state.currentLanguage === 'english' ? 'No results found. Try a different search term.' : '未找到结果，请尝试其他关键词。'}</p>`;
    }
    
    results.forEach(verse => {
        const bookName = getBookName(verse.book);
        const highlightedText = highlightText(verse.text, query);
        html += `<div class="verse search-result" onclick="jumpToVerse('${escapeHtml(verse.book)}', '${escapeHtml(verse.verse)}')" onkeydown="handleResultKeydown(event, '${escapeHtml(verse.book)}', '${escapeHtml(verse.verse)}')" role="button" tabindex="0">
            <div class="result-meta">
                <span class="result-book">${escapeHtml(bookName)}</span>
                <span class="result-verse">${escapeHtml(verse.verse)}</span>
            </div>
            <div class="result-text">${highlightedText}</div>
        </div>`;
    });
    
    elements.content.innerHTML = html;
    window.scrollTo(0, 0);
}

// Global scope for onclick handlers
window.updateVerseUrl = function(bookCode, verse) {
    // Look up the book name from the book code
    const bookInfo = state.bookList.find(b => state.bookCodeMap[b.english] === bookCode);
    
    const url = new URL(window.location);
    if (bookInfo) {
        url.searchParams.set('book', bookInfo.english.toLowerCase().replace(/\s+/g, '-'));
    }
    url.searchParams.set('verse', verse);
    url.searchParams.delete('search');
    history.pushState(null, '', url);
};

window.jumpToVerse = function(bookCode, verseRef) {
    // Find the book index from the book code
    const bookIndex = state.bookList.findIndex(b => state.bookCodeMap[b.english] === bookCode);
    
    if (bookIndex === -1) {
        console.error('Book not found:', bookCode);
        return;
    }
    
    // Update the book select dropdown
    elements.bookSelect.value = bookIndex;
    
    // Display the book (updateUrl = false since we'll set URL with verse, skipScrollToTop = true)
    displayBook(bookIndex, false, true);
    
    // Update URL with both book and verse
    const bookInfo = state.bookList[bookIndex];
    const url = new URL(window.location);
    url.searchParams.set('book', bookInfo.english.toLowerCase().replace(/\s+/g, '-'));
    url.searchParams.set('verse', verseRef);
    url.searchParams.delete('search');
    history.pushState(null, '', url);
    
    // Scroll to the specific verse after a short delay to allow rendering
    scrollToVerse(verseRef);
};

window.handleResultKeydown = function(event, bookCode, verseRef) {
    // Allow Enter or Space to trigger the jump
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        jumpToVerse(bookCode, verseRef);
    }
};
