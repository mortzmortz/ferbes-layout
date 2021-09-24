import * as React from 'react';

export interface FocusVisibleProps {
  children: React.ReactNode;
}

const hideFocusRingsDataAttribute = 'data-hidefocusrings';

const FocusVisible = ({ children }: FocusVisibleProps) => {
  const [focusVisible, setFocusVisible] = React.useState(false);

  React.useEffect(() => {
    const eventName = focusVisible ? 'keydown' : 'mousemove';
    const toggleFocusRings = () => {
      setFocusVisible(f => !f);
    };

    window.addEventListener(eventName, toggleFocusRings);

    return () => {
      window.removeEventListener(eventName, toggleFocusRings);
    };
  }, [focusVisible]);

  return (
    <div {...(focusVisible ? { [hideFocusRingsDataAttribute]: true } : {})}>
      {children}
    </div>
  );
};

const FocusVisibleProvider = ({ children }) => (
  <FocusVisible>{children}</FocusVisible>
);

export { hideFocusRingsDataAttribute };
export default FocusVisibleProvider;
