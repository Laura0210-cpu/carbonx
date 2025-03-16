import React from 'react';

function DownloadButton() {
  const handleDownload = () => {
    // Directly open the file path from public/
    const link = document.createElement('a');
    link.href = '/rapport_trading_carbone_seller.xlsx'; 
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button onClick={handleDownload}>
      Download Report
    </button>
  );
};

export default DownloadButton;
