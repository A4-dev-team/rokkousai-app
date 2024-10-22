"use client";

import React, { useState, useEffect } from 'react';
import Scene1 from './_components/Scene1';
import Scene2 from './_components/Scene2';
import Scene3 from './_components/Scene3';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prevPage => {
        if (prevPage + 1 < totalPages) {
          return prevPage + 1;
        } else {
          clearInterval(interval);
          return prevPage;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    if (currentPage === 0) {
      return <Scene1 />;
    } else if (currentPage === 1) {
      return <Scene2 />;
    } else if (currentPage === 2) {
      return <Scene3 />;
    } else {
      return <Scene1 />;
    }
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}