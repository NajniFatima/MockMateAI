// import React, { useState } from "react";
// import "./Permissions.css";

// const Permissions = ({ setPage }) => {
//     const [selectedCompany, setSelectedCompany] = useState(null);
//     const [micAllowed, setMicAllowed] = useState(false);
//     const [camAllowed, setCamAllowed] = useState(false);

//     const handleProceed = () => {
//         if (selectedCompany && micAllowed && camAllowed) {
//             setPage("interview");
//         } else {
//             alert("Please select a company and allow microphone & camera access!");
//         }
//     };

//     return (
//         <div className="permissions-container">
//             <h2>Choose a Company</h2>
//             <div className="company-options">
//                 {["Google", "Amazon", "Microsoft", "Atlassian", "Accenture", "TCS", "Capgemini"].map((company) => (
//                     <label key={company}>
//                         <input type="radio" name="company" value={company} onChange={() => setSelectedCompany(company)} />
//                         {company}
//                     </label>
//                 ))}
//             </div>

//             <div className="permission-box">
//                 <p>Allow Your Microphone</p>
//                 <button onClick={() => setMicAllowed(true)} className="allow">Allow</button>
//                 <button onClick={() => setMicAllowed(false)} className="block">Block</button>
//             </div>

//             <div className="permission-box">
//                 <p>Allow Camera Access</p>
//                 <button onClick={() => setCamAllowed(true)} className="allow">Allow</button>
//                 <button onClick={() => setCamAllowed(false)} className="block">Block</button>
//             </div>

//             <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
//         </div>
//     );
// };

// export default Permissions;

import React, { useState } from "react";
import "./Permissions.css";

const Permissions = ({ setPage }) => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [micAllowed, setMicAllowed] = useState(false);
    const [camAllowed, setCamAllowed] = useState(false);

    const handleProceed = () => {
        if (selectedCompany && micAllowed && camAllowed) {
            setPage("interview"); // Navigate to Interview Panel
        } else {
            alert("Please select a company and allow microphone & camera access!");
        }
    };

    return (
        <div className="permissions-container">
            {/* Company Selection */}
            <div className="company-selection">
                <h3>Choose Company</h3>
                <div className="radio-group">
                    {["Google", "Amazon", "Microsoft", "Atlassian", "Accenture", "TCS", "Capgemini"].map((company) => (
                        <label key={company}>
                            <input
                                type="radio"
                                name="company"
                                value={company}
                                onChange={() => setSelectedCompany(company)}
                            />
                            {company}
                        </label>
                    ))}
                </div>
            </div>

            {/* Microphone Permission */}
            <div className="permissions-section">
                <div className="permission-box">
                    <h4>Allow Your Microphone to Start the Interview</h4>
                    <button onClick={() => setMicAllowed(true)} className="allow">Allow</button>
                    <button onClick={() => setMicAllowed(false)} className="block">Block</button>
                </div>

                {/* Camera Permission */}
                <div className="permission-box">
                    <h4>Allow Camera Access for Better Experience</h4>
                    <button onClick={() => setCamAllowed(true)} className="allow">Allow</button>
                    <button onClick={() => setCamAllowed(false)} className="block">Block</button>
                </div>

                {/* Proceed Button */}
                <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
            </div>
        </div>
    );
};

export default Permissions;
