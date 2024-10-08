import React from 'react';
import { Heart, Book, Lightbulb } from 'lucide-react';

const Interests = () => (
  <section id="interests" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Interests & Goals</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Heart className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Hobbies</h3>
        <ul className="list-disc list-inside">
          <li>Playing Chinese chess</li>
          <li>Playing basketball and soccer</li>
          <li>Reading sci-fi novels</li>
          <li>Design or draw something fun</li>
        </ul>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Lightbulb className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Skills to Acquire</h3>
        <ul className="list-disc list-inside">
          <li>Public speaking</li>
          <li>Graphic design</li>
          <li>Social media posting and management</li>
          <li>Investment</li>
        </ul>
      </div>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Book className="mb-4" />
        <h3 className="text-xl font-bold mb-2">Favorite Books</h3>
        <ul className="list-disc list-inside">
          <li>"Atomic Habits" by James Clear</li>
          <li>"Dune" by Frank Herbert</li>
          <li>"Flowers for Algernon" by Daniel Keyes</li>
          <li>"Lord of Rings" by J.R.R Tolkien</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Interests;