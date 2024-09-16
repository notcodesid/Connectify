import { Input } from "../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function HomePage() {
  const recommendedFriends = [
    { id: 1, name: 'Alice', image: '/placeholder.svg?height=100&width=100' },
    { id: 2, name: 'Bob', image: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Charlie', image: '/placeholder.svg?height=100&width=100' },
    { id: 4, name: 'David', image: '/placeholder.svg?height=100&width=100' },
    { id: 5, name: 'Eve', image: '/placeholder.svg?height=100&width=100' },
    { id: 6, name: 'Frank', image: '/placeholder.svg?height=100&width=100' },
  ]

  const friendList = [
    { id: 1, name: 'Grace', image: '/placeholder.svg?height=40&width=40' },
    { id: 2, name: 'Henry', image: '/placeholder.svg?height=40&width=40' },
    { id: 3, name: 'Ivy', image: '/placeholder.svg?height=40&width=40' },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Friends</h2>
        <ul className="space-y-4">
          {friendList.map((friend) => (
            <li key={friend.id} className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={friend.image} alt={friend.name} />
                <AvatarFallback>{friend.name[0]}</AvatarFallback>
              </Avatar>
              <span>{friend.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Search bar */}
        <div className="mb-8">
          <Input type="search" placeholder="Search for friends..." className="max-w-md" />
        </div>

        {/* Friend recommendations */}
        <h2 className="text-2xl font-semibold mb-4">People you may know</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedFriends.map((friend) => (
            <Card key={friend.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={friend.image} alt={friend.name} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle>{friend.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
                  Add Friend
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}