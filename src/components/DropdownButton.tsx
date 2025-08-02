//
// import React, { useState } from "react";
//
// interface DropdownButtonProps {
//   options: string[];
//   onSelect: (option: string) => void;
//   selectedOption: string | null;
// }
//
// export function DropdownButton({ options, onSelect, selectedOption }: DropdownButtonProps) {
//   const [isOpen, setIsOpen] = useState(false);
//
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//
//   const handleOptionClick = (optionValue: string) => {
//     onSelect(optionValue);
//     setIsOpen(false);
//   };
//
//   return (
//     <div className="dropdown">
//       <button type="button" className="colours-button" onClick={toggleDropdown}>
//         {selectedOption ?? "Selecione uma cor"}
//       </button>
//
//       {isOpen && (
//         <div className="dropdown-buttons-colours">
//           <div className="dropdown-menu">
//             {options.map((option) => (
//               <button 
//                 className=" dropdown-option-button"
//                 key={option} 
//                 type="button"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
