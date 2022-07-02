import { fireEvent, render, screen } from '@testing-library/react'

import { UserContext } from '../../src/09-useContext/context'
import { LoginPage } from '../../src/09-useContext/LoginPage.jsx'

describe('Tests in <LoginPage />', () => {
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')

    expect(preTag.innerHTML).toBe('null')
  })

  test('should call the setUser function when the button is clicked', () => {
    const user = { id: 123, name: 'Juan', email: 'juan@google.com' }
    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByText('Set user')

    fireEvent.click(button)
    expect(setUserMock).toHaveBeenCalledWith(user)
  })
})
