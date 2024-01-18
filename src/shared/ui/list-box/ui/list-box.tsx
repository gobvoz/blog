import { FC, memo, useState } from 'react';
import { Listbox as HeadlessListbox } from '@headlessui/react';

import { classNames } from 'shared/libs/class-names';
import cls from './list-box.module.scss';

interface Props {
  className?: string;
}

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

const ListBox: FC = memo((props: Props) => {
  const { className } = props;

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  //className={classNames(cls.listBox, className)}
  return (
    <HeadlessListbox value={selectedPerson} onChange={setSelectedPerson}>
      <HeadlessListbox.Button className={classNames(cls.select, className)}>
        {selectedPerson.name}
      </HeadlessListbox.Button>
      <HeadlessListbox.Options className={cls.list}>
        {people.map(person => (
          <HeadlessListbox.Option
            className={cls.element}
            key={person.id}
            value={person}
            disabled={person.unavailable}>
            {person.name}
          </HeadlessListbox.Option>
        ))}
      </HeadlessListbox.Options>
    </HeadlessListbox>
  );
});

export { ListBox };
