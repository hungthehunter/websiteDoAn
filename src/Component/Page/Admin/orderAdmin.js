import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './orderAdmin.scss'; // Import your stylesheet

class OrderAdmin extends React.Component {
    openSidebar = () => {
        document.getElementById("main").style.marginLeft = "15%";
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }

    closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }

    render() {
        return (
            <div className='orderAdmin'>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="https://kit.fontawesome.com/1acf2d22a5.js" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="style_OrderAdmin.css" />
                    <title>Đơn hàng</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <ul className="navbar-list">
                                <li className="left">
                                    <a href="productAdmin.html">
                                        <img src="" alt="Logo" />
                                    </a>
                                </li>
                                <div className="right">
                                    <li>
                                        <input type="text" placeholder="Tên sản phẩm..." />
                                        <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCircleUser} /> Admin
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <aside id="mySidebar">
                            <ul>
                                <li><a onClick={this.closeSidebar}>Đóng &times;</a></li>
                                <li><a className="active">Đơn hàng</a></li>
                                <li><a href="userAdmin.html">Người dùng</a></li>
                            </ul>
                        </aside>
                        <section id="main">
                            <button id="openNav" className="menu-button" onClick={this.openSidebar}>&#9776; Menu</button>
                            <h1>Đơn Hàng</h1>
                            <div className="filter">
                                <div className="date">
                                    <label htmlFor="start">Từ ngày: </label>
                                    <input type="date" id="start" name="start" value="2023-11-24" min="2018-01-01" max="2023-12-31" />
                                    <label htmlFor="start">đến </label>
                                    <input type="date" id="end" name="end" value="2023-11-30" min="2018-01-01" max="2023-12-31" />
                                </div>
                                <a href="orderAdmin.html" className="show">Xem</a>
                            </div>
                            <table>
                                <tr className="title">
                                    <th>ID</th>
                                    <th>Đơn hàng</th>
                                    <th>Địa chỉ</th>
                                    <th>Thành tiền</th>
                                    <th>Trạng thái</th>
                                </tr>
                                <tr className="product">
                                    <td>#1</td>
                                    <td>
                                        <a href="orderDetail.html">
                                            <img src="" alt="lap1" />
                                            <div>
                                                <p></p>
                                                <p></p>
                                                <p className="another">(2 sản phẩm khác)</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td className="state"></td>
                                </tr>
                                <tr className="product">
                                    <td>#2</td>
                                    <td>
                                        <a href="orderDetail.html">
                                            <img src="" alt="lap1" />
                                            <div>
                                                <p></p>
                                                <p></p>
                                                <p className="another">(2 sản phẩm khác)</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td className="state">Đã nhận</td>
                                </tr>
                                <tr className="product">
                                    <td>#3</td>
                                    <td>
                                        <a href="orderDetail.html">
                                            <img src="" alt="lap1" />
                                            <div>
                                                <p></p>
                                                <p></p>
                                                <p className="another">(2 sản phẩm khác)</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td className="state">Đã nhận</td>
                                </tr>
                                <tr className="product">
                                    <td>#4</td>
                                    <td>
                                        <a href="orderDetail.html">
                                            <img src="" alt="lap1" />
                                            <div>
                                                <p></p>
                                                <p></p>
                                                <p className="another">(2 sản phẩm khác)</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td className="state">Đã nhận</td>
                                </tr>
                            </table>
                        </section>
                    </main>
                </body>
            </div>
        );
    }
}

export default OrderAdmin;
