import { useEffect, useRef, useState } from 'react';

function useScrollableList() {
  const mainDevRef = useRef([]);
  const childDivRef = useRef([]);
  const RightRef = useRef(null);
  const LeftRef = useRef(null);
  const dragging = useRef(false);
  const prevX = useRef(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const element = mainDevRef.current;
    const childDiv = childDivRef.current;
    const firstdiv = childDiv.offsetWidth;
    const Right = RightRef.current;
    const Left = LeftRef.current;

    // Check if the container is scrollable
    if (element && element.scrollWidth > element.clientWidth) {
      setIsScrollable(true);
    }

    const startDragging = (e) => {
      dragging.current = true;
      prevX.current = e.clientX;
    };

    const stopDragging = () => {
      dragging.current = false;
    };

    const Dragging = (e) => {
      if (dragging.current) {
        element.scrollLeft -= e.clientX - prevX.current;
        prevX.current = e.clientX;
      }
    };

    element.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    element.addEventListener('mousemove', Dragging);
    if (element && Right && Left) {
     {/** element.addEventListener('wheel', (e) => {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      }); */}

      Right.addEventListener('click', () => {
        if (isScrollable) {
          element.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
          element.scrollLeft += firstdiv;
          if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {
            element.scrollLeft = 0;
          }
          element.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
        }
      });

      Left.addEventListener('click', () => {
        if (isScrollable) {
          element.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
          element.scrollLeft -= firstdiv;
          if (element.scrollLeft <= 0) {
            element.scrollLeft = element.scrollWidth - element.clientWidth;
          }
          element.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
        }
      });
    }

    return () => {
      element.removeEventListener('mousedown', startDragging);
      document.removeEventListener('mouseup', stopDragging);
      element.removeEventListener('mousemove', Dragging);

      {/**if (element) {
        element.removeEventListener('wheel', (e) => {
          e.preventDefault();
          element.scrollLeft += e.deltaY;
          
        });
      } */}
    };
  }, [isScrollable]);

  return {
    mainDevRef,
    childDivRef,
    RightRef,
    LeftRef,
    isScrollable,
  };
}

export default useScrollableList;