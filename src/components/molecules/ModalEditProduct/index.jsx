import { useState } from "react";
import TextHeader from "../../atoms/TextHeader";
import { Modal, Fade } from "@material-ui/core";
import { EditButton2, StyledModal } from "./styles";
import FormUpdateProduct from "../FormUpdateProduct";
import Icon from "../../atoms/Icon";
import Close from "../../../assets/images/icons/close.svg";

const ModalEditProduct = ({
  currentProductId,
  currentStoreId,
  productName,
  productPrice,
  productDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const body = (
    <StyledModal>
      <div className="headerContainer">
        <EditButton2 onClick={toggleModal}>
          <Icon src={Close} alt="Botão Fechar" display={["block", "block"]} />
        </EditButton2>
        <TextHeader color="primary" size="medium" fontWeight="medium">
          Editar Loja
        </TextHeader>
      </div>
      <FormUpdateProduct
        toggleModal={toggleModal}
        currentProductId={currentProductId}
        currentStoreId={currentStoreId}
        productName={productName}
        productPrice={productPrice}
        productDescription={productDescription}
      />
    </StyledModal>
  );

  return (
    <>
      <p onClick={toggleModal}>Editar</p>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        closeAfterTransition
        BackdropProps={{ style: { backdropFilter: "blur(2px)" } }}
      >
        <Fade in={isOpen}>{body}</Fade>
      </Modal>
    </>
  );
};

export default ModalEditProduct;
