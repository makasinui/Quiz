import "../styles/additem.scss";
import FormField from "./FormField";
export default function AddItem() {

  return (
    <section>
      <form className="form">
        <h2>Быстрое добавление квиза</h2>
        <FormField required={true} placeholder={"Введите название квиза"}>
          Название квиза
        </FormField>
        <FormField required={false} placeholder={"Введите описание квиза"}>
          Описание
        </FormField>
        <FormField required={false} placeholder={"Введите ссылку"}>
          Ссылка на обложку квиза
        </FormField>
        <FormField type="number" required={true} placeholder={"Введите цену"}>
          Цена товара
        </FormField>
        <button className="add-item">Добавить товар</button>
      </form>
    </section>
  );
}
