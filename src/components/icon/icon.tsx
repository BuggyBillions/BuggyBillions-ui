"use client"; 

import React, { useEffect, useState } from 'react';

type IconProps = {
  name: string;
  type?: 'solid' | 'outline';
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, type = 'outline', className = '' }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(`/svg/${type}/${name}.svg`);
        if (!response.ok) {
          throw new Error('SVG not found');
        }
        let svgText = await response.text();

        // Remove `fill` and `stroke` from the SVG content, so it can be styled using CSS
        svgText = svgText
          .replace(/fill="[^"]*"/g, '') // Remove any fill attributes
          .replace(/stroke="[^"]*"/g, ''); // Remove any stroke attributes

        setSvgContent(svgText);
      } catch (error) {
        console.error(error);
        setSvgContent(null);
      }
    };

    fetchSvg();
  }, [name, type]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }} 
    />
  );
};

export default Icon;
