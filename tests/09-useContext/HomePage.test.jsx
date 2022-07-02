import { render, screen } from '@testing-library/react'

import { UserContext } from '../../src/09-useContext/context'
import { HomePage } from '../../src/09-useContext/HomePage.jsx'

describe('Tests in <HomePage />', () => {
  const user = { id: 1, name: 'Test User' }

  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')

    expect(preTag.innerHTML).toBe('null')
  })

  test('should show the component with the user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')

    expect(preTag.innerHTML).toContain(`${user.id}`)
    expect(preTag.innerHTML).toContain(user.name)
  })
})
