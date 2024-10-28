"use client";

import React, { useState, useEffect } from 'react';
import View1 from './_components/View1';
import View2 from './_components/View2';
import View3 from './_components/View3';

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState<boolean>(false);
  const totalPages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      isAutoSwitching && setCurrentPage(prevPage => 
        prevPage < totalPages - 1 ? prevPage + 1 : prevPage
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

  const handleFormSubmit = () => {
    setCurrentPage(1);
  };

  const handleView2Complete = () => {
    setIsAutoSwitching(true);
  };

  const renderPage = () => {
    if (currentPage === 0) {
      return <View1 onFormSubmit={handleFormSubmit} />;
    }
    if (currentPage === 1) {
      return <View2 onComplete={handleView2Complete} />;
    }
    if (currentPage === 2) {
      return <View3 />;
    }
    return <View1 onFormSubmit={handleFormSubmit} />;
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}