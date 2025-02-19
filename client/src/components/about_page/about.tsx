import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Hey, I'm Aviram!</h1>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        Welcome to my site! I built this because I love diving into different
        programming languages and figuring out what makes each one unique.
        Whether you're a beginner or an experienced developer, I hope you find
        the comparisons here helpful.
      </p>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        My goal is simple: to break down the strengths and weaknesses of
        different languages in a clear and unbiased way. There's no "best"
        language—just the right tool for the job.
      </p>
      <p className="text-lg max-w-2xl mb-4 leading-relaxed">
        I'm always updating the info here to keep it relevant, and I’d love to
        hear from you! If you have insights, suggestions, or just want to chat
        about coding, feel free to reach out.
      </p>
      <p className="text-lg max-w-2xl leading-relaxed">
        Thanks for stopping by—I hope this site helps you on your programming
        journey!
      </p>
    </div>
  );
};

export default AboutPage;
