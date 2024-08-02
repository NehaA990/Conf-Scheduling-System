import React from 'react';

function Schedule() {
  return (
    <div>
      <h2>Conference Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>Keynote</td>
          </tr>
          <tr>
            <td>10:30 AM</td>
            <td>Breakout Session 1</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Lunch Break</td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>Breakout Session 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;