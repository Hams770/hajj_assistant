import React from 'react';
import guideIcon from '../public/icons/guide.svg';

function GuidePanel({ lang }) {
  return (
    <div className="w-64 border p-4 rounded-lg bg-desert-accent text-white">
      <h2 className="flex items-center gap-2 mb-4">
        <img src={guideIcon} className="w-6 h-6" />
        {lang === 'ar' ? 'دليل المستخدم' : 'User Guide'}
      </h2>
      <ul className="list-disc list-inside">
        <li>{lang === 'ar' ? 'ابدأ بمراسلة المساعد' : 'Start by messaging the assistant'}</li>
        <li>{lang === 'ar' ? 'اختر اللغة' : 'Choose your language'}</li>
        <li>{lang === 'ar' ? 'اتبع التعليمات خطوة بخطوة' : 'Follow step-by-step instructions'}</li>
      </ul>
    </div>
  );
}

export default GuidePanel;
