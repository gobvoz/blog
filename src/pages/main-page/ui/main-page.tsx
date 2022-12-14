import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonMod } from 'shared/ui/button';
import { Modal } from 'widgets/modal';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  const [isModalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  return (
    <section>
      <h1>{t('header', { ns: 'main-page' })}</h1>
      {/* eslint-disable i18next/no-literal-string */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur culpa modi
        laudantium sunt tempore temporibus et magni nihil saepe a adipisci sed aperiam itaque. Ut
        vitae laudantium soluta atque. Impedit quia dolore dignissimos temporibus culpa qui ipsam
        id, iusto deserunt ab repellat vel incidunt distinctio facere assumenda cum, laborum
        expedita. Quo sequi ipsa est nam veniam similique quis animi! Alias debitis sequi soluta ex
        quasi inventore autem saepe, ipsa doloribus architecto similique odit nobis sapiente. Ipsa
        sunt, corporis, porro sapiente, placeat dolor quaerat at delectus nesciunt tempora eius
        animi. Porro labore culpa unde animi corporis blanditiis in. Libero voluptatum minus
        necessitatibus. Delectus modi aperiam distinctio, ipsam facilis dignissimos ratione eaque
        necessitatibus, tenetur maiores, aliquid in repellendus repudiandae nam nostrum? Eos officia
        necessitatibus voluptatem itaque, fugiat excepturi quidem ducimus aliquid corrupti. Autem
        provident nisi deleniti, fugiat culpa delectus aut. Minus excepturi tempora, reprehenderit
        qui fugiat molestias esse voluptatem tenetur.
      </p>
      <Button>Default</Button>
      <Button mod={ButtonMod.PRIMARY}>Primary</Button>
      <Button mod={ButtonMod.PRIMARY} loading>Loading</Button>
      <Button mod={ButtonMod.PRIMARY} onClick={modalOpenHandler}>
        Open modal
      </Button>
      <h1>Next paragraph</h1>
      {/* eslint-disable i18next/no-literal-string */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur culpa modi
        laudantium sunt tempore temporibus et magni nihil saepe a adipisci sed aperiam itaque. Ut
        vitae laudantium soluta atque. Impedit quia dolore dignissimos temporibus culpa qui ipsam
        id, iusto deserunt ab repellat vel incidunt distinctio facere assumenda cum, laborum
        expedita. Quo sequi ipsa est nam veniam similique quis animi! Alias debitis sequi soluta ex
        quasi inventore autem saepe, ipsa doloribus architecto similique odit nobis sapiente. Ipsa
        sunt, corporis, porro sapiente, placeat dolor quaerat at delectus nesciunt tempora eius
        animi. Porro labore culpa unde animi corporis blanditiis in. Libero voluptatum minus
        necessitatibus. Delectus modi aperiam distinctio, ipsam facilis dignissimos ratione eaque
        necessitatibus, tenetur maiores, aliquid in repellendus repudiandae nam nostrum? Eos officia
        necessitatibus voluptatem itaque, fugiat excepturi quidem ducimus aliquid corrupti. Autem
        provident nisi deleniti, fugiat culpa delectus aut. Minus excepturi tempora, reprehenderit
        qui fugiat molestias esse voluptatem tenetur.
      </p>
      <Button>Default</Button>
      <Button mod={ButtonMod.PRIMARY}>Primary</Button>
      <Button mod={ButtonMod.PRIMARY} loading>Loading</Button>
      <h1>Another paragraph</h1>
      {/* eslint-disable i18next/no-literal-string */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur culpa modi
        laudantium sunt tempore temporibus et magni nihil saepe a adipisci sed aperiam itaque. Ut
        vitae laudantium soluta atque. Impedit quia dolore dignissimos temporibus culpa qui ipsam
        id, iusto deserunt ab repellat vel incidunt distinctio facere assumenda cum, laborum
        expedita. Quo sequi ipsa est nam veniam similique quis animi! Alias debitis sequi soluta ex
        quasi inventore autem saepe, ipsa doloribus architecto similique odit nobis sapiente. Ipsa
        sunt, corporis, porro sapiente, placeat dolor quaerat at delectus nesciunt tempora eius
        animi. Porro labore culpa unde animi corporis blanditiis in. Libero voluptatum minus
        necessitatibus. Delectus modi aperiam distinctio, ipsam facilis dignissimos ratione eaque
        necessitatibus, tenetur maiores, aliquid in repellendus repudiandae nam nostrum? Eos officia
        necessitatibus voluptatem itaque, fugiat excepturi quidem ducimus aliquid corrupti. Autem
        provident nisi deleniti, fugiat culpa delectus aut. Minus excepturi tempora, reprehenderit
        qui fugiat molestias esse voluptatem tenetur.
      </p>
      <Button>Default</Button>
      <Button mod={ButtonMod.PRIMARY}>Primary</Button>
      <Button mod={ButtonMod.PRIMARY} loading>Loading</Button>
      {isModalOpen && <Modal onClose={modalCloseHandler}>Modal window</Modal>}
    </section>
  );
};

export default MainPage;
