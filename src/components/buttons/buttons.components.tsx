import "./buttons.styles.scss";

interface IButtons {
  isEdit: boolean;
  onClickEdit: () => void;
  isSave: boolean;
  onClickSave?: () => void;
  isDelete: boolean;
  onClickDelete: () => void;
  isAdd: boolean;
  onClickAdd: () => void;
}

const Buttons: React.FC<IButtons> = ({ isEdit, isAdd, isDelete, isSave }) => {
  return (
    <div>
      {isEdit && (
        <div className={"edit"}>
          <p>Edit</p>
        </div>
      )}

      {isAdd && (
        <div className={"add"}>
          <div></div>
        </div>
      )}

      {isDelete && (
        <div className={"delete"}>
          <p>Delete</p>
        </div>
      )}

      {isSave && (
        <div className={"save"}>
          <p>Save</p>
        </div>
      )}
    </div>
  );
};

export default Buttons;
