import React, {Component} from "react";


export class UserManage extends Component {
    render() {
        return (
            <>
                <h1 className="text-4xl text-blue-950 flex justify-center mt-20">Manage User Data</h1>
                <div className={"flex flex-wrap justify-center items-center"}>
                    <div className="bg-zinc-800 m-10">
                        <form className={"p-2 justify-center "}>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">UserId: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>

                            </div>


                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">E-Mail: </label>
                                <input className="float-right border-[1px] border-green-200" type={"email"}/>
                            </div>


                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Middle Name: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>


                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Name: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Family Name: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Nick Name: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Phone Number: </label>
                                <input className="float-right border-[1px] border-green-200" type={"number"}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">comment: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            {/*<div className="pb-2">*/}
                            {/*    <label className="text-[10px] pr-2 font-bold text-white">Image: </label>*/}
                            {/*    <input className="float-right border-[1px] border-green-200" />*/}
                            {/*</div>*/}

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Directory: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                                <input className="float-right border-[1px] border-green-200" type={"password"}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold text-white">User Name: </label>
                                <input className="float-right border-[1px] border-green-200" type={""}/>
                            </div>

                            <div className={"m-5"}>

                                <button className="text-[10px] text-[#e6f0e6] bg-green-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-1xl mr-2">Add User
                                </button>

                                <button className="text-[10px] text-[#e6f0e6] bg-orange-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-1xl mr-2">Update User
                                </button>

                                <button className="text-[10px] text-[#e6f0e6] bg-red-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-1xl">Delete User
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </>
        );
    }
}
