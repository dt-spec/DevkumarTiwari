import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import statements from '../data/statements.json';

export function TypingAnimation() {
  return (
    <div className="text-2xl font-medium text-center min-h-[2em]">
      <Typewriter
        options={{
          strings: statements.statements,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          cursor: '|',
        }}
      />
    </div>
  );
} 