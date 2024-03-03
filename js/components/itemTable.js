import data from '../data/data.js';
const{weapon} = data;

const itemTable = `
  <section>
    <h2>${weapon.bows.ng.shortBow.name}</h2>
    <table class="item-table">
      <tr>
        <th>
          <img src="./images/weapon/ng/bows/Weapon_short_bow.jpg" alt="" />
        </th>
        <th>
          ${weapon.bows.ng.shortBow.name}
          <img src="./images/grade/Item_grade_NG.gif" alt="" />
        </th>
      </tr>
      <tr>
        <td>Тип:</td>
        <td>${weapon.bows.ng.shortBow.type}</td>
      </tr>
      <tr>
        <td>P. Atk.:</td>
        <td>${weapon.bows.ng.shortBow.pAtk}</td>
      </tr>
      <tr>
        <td>M. Atk.:</td>
        <td>${weapon.bows.ng.shortBow.mAtk}</td>
      </tr>
      <tr>
        <td>Soulshots:</td>
        <td>${weapon.bows.ng.shortBow.soulshots}</td>
      </tr>
      <tr>
        <td>Spiritshots:</td>
        <td>${weapon.bows.ng.shortBow.spiritshots}</td>
      </tr>
      <tr>
        <td>Вес:</td>
        <td>${weapon.bows.ng.shortBow.weight}</td>
      </tr>
      <tr>
        <td>Цена:</td>
        <td>
          <img src="./images/items/Adena.jpg" alt="" />
          ${weapon.bows.ng.shortBow.price} Adena
        </td>
      </tr>
      <tr>
        <td>ID:</td>
        <td>${weapon.bows.ng.shortBow.ID}</td>
      </tr>
    </table>
  </section>
`
export default itemTable;