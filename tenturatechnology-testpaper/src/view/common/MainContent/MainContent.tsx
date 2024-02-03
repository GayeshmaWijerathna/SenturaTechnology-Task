import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {UserManage} from "../pages/admin/ManageUser/UserManage";

export class MainContent extends Component
{
    render() {
            return (
                <div className="">

                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/userManage" Component={UserManage}></Route>
                    </Routes>
                </div>
            );
    }
}
