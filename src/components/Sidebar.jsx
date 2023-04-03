import React, {useState} from "react";
// Icons
import {RiHome3Line, 
    RiFileCopyLine, 
    RiWalletLine, 
    RiPieChartLine,
    RiMore2Fill,
    RiCloseFill} from "react-icons/ri";
const Sidebar =() =>{
    const [showMenu, setShowMenu] = useState(false);

    return(
        <>
        <div className={`bg-primary-950 h-full fixed xl:static w-[90%] md:w-[40%] lg:w-full transition-all z-50 duration-300 rounded-r-3xl
                ${showMenu ? "left-0" : "-left-full"
            }`}
         >
            {/* Profile */}
            <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
                <img 
                src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" 
                className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-500"
                />
                <h1 className="text-xl text-white font-bold">Shirley Subia</h1>
                <p className="bg-blue-700 py-1 px-3 rounded-full text-white">
                    Pro Level
                </p>
            </div>
            {/* Nav */}
            <div className="bg-blue-900 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col
            justify-between gap-8 ">
                <nav className="flex flex-col gap-8">
                    <a href="#" 
                    className="flex items-center gap-4 text-white py-4 px-1 rounded-xl hover:bg-blue-800/50
                    transition-colors" >
                        <RiHome3Line/> Home
                    </a>
                    <a href="#" 
                    className="flex items-center gap-4 text-white py-4 px-1 rounded-xl hover:bg-blue-800/50
                    transition-colors" >
                        <RiFileCopyLine/> Proyectos
                    </a>
                    <a href="#" 
                    className="flex items-center gap-4 text-white py-4 px-1 rounded-xl hover:bg-blue-800/50
                    transition-colors" >
                        <RiWalletLine/> Clientes
                    </a>
                    <a href="#" 
                    className="flex items-center gap-4 text-white py-4 px-1 rounded-xl hover:bg-blue-800/50
                    transition-colors" >
                        <RiPieChartLine/> Reportes
                    </a>
                </nav>
                <div className="bg-blue-950/50 rounded-xl text-white p-4">
                    <p>¿Estas Teniendo Problemas?</p>
                    <a href="#" className="font-bold">Contactanos</a>
                </div>
            </div>
            
        </div>
        {/* Button Mobile */}
        <button onClick={() => setShowMenu(!showMenu)} 
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-blue-950 p-2.5 rounded-full text-white z-50">
            {showMenu ? <RiCloseFill/> : <RiMore2Fill/>}
        </button>
        </>  
    ) 
};

export default Sidebar;