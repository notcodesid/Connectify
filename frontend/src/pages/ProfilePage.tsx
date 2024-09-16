import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function ProfilePage() {
  const user = {
    name: 'Jane Doe',
    username: '@janedoe',
    image: '/placeholder.svg?height=200&width=200',
    interests: ['Photography', 'Travel', 'Cooking'],
    friends: [
      { id: 1, name: 'Alice', image: '/placeholder.svg?height=40&width=40' },
      { id: 2, name: 'Bob', image: '/placeholder.svg?height=40&width=40' },
      { id: 3, name: 'Charlie', image: '/placeholder.svg?height=40&width=40' },
    ],
  }

  return (
    <div className="min-h-screen p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-gray-500">{user.username}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {user.interests.map((interest) => (
                <Badge key={interest} variant="secondary">{interest}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Friends</h3>
            <div className="grid grid-cols-3 gap-4">
              {user.friends.map((friend) => (
                <div key={friend.id} className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage src={friend.image} alt={friend.name} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="mt-1 text-sm">{friend.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}