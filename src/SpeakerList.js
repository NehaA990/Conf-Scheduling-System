import React from 'react';

function SpeakerList() {
  return (
    <div className="speaker-list">
      <h2>Speaker List</h2>
      <ul>
        <li>
          <span>Speaker 1</span>
          <button>View Bio</button>
        </li>
        <li>
          <span>Speaker 2</span>
          <button>View Bio</button>
        </li>
        <li>
          <span>Speaker 3</span>
          <button>View Bio</button>
        </li>
      </ul>
    </div>
  );
}

export default SpeakerList;