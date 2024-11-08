import React, { useCallback } from 'react';
import ContentEditable from '../components/Base/ContentEditable';

function Diagram() {
  const handleContentChange = useCallback((newValue) => {
    console.log('Content changed:', newValue);
  }, []);

  const handleContentBlur = useCallback(() => {
    console.log('Content blurred');
  }, []);

  const handleContentResize = useCallback((size) => {
    console.log('Content resized:', size);
  }, []);

  return (
    <div className="h-screen p-12 bg-yellow-100 font-sans tracking-wider">
      <div className="flex items-center justify-center h-full">
        <div className="p-6 font-bold bg-white text-lg rounded-2xl min-w-[280px] max-w-[640px] shadow-xl">
          <ContentEditable
            value=""
            onChange={handleContentChange}
            onBlur={handleContentBlur}
            onResize={handleContentResize}
          />
        </div>
      </div>
      {/* TODO: Consider using a responsive hook or custom hook to handle element size changes, e.g., https://hackernoon.com/react-hook-to-measure-an-elements-size-and-handle-responsive-components-ge3l3vj9 */}
    </div>
  );
}

export default Diagram;
