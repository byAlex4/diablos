import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Navbar";
import Producto1 from "./Producto1";
import Carrito from "./Carrito";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navegacion />}>
                        <Route index element={<Producto1 />} />
                        <Route path="producto" element={<Producto1 />} />
                        <Route path="carrito" element={<Carrito />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
