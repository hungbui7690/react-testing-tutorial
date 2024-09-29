import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('group', () => {
  it('should render empty list if the user array is empty', () => {
    render(<UserList users={[]} />)
    const text = screen.getByText(/no users/i)
    expect(text).toBeInTheDocument()
  })

  it('should render a list of users', () => {
    const users: User[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]
    render(<UserList users={users} />)

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name }) // <a/> tag
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
})