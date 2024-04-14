import React, { useState } from 'react';

function Multiselect({ options }) {
  const [selections, setSelections] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const index = selections.indexOf(option);
    if (index < 0) {
      if (selections.length < 3) {
        setSelections([...selections, option]);
      } else {
        alert('You can only select 3 items');
      }
    } else {
      setSelections(selections.filter((_, i) => i !== index));
    }
  };

  return (
    <div className={`multiselect ${isOpen ? 'active' : ''}`}>
      <div className="title" onClick={toggleOpen}>
        {selections.length > 0 ? selections.join(', ') : 'Select 3 Items'}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Multiselect;