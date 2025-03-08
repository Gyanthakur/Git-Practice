import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">About Git</h2>
      <p className="mb-4">
        Git is a distributed version control system used to track changes in
        source code during software development. It allows multiple developers
        to collaborate efficiently by managing changes and maintaining a history
        of modifications.
      </p>
      <h3 className="text-xl font-semibold mb-2">Why Use Git?</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Tracks changes in files and projects efficiently.</li>
        <li>Supports collaboration among multiple developers.</li>
        <li>Allows branching and merging for organized development.</li>
        <li>Provides a history of modifications for easy rollback.</li>
        <li>Works with remote repositories like GitHub, GitLab, and Bitbucket.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Key Features</h3>
      <ul className="list-disc pl-5">
        <li>Fast and lightweight.</li>
        <li>Distributed system (every developer has a full history of the project).</li>
        <li>Efficient branching and merging.</li>
        <li>Staging area for better commit management.</li>
        <li>Supports various workflows (centralized, feature branch, Gitflow, etc.).</li>
      </ul>
    </div>
  );
};

export default About;
