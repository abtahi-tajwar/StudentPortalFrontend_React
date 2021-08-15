import React from 'react';
import { Route } from 'react-router';
import AdminPanel from './pages/Admin/AdminPanel';
const AdminProtectedRoute = () => {
    console.log('Admin Route')
    return (        
        <React.Fragment>
            <Route path="/admin">
                <AdminPanel />
            </Route>
        </React.Fragment>
    );
}

export default AdminProtectedRoute;
