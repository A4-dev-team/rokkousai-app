// "use client";

// import React, { useState, useEffect } from 'react';
// import View1 from './_components/View1';
// import View2 from './_components/View2';
// import View3 from './_components/View3';
// import View4 from './_components/View4';

// export default function Page() {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const totalPages = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentPage === 1) {
//         setCurrentPage(2);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//    }
//   );

//   const handleFormSubmit = () => {
//     setCurrentPage(3);
//   };

//   const handleView4Complete = () => {
//   };

//   const renderPage = () => {
//     if (currentPage === 0) {
//       return <View1 onNext={() => setCurrentPage(1)} />; // View1にonNextを渡す/>;
//     }
//     if (currentPage === 1) {
//       return <View2 />;
//     }
//     if (currentPage === 2) {
//       return <View3 onFormSubmit={handleFormSubmit} />; // onFormSubmitを渡す
//     }
//     if (currentPage === 3) {
//       return <View4 onComplete={handleView4Complete} />;
//     }
//     return <View1 onNext={() => setCurrentPage(1)} />; // View1にonNextを渡す/>;
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {renderPage()}
//     </div>
//   );
// }
import { View3 } from "./_components/View3";
import { View4 } from "./_components/View4";

export default function Page({ params }: { params: { slug: string } }) {
	if (params.slug === "view-3") {
		return <View3 />;
	}
	if (params.slug === "view-4") {
		return <View4 />;
	}

	return null;
}
