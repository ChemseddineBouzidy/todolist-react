
import React, { useContext } from 'react';
import { AppContext } from '../Contect APi/Cards';

const Card = ({ title, description, imageUrl }) => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <>

        <div
          className={`rounded-2xl shadow-md overflow-hidden max-w-sm transition duration-300
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
          {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
        </div>

    </>
  );
};

export default Card;
// import React from 'react';
// import { AppContext } from '../Contect APi/Cards';

// const Card = ({ title, description, imageUrl }) => {
//   return (
//     <AppContext.Consumer>
//       {({ isDarkMode }) => (
//         <div
//           className={`rounded-2xl shadow-md overflow-hidden max-w-sm transition duration-300
//           ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
//         >
//           {imageUrl && (
//             <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//           )}
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-2">{title}</h2>
//             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               {description}
//             </p>
//           </div>
//         </div>
//       )}
//     </AppContext.Consumer>
//   );
// };

// export default Card;
