import React from 'react';

function RegulationsDocument({ Title, Link }) {
    const handleConsultation = () => {
        // Open the PDF in a new tab for consultation
        window.open("/documents/"+Link, '_blank');
    };

    const handleDownload = () => {
        // Trigger the download of the PDF
        const link = document.createElement('a');
        link.href = "/documents/"+Link;
        link.download = Title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='flex border-4 border-main-blue rounded-xl py-2 px-4 justify-between items-center w-4/5'>
            <p className='text-xl font-bold text-variant-blue1'>
                {Title}
            </p>
            <div className='flex gap-14'>
                <div className='flex gap-4 items-center cursor-pointer' onClick={handleConsultation}>
                    <p className='text-xl font-bold text-main-blue'>Consultation</p>
                    <img className='h-10' src="/images/bi_file-pdf.png" alt="Consult PDF" />
                </div>
                <div className='flex gap-4 items-center cursor-pointer' onClick={handleDownload}>
                    <p className='text-xl font-bold text-main-blue'>Télécharger</p>
                    <img className='h-10' src="/images/carbon_generate-pdf.png" alt="Download PDF" />
                </div>
            </div>
        </div>
    );
}

export default RegulationsDocument;
