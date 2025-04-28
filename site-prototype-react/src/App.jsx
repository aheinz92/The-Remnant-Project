import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Removed unused BrowserRouter import

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Contribute from './pages/Contribute';
import Explore from './pages/Explore';
import Interviews from './pages/Interviews';
import Item from './pages/Item';
import People from './pages/People';
import Places from './pages/Places';
import SearchResults from './pages/SearchResults';
import Timelines from './pages/Timelines';
import ArtifactsApparel from './pages/ArtifactsApparel';

function App() {
    // Font Size Control
    const changeFontSize = (size) => {
        document.body.classList.remove('font-size-smallest', 'font-size-smaller', 'font-size-medium', 'font-size-larger', 'font-size-largest');
        document.body.classList.add(`font-size-${size}`);
        localStorage.setItem('preferredFontSize', size);
    };

    // Font Style Control
    const changeFont = (style) => {
        document.body.classList.remove('font-cozy', 'font-clear', 'font-mono');
        document.body.classList.add(`font-${style}`);
        localStorage.setItem('preferredFontStyle', style);
    };

    // Color Scheme Control
    const changeColorScheme = (scheme) => {
        document.body.classList.remove('contrast-theme', 'colorless-theme');
        if (scheme !== 'archive') {
            document.body.classList.add(`${scheme}-theme`);
        }
        localStorage.setItem('preferredColorScheme', scheme);
    };

    // Load saved preferences on app mount
    useEffect(() => {
        const savedFontSize = localStorage.getItem('preferredFontSize') || 'medium';
        const savedFontStyle = localStorage.getItem('preferredFontStyle') || 'clear';
        const savedColorScheme = localStorage.getItem('preferredColorScheme') || 'archive';

        changeFontSize(savedFontSize);
        changeFont(savedFontStyle);
        changeColorScheme(savedColorScheme);
    }, []);

    return (
        <Routes> {/* Removed comment that was causing JSX parent error */}
            <Route path="/" element={<Home changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/about" element={<About changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/collection" element={<Collection changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/contribute" element={<Contribute changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/explore" element={<Explore changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/interviews" element={<Interviews changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/item" element={<Item changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/people" element={<People changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/places" element={<Places changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/searchresults" element={<SearchResults changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            <Route path="/timelines" element={<Timelines changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
<Route path="/artifacts-apparel" element={<ArtifactsApparel changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />} />
            {/* Redirect all other routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;