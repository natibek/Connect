import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    const handleInstructions = () => {

    };

    
    return (

        <div className="flex_col_center p-5 border border-2 border-black rounded shadow-lg position-absolute top-50 start-50 translate-middle bg-white" style={{width: "30%", minWidth: 'fit-content'}}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>

            <br />

            <div className="fs-2 pb-4 pt-2">BoxIn</div>
            <button onClick={ () => { navigate("/play")  }} className="button w-50 py-2 my-1" style={{minWidth: "125px", height: "fit-content"}}> Against Friends </button>            
            <button onClick={ () => { navigate("/bot") }} className="button w-50 py-2 my-1" style={{minWidth: "125px", height: "fit-content"}}> Against Bot </button>           
            <button onClick={ () => { navigate("/multiplayer")} } className="button w-50 py-2 my-1" style={{minWidth: "125px", height: "fit-content"}}> Online Multiplayer </button>            
            <button onClick={ handleInstructions } className="button w-50 py-2 my-1" style={{minWidth: "125px",height: "fit-content"}}> Instructions </button>                       

        </div>
    );
}