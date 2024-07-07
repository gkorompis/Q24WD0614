import { useContext } from 'react';
import globalStates from '../../utils/global';
import './AboutScreen2.css';

const AboutScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div className={`${windowWidthClass}-about-screen2`}>
            <div className='wrapper'>
                <div className='background'>

                </div>
                <div className='shield'>

                </div>
                <div className='content'>

                </div>
            </div>
        </div>
    )
};

export default AboutScreen2;