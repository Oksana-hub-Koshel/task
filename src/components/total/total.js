import './total.css'
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

function Total() {
    const {t, i18n}=useTranslation()
    const cart=useSelector(state=> state.cart.cart)

     const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
    }

    return (
        <div className="total">
            <h2>{t("Order Summary")}</h2>
            <div>
                <p className="total__p">
                    {t("Total")} ({getTotal().totalQuantity} {t("items")}
                    : <strong>{getTotal().totalPrice}$)</strong>
                </p>
            </div>
        </div>
    )
}

export default Total