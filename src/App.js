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
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import ErrorPage from "./pages/errorPage/errorPage";
import NewId from "./pages/news/newID/newID";
import BookId from "./pages/home/bookID/bookID";



function App() {

    return (
        <AuthProvider>
            <Header />

            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/books/:id" element={<BookId/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/news/:id" element={<NewId/>}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='*' element={<ErrorPage />}/>
                    <Route path='/login' element={<Login />}/>
                    {/*<Route path="/profile" element={<Profile/>}/>*/}
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
