import React from 'react';

function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex justify-end p-2">
      <button
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="border px-3 py-1 rounded bg-desert-dark text-white"
      >
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
