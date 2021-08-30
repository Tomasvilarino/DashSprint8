import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Listado';
import { Switch, Route } from 'react-router-dom';

function ContentRowTop(){
    return(
        <React.Fragment>
			
			<br></br>
			<br></br>
			<br></br>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Admin Dashboard- Drinking Time</h1>
					</div>

					{/*<!-- Switch-->*/}
					<Switch>

						<Route path="/metrics" component={ContentRowMovies} />
						<Route path="/categories" component={ContentRowCenter} />
						<Route path="/table" component={Chart} />
						
					</Switch>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;