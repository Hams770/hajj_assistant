import React, { useState } from 'react';
import ChatAssistant from './ChatAssistant.jsx';
import GuidePanel from './GuidePanel.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'ar'

  return (
    <div className={lang === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <ChatAssistant lang={lang} />
        <GuidePanel lang={lang} />
      </div>
    </div>
  );
}

export default App;
