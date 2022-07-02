import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { MainApp } from '../../src/09-useContext/MainApp.jsx'

describe('Tests in <MainApp />', () => {
  test('should show the HomePage component', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('HomePage')).toBeTruthy()
  })

  test('should show the LoginPage component', () => {
    render(
      // route to '/login'
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('LoginPage')).toBeTruthy()
  })
})
