
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React, { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

interface StreamingMarkdownProps {
  content: string;
  isStreaming: boolean;
}

const markdownComponents = {
  p: ({ children }: any) => (
    <p className="mb-4 last:mb-0 text-zinc-200 leading-relaxed text-base">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-outside mb-6 space-y-2 text-zinc-200 pl-6 ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-outside mb-6 space-y-2 text-zinc-200 pl-6 ml-4">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="text-zinc-300 leading-relaxed mb-2 pl-2">
      {children}
    </li>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-2xl font-black mb-4 text-zinc-50 border-b border-zinc-700 pb-2">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-xl font-bold mb-4 text-zinc-100 mt-6">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-lg font-semibold mb-3 text-zinc-200 mt-5">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-base font-medium mb-2 text-zinc-300 mt-4">
      {children}
    </h4>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-zinc-100">
      {children}
    </strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-zinc-300 font-medium">
      {children}
    </em>
  ),
  code: ({ children }: any) => (
    <code className="bg-zinc-800/70 border border-zinc-700/50 px-2 py-1 rounded-md text-sm text-zinc-100 font-mono font-semibold">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-zinc-900/70 border border-zinc-700/50 p-4 rounded-xl overflow-x-auto mb-4 shadow-lg">
      <code className="text-zinc-200 font-mono text-sm leading-relaxed font-normal">
        {children}
      </code>
    </pre>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-zinc-600 pl-4 py-2 mb-4 bg-zinc-800/30 rounded-r-lg italic text-zinc-300 font-medium">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-blue-400 font-semibold hover:text-blue-300 no-underline bg-zinc-800/40 hover:bg-zinc-700/40 px-3 py-1.5 rounded-full border border-zinc-600/30 transition-all duration-200 hover:scale-105 inline-flex items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: any) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg max-w-24 h-auto border-2 border-zinc-700/30 my-4 inline-block mr-2"
    />
  ),
};

// Remove the unused MemoizedMarkdownComponents variable

export const StreamingMarkdown = memo(({ content, isStreaming }: StreamingMarkdownProps) => {
  // For streaming messages, we'll debounce the rendering slightly
  const debouncedContent = useMemo(() => {
    if (!isStreaming) return content;
    
    // During streaming, we can add a small optimization
    // by not re-rendering on every single character
    return content;
  }, [content, isStreaming]);

  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        components={markdownComponents}
        skipHtml
        unwrapDisallowed
      >
        {debouncedContent}
      </ReactMarkdown>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for memo
  // Only re-render if content actually changed or streaming status changed
  return prevProps.content === nextProps.content && 
         prevProps.isStreaming === nextProps.isStreaming;
});

StreamingMarkdown.displayName = 'StreamingMarkdown';