// app/layout.js or app/layout.tsx
export const metadata = {
    title: 'My App',
    description: 'A Next.js App',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  