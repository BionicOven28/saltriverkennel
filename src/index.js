import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import HomePage from './pages/home-page/HomePage';
import Info from './pages/info/Info';
import BlogsAndPosts from './pages/blogs-and-posts/BlogsAndPosts';
import Brags from './pages/brags/Brags';

import Kennel from './pages/kennel/Kennel';
import Females from './pages/females-page/Females';
import Males from './pages/males-page/Males';
import LittersHub from './pages/litters/litters-hub/LittersHub';
import PlannedLitters from './pages/litters/planned-litters/PlannedLitters';
import CurrentLitters from './pages/litters/current-litters/CurrentLitters';
import PastLitters from './pages/litters/past-litters/PastLitters';

import Training from './pages/training/Training';
import StartedDogs from './pages/started-dogs/StartedDogs';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<HomePage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="info" element={<Info />} />
                <Route path="blogs-and-posts" element={<BlogsAndPosts />} />
                <Route path="brags" element={<Brags />} />

                <Route path="kennel" element={<Kennel />} />
                <Route path="females" element={<Females />} />
                <Route path="males" element={<Males />} />
                <Route path="litters" element={<LittersHub />} />
                <Route path="planned-litters" element={<PlannedLitters />} />
                <Route path="current-litters" element={<CurrentLitters />} />
                <Route path="past-litters" element={<PastLitters />} />

                <Route path="training-program" element={<Training />} />
                <Route path="started-dogs" element={<StartedDogs />} />

                <Route 
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>, 
    rootElement
);