import { fireEvent, screen, waitFor } from '@testing-library/react';

import { EditableProfileCard } from '../ui/editable-profile-card';

import { componentRender } from 'shared/libs/tests/component-render';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { Profile, profileReducer } from 'entities/profile';
import { api } from 'shared/api/api';

const mockProfileData: Profile = {
  id: '1',
  first: 'John',
  last: 'Doe',
  username: 'john_doe',
  age: '25',
  currency: Currency.USD,
  country: Country.USA,
  city: 'New York',
};

describe('profile-page', () => {
  test('render', () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    expect(screen.getByTestId('profile-card')).toBeInTheDocument();
  });

  test('readonly mode, buttons do not render', () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: 'not user ID',
          },
        },
        profile: {
          readonly: true,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    const editButton = screen.queryByTestId('edit-button');
    const cancelButton = screen.queryByTestId('cancel-button');
    const updateButton = screen.queryByTestId('update-button');

    expect(editButton).not.toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
    expect(updateButton).not.toBeInTheDocument();
  });

  test('possibility switch to edit mode', () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: '1',
          },
        },
        profile: {
          readonly: true,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    const editButton = screen.getByTestId('edit-button');
    const cancelButton = screen.queryByTestId('cancel-button');
    const updateButton = screen.queryByTestId('update-button');

    expect(editButton).toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
    expect(updateButton).not.toBeInTheDocument();
  });

  test('toggle to edit mode', () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: '1',
          },
        },
        profile: {
          readonly: true,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    const editButton = screen.getByTestId('edit-button');

    fireEvent.click(editButton);

    const cancelButton = screen.getByTestId('cancel-button');
    const updateButton = screen.getByTestId('update-button');

    expect(cancelButton).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
  });

  test('validate first and last name', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: '1',
          },
        },
        profile: {
          readonly: false,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    const updateButton = screen.getByTestId('update-button');

    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: '' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: '' } });
    fireEvent.click(updateButton);

    await waitFor(() => screen.getByText('error-first'));

    expect(screen.getByTestId('first-name-input')).toHaveClass('error');
    expect(screen.getByTestId('last-name-input')).toHaveClass('error');
  });

  test('cancel edit', async () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: '1',
          },
        },
        profile: {
          readonly: false,
          isLoading: false,
          error: undefined,
          data: {
            id: '1',
            first: 'John',
            last: 'Doe',
            username: 'john_doe',
            age: '25',
            currency: Currency.USD,
            country: Country.USA,
            city: 'New York',
          },
          form: {
            id: '1',
            first: 'new first name',
            last: 'new last name',
            username: 'john_doe',
            age: '25',
            currency: Currency.USD,
            country: Country.USA,
            city: 'New York',
          },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    expect(screen.getByTestId('first-name-input')).toHaveValue('new first name');
    expect(screen.getByTestId('last-name-input')).toHaveValue('new last name');

    const cancelButton = screen.getByTestId('cancel-button');

    fireEvent.click(cancelButton);

    await waitFor(() => screen.getByTestId('edit-button'));

    expect(screen.getByTestId('first-name-input')).toHaveValue('John');
    expect(screen.getByTestId('last-name-input')).toHaveValue('Doe');
  });

  test('PUT query', () => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        user: {
          authData: {
            id: '1',
          },
        },
        profile: {
          readonly: false,
          isLoading: false,
          error: undefined,
          data: mockProfileData,
          form: mockProfileData,
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });

    const mockPutProfile = jest.spyOn(api, 'put');

    const updateButton = screen.getByTestId('update-button');

    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'newFirstName' } });

    fireEvent.click(updateButton);

    expect(mockPutProfile).toHaveBeenCalled();
  });
});
