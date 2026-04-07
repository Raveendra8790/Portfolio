import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  wait?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, wait = 3000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), wait);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, wait]);

  return (
    <span className="text-purple-600 font-semibold">{text}</span>
  );
};

export default Typewriter;