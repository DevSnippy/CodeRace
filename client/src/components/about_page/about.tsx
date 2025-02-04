import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        I am the developer behind this website, which compares different
        programming languages. I created it out of my curiosity and interest in
        the various languages used in the industry.
      </p>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        My goal is to provide an objective analysis of each language's strengths
        and weaknesses, helping developers choose the right tool for their
        needs.
      </p>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        I strive to provide accurate and up-to-date information on programming
        languages, including syntax, features, performance, and popularity. I
        also welcome contributions from the community and encourage developers
        to share their experiences and opinions.
      </p>
      <p className="text-lg max-w-2xl leading-relaxed">
        Thank you for visiting my site, and I hope you find these comparisons
        helpful in your programming journey!
      </p>
    </div>
  );
};

export default AboutPage;
