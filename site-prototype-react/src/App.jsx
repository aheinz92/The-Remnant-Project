import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'; // Import Outlet

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
// import Timelines from './pages/Timelines'; // Removed Timelines import
import ArtifactsApparel from './pages/ArtifactsApparel';
import Exhibits from './pages/Exhibits'; // Import the Exhibits page
import NotionEmbedPage from './pages/NotionEmbedPage'; // Import the new page
import Layout from './components/Layout'; // Import the Layout component

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
        // Remove all existing theme classes
        document.body.classList.remove('archive-theme', 'contrast-theme', 'colorless-theme');
        // Add the new theme class if it's not the default (legacy)
        if (scheme !== 'legacy') {
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
        <Routes>
            {/* Parent route using the Layout component */}
            <Route path="/" element={<Layout changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />}>
                {/* Child routes rendered within the Layout's Outlet */}
                <Route index element={<Home />} /> {/* Use index for the default route */}
                <Route path="about" element={<About />} />
                <Route path="collection" element={<Collection />} />
                <Route path="contribute" element={<Contribute />} />
                <Route path="explore" element={<Explore />} />
                <Route path="interviews" element={<Interviews />} />
                <Route path="item" element={<Item />} /> {/* Consider if item needs an ID param: path="item/:itemId" */}
                <Route path="people" element={<People />} />
                <Route path="places" element={<Places />} />
                <Route path="searchresults" element={<SearchResults />} />
                {/* <Route path="timelines" element={<Timelines />} /> */} {/* Removed Timelines route */}
                <Route path="artifacts-apparel" element={<ArtifactsApparel />} />
                <Route path="exhibits" element={<Exhibits />} />
                <Route path="notion-embed" element={<NotionEmbedPage />} />
                {/* Redirect unmatched child routes relative to the layout */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;