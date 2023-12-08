import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import './userAdmin.scss'; // Import your stylesheet

const UserAdmin = () => {
    const openSidebar = () => {
        document.getElementById("main").style.marginLeft = "15%";
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }

    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }

    const handleDelete = (e) => {
        const result = window.confirm("Bạn chắc chắn muốn xóa người dùng này ?");
        if (result) {
            e.closest("tr").remove();
        }
    }

    return (
        <div className="userAdmin">
            <header>
                <nav>
                    <ul className="navbar-list">
                        {/*link homepage*/}
                        <li className="left">
                            <a href="productAdmin.html">
                                <img src="../../img/thegioididong.png" alt="Logo" />
                            </a>
                        </li>
                        <div className="right">
                            <li>
                                <input type="text" placeholder="Tên sản phẩm..." />
                             
                            </li>
                            <li>
                            <RiAdminLine size={25}/>  Admin
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
            <main>
                <aside id="mySidebar">
                    <ul>
                        <li><a onClick={closeSidebar}>Đóng &times;</a></li>
                        <li><a href="/orderAdmin">Đơn hàng</a></li>
                        <li><a className="active">Người dùng</a></li>
                    </ul>
                </aside>
                <section id="main">
                    <button id="openNav" className="menu-button" onClick={openSidebar}>&#9776; Menu</button>
                    <h1>Người Dùng</h1>
                    {/* create button */}
                    {/* mình dùng lại code của trang sửa thông tin sản phẩm */}
                    {/* user's information list*/}
                    <table>
                        {/*noi dung tieu de*/}
                        <tr className="title">
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Người dùng</th>
                            <th>Email</th>
                            <th>Loại người dùng</th>
                            <th>Chức năng</th> {/* Actions gồm thêm, sửa, khóa (không cho người dùng đăng nhập)*/}
                            <th>Khóa người dùng</th>
                        </tr>
                        {/*thong tin users */}
                        <tr className="user">
                            <td>#1</td>
                            <td><a href="userDetail.html"><img src="" alt="per1" /></a></td>
                            <td></td>
                            <td></td>
                            <td>Admin</td>
                            <td>
                                <a href="editUser.html" className="action-button">
                                    <FontAwesomeIcon icon={faEdit} />
                                    <div className="action-tooltip">Chỉnh sửa</div>
                                </a>
                                <a className="action-button" onClick={() => handleDelete(this)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <div className="action-tooltip">Xóa</div>
                                </a>
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr className="user">
                            <td>#2</td>
                            <td><a href="userDetail.html"><img src="" alt="per1" /></a></td>
                            <td></td>
                            <td></td>
                            <td>Admin</td>
                            <td>
                                <a href="editUser.html" className="action-button">
                                    <FontAwesomeIcon icon={faEdit} />
                                    <div className="action-tooltip">Chỉnh sửa</div>
                                </a>
                                <a className="action-button" onClick={() => handleDelete(this)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <div className="action-tooltip">Xóa</div>
                                </a>
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr className="user">
                            <td>#3</td>
                            <td><a href="userDetail.html"><img src="" alt="per1" /></a></td>
                            <td></td>
                            <td></td>
                            <td>Admin</td>
                            <td>
                                <a href="editUser.html" className="action-button">
                                    <FontAwesomeIcon icon={faEdit} />
                                    <div className="action-tooltip">Chỉnh sửa</div>
                                </a>
                                <a className="action-button" onClick={() => handleDelete(this)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <div className="action-tooltip">Xóa</div>
                                </a>
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default UserAdmin;
