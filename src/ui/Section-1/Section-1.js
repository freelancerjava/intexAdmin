import React, { useState } from "react";
import "./Section.css";
import Modals from "./Modal";




const Section = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="Section">
      <div className="dastavka">
        <div className="dastavka_child">
          <h1 className="h1_dastavka">Tekinga yetkazib berish</h1>
          <div className="wrapper_dastavka">
            <p className="p_dastavka">
              Toshkent shahar ichida yetkazib berish bepul(shahar tashqarisida
              yetkazib berish alohida to'lanadi)
              
              
            </p>
          </div>
          <button className="btn_section_1" onClick={() => setModalActive(true)}>
            Buyurtma berish
          </button>
       {     modalActive && <Modals closeModal={setModalActive} />}
        </div>
      </div>

      <div className="mijozlarni_qadrlash">
        <h1 className="mijozh1">Mijozlarni qadrlash</h1>
      </div>

      <div className="imgSection">
        <div className="imgSectionWrapper">
          <div className="imgDiv">
            <img className="emojiSection" src="./image/sectionEmoji.svg" />
          </div>
          <div className="imgP">
            <h1>Tajriba</h1>
            <p className="Xodimlarimizning_profisionalligi">
              Xodimlarimizning profisionalligi
            </p>
          </div>
        </div>

        <div className="imgSectionWrapper">
          <div className="imgDiv">
            <img className="emojiSection" src="./image/sectionEmoji2.svg" />
          </div>
          <div className="imgP">
            <h1 className="Xodimlarimizning_profisionalligiCarh1">
              Yetkazib berish
            </h1>
            <p className="Xodimlarimizning_profisionalligiCar">
              Shahar ichida bepul yetkazib berish
            </p>
          </div>
        </div>

        <div className="imgSectionWrapper">
          <div className="imgDiv">
            <img className="emojiSection" src="./image/sectionEmoji3.svg" />
          </div>
          <div className="imgP">
            <h1>Sifat</h1>
            <p className="Xodimlarimizning_profisionalligi">
              Mustahkam sifatli baseynlar
            </p>
          </div>
        </div>
      </div>

      <div className="Intex_Toshkenda">
        <h1 className="intex_toshkendah1">Intex baseynlari Toshkentda</h1>
      </div>

      <div className="information_intex">
        <div className="information_1">
          <p className="information_p">
            Intex basseynlari - bu butun oila uchun yoqimli dam olish uchun
            mo'ljallangan arzon, yuqori sifatli, ishonchli va ekologik toza
            mahsulotlar. Basseyn har qanday hovliga to'liq o'rnatilishi va yozda
            faol foydalanilishi mumkin. Basseyn sizga yorqin his-tuyg`ularni
            beradi va issiq yoz kunlarida sizni jaziramadan qutqaradi.
          </p>
        </div>

        <div className="information_2">
          <p className="information_p">
            Intex Basseynlari afzalliklarning kengligi bilan ajralib turadi,
            quyida ulardan eng muhimlarini ajratib ko'rsatish mumkin:
          </p>
          <div className="information_checkout">
            <ul className="information_ul">
              <li className="information_li">
                {" "}
                <img src="./image/checkout.svg" />{" "}
                <p className="information_li_p">Chidam</p>
              </li>
            </ul>
          </div>
          <div className="information_checkout">
            <ul className="information_ul">
              <li className="information_li">
                {" "}
                <img src="./image/checkout.svg" />{" "}
                <p className="information_li_p">O'rnatish uchun arzon</p>
              </li>
            </ul>
          </div>
          <div className="information_checkout">
            <ul className="information_ul">
              <li className="information_li">
                {" "}
                <img src="./image/checkout.svg" />{" "}
                <p className="information_li_p">Chiroyli va yorqin ranglar</p>
              </li>
            </ul>
          </div>
          <div className="information_checkout">
            <ul className="information_ul">
              <li className="information_li">
                {" "}
                <img src="./image/checkout.svg" />{" "}
                <p className="information_li_p">Zamonaviy dizayn</p>
              </li>
            </ul>
          </div>
          <div className="information_checkout">
            <ul className="information_ul">
              <li className="information_li">
                {" "}
                <img src="./image/checkout.svg" />{" "}
                <p className="information_li_p">Yuqori sifat</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
