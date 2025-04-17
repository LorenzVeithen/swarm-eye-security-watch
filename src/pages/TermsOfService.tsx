
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">
          This is a placeholder for the STURNUS Terms of Service. Our full terms will be published here soon.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
