import React from "react";
import Preloader from '../components/common/preloader/preloader';


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>loading...</div>} >
            <Component {...props} />
        </React.Suspense>
    };
}