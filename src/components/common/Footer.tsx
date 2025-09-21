import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-background py-6">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {currentYear} Steffin Thomas. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
