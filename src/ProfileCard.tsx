// Create a reusable ProfileCard component that displays user information passed in through props.
// Requirements:
// Create a ProfileCard component that accepts the following props:
// name (string)
// age (number)
// location (string)
// avatarUrl (string - URL to an image)
// Use the props to render:
// The user's avatar image
// The name, age, and location in a nicely formatted card
// In the parent App component, render 3 different ProfileCard components with different data.

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  avatarUrl: string;
}

function profileCard(user: ProfileCardProps) {

  return (
    <div className="profileCard">
      <h1>{user.name}</h1>
      <p>{user.age} years old</p>
      <p>{user.name}'s location is {user.location}</p>
      <img src={user.avatarUrl} />
    </div>
  ) 
}

export default profileCard;
   
