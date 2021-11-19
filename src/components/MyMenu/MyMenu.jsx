import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import "./MyMenu.css"
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

export const MyMenu = () => {
   
    return(
        <div className="my-menu">
            <a href="#">Пользователи</a>
            <span>/</span>
            <a href="/user/create">Регистрация</a>
        </div>
    )
    
}