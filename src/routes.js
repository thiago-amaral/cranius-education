import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Playlists from './pages/Playlists';
import Learn from './pages/Learn';
import ViewPlaylist from './pages/ViewPlaylist';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/sobre" exact component={About} />
                <Route path="/playlists" exact component={Playlists} />
                <Route path="/aprender" exact component={Learn} />
                <Route path="/playlist" exact component={ViewPlaylist} />
            </Switch>
        </BrowserRouter>
    );
}