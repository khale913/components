import React, { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>hello</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu est,
        dapibus eget volutpat ut, imperdiet cursus risus. Donec malesuada enim
        eget finibus placerat. Nulla sed tempor turpis. Fusce ut maximus lectus,
        in rutrum dui. Nullam ac dignissim leo. Vivamus facilisis augue nec est
        cursus bibendum. Morbi velit sem, auctor ac ex molestie, cursus porta
        ipsum. Ut blandit quam sit amet magna commodo, quis tempus nisi
        pharetra. Nullam eget lorem congue, tincidunt turpis et, commodo velit.
        Maecenas non leo sed nulla lacinia dictum. Pellentesque quis diam eu
        tortor sagittis dapibus in et elit. Curabitur ac quam vitae odio
        volutpat euismod.
      </p>
    </div>
  );
}

export default ModalPage;
