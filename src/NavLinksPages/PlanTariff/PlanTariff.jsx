// import React from 'react'
// import './plantarrif.scss'
// import PlanTarrifCard from './PlanTarrifCard'

// const PlanTariff = ({ title, description, imageUrl }) => {

//   const cardData = [
//     { 
//       title: "Card 1", 
//       description: "This is the first card.", 
//       imageUrl: "https://via.placeholder.com/150"
//     },
//     { 
//       title: "Card 2", 
//       description: "This is the second card.", 
//       imageUrl: "https://via.placeholder.com/150"
//     },
//     { 
//       title: "Card 3", 
//       description: "This is the third card.", 
//       imageUrl: "https://via.placeholder.com/150"
//     },
//     { 
//       title: "Card 4", 
//       description: "This is the fourth card.", 
//       imageUrl: "https://via.placeholder.com/150"
//     },
//     { 
//       title: "Card 5", 
//       description: "This is the fifth card.", 
//       imageUrl: "https://via.placeholder.com/150"
//     }
//   ];

//   return (
//     <div className='plan-tarrif-section '>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>
//       <PlanTarrifCard/>

//       <div className="card">
//       <img src={imageUrl} alt={title} className="card-image" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>


// {/* chatgpt sample */}
//     <div className="app">
//       <h1>My Cards</h1>
//       <div className="card-container">
//         {cardData.map((card, index) => (
//           <PlanTariff 
//             key={index}
//             title={card.title}
//             description={card.description}
//             imageUrl={card.imageUrl}
//           />
//         ))}
//       </div>
//     </div>


//     </div>
//   )
// }

// export default PlanTariff

import React from 'react'

const PlanTariff = () => {
  return (
    <div>PlanTariff</div>
  )
}

export default PlanTariff
