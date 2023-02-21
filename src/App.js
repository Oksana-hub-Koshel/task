import {Route, Routes} from "react-router-dom";

import Home from "./pages/home/home";
import News from "./pages/news/news";
import Profile from "./pages/profile/profile";
import {AuthProvider} from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import {Header} from "./components/header/header";
import Footer from "./components/footer/footer";
import Carousel from "./components/carousel/carousel";
import React from "react";



function App() {

    return (
        <AuthProvider>
            <Header />

            <div className="App">
                <Carousel />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/profile" element={
                        <RequireAuth>
                            <Profile/>
                        </RequireAuth>
                    }/>
                </Routes>
            </div>
            {/*<Footer />*/}
            </AuthProvider>


    );
}

export default App;
