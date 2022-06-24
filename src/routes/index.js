import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Books from '../pages/Books';
import Acesso from '../pages/Acesso';


const Drawer = createDrawerNavigator();

function Routes(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={Home} />
            <Drawer.Screen name = "Books" component={Books} />
            <Drawer.Screen name = "Acesso" component={Acesso} />


        </Drawer.Navigator>

    )

}

export default Routes;