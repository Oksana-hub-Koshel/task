import React from 'react';
import s from "./profile.module.css"
import image from "./../../mocks/6eb455006756ab310d538ee57bdb1684.jpg"
import {Avatar} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../hooks/useAuth";

const Profile = () => {
    const {t, i18n}=useTranslation()
    const navigate=useNavigate()
    const {signOut}=useAuth()
    return (
        <>
        <div className={s.container}>
          <div>
              <Avatar
                  alt="Remy Sharp"
                  src={image}
                  sx={{ width: 200, height: 200 }}
                  className={s.image}
              />
          </div>
            <div className={s.info_block}>
                <h4>{t("Your Profile")}</h4>
                <div className={s.info_field}>{t("Name")}: KSU</div>
                <div className={s.info_field}>{t("City")}: KYIV</div>
                <div className={s.info_field}>{t("Email")}: ksu.koshel@gmail.com</div>
                {/*<div className={s.info_field}>{t("Order")}: </div>*/}

                <div className={s.link_out}>
                    <button onClick={()=> signOut(()=> navigate("/", {replace:true}))}>{t("Sign Out")}</button>
                </div>

                <div className={s.link_home}>
                    <Link to="/" >{t("Back home")}</Link>
                </div>



            </div>

        </div>

        </>
    );
};

export default Profile;