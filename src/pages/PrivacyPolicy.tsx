
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          This is a placeholder for the STURNUS Privacy Policy. Our full privacy policy will be published here soon.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
