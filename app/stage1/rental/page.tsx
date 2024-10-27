"use client";

import React, { useState, useEffect } from 'react';
import View1 from './_components/View1';
import View2 from './_components/View2';
import View3 from './_components/View3';

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prevPage => {
        if (prevPage + 1 < totalPages) {
          return prevPage + 1;
        } else {
          return prevPage;
        }
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    if (currentPage === 0) {
      return <View1 />;
    }
    if (currentPage === 1) {
      return <View2 />;
    }
    if (currentPage === 2) {
      return <View3 />;
    }
    return <View1 />;
  };
  
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}