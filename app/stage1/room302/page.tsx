"use client";

import React, { useState, useEffect } from 'react';
import View1 from './_components/View1';
import View2 from './_components/View2';
import View3 from './_components/View3';
import View4 from './_components/View4';

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState<boolean>(false);
  const totalPages = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoSwitching || currentPage < 2) { // View1からView3までは自動遷移
        setCurrentPage(prevPage => (prevPage + 1) % totalPages);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoSwitching, currentPage]);

  const handleFormSubmit = () => {
    setCurrentPage(3);
    setIsAutoSwitching(false); // 手動遷移なので自動を停止
  };

  const handleView4Complete = () => {
    setIsAutoSwitching(true);
  };

  const renderPage = () => {
    if (currentPage === 0) {
      return <View1 />;
    }
    if (currentPage === 1) {
      return <View2 />;
    }
    if (currentPage === 2) {
      return <View3 onFormSubmit={handleFormSubmit} />; // onFormSubmitを渡す
    }
    if (currentPage === 3) {
      return <View4 onComplete={handleView4Complete} />;
    }
    return <View1 />;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}




// "use client";

// import React, { useState, useEffect } from 'react';
// import View1 from './_components/View1';
// import View2 from './_components/View2';
// import View3 from './_components/View3';
// import View4 from './_components/View4';

// export default function Page() {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [isAutoSwitching, setIsAutoSwitching] = useState<boolean>(false);
//   const totalPages = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isAutoSwitching && currentPage < totalPages - 1) {
//         setCurrentPage(prevPage => prevPage + 1);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoSwitching, currentPage]);

//   const handleFormSubmit = () => {
//     setCurrentPage(3);
//     setIsAutoSwitching(false); // 手動遷移なので自動を停止
//   };

//   const handleView4Complete = () => {
//     setIsAutoSwitching(true);
//   };

//   const renderPage = () => {
//     if (currentPage === 0) {
//       return <View1 />;
//     }
//     if (currentPage === 1) {
//       return <View2 />;
//     }
//     if (currentPage === 2) {
//       return <View3 onFormSubmit={handleFormSubmit} />;
//     }
//     if (currentPage === 3) {
//       return <View4 onComplete={handleView4Complete} />;
//     }
//     return <View1 />;
//   };

//   useEffect(() => {
//     if (currentPage === 3) {
//       setIsAutoSwitching(false); // View4に到達したら自動遷移を停止
//     }
//   }, [currentPage]);

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {renderPage()}
//     </div>
//   );
// }
