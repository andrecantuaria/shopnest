import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const languages = [
    { id: 1, name: 'English', country: 'Canada', currency: 'CAD' },
    { id: 2, name: 'English', country: 'USA', currency: 'USD' },
    { id: 3, name: 'French', country: 'Canada', currency: 'CAD' },
    { id: 3, name: 'See all', country: '', currency: '' },
  
  ];

  const ToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const SelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={ToggleDropdown}>
        {selectedLanguage ? `${selectedLanguage.name} - ${selectedLanguage.country} (${selectedLanguage.currency})` : 'Change Your Region ▼'}
      </button>
      <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
        {languages.map((language) => (
          <li key={language.id}>
            <button onClick={() => SelectLanguage(language)}>
              {`${language.name} ${language.country} ${language.currency}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;