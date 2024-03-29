import {Link} from "react-router-dom";
import {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="flex  bg-green-600">
                        <h1 className="font-bold text-center text-blue-950  text-4xl pt-2 pb-2">Sentura Technologies</h1>


                    <ul className="pl-64 list-none space-x-6 pr-16 pt-5 text-2xl">
                        <li className="inline-block mr-1 text-[13] hover:border-b text-white  hover:text-orange-600">
                            <Link to="/">Home</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/userManage">ManageUser</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/about">About</Link></li>
                        <li className="inline-block mr-2 text-[13] hover:border-b text-white hover:text-orange-600">
                            <Link to="/contact">Contact</Link></li>

                    </ul>
                    <Link to="/user">
                        <button
                            className="text-[20px] ml-16 mt-3 mr-3 text-white hover:text-black bg-orange-600 pl-3 pr-3 hover:bg-yellow-400 rounded-full">Sign
                            in
                        </button>
                    </Link>
                </div>
                </div>
            </>
        );
    }
}
