import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="p-4 text-center xl:pb-64">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-2">We are a website that compares different programming languages. Our site was born out of curiosity and interest in the various programming languages used in the industry.</p>
      <p className="text-lg mb-2">Our goal is to provide an objective analysis of the strengths and weaknesses of each programming language, and help developers choose the best language for their needs.</p>
      <p className="text-lg mb-2">We strive to provide accurate and up-to-date information on programming languages, including their syntax, features, performance, and popularity. We also welcome contributions from the community, and encourage developers to share their experiences and opinions on different languages.</p>
      <p className="text-lg mb-2">Thank you for visiting our site, and we hope you find our comparisons helpful in your programming journey!</p>
    </div>
  );
};

export default AboutPage;
