// import { useState, useEffect } from 'react';

// export default function MoveItems() {
//    const [xPos, setXPos] = useState(0);
//    const [yPos, setYPos] = useState(0);
   
//    useEffect(() => {
//       document.addEventListener('mousemove', handleMouseMove);
      
//       return () => {
//          document.removeEventListener('mousemove', handleMouseMove);
//       }
//    }, []);
   
//    const handleMouseMove = (e) => {
//       setXPos(e.clientX);
//       setYPos(e.clientY);
//    }
   
//    return (
//       <div className='bg-orange-500 h-60'>
//          <div className="item1" style={{ left: xPos + 'px', top: yPos + 'px' }}>1111</div>
//          <div className="item2" style={{ left: (xPos + 50) + 'px', top: (yPos + 50) + 'px' }}>111111111</div>
//       </div>
//    );
// }




// import { Interactive } from 'react-interactive';

// export default function MoveItems() {
//    return (
//       <div>
//          <Interactive
//          as="div"
//             className="item1"
//             style={{ position: 'absolute', top: '50px', left: '50px' }}
//             draggable
//             dragMove={(event, info) => {
//                event.target.style.left = info.point.x + 'px';
//                event.target.style.top = info.point.y + 'px';
//             }}
//          />
//          <Interactive
//          as="div"
//             className="item2 bg-orange-500 h-20 w-20"
//             draggable
//             dragMove={(event, info) => {
//                event.target.style.left = (info.point.x + 50) + 'px';
//                event.target.style.top = (info.point.y + 50) + 'px';
//             }}
//          />
//       </div>
//    );
// }
