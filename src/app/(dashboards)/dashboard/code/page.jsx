import CodeEditor from '@/components/Code/CodeEditor';
import React from 'react';

export const metadata = {
  title: 'Code | TeamCraft',
  description: 'Code editor for TeamCraft',
}

export default function Code() {
  return (
    <div>
      <CodeEditor />
    </div>
  );
}
