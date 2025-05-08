import React, { useState, useEffect, useRef } from 'react';

const AccessibilityPanel = ({ changeFontSize, changeFont, changeColorScheme }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleAccessibilityPanel = () => {
        setIsPanelOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // If panel is open and click is outside panel and outside toggle button
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsPanelOpen(false);
            }
        };

        if (isPanelOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPanelOpen]);

    return (
        <>
            <div className="accessibility-toggle" onClick={toggleAccessibilityPanel} ref={toggleRef}>
                Change Site Appearance
            </div>

            <div className={`accessibility-panel ${isPanelOpen ? 'open' : ''}`} id="accessibilityPanel" ref={panelRef}>
                <div className="accessibility-section">
                    <label>Text Size:</label>
                    <div className="buttons-row">
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-smallest"
                            onClick={() => changeFontSize('smallest')}
                            data-size="smallest"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-smaller"
                            onClick={() => changeFontSize('smaller')}
                            data-size="smaller"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-medium"
                            onClick={() => changeFontSize('medium')}
                            data-size="medium"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-larger"
                            onClick={() => changeFontSize('larger')}
                            data-size="larger"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-largest"
                            onClick={() => changeFontSize('largest')}
                            data-size="largest"
                        >
                            A
                        </button>
                    </div>
                </div>

                <div className="accessibility-section">
                    <label>Font Style:</label>
                    <div className="buttons-row">
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-cozy"
                            onClick={() => changeFont('cozy')}
                            data-font="cozy"
                        >
                            Cozy
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-clear"
                            onClick={() => changeFont('clear')}
                            data-font="clear"
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-mono"
                            onClick={() => changeFont('mono')}
                            data-font="mono"
                        >
                            Mono
                        </button>
                    </div>
                </div>

                <div className="accessibility-section">
                    <label>Color Scheme:</label>
                    <div className="buttons-row">
                        <button
                            className="btn btn-sm btn-outline-secondary btn-color-scheme btn-color-scheme-legacy"
                            onClick={() => changeColorScheme('legacy')}
                            data-scheme="legacy"
                        >
                            Legacy
                        </button>
<button
                            className="btn btn-sm btn-outline-secondary btn-color-scheme btn-color-scheme-afrofuturism"
                            onClick={() => changeColorScheme('afrofuturism')}
                            data-scheme="afrofuturism"
                        >
                            Afrofuturism
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-color-scheme btn-color-scheme-archive"
                            onClick={() => changeColorScheme('archive')}
                            data-scheme="archive"
                        >
                            Archive
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-color-scheme btn-color-scheme-contrast"
                            onClick={() => changeColorScheme('contrast')}
                            data-scheme="contrast"
                        >
                            Contrast
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-color-scheme btn-color-scheme-colorless"
                            onClick={() => changeColorScheme('colorless')}
                            data-scheme="colorless"
                        >
                            Colorless
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccessibilityPanel;