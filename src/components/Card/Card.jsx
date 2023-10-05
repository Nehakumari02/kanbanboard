import React from 'react';

function KanbanCard({ cardData }) {
  // Render individual Kanban card content here
  return (
    <div className="kanban-card">
          <img style={{width : "2%", height : "2%",  borderRadius : "50%" }}  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="UserImage" />
      {/* Display card details, such as title, status, user, priority */}
    </div>
  );
}

export default KanbanCard;



